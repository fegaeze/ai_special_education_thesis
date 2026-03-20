// llmEvaluator.ts
import OpenAI from "openai";
import * as dotenv from "dotenv";
import {
  batchPromptTemplate,
  getSubtypePrompt,
  getModelAnswerPrompt,
  getStoryGrammarPrompt,
} from "./prompts";

dotenv.config();

export type LLMResult = {
  modelName: string;
  problem: string;
  output: string;
  category: "Change" | "Combine" | "Compare" | "Unknown";
  subcategory?: string;
  subReasoning?: string;
  modelAnswers?: Record<string, number | null>;
  answer?: number;
  reasoning?: string;
  storyGrammarPrompts?: {
    text: string;
    boxTarget: string;
    context?: string;
  }[];
  tokenUsage?: {
    prompt: number;
    completion: number;
    total: number;
  };
  groundTruthCategory?: "Change" | "Combine" | "Compare";
  groundTruthSubcategory?: string;
  agreementScore?: number;
};

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: process.env.OPENROUTER_BASE_URL,
});

// ─── STEP 2: Subcategory Classification ─────────────────────────────────────────
async function callSubtypeClassifier(
  problem: string,
  category: string,
  modelName: string,
): Promise<{
  subcategory: string;
  subReasoning: string;
  tokenUsage?: LLMResult["tokenUsage"];
}> {
  const subtypePrompt = getSubtypePrompt(category, problem);
  if (!subtypePrompt)
    return {
      subcategory: "Unknown",
      subReasoning: "Prompt template not found.",
    };

  const response = await openai.chat.completions.create({
    model: modelName,
    messages: [{ role: "user", content: subtypePrompt }],
  });

  // Check if response has choices
  if (!response.choices || response.choices.length === 0) {
    console.warn("⚠️ No choices in API response:", response);
    return {
      subcategory: "Unknown",
      subReasoning: "API returned no choices",
    };
  }

  const content = response.choices[0]?.message?.content || "";

  try {
    const jsonMatch = content.match(/{[\s\S]*}/);
    if (!jsonMatch) throw new Error("No JSON object in response");
    const parsed = JSON.parse(jsonMatch[0]);

    return {
      subcategory: parsed.subcategory?.trim().toUpperCase() || "UNKNOWN",
      subReasoning: parsed.reasoning?.trim() || "",
      tokenUsage: response.usage
        ? {
            prompt: response.usage.prompt_tokens || 0,
            completion: response.usage.completion_tokens || 0,
            total: response.usage.total_tokens || 0,
          }
        : undefined,
    };
  } catch (err) {
    console.warn("⚠️ Failed to parse subtype JSON:", err);
    return {
      subcategory: "Unknown",
      subReasoning: `Parsing failed. Raw response: ${content.trim()}`,
    };
  }
}

// ─── STEP 3: Model Answer Generation ───────────────────────────────────────────
async function callModelAnswerGenerator(
  problem: string,
  category: string,
  modelName: string,
): Promise<{
  modelAnswers: Record<string, number | null>;
  answer: number;
  reasoning: string;
  tokenUsage?: LLMResult["tokenUsage"];
}> {
  const modelAnswerPrompt = getModelAnswerPrompt(category, problem);
  if (!modelAnswerPrompt)
    return {
      modelAnswers: {},
      answer: 0,
      reasoning: "Prompt template not found.",
    };

  const response = await openai.chat.completions.create({
    model: modelName,
    messages: [{ role: "user", content: modelAnswerPrompt }],
  });

  // Check if response has choices
  if (!response.choices || response.choices.length === 0) {
    console.warn("⚠️ No choices in API response:", response);
    return {
      modelAnswers: {},
      answer: 0,
      reasoning: "API returned no choices",
    };
  }

  const content = response.choices[0]?.message?.content || "";

  try {
    const jsonMatch = content.match(/{[\s\S]*}/);
    if (!jsonMatch) {
      console.warn(
        "⚠️ No JSON object found in response. Raw content:",
        content.trim(),
      );
      throw new Error("No JSON object in response");
    }

    const jsonString = jsonMatch[0].replace(/{{/g, "{").replace(/}}/g, "}");

    // Fix mathematical expressions in the JSON
    const fixedJsonString = jsonString.replace(
      /"([^"]+)":\s*([^,\s}]+(?:\s*[+\-*/]\s*[^,\s}]+)+)/g,
      (match, key, expression) => {
        try {
          // Evaluate simple mathematical expressions
          const result = eval(expression);
          return `"${key}": ${result}`;
        } catch {
          // If evaluation fails, keep the original
          return match;
        }
      },
    );

    const parsed = JSON.parse(fixedJsonString);

    return {
      modelAnswers: parsed.modelAnswers || {},
      answer: Number(parsed.answer) || 0,
      reasoning: parsed.reasoning?.trim() || "",
      tokenUsage: response.usage
        ? {
            prompt: response.usage.prompt_tokens || 0,
            completion: response.usage.completion_tokens || 0,
            total: response.usage.total_tokens || 0,
          }
        : undefined,
    };
  } catch (err) {
    console.warn("⚠️ Failed to parse model answer JSON:", err);
    console.warn("📄 Raw response content:", content.trim());
    return {
      modelAnswers: {},
      answer: 0,
      reasoning: `Parsing failed. Raw response: ${content.trim()}`,
    };
  }
}

// ─── STEP 4: Story Grammar Generation ──────────────────────────────────────────
async function callStoryGrammarGenerator(
  problem: string,
  subtype: string,
  modelAnswers: Record<string, number | null>,
  answer: number,
  modelName: string,
): Promise<{
  storyGrammarPrompts: {
    text: string;
    boxTarget: string;
    context?: string;
  }[];
  tokenUsage?: LLMResult["tokenUsage"];
}> {
  const storyGrammarPrompt = getStoryGrammarPrompt(
    problem,
    subtype,
    JSON.stringify(modelAnswers),
    answer,
  );

  const response = await openai.chat.completions.create({
    model: modelName,
    messages: [{ role: "user", content: storyGrammarPrompt }],
  });

  // Check if response has choices
  if (!response.choices || response.choices.length === 0) {
    console.warn("⚠️ No choices in API response:", response);
    return {
      storyGrammarPrompts: [],
    };
  }

  const content = response.choices[0]?.message?.content || "";

  try {
    const jsonMatch = content.match(/\[[\s\S]*\]/);
    if (!jsonMatch) throw new Error("No JSON array in response");
    const jsonString = jsonMatch[0].replace(/{{/g, "{").replace(/}}/g, "}");
    const parsed = JSON.parse(jsonString);

    return {
      storyGrammarPrompts: parsed || [],
      tokenUsage: response.usage
        ? {
            prompt: response.usage.prompt_tokens || 0,
            completion: response.usage.completion_tokens || 0,
            total: response.usage.total_tokens || 0,
          }
        : undefined,
    };
  } catch (err) {
    console.warn("⚠️ Failed to parse story grammar JSON:", err);
    return {
      storyGrammarPrompts: [],
    };
  }
}

function normalize(str: string): string {
  return str
    .replace(/[\u201C\u201D]/g, '"') // U+201C/U+201D curly double quotes → straight
    .replace(/[\u2018\u2019]/g, "'") // U+2018/U+2019 curly single quotes → straight
    .replace(/\u00A0/g, " ") // non-breaking space → regular space
    .replace(/\s+/g, " ") // collapse multiple spaces
    .trim();
}

// ─── STEP 1: Parse Supercategory JSON Output ───────────────────────────────────
function parseBatchLLMResponse(
  text: string,
  originalProblems: string[],
  modelName: string,
): LLMResult[] {
  try {
    const jsonMatch = text.match(/\[.*\]/s);
    const parsed = jsonMatch ? JSON.parse(jsonMatch[0]) : [];

    // Build a quick lookup map for fallback matching
    const parsedMap = new Map(
      parsed.map((entry: any) => [normalize(entry.problem), entry]),
    );

    return originalProblems.map((problem, idx) => {
      const normalizedProblem = normalize(problem);

      // Try order-based match first
      let match = parsed[idx];

      // Fallback: use map lookup if the problems don't match after normalization
      if (!match || normalize(match.problem) !== normalizedProblem) {
        match = parsedMap.get(normalizedProblem);
      }

      if (!match) {
        console.warn(`⚠️ No match found for problem: "${problem.slice(0, 80)}"`);
        const normOrig = normalizedProblem.slice(0, 30);
        const firstKey = ([...parsedMap.keys()][0] as string).slice(0, 30);
        console.warn(`   normalizedProblem[0..30]: ${JSON.stringify(normOrig)}`);
        console.warn(`   firstMapKey[0..30]:       ${JSON.stringify(firstKey)}`);
        console.warn(`   normOrig hex: ${[...normOrig].map(c => c.charCodeAt(0).toString(16)).join(' ')}`);
        console.warn(`   firstKey hex: ${[...firstKey].map(c => c.charCodeAt(0).toString(16)).join(' ')}`);
        return {
          modelName,
          problem,
          output: "No match found",
          category: "Unknown",
        };
      }

      const rawCategory =
        match.category.trim().charAt(0).toUpperCase() +
        match.category.slice(1).toLowerCase();
      const validCategories = ["Change", "Combine", "Compare"];
      const category = validCategories.includes(rawCategory)
        ? rawCategory
        : (() => {
            console.warn(
              `⚠️ Model returned invalid category "${rawCategory}" for problem: "${problem.slice(0, 60)}..." — defaulting to "Combine"`,
            );
            return "Combine";
          })();

      return {
        modelName,
        problem,
        output: match.reasoning,
        category,
      };
    });
  } catch (err) {
    console.error("❌ Failed to parse JSON from LLM response:", err);
    return originalProblems.map((problem) => ({
      modelName,
      problem,
      output: `Failed to parse JSON. Raw output: ${text}`,
      category: "Unknown",
    }));
  }
}

// ─── MAIN EVALUATION FLOW ──────────────────────────────────────────────────────
async function callOpenRouterBatch(
  modelName: string,
  displayName: string,
  problems: string[],
): Promise<LLMResult[]> {
  console.log(`🤖 Starting evaluation with ${displayName}...`);

  // Step 1: Supercategory Classification
  console.log(`  📊 Step 1: Classifying problems into supercategories...`);
  const prompt = batchPromptTemplate({ problems });
  const response = await openai.chat.completions.create({
    model: modelName,
    messages: [{ role: "user", content: prompt }],
  });

  // Check if response has choices
  if (!response.choices || response.choices.length === 0) {
    console.warn("⚠️ No choices in API response:", response);
    return problems.map((problem) => ({
      modelName: displayName,
      problem,
      output: "API returned no choices",
      category: "Unknown",
    }));
  }

  const text = response.choices[0]?.message?.content || "";
  const initialResults = parseBatchLLMResponse(text, problems, displayName);

  // Step 2-4: Process each problem through the complete pipeline
  console.log(
    `  🔄 Steps 2-4: Processing each problem through subcategory, model answers, and story grammar...`,
  );

  const finalResults = await Promise.all(
    initialResults.map(async (res) => {
      if (!["Change", "Combine", "Compare"].includes(res.category)) {
        return {
          ...res,
          tokenUsage: response.usage
            ? {
                prompt: response.usage.prompt_tokens || 0,
                completion: response.usage.completion_tokens || 0,
                total: response.usage.total_tokens || 0,
              }
            : undefined,
        };
      }

      // Step 2: Subcategory Classification
      const subtype = await callSubtypeClassifier(
        res.problem,
        res.category,
        modelName,
      );

      // Step 3: Model Answer Generation
      const modelAnswer = await callModelAnswerGenerator(
        res.problem,
        res.category,
        modelName,
      );

      // Step 4: Story Grammar Generation (skip if subcategory is unknown)
      const storyGrammar =
        subtype.subcategory && subtype.subcategory !== "Unknown"
          ? await callStoryGrammarGenerator(
              res.problem,
              subtype.subcategory,
              modelAnswer.modelAnswers,
              modelAnswer.answer,
              modelName,
            ).catch((err) => {
              console.warn(
                `⚠️ Story grammar generation failed for "${res.problem.slice(0, 60)}...": ${err instanceof Error ? err.message : String(err)}`,
              );
              return { storyGrammarPrompts: [] as { text: string; boxTarget: string; context?: string }[], tokenUsage: undefined };
            })
          : { storyGrammarPrompts: [] as { text: string; boxTarget: string; context?: string }[], tokenUsage: undefined };

      // Combine all results
      return {
        ...res,
        ...subtype,
        ...modelAnswer,
        ...storyGrammar,
        answer: modelAnswer.answer, // Explicitly include answer
        reasoning: modelAnswer.reasoning, // Explicitly include reasoning
        tokenUsage:
          storyGrammar.tokenUsage ||
          modelAnswer.tokenUsage ||
          subtype.tokenUsage ||
          (response.usage
            ? {
                prompt: response.usage.prompt_tokens || 0,
                completion: response.usage.completion_tokens || 0,
                total: response.usage.total_tokens || 0,
              }
            : undefined),
      };
    }),
  );

  console.log(`  ✅ Completed evaluation with ${displayName}`);
  return finalResults;
}

// ─── UTILITY FUNCTIONS ──────────────────────────────────────────────────────────
function groupResultsByProblem(
  results: LLMResult[],
): Record<string, LLMResult[]> {
  return results.reduce(
    (acc, res) => {
      if (!acc[res.problem]) acc[res.problem] = [];
      acc[res.problem].push(res);
      return acc;
    },
    {} as Record<string, LLMResult[]>,
  );
}

function computeAgreementScore(group: LLMResult[]): number {
  const votes = group.map((r) => r.subcategory || "Unknown");
  const voteCounts = votes.reduce(
    (acc, vote) => {
      acc[vote] = (acc[vote] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );
  const maxVotes = Math.max(...Object.values(voteCounts));
  return maxVotes / group.length;
}

// ─── MAIN EXPORT FUNCTION ───────────────────────────────────────────────────────
export async function runBatchAllLLMs(
  problems: string[],
): Promise<LLMResult[]> {
  const configs = [
    {
      modelName: "anthropic/claude-sonnet-4",
      displayName: "Anthropic: Claude Sonnet 4",
    },
    {
      modelName: "google/gemini-2.5-flash",
      displayName: "Google: Gemini 2.5 Flash",
    },
    { modelName: "openai/gpt-4.1", displayName: "OpenAI: GPT-4.1" },
  ];

  const allResults: LLMResult[] = [];

  const batchResults = await Promise.all(
    configs.map((cfg) =>
      callOpenRouterBatch(cfg.modelName, cfg.displayName, problems),
    ),
  );

  allResults.push(...batchResults.flat());
  return allResults;
}

// ─── LEGACY FUNCTIONS (for backward compatibility) ─────────────────────────────
export type StoryGrammarResult = {
  modelName: string;
  problem: string;
  subtype: string;
  modelAnswers: Record<string, number | null>;
  storyGrammarPrompts: {
    text: string;
    boxTarget: string;
    context?: string;
  }[];
  tokenUsage?: {
    prompt: number;
    completion: number;
    total: number;
  };
};

export async function runBatchStoryGrammarGeneration(
  problems: Array<{
    problem: string;
    subtype: string;
    modelAnswers: Record<string, number | null>;
  }>,
): Promise<StoryGrammarResult[]> {
  const configs = [
    {
      modelName: "anthropic/claude-sonnet-4",
      displayName: "Anthropic: Claude Sonnet 4",
    },
    {
      modelName: "google/gemini-2.5-flash",
      displayName: "Google: Gemini 2.5 Flash",
    },
    {
      modelName: "openai/gpt-4.1",
      displayName: "OpenAI: GPT-4.1",
    },
  ];

  const allResults: StoryGrammarResult[] = [];

  // Run each model on all problems
  for (const config of configs) {
    console.log(
      `🤖 Generating story grammar prompts with ${config.displayName}...`,
    );

    const batchResults = await Promise.all(
      problems.map((problemData) =>
        callStoryGrammarGenerator(
          problemData.problem,
          problemData.subtype,
          problemData.modelAnswers,
          0, // Default answer for legacy function
          config.modelName,
        ),
      ),
    );

    allResults.push(
      ...batchResults.map((result) => ({
        modelName: config.displayName,
        problem:
          problems.find(
            (p) => p.subtype === result.storyGrammarPrompts[0]?.boxTarget,
          )?.problem || "",
        subtype:
          problems.find(
            (p) => p.subtype === result.storyGrammarPrompts[0]?.boxTarget,
          )?.subtype || "",
        modelAnswers:
          problems.find(
            (p) => p.subtype === result.storyGrammarPrompts[0]?.boxTarget,
          )?.modelAnswers || {},
        storyGrammarPrompts: result.storyGrammarPrompts,
        tokenUsage: result.tokenUsage,
      })),
    );
  }

  return allResults;
}
