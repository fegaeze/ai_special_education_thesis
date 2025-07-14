// src/handlers/CJPU.js
import * as dotenv from "dotenv";

import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";

dotenv.config();

const model = new ChatOpenAI({
  modelName: "gpt-4",
  temperature: 0.2,
});

const prompt = ChatPromptTemplate.fromTemplate(`
You are a math tutor helping a student with learning difficulties understand a word problem using simple language and reasoning.

The problem you'll help with is a Change-Join, Part Unknown (CJPU) type. This means:
- Something starts with an amount.
- More is added.
- The total is known.
- The student must figure out how much was added.

📘 Example Problem:
"Mia wrote 48 lines of code in the morning. She wrote more in the afternoon and finished with 123 lines. How many did she write in the afternoon?"

Step-by-step explanation:
"Mia started with 48 lines of code. By the end of the day, she had 123 in total. That means she added some more in the afternoon. To find out how many more she wrote, we think: 48 plus what makes 123? The answer is 75."

Now help with the next problem.
Explain it in the same way, and then give the structured reasoning:
- Who is it about?
- What is happening in the story?
- What do we know and what is missing?
- How would you help the student solve it?

Problem:
{problem}

Respond in this format:
{{
  \"variant\": \"CJPU\",
  \"model\": \"start + ? = total\",
  "known_values\": {{ \"start\": ..., \"total\": ... }},
  \"story_grammar\": {{
    \"who\": \"...\",
    \"event\": \"...\",
    \"goal\": \"...\"
  }},
  \"explanation\": \"...\"
}}`);

export async function handle(problem) {
  const chain = prompt.pipe(model);
  const result = await chain.invoke({ problem });
  return result.content.trim();
}
