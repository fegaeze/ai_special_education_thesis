import { runBatchAllLLMs } from "./llmEvaluator";
import { writeFileSync } from "fs";
import {
  clduWordProblems,
  cllquWordProblems,
  clsquWordProblems,
  cmduWordProblems,
  cmlquWordProblems,
  cmsquWordProblems,
  cjwuWordProblems,
  cjpuWordProblems,
  cswuWordProblems,
  cspuWordProblems,
  cwuWordProblems,
  cpuWordProblems,
} from "./data/word_problems";

(async () => {
  try {
    console.log("🧠 Running batch classification...");
    const results = await runBatchAllLLMs(cpuWordProblems);

    writeFileSync("results.json", JSON.stringify(results, null, 2), "utf-8");
    console.log("✅ Results saved to /results.json");
  } catch (err) {
    console.error("❌ Error during evaluation:", err);
  }
})();
