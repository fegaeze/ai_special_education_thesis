import { Router } from "express";
import prisma from "../config/prisma";
import { validateQuery } from "../lib/validation";
import { problemFilterSchema } from "../lib/validation";
import { Prisma } from "../generated/prisma";

const router = Router();

router.get("/modelEvaluations", async (req, res, next) => {
  try {
    const { category, subcategory } = req.query;
    const where: Prisma.ProblemWhereInput = {};

    if (category) {
      where.groundTruth = { category: category as any };
    }

    if (subcategory) {
      where.groundTruth = {
        ...where.groundTruth,
        subcategory: subcategory as any,
      };
    }

    // Get ALL problems for overall accuracy calculation
    const allProblems = await prisma.problem.findMany({
      where,
      orderBy: { createdAt: "desc" },
      include: {
        groundTruth: true,
        modelEvaluations: true,
      },
    });

    // Get problems with failures for the list
    const problemsWithFailures = allProblems.filter((problem) => {
      return problem.modelEvaluations?.some((evaluation) => {
        const mappingFailed = !evaluation.isModelMappingCorrect;
        const answerFailed = !evaluation.isAnswerCorrect;
        const categoryFailed =
          evaluation.predictedCategory !== problem.groundTruth.category;
        const subcategoryFailed =
          evaluation.predictedSubcategory !== problem.groundTruth.subcategory;

        return (
          mappingFailed || answerFailed || categoryFailed || subcategoryFailed
        );
      });
    });

    const modelNames = [
      "OPENAI_GPT_4_1",
      "ANTHROPIC_CLAUDE_SONNET_4",
      "GOOGLE_GEMINI_2_5_FLASH",
    ];

    const modelStats = modelNames.map((modelName) => {
      let total = 0;
      let categoryCorrect = 0;
      let subcategoryCorrect = 0;
      let answerCorrect = 0;
      let mappingCorrect = 0;
      let sumTokens = 0;

      // Calculate from ALL problems
      allProblems.forEach((problem) => {
        const evaluation = problem.modelEvaluations.find(
          (e) => e.modelName === modelName,
        );
        if (evaluation) {
          total++;

          if (evaluation.predictedCategory === problem.groundTruth.category) {
            categoryCorrect++;
          }

          if (
            evaluation.predictedSubcategory === problem.groundTruth.subcategory
          ) {
            subcategoryCorrect++;
          }

          if (evaluation.isAnswerCorrect) {
            answerCorrect++;
          }

          if (evaluation.isModelMappingCorrect) {
            mappingCorrect++;
          }

          sumTokens +=
            (evaluation.tokenUsage as { total: number } | null)?.total ?? 0;
        }
      });

      return {
        modelName,
        total,
        categoryCorrect,
        subcategoryCorrect,
        answerCorrect,
        mappingCorrect,
        totalTokens: sumTokens,
        categoryAccuracy: total
          ? ((categoryCorrect / total) * 100).toFixed(1)
          : "0",
        subcategoryAccuracy: total
          ? ((subcategoryCorrect / total) * 100).toFixed(1)
          : "0",
        answerAccuracy: total
          ? ((answerCorrect / total) * 100).toFixed(1)
          : "0",
        mappingAccuracy: total
          ? ((mappingCorrect / total) * 100).toFixed(1)
          : "0",
      };
    });

    res.json({
      totalProblems: allProblems.length,
      failedProblems: problemsWithFailures,
      modelPerformance: modelStats,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
