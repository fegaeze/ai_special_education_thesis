// src/evaluator.js
import * as dotenv from "dotenv";

import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { examples } from "./examples.js";
import { handle as handleCJPU } from "./handlers/CJPU.js";

dotenv.config();

const model = new ChatOpenAI({
  modelName: "gpt-4",
  temperature: 0.2,
});

const prompt = ChatPromptTemplate.fromMessages([
  [
    "system",
    `You are a math tutor AI trained in Conceptual Model-Based Problem Solving (COMPS). Your job is to classify each word problem using one of the 12 COMPS variant codes listed below, based on the underlying mathematical structure.

Valid COMPS Variant Codes:
CJPU, CJWU, CSPU, CSWU, CPU, CWU, CLDU, CLLQU, CLSQU, CMDU, CMLQU, CMSQU

🧠 Compare Variant Decision Rules:
- If both full values are given → missing difference → CMDU or CLDU
- If smaller + difference are given → missing larger → CMLQU or CLLQU
- If larger + difference are given → missing smaller → CMSQU or CLSQU

Use these keywords to decide direction:
“more than”, “exceeded”, “heavier”, “additional” → Compare-More
“fewer than”, “less than”, “shortfall”, “fall short” → Compare-Less

🧠 Change vs. Combine Tip:
- Change = something happens over time (e.g., gave, added, lost)
- Combine = merging known groups or categories (e.g., red + blue)

Respond ONLY with this format:
Answer: <COMPS Variant Code>`,
  ],
  [
    "human",
    `Here are example classifications:

${examples}

Now classify the following word problem:
{word_problem}

Step-by-step:
1. Is it a change, combine, or compare situation?
2. Is it increasing or decreasing (if change)?
3. What quantity is missing (part, whole, difference)?

Respond only with:
Answer: <COMPS Variant Code>`,
  ],
]);

const chain = prompt.pipe(model);

export async function runEvaluation(testSet) {
  console.log("\nRunning COMPS variant classification test...\n");
  let correct = 0;

  for (const [i, { problem, expected }] of testSet.entries()) {
    const res = await chain.invoke({ word_problem: problem });
    const output = res.content.trim();
    const predicted = output.split(":")[1].trim().split(" ")[0];
    const match = predicted === expected;
    if (match) correct++;
    console.log(`Problem ${i + 1}: ${problem}`);
    console.log(
      `Expected: ${expected} | Predicted: ${predicted} | ${match ? "✅" : "❌"}`,
    );

    // If variant is CJPU, pass to handler
    // if (predicted === "CJPU") {
    //   const handled = await handleCJPU(problem);
    //   console.log("Handler Output:", handled);
    // }

    console.log("-----------------------------\n");
  }

  console.log(`Total Correct: ${correct} / ${testSet.length}\n`);
}

// NOTE: Use OpenRouter
