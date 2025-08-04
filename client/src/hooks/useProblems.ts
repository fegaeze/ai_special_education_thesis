import { API_ENDPOINTS } from "@/lib/config";
import { useState, useEffect } from "react";
import { TokenUsage } from "@/lib/types";
import {
  FETCH_ERRORS,
  API_ERRORS,
  formatMessage,
  getErrorMessage,
} from "@/lib/errors";

export interface GroundTruth {
  id: number;
  category: string;
  subcategory: string;
  answer: number;
  modelAnswers: any;
}

export interface ModelEvaluation {
  id: number;
  problemId: number;
  modelName: string;
  predictedCategory: string;
  predictedSubcategory: string;
  supercategoryReasoning: string;
  subCategoryReasoning: string;
  modelAnswers: any;
  answer: number;
  modelAnswerReasoning: string;
  storyGrammarPrompts: any;
  tokenUsage: TokenUsage;
  isModelMappingCorrect: boolean;
  isAnswerCorrect: boolean;
  createdAt: string;
}

export interface Problem {
  id: number;
  content: string;
  answer: number;
  createdAt: string;
  groundTruth: GroundTruth;
  modelEvaluations?: ModelEvaluation[];
}

export interface ProblemsResponse {
  problems: Problem[];
}

export interface StatsResponse {
  overview: {
    totalProblems: number;
    totalEvaluations: number;
    averageEvaluationsPerProblem: number;
  };
  byCategory: Array<{ category: string; count: number }>;
  bySubcategory: Array<{ subcategory: string; count: number }>;
  availableSubcategories: Array<{ subcategory: string; count: number }>;
  byModel: Array<{ model: string; count: number }>;
  recentProblems: Array<{
    id: number;
    content: string;
    answer: number;
    createdAt: string;
    groundTruth: {
      category: string;
      subcategory: string;
    };
  }>;
}

export interface ModelPerformanceStats {
  modelName: string;
  total: number;
  categoryCorrect: number;
  subcategoryCorrect: number;
  answerCorrect: number;
  mappingCorrect: number;
  totalTokens: number;
  categoryAccuracy: string;
  subcategoryAccuracy: string;
  answerAccuracy: string;
  mappingAccuracy: string;
}

export interface UseProblemsOptions {
  category?: string;
  subcategory?: string;
  model?: string;
  includeEvaluations?: boolean;
  showFailuresOnly?: boolean;
}

export interface ModelEvaluationsResponse {
  totalProblems: number;
  failedProblems: Problem[];
  modelPerformance: ModelPerformanceStats[];
}

export function useProblems(options: UseProblemsOptions = {}) {
  const [modelEvaluations, setModelEvaluations] =
    useState<ModelEvaluationsResponse>({
      totalProblems: 0,
      failedProblems: [],
      modelPerformance: [],
    });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchModelEvaluations = async (
    fetchOptions: UseProblemsOptions = {},
  ) => {
    try {
      setLoading(true);
      setError(null);

      const params = new URLSearchParams();

      if (fetchOptions.category)
        params.append("category", fetchOptions.category);
      if (fetchOptions.subcategory)
        params.append("subcategory", fetchOptions.subcategory);

      const response = await fetch(
        `${API_ENDPOINTS.problems}/modelEvaluations?${params}`,
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.message ||
            formatMessage(API_ERRORS.HTTP_ERROR, { status: response.status }),
        );
      }

      const data: ModelEvaluationsResponse = await response.json();
      setModelEvaluations(data);
    } catch (err) {
      setError(getErrorMessage(err, FETCH_ERRORS.PROBLEMS_FETCH));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchModelEvaluations(options);
  }, [
    options.category,
    options.subcategory,
    options.model,
    options.includeEvaluations,
  ]);

  return {
    modelEvaluations,
    loading,
    error,
    refetch: () => fetchModelEvaluations(options),
  };
}
