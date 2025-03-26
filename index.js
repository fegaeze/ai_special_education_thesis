import readline from "readline";
import { ChatOllama } from "@langchain/ollama";
import { ChatPromptTemplate } from "@langchain/core/prompts";

import { 
  classificationStructure, 
  changeJoinPartUnknownStructure, 
  changeJoinWholeUnknownStructure,
  changeSeparatePartUnknownStructure,
  changeSeparateWholeUnknownStructure,
  combinePartUnknownStructure,
  combineWholeUnknownStructure,
  compareLessDifferenceUnknownStructure,
  compareLessLargerQuantityUnknownStructure,
  compareLessSmallerQuantityUnknownStructure,
  compareMoreDifferenceUnknownStructure,
  compareMoreLargerQuantityUnknownStructure,
  compareMoreSmallerQuantityUnknownStructure,
} from "./prompt.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const deepSeekClient = new ChatOllama({
  model: "deepseek-r1:1.5b",
  temperature: 0,
  baseUrl: "http://localhost:11434",
  streaming: true,
});

const ProblemTypes = {
  "Combine: Whole Unknown": "combine_whole_unknown",
  "Combine: Part Unknown": "combine_part_unknown",
  "Change-Join: Whole Unknown": "change_join_whole_unknown",
  "Change-Join: Part Unknown": "change_join_part_unknown",
  "Change-Separate: Whole Unknown": "change_separate_whole_unknown",
  "Change-Separate: Part Unknown": "change_separate_part_unknown",
  "Compare-More: Difference Unknown": "compare_more_difference_unknown",
  "Compare-More: Larger Quantity Unknown": "compare_more_larger_unknown",
  "Compare-More: Smaller Quantity Unknown": "compare_more_smaller_unknown",
  "Compare-Less: Difference Unknown": "compare_less_difference_unknown",
  "Compare-Less: Larger Quantity Unknown": "compare_less_larger_unknown",
  "Compare-Less: Smaller Quantity Unknown": "compare_less_smaller_unknown",
};

// Define the classification prompt
const classificationPrompt = ChatPromptTemplate.fromTemplate(`
  ${classificationStructure}
  Problem: {word_problem}
`);

// Create the classification chain
const classificationChain = classificationPrompt.pipe(deepSeekClient);

const promptMapping = {
  [ProblemTypes["Change-Join: Whole Unknown"]]: changeJoinPartUnknownStructure,
  [ProblemTypes["Change-Join: Part Unknown"]]: changeJoinWholeUnknownStructure,
  [ProblemTypes["Change-Separate: Whole Unknown"]]: changeSeparateWholeUnknownStructure,
  [ProblemTypes["Change-Separate: Part Unknown"]]: changeSeparatePartUnknownStructure,
  [ProblemTypes["Combine: Whole Unknown"]]: combineWholeUnknownStructure,
  [ProblemTypes["Combine: Part Unknown"]]: combinePartUnknownStructure,
  [ProblemTypes["Compare-More: Difference Unknown"]]: compareMoreDifferenceUnknownStructure,
  [ProblemTypes["Compare-More: Larger Quantity Unknown"]]: compareMoreLargerQuantityUnknownStructure,
  [ProblemTypes["Compare-More: Smaller Quantity Unknown"]]: compareMoreSmallerQuantityUnknownStructure,
  [ProblemTypes["Compare-Less: Difference Unknown"]]: compareLessDifferenceUnknownStructure,
  [ProblemTypes["Compare-Less: Larger Quantity Unknown"]]: compareLessLargerQuantityUnknownStructure,
  [ProblemTypes["Compare-Less: Smaller Quantity Unknown"]]: compareLessSmallerQuantityUnknownStructure,
};

async function classifyAndProcessProblem(wordProblem) {
  // Step 1: Classify the problem
  const classificationResponse = await classificationChain.invoke({ word_problem: wordProblem });
  const classification = classificationResponse.content.trim();

  console.log(`Classified as: ${classification}`);

  // Step 2: Check if a corresponding structured prompt exists
  const structurePrompt = promptMapping[classification];

  if (!structurePrompt) {
    console.log("No structured prompt found for this classification.");
    return;
  }

  // Step 3: Run the structured breakdown
  const structuredPrompt = ChatPromptTemplate.fromTemplate(structurePrompt);
  const structuredChain = structuredPrompt.pipe(deepSeekClient);

  const response = await structuredChain.invoke({ word_problem: wordProblem });
  return response.content;
}

// ---------------------------
// 2. Query Responder (Second AI)
// ---------------------------

const followUpContext = `
You are an AI expert in COMPS. You are provided with a COMPS analysis (structured JSON) of a word problem. 
When answering follow-up questions, provide a clear, direct, plain-text response based on the structured JSON but DO NOT output any JSON — just answer as you would explain it in a sentence.
For example, if asked "What is the whole part of this amount?" you might answer: "The whole part is the total number of apples they have together."`;


const followUpPrompt = ChatPromptTemplate.fromMessages([
  { role: "system", content: followUpContext },
  { role: "system", content: "COMPS Analysis: {analysis}" },
  { role: "human", content: "Follow-up: {followup}" }
]);

const followUpChain = followUpPrompt.pipe(deepSeekClient);

// Utility function to ask a question via the console
function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

let storedAnalysis = "";

async function main() {
  try {
    const wordProblem = await askQuestion("Enter a word problem: ");
    console.log("\nAnalyzing problem using COMPS...\n");

    const compsResponse = await classifyAndProcessProblem(wordProblem);
    storedAnalysis = compsResponse;
    console.log("Structured COMPS Analysis:\n", storedAnalysis, "\n");

    while (true) {
      const followUp = await askQuestion("Enter a follow-up question (or type 'exit' to quit): ");
      if (followUp.toLowerCase().trim() === "exit") break;
      console.log("\nProcessing follow-up...\n");

      const followUpResponse = await followUpChain.invoke({
        analysis: storedAnalysis,
        followup: followUp,
      });
      console.log("Follow-up Response:\n", followUpResponse.content, "\n");
    }
  } catch (error) {
    console.error("Error processing problem:", error);
  } finally {
    rl.close();
  }
}

main();
