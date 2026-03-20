import { config } from "dotenv";
import { join } from "path";
config({ path: join(__dirname, "../.env") });

import { readFileSync, readdirSync, appendFileSync } from "fs";
import prisma from "../config/prisma";
import { Category, AIModelName, Subcategory } from "@prisma/client";

type JsonModelEvaluation = {
  modelName: string;
  problem: string;
  output: string;
  category: string;
  subcategory: string;
  subReasoning: string | null;
  modelAnswers: {
    part1?: number | null;
    part2?: number | null;
    whole?: number | null;
    start?: number | null;
    change?: number | null;
    end?: number | null;
    bigger?: number | null;
    smaller?: number | null;
    difference?: number | null;
  } | null;
  answer: number | null;
  reasoning: string | null;
  storyGrammarPrompts:
    | {
        text: string;
        boxTarget: string;
        context?: string;
      }[]
    | null;
  tokenUsage: {
    prompt: number;
    completion: number;
    total: number;
  };
  groundTruthCategory: string;
  groundTruthSubcategory: string;
  groundTruthAnswer: number;
  groundTruthModelAnswers: {
    part1?: number | null;
    part2?: number | null;
    whole?: number | null;
    start?: number | null;
    change?: number | null;
    end?: number | null;
    bigger?: number | null;
    smaller?: number | null;
    difference?: number | null;
  };
  isModelMappingCorrect: boolean;
  isAnswerCorrect: boolean;
};

type JsonProblem = {
  problem: string;
  groundTruthCategory: string;
  groundTruthSubcategory: string;
  answer: number;
  modelAnswers: {
    part1?: number | null;
    part2?: number | null;
    whole?: number | null;
    start?: number | null;
    change?: number | null;
    end?: number | null;
    bigger?: number | null;
    smaller?: number | null;
    difference?: number | null;
  };
  modelEvaluations: JsonModelEvaluation[];
};

// -----------------------------
// Enum converters with logging
// -----------------------------
function convertModelName(modelName: string): AIModelName {
  if (modelName === "OpenAI: GPT-4.1") {
    return AIModelName.OPENAI_GPT_4_1;
  } else if (modelName === "Anthropic: Claude Sonnet 4") {
    return AIModelName.ANTHROPIC_CLAUDE_SONNET_4;
  } else if (modelName === "Google: Gemini 2.5 Flash") {
    return AIModelName.GOOGLE_GEMINI_2_5_FLASH;
  } else {
    console.log("Unknown model name: ", modelName);
    logEnumError("ModelName", modelName);
    throw new Error(`Unknown model name: "${modelName}"`);
  }
}

function convertCategory(category: string): Category | null {
  if (!category || category === "Unknown") {
    console.log("Warning: Unknown category found, preserving null");
    return null; // Preserve null for failed classifications
  }

  switch (category) {
    case "Change":
      return Category.Change;
    case "Combine":
      return Category.Combine;
    case "Compare":
      return Category.Compare;
    case "Unknown":
      return null;
    default:
      logEnumError("Category", category);
      throw new Error(`Unknown category: "${category}"`);
  }
}

function convertSubcategory(subcategory: string): Subcategory | null {
  if (!subcategory || subcategory === "undefined") {
    console.log("Warning: Undefined subcategory found, preserving null");
    return null; // Preserve null for failed classifications
  }

  switch (subcategory) {
    case "CWU":
      return Subcategory.CWU;
    case "CPU":
      return Subcategory.CPU;
    case "CJWU":
      return Subcategory.CJWU;
    case "CJPU":
      return Subcategory.CJPU;
    case "CSWU":
      return Subcategory.CSWU;
    case "CSPU":
      return Subcategory.CSPU;
    case "CMDU":
      return Subcategory.CMDU;
    case "CMLQU":
      return Subcategory.CMLQU;
    case "CMSQU":
      return Subcategory.CMSQU;
    case "CLDU":
      return Subcategory.CLDU;
    case "CLLQU":
      return Subcategory.CLLQU;
    case "CLSQU":
      return Subcategory.CLSQU;
    default:
      logEnumError("Subcategory", subcategory);
      throw new Error(`Unknown subcategory: "${subcategory}"`);
  }
}

// Log unknown enums to file
function logEnumError(type: string, value: string) {
  appendFileSync("enum-errors.log", `[${type}] ${value}\n`);
}

// -----------------------------
// JSON processing
// -----------------------------
function readJsonFile(filePath: string): JsonModelEvaluation[] {
  try {
    const content = readFileSync(filePath, "utf-8");
    return JSON.parse(content);
  } catch (error) {
    console.error(`❌ Failed to read file ${filePath}:`, error);
    return [];
  }
}

function groupByProblem(evaluations: JsonModelEvaluation[]): JsonProblem[] {
  const map = new Map<string, JsonProblem>();

  evaluations.forEach((e) => {
    if (!map.has(e.problem)) {
      // For the new schema, we need to extract ground truth from the first evaluation
      // Since all evaluations for the same problem should have the same ground truth
      const firstEval = evaluations.find(
        (evaluation) => evaluation.problem === e.problem,
      );
      map.set(e.problem, {
        problem: e.problem,
        groundTruthCategory: firstEval!.groundTruthCategory,
        groundTruthSubcategory: firstEval!.groundTruthSubcategory,
        answer: firstEval!.groundTruthAnswer,
        modelAnswers: firstEval!.groundTruthModelAnswers,
        modelEvaluations: [],
      });
    }
    map.get(e.problem)!.modelEvaluations.push(e);
  });

  return Array.from(map.values());
}

function validateProblem(problem: JsonProblem): boolean {
  const {
    problem: content,
    groundTruthCategory,
    groundTruthSubcategory,
    answer,
    modelAnswers,
    modelEvaluations,
  } = problem;
  if (
    !content ||
    !groundTruthCategory ||
    !groundTruthSubcategory ||
    answer === undefined ||
    !modelEvaluations.length
  ) {
    console.warn(`⚠️ Skipping invalid problem:\n${content.slice(0, 80)}...`);
    return false;
  }
  return true;
}

// -----------------------------
// Seeder
// -----------------------------
async function clearAllProblems() {
  console.log("🗑️  Clearing existing data (CASCADE)...");

  // TRUNCATE CASCADE removes all rows and propagates to every dependent table
  // in one shot, bypassing FK ordering issues.
  await prisma.$executeRawUnsafe(`
    TRUNCATE TABLE
      "QuizResponse",
      "QuizAttempt",
      "QuizCode",
      "QuizSession",
      "ModelEvaluation",
      "Problem",
      "GroundTruth",
      "Student",
      "Class",
      "Teacher"
    RESTART IDENTITY CASCADE
  `);

  console.log("✅ Clear complete.\n");
}

async function seedProblems() {
  console.log("🌱 Seeding started...");

  await clearAllProblems();

  const seedDir = join(__dirname, "../data/seed");
  const files = readdirSync(seedDir).filter((f) => f.endsWith(".json"));

  let totalProblems = 0;
  let totalEvals = 0;
  let skipped = 0;

  for (const file of files) {
    console.log(`📄 File: ${file}`);
    const evaluations = readJsonFile(join(seedDir, file));

    if (!evaluations.length) {
      console.warn(`  ⚠️ Empty or unreadable: ${file}`);
      continue;
    }

    const problems = groupByProblem(evaluations);
    console.log(`  📌 ${problems.length} problems found`);

    for (const p of problems) {
      if (!validateProblem(p)) {
        skipped++;
        continue;
      }

      try {
        // First, create the GroundTruth record
        const groundTruth = await prisma.groundTruth.create({
          data: {
            category:
              convertCategory(p.groundTruthCategory) || Category.Unknown,
            subcategory:
              convertSubcategory(p.groundTruthSubcategory) || Subcategory.CWU,
            answer: p.answer,
            modelAnswers: p.modelAnswers as any, // Type assertion for JSON
          },
        });

        // Then, create the Problem record linked to GroundTruth
        const created = await prisma.problem.create({
          data: {
            content: p.problem,
            answer: p.answer,
            groundTruthId: groundTruth.id,
          },
        });

        // Finally, create ModelEvaluation records with all the new required fields
        for (const evalData of p.modelEvaluations) {
          try {
            await prisma.modelEvaluation.create({
              data: {
                problemId: created.id,
                groundTruthId: groundTruth.id,
                modelName: convertModelName(evalData.modelName),
                predictedCategory: convertCategory(evalData.category),
                predictedSubcategory: convertSubcategory(evalData.subcategory),
                supercategoryReasoning: evalData.output,
                subCategoryReasoning: evalData.subReasoning || null,
                modelAnswers: evalData.modelAnswers as any, // Type assertion for JSON
                answer: evalData.answer || null,
                modelAnswerReasoning: evalData.reasoning || null,
                storyGrammarPrompts: evalData.storyGrammarPrompts as any, // Type assertion for JSON
                tokenUsage: evalData.tokenUsage as any, // Type assertion for JSON
                isModelMappingCorrect: evalData.isModelMappingCorrect,
                isAnswerCorrect: evalData.isAnswerCorrect,
              },
            });
            totalEvals++;
          } catch (evalErr) {
            console.error(
              `    ❌ Failed model eval for "${evalData.modelName}":`,
              evalErr,
            );
            skipped++;
          }
        }

        totalProblems++;
      } catch (err) {
        console.error(
          `❌ Problem insert failed: "${p.problem.slice(0, 80)}..."`,
          err,
        );
        skipped++;
      }
    }
  }

  console.log("\n✅ Seeding complete!");
  console.log(`🧮 Problems inserted: ${totalProblems}`);
  console.log(`📊 Evaluations inserted: ${totalEvals}`);
  console.log(`⛔ Skipped: ${skipped}`);
}

async function main() {
  try {
    await seedProblems();
  } catch (e) {
    console.error("💥 Fatal error during seeding:", e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

if (require.main === module) {
  main();
}

export { seedProblems };
