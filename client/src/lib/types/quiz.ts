export enum ModelType {
  PartPartWhole = "Part + Part = Whole",
  ChangeJoin = "Start + Change = End",
  ChangeSeparate = "Start − Change = End",
  Compare = "Bigger = Smaller + Difference",
}

export enum CompSuperType {
  Change = "Change",
  Compare = "Compare",
  Combine = "Combine",
}

// Type alias for problem types used in forms and UI
export type ProblemType = CompSuperType | "All";

// Type for selected problem types in mixed mode
export type SelectedProblemType = CompSuperType;

export enum CompSubType {
  CWU = "CWU",
  CPU = "CPU",
  CJWU = "CJWU",
  CJPU = "CJPU",
  CSWU = "CSWU",
  CSPU = "CSPU",
  CMDU = "CMDU",
  CMLQU = "CMLQU",
  CMSQU = "CMSQU",
  CLDU = "CLDU",
  CLLQU = "CLLQU",
  CLSQU = "CLSQU",
}

export enum ModelEquationSymbol {
  Plus = "+",
  Minus = "-",
  Equals = "=",
}

export enum ModelAnswerKey {
  part1 = "part1",
  part2 = "part2",
  whole = "whole",
  start = "start",
  change = "change",
  end = "end",
  bigger = "bigger",
  smaller = "smaller",
  difference = "difference",
}

export type ModelAnswer = {
  [ModelAnswerKey.part1]?: number | null;
  [ModelAnswerKey.part2]?: number | null;
  [ModelAnswerKey.whole]?: number | null;
  [ModelAnswerKey.start]?: number | null;
  [ModelAnswerKey.change]?: number | null;
  [ModelAnswerKey.end]?: number | null;
  [ModelAnswerKey.bigger]?: number | null;
  [ModelAnswerKey.smaller]?: number | null;
  [ModelAnswerKey.difference]?: number | null;
};

export type StoryGrammarPrompt = {
  text: string;
  boxTarget: ModelAnswerKey;
  context?: string;
};

export type WordProblem = {
  id: string;
  content: string;
  modelEvaluations: Array<{
    id: string;
    modelName: string;
    predictedCategory: CompSuperType;
    predictedSubcategory: CompSubType;
    modelAnswers: ModelAnswer;
    answer: number;
    modelAnswerReasoning: string;
    storyGrammarPrompts: StoryGrammarPrompt[];
  }>;
  questionOrder: number;
};

export type BoxState = {
  value: number | null;
  isCorrect: boolean;
};

export type SingleQuestionResult = {
  timeSpent: number;
  finalAnswer: number;
  finalAnswerCorrect: boolean;
  boxStates: Partial<Record<ModelAnswerKey, BoxState>>;
};

export type AnswerWithProblemId = SingleQuestionResult & {
  problemId: number;
};

export type QuizData = {
  problems: WordProblem[];
  completed?: boolean;
  error?: string;
};

export interface QuizSession {
  id: number;
  startTime: string;
  endTime?: string | null;
  status: "ACTIVE" | "COMPLETED";
  class: {
    name: string;
  };
  settings: {
    problemCount: number;
    problemType: string;
    selectedTypes?: string[];
  };
  attempts: QuizAttempt[];
  codes: QuizCode[];
}

export interface QuizAttempt {
  id: number;
  student: {
    id: number;
    name: string;
  };
  startTime: string;
  endTime: string | null;
}

export interface QuizCode {
  code: string;
  studentId: number;
  studentName: string;
}

// Consolidated analytics types
export interface StudentAnalytics {
  id: number;
  name: string;
  problemsAttempted: number;
  avgAccuracy: number | null;
  avgTime: number | null;
  totalResponses: number;
  recentSessions: number;
  lastActive: string | null;
  accuracyTrend: number[];
  timeTrend: number[];
  subtypeBreakdown?: {
    change: { attempted: number; correct: number; accuracy: number };
    combine: { attempted: number; correct: number; accuracy: number };
    compare: { attempted: number; correct: number; accuracy: number };
  };
  failureAnalysis?: {
    finalAnswerFailures: number;
    storyGrammarFailures: number;
    totalProblems: number;
  };
}

export interface ClassAnalytics {
  totalStudents: number;
  totalSessions: number;
  avgClassAccuracy: number;
  avgClassTime: number;
}

export interface AnalyticsData {
  students: StudentAnalytics[];
  classOverview: ClassAnalytics;
  sessionDates: Date[];
  loading: boolean;
  error: string | null;
}
