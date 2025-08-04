// Database Types for Prisma Operations
export interface ProblemWhereInput {
  groundTruthCategory?: string;
  groundTruthSubcategory?: string;
  id?: number;
}

export interface ModelEvaluationWhereInput {
  problemId?: number | { in: number[] };
  modelName?: string;
}

export interface TokenUsage {
  prompt: number;
  completion: number;
  total: number;
}

// Prisma Query Types
export interface ProblemWithEvaluations {
  id: number;
  content: string;
  answer: number;
  createdAt: Date;
  groundTruthCategory: string;
  groundTruthSubcategory: string;
  modelEvaluations: ModelEvaluation[];
}

export interface ModelEvaluation {
  id: number;
  problemId: number;
  output: string;
  subReasoning: string;
  confidenceScore: number | null;
  agreementScore: number | null;
  tokenUsage: TokenUsage | null;
  createdAt: Date;
  modelName: string;
  predictedCategory: string;
  predictedSubcategory: string;
}
