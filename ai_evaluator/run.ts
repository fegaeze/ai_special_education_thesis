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

    const allNewProblems = [
      ...cpuWordProblems,   // 1. Junior choir
      ...cwuWordProblems,   // 2. Mart and Anu
      ...cjpuWordProblems,  // 3. Ekke's height
      ...cjwuWordProblems,  // 4. Christmas tree
      ...cspuWordProblems,  // 5. Kaido's 85 cents
      ...cswuWordProblems,  // 6. Snowballs
      ...cmlquWordProblems, // 7. Lilli and Stitch garland
      ...cmduWordProblems,  // 8. Peppa weighs 33kg
      ...cmsquWordProblems, // 9. Ice skating ticket
      ...clsquWordProblems, // 10. Stella gingerbread cookies
      ...clduWordProblems,  // 11. Two classes cleaning school yard
      ...cllquWordProblems, // 12. Hugo's books
    ];

    console.log(`📋 Total problems to evaluate: ${allNewProblems.length}`);
    const results = await runBatchAllLLMs(allNewProblems);

    writeFileSync("results.json", JSON.stringify(results, null, 2), "utf-8");
    console.log("✅ Results saved to results.json");
  } catch (err) {
    console.error("❌ Error during evaluation:", err);
    process.exit(1);
  }
})();
