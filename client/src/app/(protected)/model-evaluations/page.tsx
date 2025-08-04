"use client";

import { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { useProblems } from "@/hooks/useProblems";
import { LOADING_MESSAGES } from "@/lib/errors";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const subcategoryLabels: Record<string, string> = {
  CWU: "Combine: Whole Unknown",
  CPU: "Combine: Part Unknown",
  CJWU: "Change-Join: Whole Unknown",
  CJPU: "Change-Join: Part Unknown",
  CSWU: "Change-Separate: Whole Unknown",
  CSPU: "Change-Separate: Part Unknown",
  CMDU: "Compare-More: Difference Unknown",
  CMLQU: "Compare-More: Larger Quantity Unknown",
  CMSQU: "Compare-More: Smaller Quantity Unknown",
  CLDU: "Compare-Less: Difference Unknown",
  CLLQU: "Compare-Less: Larger Quantity Unknown",
  CLSQU: "Compare-Less: Smaller Quantity Unknown",
};

const modelDisplayNames: Record<string, string> = {
  OPENAI_GPT_4_1: "OpenAI: GPT-4.1",
  ANTHROPIC_CLAUDE_SONNET_4: "Anthropic: Claude Sonnet 4",
  GOOGLE_GEMINI_2_5_FLASH: "Google: Gemini 2.5 Flash",
};

export default function ModelEvaluationsPage() {
  const [filter, setFilter] = useState<string>("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogReasoning, setDialogReasoning] = useState<any>(null);
  const [dialogModel, setDialogModel] = useState<string>("");
  const [dialogProblem, setDialogProblem] = useState<string>("");

  const { modelEvaluations, loading, error } = useProblems({
    subcategory: filter || undefined,
  });

  const {
    totalProblems,
    failedProblems: problems,
    modelPerformance,
  } = modelEvaluations;

  // Helper function to check if evaluation has any issues
  const hasEvaluationIssues = (evaluation: any, problem: any) => {
    const categoryFailed =
      evaluation.predictedCategory !== problem.groundTruth.category;
    const subcategoryFailed =
      evaluation.predictedSubcategory !== problem.groundTruth.subcategory;
    const answerFailed = !evaluation.isAnswerCorrect;
    const mappingFailed = !evaluation.isModelMappingCorrect;

    return categoryFailed || subcategoryFailed || answerFailed || mappingFailed;
  };

  const availableSubcategories = useMemo(() => {
    // TODO: For now, return a static list of subcategories
    return [
      "CWU",
      "CPU",
      "CJWU",
      "CJPU",
      "CSWU",
      "CSPU",
      "CMDU",
      "CMLQU",
      "CMSQU",
      "CLDU",
      "CLLQU",
      "CLSQU",
    ];
  }, []);

  if (loading) {
    return (
      <div className="px-4 py-6 sm:px-0">
        <div className="flex items-center justify-center h-64">
          <div className="text-lg text-gray-600">
            {LOADING_MESSAGES.PROBLEMS_LOADING}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    throw new Error(error);
  }

  return (
    <div className="px-4 py-6 sm:px-0">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold">Model Evaluations</h1>
        <p className="text-sm text-gray-600 max-w-lg">
          Understand how each model performed — including generating predicted
          category, subcategory, mapped model answers, and final answer.
        </p>
      </div>

      {/* Filter Controls */}
      <div className="flex justify-between items-center mb-6">
        <div className="text-sm text-gray-600">
          <span>{`Evaluated ${totalProblems} total problems`}</span>
        </div>

        <Select
          value={filter || "__ALL__"}
          onValueChange={(val) => {
            setFilter(val === "__ALL__" ? "" : val);
          }}
        >
          <SelectTrigger
            className="w-[200px] rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm
                   focus:outline-none focus:ring-0 focus:border-gray-400 transition focus-visible:ring-0"
          >
            <SelectValue placeholder="Filter by Subcategory" />
          </SelectTrigger>

          <SelectContent className="bg-white border border-gray-200 shadow-md rounded-md text-sm">
            <SelectItem
              value="__ALL__"
              className="hover:bg-blue-50 cursor-pointer rounded-sm px-3 py-2 transition-colors"
            >
              All Subcategories
            </SelectItem>

            {availableSubcategories.map((subcat) => (
              <SelectItem
                key={subcat}
                value={subcat}
                className="hover:bg-blue-50 cursor-pointer rounded-sm px-3 py-2 transition-colors"
              >
                {subcategoryLabels[subcat] || subcat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Model-level summary row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
        {modelPerformance.map((m) => {
          return (
            <div
              key={m.modelName}
              className="rounded-xl bg-white shadow-sm p-4 space-y-3"
            >
              <h3 className="font-semibold">
                {modelDisplayNames[m.modelName] || m.modelName}
              </h3>

              <div className="space-y-1 text-xs text-gray-700">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Total Accuracy:</span>
                  <span className="font-medium text-xs">
                    {(
                      (Number(m.categoryAccuracy) +
                        Number(m.subcategoryAccuracy) +
                        Number(m.answerAccuracy) +
                        Number(m.mappingAccuracy)) /
                      4
                    ).toFixed(2)}
                    %
                  </span>
                </div>

                <div className="space-y-1 ml-4 mb-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">
                      Category Classification:
                    </span>
                    <span className="font-medium text-xs">
                      {m.categoryAccuracy}%
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">
                      Subcategory Classification:
                    </span>
                    <span className="font-medium text-xs">
                      {m.subcategoryAccuracy}%
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">
                      Word Problem Answer:
                    </span>
                    <span className="font-medium text-xs">
                      {m.answerAccuracy}%
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">
                      Word Problem Model Mapping:
                    </span>
                    <span className="font-medium text-xs">
                      {m.mappingAccuracy}%
                    </span>
                  </div>
                </div>

                <div className="flex justify-between pt-2 border-t border-gray-100">
                  <span className="text-muted-foreground">
                    Total Tokens Used
                  </span>
                  <span className="font-medium text-xs">{m.totalTokens}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Card view */}
      <>
        {problems.length === 0 ? (
          <div className="text-center py-12">
            <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-12 h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No problems with failures found
            </h3>
            <p className="text-gray-500 max-w-md mx-auto">
              Great news! All AI models are performing correctly on the current
              dataset. Try adjusting your filters or check back later for new
              evaluations.
            </p>
          </div>
        ) : (
          <>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Failed Problems ({problems.length})
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {problems.map((problem) => (
                <Card
                  key={problem.id}
                  className="p-5 shadow-sm rounded-xl bg-white border border-gray-200 gap-0"
                >
                  <>
                    <h4 className="font-semibold text-gray-600 text-xs uppercase mb-1">
                      Word Problem:
                    </h4>
                    <p className="text-sm text-gray-900">{problem.content}</p>
                  </>

                  <div className="mt-4">
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs border-collapse">
                        <thead>
                          <tr className="border-b border-gray-200 font-semibold text-gray-700">
                            <th className="text-left py-2 px-3 min-w-[150px]">
                              Model
                            </th>
                            <th className="text-left py-2 px-3 min-w-[150px]">
                              Status
                            </th>
                            <th className="text-left py-2 px-3 min-w-[150px]">
                              Category
                            </th>
                            <th className="text-left py-2 px-3 min-w-[150px]">
                              Subcategory
                            </th>
                            <th className="text-left py-2 px-3 min-w-[150px]">
                              Answer
                            </th>
                            <th className="text-left py-2 px-3 min-w-[150px]">
                              Model Mapping
                            </th>
                            <th className="text-left py-2 px-3 min-w-[150px]">
                              Tokens
                            </th>
                            <th className="text-left py-2 px-3 min-w-[150px]">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* Ground Truth Row */}
                          <tr className="bg-gray-100 border-b border-gray-100 font-medium text-gray-700">
                            <td className="py-2 px-3">Ground Truth</td>
                            <td className="py-2 px-3">N/A</td>
                            <td className="py-2 px-3">
                              {problem.groundTruth.category}
                            </td>
                            <td className="py-2 px-3">
                              {subcategoryLabels[
                                problem.groundTruth.subcategory
                              ] || problem.groundTruth.subcategory}
                            </td>
                            <td className="py-2 px-3">
                              {problem.groundTruth.answer}
                            </td>
                            <td className="py-2 px-3">
                              <pre className="font-mono text-xs">
                                {Object.entries(
                                  problem.groundTruth.modelAnswers,
                                ).map(([key, value]) => (
                                  <div key={key}>
                                    <span>{key}:</span>{" "}
                                    {value === null ? "null" : String(value)}
                                  </div>
                                ))}
                              </pre>
                            </td>
                            <td className="py-2 px-3">N/A</td>
                            <td className="py-2 px-3">N/A</td>
                          </tr>

                          {/* Model Evaluation Rows */}
                          {problem.modelEvaluations?.map((evaluation, i) => (
                            <tr
                              key={i}
                              className="border-b border-gray-100 hover:bg-gray-50 font-medium text-gray-700"
                            >
                              <td className="py-2 px-3">
                                {modelDisplayNames[evaluation.modelName] ||
                                  evaluation.modelName}
                              </td>
                              <td className="py-2 px-3">
                                {hasEvaluationIssues(evaluation, problem) ? (
                                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">
                                    ✗
                                  </span>
                                ) : (
                                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                                    ✓
                                  </span>
                                )}
                              </td>
                              <td className="py-2 px-3">
                                <span
                                  className={
                                    !evaluation.predictedCategory ||
                                    evaluation.predictedCategory !==
                                      problem.groundTruth.category
                                      ? "bg-red-100 text-red-800 px-1 rounded text-xs font-medium"
                                      : ""
                                  }
                                >
                                  {evaluation.predictedCategory || "Unknown"}
                                </span>
                              </td>
                              <td className="py-2 px-3">
                                <span
                                  className={
                                    !evaluation.predictedSubcategory ||
                                    evaluation.predictedSubcategory !==
                                      problem.groundTruth.subcategory
                                      ? "bg-red-100 text-red-800 px-1 rounded text-xs font-medium"
                                      : ""
                                  }
                                >
                                  {evaluation.predictedSubcategory || "Unknown"}
                                </span>
                              </td>
                              <td className="py-2 px-3">
                                <span
                                  className={
                                    !evaluation.answer ||
                                    !evaluation.isAnswerCorrect
                                      ? "bg-red-100 text-red-800 px-1 rounded text-xs font-medium"
                                      : ""
                                  }
                                >
                                  {evaluation.answer || "No answer"}
                                </span>
                              </td>
                              <td className="py-2 px-3">
                                {evaluation.modelAnswers ? (
                                  <pre className="font-mono text-xs">
                                    {Object.entries(
                                      evaluation.modelAnswers,
                                    ).map(([key, value]) => {
                                      const isCorrect =
                                        value ===
                                        problem.groundTruth.modelAnswers[key];
                                      return (
                                        <div
                                          key={key}
                                          className={
                                            isCorrect
                                              ? ""
                                              : "bg-red-100 text-red-800 rounded px-1"
                                          }
                                        >
                                          <span className="text-blue-600">
                                            {key}:
                                          </span>{" "}
                                          {value === null
                                            ? "null"
                                            : String(value)}
                                        </div>
                                      );
                                    })}
                                  </pre>
                                ) : (
                                  <span className="bg-red-100 text-red-800 px-1 rounded text-xs font-medium">
                                    No model answers
                                  </span>
                                )}
                              </td>
                              <td className="py-2 px-3">
                                {evaluation.tokenUsage ? (
                                  <pre className="font-mono text-xs">
                                    {Object.entries(evaluation.tokenUsage).map(
                                      ([key, value]) => (
                                        <div key={key}>
                                          <span className="text-blue-600">
                                            {key}:
                                          </span>{" "}
                                          {value === null
                                            ? "null"
                                            : String(value)}
                                        </div>
                                      ),
                                    )}
                                  </pre>
                                ) : (
                                  <span className="bg-red-100 text-red-800 px-1 rounded text-xs font-medium">
                                    No token data
                                  </span>
                                )}
                              </td>
                              <td className="py-2 px-3">
                                <button
                                  className="text-blue-600 underline text-xs hover:text-blue-800"
                                  onClick={() => {
                                    setDialogReasoning(evaluation);
                                    setDialogModel(
                                      modelDisplayNames[evaluation.modelName] ||
                                        evaluation.modelName,
                                    );
                                    setDialogProblem(problem.content);
                                    setDialogOpen(true);
                                  }}
                                >
                                  See Reasoning
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </>
        )}
      </>

      {/* Modal Dialog for Model Reasoning */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-4xl bg-white">
          <DialogHeader>
            <DialogTitle className="text-md font-semibold text-gray-900">
              Model Reasoning Details
            </DialogTitle>
            <DialogDescription className="text-sm text-gray-500 -mt-2">
              {dialogModel} - {dialogProblem}
            </DialogDescription>
          </DialogHeader>
          {dialogReasoning && (
            <div className="space-y-6">
              {/* Supercategory Reasoning */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-2">
                  Supercategory Classification Reasoning
                </h3>
                <div className="text-sm whitespace-pre-line text-gray-800 bg-gray-50 p-3 rounded">
                  {dialogReasoning.supercategoryReasoning ||
                    "No supercategory reasoning available"}
                </div>
              </div>

              {/* Subcategory Reasoning */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-2">
                  Subcategory Classification Reasoning
                </h3>
                <div className="text-sm whitespace-pre-line text-gray-800 bg-gray-50 p-3 rounded">
                  {dialogReasoning.subCategoryReasoning ||
                    "No subcategory reasoning available"}
                </div>
              </div>

              {/* Model Answer Reasoning */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-2">
                  Model Answer Reasoning
                </h3>
                <div className="text-sm whitespace-pre-line text-gray-800 bg-gray-50 p-3 rounded">
                  {dialogReasoning.modelAnswerReasoning ||
                    "No model answer reasoning available"}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
