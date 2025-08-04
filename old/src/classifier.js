// classifier.js
import { config } from "dotenv";
import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";

config(); // Load .env

const model = new OpenAI({
  temperature: 0.2,
  modelName: "gpt-4", // Or gpt-3.5-turbo for faster dev/testing
});

// === STEP 1: SUPER CATEGORY CLASSIFIER ===
const superCategoryPrompt = new PromptTemplate({
  template: `
  You are a math educator trained in the COMPS (Conceptual Model-Based Problem Solving) framework.
  
  Classify the following arithmetic word problem into one of these COMPS categories:
  - Change: Involves a starting amount, a change (increase or decrease), and a resulting amount.
  - Combine: Involves two parts or sets being joined into a whole.
  - Compare: Involves comparing two quantities to find the difference, the larger amount, or the smaller amount.
  
  Follow these reasoning steps:
  1. Identify the quantities and relationships in the problem.
  2. Ask yourself:
     - Is something being added to or taken away from a starting amount? → Change
     - Are two groups being combined into a total? → Combine
     - Are two quantities being compared using "more", "less", or "fewer"? → Compare
  3. Explain how the story structure matches one of the categories.
  4. Return only the category name (Change, Combine, or Compare).
  
  Word Problem: {problem}
  
  Step-by-step reasoning:
  `,
  inputVariables: ["problem"],
});

const superClassifier = new LLMChain({
  llm: model,
  prompt: superCategoryPrompt,
});

// === STEP 2: SUBTYPE CLASSIFIER HANDLERS ===
const subtypePrompts = {
  Change: new PromptTemplate({
    template: `
      You are classifying this word problem using the COMPS (Conceptual Model-Based Problem Solving) framework.
      
      Your task is to classify it into one of the following:
      - CJPU (Change-Join, Part Unknown)
      - CJWU (Change-Join, Whole Unknown)
      - CSPU (Change-Separate, Part Unknown)
      - CSWU (Change-Separate, Whole Unknown)
      
      Follow these reasoning steps:
      
      1. Does the story describe **getting more** (Join) or **losing/removing something** (Separate)?
         - "Got more", "received", "added" = Join
         - "Gave away", "lost", "spent" = Separate
      
      2. Identify the three components of the Change model:
         - Start amount (beginning quantity)
         - Change amount (what was gained or lost)
         - Result amount (ending quantity)
      
      3. Determine which quantity is **missing** in the problem:
         - If the unknown is one of the parts (either the start or the change), label it **Part Unknown**
         - If the unknown is the result/ending amount, label it **Whole Unknown**
      
      4. Use the conceptual model:
         - Change-Join: Start + Change = Result
         - Change-Separate: Start - Change = Result
      
      Problem: {problem}
      
      Step-by-step reasoning:
      Type (CJPU, CJWU, CSPU, or CSWU):
      `,
    inputVariables: ["problem"],
  }),
  Combine: new PromptTemplate({
    template: `
    You are classifying this word problem using the COMPS framework.
    
    Choose from:
    - CPU (Combine, Part Unknown)
    - CWU (Combine, Whole Unknown)
    
    Follow these steps:
    1. Identify the two parts and the total amount (whole).
    2. Use the model: Part + Part = Whole.
    3. Determine which quantity is missing:
       - If one part is unknown → CPU
       - If the whole is unknown → CWU
    
    Problem: {problem}
    
    Step-by-step reasoning:
    Type (CPU or CWU):
    `,
    inputVariables: ["problem"],
  }),
  Compare: new PromptTemplate({
    template: `
    You are classifying this word problem using the COMPS framework.
    
    Choose from:
    - CLDU (Compare-Less, Difference Unknown)
    - CLLQU (Compare-Less, Larger Quantity Unknown)
    - CLSQU (Compare-Less, Smaller Quantity Unknown)
    - CMDU (Compare-More, Difference Unknown)
    - CMLQU (Compare-More, Larger Quantity Unknown)
    - CMSQU (Compare-More, Smaller Quantity Unknown)
    
    Follow these steps:
    1. Identify the two quantities being compared.
    2. Determine if the comparison is about **more** or **less**.
    3. Use the model: Bigger = Smaller + Difference.
    4. Identify which of the three values (larger, smaller, difference) is unknown.
    5. Classify based on this structure.
    
    Problem: {problem}
    
    Step-by-step reasoning:
    Type (CLDU, CLLQU, CLSQU, CMDU, CMLQU, or CMSQU):
    `,
    inputVariables: ["problem"],
  }),
};

// === MASTER CLASSIFIER FUNCTION ===
export async function classifyWordProblem(problem) {
  const topResult = await superClassifier.call({ problem });
  const category = topResult.text.trim();

  if (!["Change", "Combine", "Compare"].includes(category)) {
    throw new Error(`Unrecognized category: ${category}`);
  }

  const subtypePrompt = subtypePrompts[category];
  const subtypeChain = new LLMChain({ llm: model, prompt: subtypePrompt });

  const subtypeResult = await subtypeChain.call({ problem });

  return {
    category,
    subtype: subtypeResult.text.trim(),
  };
}
