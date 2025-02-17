import { ChatOllama } from "@langchain/ollama";
import { ChatPromptTemplate } from "@langchain/core/prompts";

const deepSeekClient = new ChatOllama({
    model: "deepseek-r1:1.5b",
    temperature: 0.8,
    baseUrl: "http://localhost:11434",
    streaming: true,
});

const prompt = ChatPromptTemplate.fromMessages([
  [
    "system",
    "You are a helpful assistant that translates {input_language} to {output_language}.",
  ],
  ["human", "{input}"],
]);

const chain = prompt.pipe(deepSeekClient);

async function run() {
  const response = await chain.invoke({
    input_language: "English",
    output_language: "French",
    input: "I love programming.",
  });
  
  console.log("Translation:", response);
}

run();

