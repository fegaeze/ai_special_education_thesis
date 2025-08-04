import { grammarPoints } from "./grammarpoints";

export interface StoryGrammarPrompt {
  text: string;
  boxTarget: string;
  context?: string;
}

export interface ProblemContext {
  problem: string;
  subtype: string;
  modelAnswers: Record<string, number | null>;
  modelType: string;
}

export interface PromptTemplate {
  subtype: string;
  modelType: string;
  boxOrder: string[];
  templates: {
    [boxTarget: string]: {
      question: string;
      context: string;
    };
  };
}

// Template system for different problem types
export const promptTemplates: Record<string, PromptTemplate> = {
  CJPU: {
    subtype: "CJPU",
    modelType: "ChangeJoin",
    boxOrder: ["start", "change", "end"],
    templates: {
      start: {
        question: "How many {item} were there at the beginning?",
        context: "Focus on the initial quantity before any changes occurred.",
      },
      change: {
        question: "How many {item} were added?",
        context: "Focus on the quantity that was added or increased.",
      },
      end: {
        question: "How many {item} are there now?",
        context: "Focus on the final total after the addition.",
      },
    },
  },
  CJWU: {
    subtype: "CJWU",
    modelType: "ChangeJoin",
    boxOrder: ["start", "change", "end"],
    templates: {
      start: {
        question: "How many {item} were there at the beginning?",
        context: "Focus on the initial quantity before any changes occurred.",
      },
      change: {
        question: "How many {item} were added?",
        context: "Focus on the quantity that was added or increased.",
      },
      end: {
        question: "How many {item} are there now?",
        context: "Focus on the final total after the addition.",
      },
    },
  },
  CSPU: {
    subtype: "CSPU",
    modelType: "ChangeSeparate",
    boxOrder: ["start", "change", "end"],
    templates: {
      start: {
        question: "How many {item} were there at the beginning?",
        context: "Focus on the initial quantity before any items were removed.",
      },
      change: {
        question: "How many {item} were taken away?",
        context: "Focus on the quantity that was removed or decreased.",
      },
      end: {
        question: "How many {item} are left?",
        context: "Focus on the remaining quantity after the removal.",
      },
    },
  },
  CSWU: {
    subtype: "CSWU",
    modelType: "ChangeSeparate",
    boxOrder: ["start", "change", "end"],
    templates: {
      start: {
        question: "How many {item} were there at the beginning?",
        context: "Focus on the initial quantity before any items were removed.",
      },
      change: {
        question: "How many {item} were taken away?",
        context: "Focus on the quantity that was removed or decreased.",
      },
      end: {
        question: "How many {item} are left?",
        context: "Focus on the remaining quantity after the removal.",
      },
    },
  },
  CWU: {
    subtype: "CWU",
    modelType: "PartPartWhole",
    boxOrder: ["part1", "part2", "whole"],
    templates: {
      part1: {
        question: "How many {item} are in the first group?",
        context: "Focus on the first part or group mentioned in the problem.",
      },
      part2: {
        question: "How many {item} are in the second group?",
        context: "Focus on the second part or group mentioned in the problem.",
      },
      whole: {
        question: "How many {item} are there in all?",
        context: "Focus on the total when both parts are combined.",
      },
    },
  },
  CPU: {
    subtype: "CPU",
    modelType: "PartPartWhole",
    boxOrder: ["part1", "part2", "whole"],
    templates: {
      part1: {
        question: "How many {item} are in the first group?",
        context: "Focus on the first part or group mentioned in the problem.",
      },
      part2: {
        question: "How many {item} are in the second group?",
        context: "Focus on the second part or group mentioned in the problem.",
      },
      whole: {
        question: "How many {item} are there in all?",
        context: "Focus on the total when both parts are combined.",
      },
    },
  },
  CMDU: {
    subtype: "CMDU",
    modelType: "Compare",
    boxOrder: ["bigger", "smaller", "difference"],
    templates: {
      bigger: {
        question: "How many {item} are in the larger group?",
        context: "Focus on the group that has more items.",
      },
      smaller: {
        question: "How many {item} are in the smaller group?",
        context: "Focus on the group that has fewer items.",
      },
      difference: {
        question: "How many more {item} are in the larger group?",
        context: "Focus on the difference between the two groups.",
      },
    },
  },
  CMLQU: {
    subtype: "CMLQU",
    modelType: "Compare",
    boxOrder: ["bigger", "smaller", "difference"],
    templates: {
      bigger: {
        question: "How many {item} are in the larger group?",
        context: "Focus on the group that has more items.",
      },
      smaller: {
        question: "How many {item} are in the smaller group?",
        context: "Focus on the group that has fewer items.",
      },
      difference: {
        question: "How many more {item} are in the larger group?",
        context: "Focus on the difference between the two groups.",
      },
    },
  },
  CMSQU: {
    subtype: "CMSQU",
    modelType: "Compare",
    boxOrder: ["bigger", "smaller", "difference"],
    templates: {
      bigger: {
        question: "How many {item} are in the larger group?",
        context: "Focus on the group that has more items.",
      },
      smaller: {
        question: "How many {item} are in the smaller group?",
        context: "Focus on the group that has fewer items.",
      },
      difference: {
        question: "How many more {item} are in the larger group?",
        context: "Focus on the difference between the two groups.",
      },
    },
  },
  CLDU: {
    subtype: "CLDU",
    modelType: "Compare",
    boxOrder: ["bigger", "smaller", "difference"],
    templates: {
      bigger: {
        question: "How many {item} are in the larger group?",
        context: "Focus on the group that has more items.",
      },
      smaller: {
        question: "How many {item} are in the smaller group?",
        context: "Focus on the group that has fewer items.",
      },
      difference: {
        question: "How many fewer {item} are in the smaller group?",
        context: "Focus on the difference between the two groups.",
      },
    },
  },
  CLLQU: {
    subtype: "CLLQU",
    modelType: "Compare",
    boxOrder: ["bigger", "smaller", "difference"],
    templates: {
      bigger: {
        question: "How many {item} are in the larger group?",
        context: "Focus on the group that has more items.",
      },
      smaller: {
        question: "How many {item} are in the smaller group?",
        context: "Focus on the group that has fewer items.",
      },
      difference: {
        question: "How many fewer {item} are in the smaller group?",
        context: "Focus on the difference between the two groups.",
      },
    },
  },
  CLSQU: {
    subtype: "CLSQU",
    modelType: "Compare",
    boxOrder: ["bigger", "smaller", "difference"],
    templates: {
      bigger: {
        question: "How many {item} are in the larger group?",
        context: "Focus on the group that has more items.",
      },
      smaller: {
        question: "How many {item} are in the smaller group?",
        context: "Focus on the group that has fewer items.",
      },
      difference: {
        question: "How many fewer {item} are in the smaller group?",
        context: "Focus on the difference between the two groups.",
      },
    },
  },
};

// Extract the main item/object from the problem text
export function extractMainItem(problem: string): string {
  // Common patterns to extract the main item
  const patterns = [
    /(\d+)\s+(\w+)\s+were/,
    /(\d+)\s+(\w+)\s+are/,
    /(\d+)\s+(\w+)\s+in/,
    /(\w+)\s+(\w+)\s+(\w+)/, // For compound items like "stone buttons"
  ];

  for (const pattern of patterns) {
    const match = problem.match(pattern);
    if (match) {
      return match[2] || match[1]; // Return the item name
    }
  }

  // Fallback: extract common words
  const commonItems = [
    "tables",
    "euros",
    "stickers",
    "cookies",
    "buttons",
    "marbles",
    "books",
    "apples",
  ];
  const words = problem.toLowerCase().split(/\s+/);

  for (const word of words) {
    if (commonItems.includes(word)) {
      return word;
    }
  }

  return "items"; // Default fallback
}

// Generate prompts using templates (no LLM required)
export function generatePromptsFromTemplate(
  problem: string,
  subtype: string,
): StoryGrammarPrompt[] {
  const template = promptTemplates[subtype];
  if (!template) {
    throw new Error(`No template found for subtype: ${subtype}`);
  }

  const mainItem = extractMainItem(problem);
  const prompts: StoryGrammarPrompt[] = [];

  for (const boxTarget of template.boxOrder) {
    const boxTemplate = template.templates[boxTarget];
    if (boxTemplate) {
      prompts.push({
        text: boxTemplate.question.replace("{item}", mainItem),
        boxTarget,
        context: boxTemplate.context,
      });
    }
  }

  return prompts;
}

// LLM prompt for generating custom prompts
export function createLLMPrompt(
  problem: string,
  subtype: string,
  modelAnswers: Record<string, number | null>,
): string {
  const template = promptTemplates[subtype];
  const mainItem = extractMainItem(problem);

  return `You are an expert math teacher helping students solve word problems using the Conceptual Model-Based Problem Solving (COMPS) framework.

Problem: "${problem}"
Problem Type: ${subtype}
Model Type: ${template.modelType}
Main Item: ${mainItem}

The student needs to fill in a model equation with the following boxes: ${template.boxOrder.join(", ")}.

For each box, generate a specific, contextual question that:
1. Uses the exact language and context from the problem
2. Focuses on the specific mathematical concept for that box
3. Is appropriate for elementary school students (grades 1-4)
4. Helps students identify the relevant information in the problem

Generate exactly ${template.boxOrder.length} questions, one for each box in order. Format your response as a JSON array:

[
  {
    "text": "Your specific question here",
    "boxTarget": "boxName",
    "context": "Brief explanation of what this question focuses on"
  }
]

Make the questions specific to this problem's context and use the actual items mentioned in the problem.`;
}

// Function to call LLM API (you'll need to implement this based on your LLM provider)
export async function generatePromptsWithLLM(
  problem: string,
  subtype: string,
  modelAnswers: Record<string, number | null>,
  apiKey?: string,
): Promise<StoryGrammarPrompt[]> {
  const prompt = createLLMPrompt(problem, subtype, modelAnswers);

  // This is where you'd call your LLM API
  // Example with OpenAI (you'd need to add your API key and implementation)
  /*
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
    }),
  });
  
  const data = await response.json();
  const generatedText = data.choices[0].message.content;
  
  try {
    return JSON.parse(generatedText);
  } catch (error) {
    console.error('Failed to parse LLM response:', error);
    // Fallback to template-based generation
    return generatePromptsFromTemplate(problem, subtype);
  }
  */

  // For now, return template-based prompts
  return generatePromptsFromTemplate(problem, subtype);
}
