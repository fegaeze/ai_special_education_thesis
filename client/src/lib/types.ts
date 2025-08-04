// API Request/Response Types
export interface ApiResponse<T = any> {
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginationParams {
  page?: number;
  limit?: number;
}

export interface ProblemFilters {
  category?: string;
  subcategory?: string;
  model?: string;
  includeEvaluations?: boolean;
}

export interface TokenUsage {
  prompt: number;
  completion: number;
  total: number;
}

// Database Types
export interface GroundTruth {
  id: number;
  category: string;
  subcategory: string;
  answer: number;
  modelAnswers: any;
}

export interface Problem {
  id: number;
  content: string;
  answer: number;
  createdAt: string;
  groundTruth: GroundTruth;
  modelEvaluations?: ModelEvaluation[];
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

export interface ProblemWhereInput {
  groundTruth?: {
    category?: string;
    subcategory?: string;
  };
  id?: number;
}

export interface ModelEvaluationWhereInput {
  problemId?: number | { in: number[] };
  modelName?: string;
}

// Error Types
export interface ApiError {
  status: number;
  message: string;
  code?: string;
  details?: any;
}

// Validation Types
export interface ValidationError {
  field: string;
  message: string;
  value?: any;
}
