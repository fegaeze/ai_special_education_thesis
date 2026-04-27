"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
  useEffect,
} from "react";
import { API_ENDPOINTS } from "@/lib/config";
import {
  AnswerWithProblemId,
  QuizData,
  SingleQuestionResult,
  ModelAnswerKey,
} from "@/lib/types/quiz";

// ============================================================================
// TYPES AND INTERFACES
// ============================================================================

/**
 * Internal state for quiz session management
 */
interface QuizSessionState {
  // Session state
  currentQuizCode: string | null;
  isQuizActive: boolean;

  // Quiz data
  quizData: QuizData | null;
  answers: AnswerWithProblemId[];
  currentProblemCounter: number;

  // UI state
  loading: boolean;
  error: string | null;
  isInitialized: boolean;

  // Draft answers for auto-save functionality
  draftAnswers?: Record<
    string,
    Record<ModelAnswerKey, { value: string; isCorrect: boolean }>
  >;
}

/**
 * Public interface for quiz context consumers
 */
interface QuizContextType {
  // Session state
  currentQuizCode: string | null;
  isQuizActive: boolean;

  // Quiz data
  problems: QuizData["problems"] | undefined;
  answers: AnswerWithProblemId[];
  currentProblemCounter: number;

  // UI state
  loading: boolean;
  error: string | null;
  isInitialized: boolean;

  // Session functions
  setQuizCode: (code: string) => Promise<boolean>;
  clearQuiz: () => void;

  // Quiz data functions
  saveAnswer: (answer: SingleQuestionResult) => AnswerWithProblemId[];
  goToNextQuestion: () => void;
  isLastQuestion: () => boolean;
  submitAllAnswers: (
    code: string,
    answers: AnswerWithProblemId[],
  ) => Promise<{ success: boolean }>;
  saveDraftAnswer: (
    problemId: string,
    boxStates: Record<ModelAnswerKey, { value: string; isCorrect: boolean }>,
  ) => void;

  // Utility functions
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

// ============================================================================
// CONTEXT CREATION
// ============================================================================

const QuizContext = createContext<QuizContextType | undefined>(undefined);

interface QuizProviderProps {
  children: ReactNode;
}

// ============================================================================
// PROVIDER COMPONENT
// ============================================================================

export function QuizProvider({ children }: QuizProviderProps) {
  // Initialize state with default values
  const [sessionState, setSessionState] = useState<QuizSessionState>({
    currentQuizCode: null,
    isQuizActive: false,
    quizData: null,
    answers: [],
    currentProblemCounter: 0,
    loading: false,
    error: null,
    isInitialized: false,
  });

  // ============================================================================
  // INITIALIZATION FROM LOCALSTORAGE
  // ============================================================================

  /**
   * Initialize quiz state from localStorage on component mount
   * This allows users to resume their quiz if they refresh the page
   */
  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedSession = localStorage.getItem("quiz-session");
    if (!savedSession) {
      setSessionState((prev) => ({ ...prev, isInitialized: true }));
      return;
    }

    try {
      const parsed = JSON.parse(savedSession);
      if (!parsed.currentQuizCode) {
        setSessionState((prev) => ({ ...prev, isInitialized: true }));
        return;
      }

      // Re-fetch quiz data for the saved code
      const restoreQuizSession = async () => {
        setSessionState((prev) => ({ ...prev, isInitialized: false }));

        try {
          const response = await fetch(
            `${API_ENDPOINTS.quiz}/${encodeURIComponent(parsed.currentQuizCode)}`,
          );

          if (response.ok) {
            const data = await response.json();
            setSessionState((prev) => {
              // If the user already submitted a code manually while this
              // background restore was running, don't overwrite their session.
              if (prev.isQuizActive) return { ...prev, isInitialized: true };
              return {
                ...prev,
                currentQuizCode: parsed.currentQuizCode,
                isQuizActive: true,
                quizData: data,
                currentProblemCounter: parsed.currentProblemCounter || 0,
                answers: Array.isArray(parsed.answers) ? parsed.answers : [],
                draftAnswers:
                  parsed.draftAnswers && typeof parsed.draftAnswers === "object"
                    ? parsed.draftAnswers
                    : undefined,
                isInitialized: true,
              };
            });
          } else {
            // Quiz code is no longer valid, clear it
            localStorage.removeItem("quiz-session");
            setSessionState((prev) => ({ ...prev, isInitialized: true }));
          }
        } catch (error) {
          console.error("Failed to restore quiz session:", error);
          localStorage.removeItem("quiz-session");
          setSessionState((prev) => ({ ...prev, isInitialized: true }));
        }
      };

      restoreQuizSession();
    } catch (error) {
      console.error("Failed to parse saved progress:", error);
      localStorage.removeItem("quiz-session");
      setSessionState((prev) => ({ ...prev, isInitialized: true }));
    }
  }, []);

  // ============================================================================
  // UTILITY FUNCTIONS
  // ============================================================================

  /**
   * Set loading state
   */
  const setLoading = useCallback((loading: boolean) => {
    setSessionState((prev) => ({ ...prev, loading }));
  }, []);

  /**
   * Set error state
   */
  const setError = useCallback((error: string | null) => {
    setSessionState((prev) => ({ ...prev, error }));
  }, []);

  /**
   * Save quiz progress to localStorage
   */
  const saveProgressToStorage = useCallback(
    (code: string, problemCounter: number) => {
      if (typeof window === "undefined") return;

      const existingRaw = localStorage.getItem("quiz-session");
      const existing = existingRaw ? JSON.parse(existingRaw) : {};
      localStorage.setItem(
        "quiz-session",
        JSON.stringify({
          ...(existing && typeof existing === "object" ? existing : {}),
          currentQuizCode: code,
          currentProblemCounter: problemCounter,
        }),
      );
    },
    [],
  );

  /**
   * Clear quiz progress from localStorage
   */
  const clearProgressFromStorage = useCallback(() => {
    if (typeof window === "undefined") return;
    localStorage.removeItem("quiz-session");
  }, []);

  // ============================================================================
  // QUIZ DATA FETCHING
  // ============================================================================

  /**
   * Fetch quiz data from the server
   * @param code - The quiz code to fetch data for
   * @returns Promise with validation result and quiz data
   */
  const handleFetchQuizData = useCallback(
    async (code: string): Promise<{ valid: boolean; data?: QuizData }> => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `${API_ENDPOINTS.quiz}/${encodeURIComponent(code)}`,
        );

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));

          // Check if this is a completed quiz error (400 status)
          if (response.status === 400 && errorData.completed) {
            setError(errorData.message || "Quiz already completed");
            return { valid: false, data: errorData };
          }

          setError(
            errorData.message ||
              "Sorry, we couldn't find your quiz. Please check with your teacher and try again!",
          );
          return { valid: false };
        }

        const data = await response.json();
        return { valid: true, data };
      } catch (error) {
        console.error("Failed to fetch quiz data:", error);
        setError("Network error. Please try again.");
        return { valid: false };
      } finally {
        setLoading(false);
      }
    },
    [setLoading, setError],
  );

  // ============================================================================
  // SESSION MANAGEMENT
  // ============================================================================

  /**
   * Set quiz code and initialize quiz session
   * @param code - The quiz code to set
   * @returns Promise indicating success/failure
   */
  const setQuizCode = useCallback(
    async (code: string): Promise<boolean> => {
      const result = await handleFetchQuizData(code);

      if (result.valid && result.data) {
        setSessionState((prev) => ({
          ...prev,
          currentQuizCode: code,
          isQuizActive: true,
          quizData: result.data || null,
          answers: [],
          currentProblemCounter: 0,
          error: null,
          isInitialized: true,
        }));

        // Save progress to localStorage
        saveProgressToStorage(code, 0);
        return true;
      }

      return false;
    },
    [handleFetchQuizData, saveProgressToStorage],
  );

  /**
   * Clear quiz session and reset all state
   */
  const clearQuiz = useCallback(() => {
    setSessionState({
      currentQuizCode: null,
      isQuizActive: false,
      quizData: null,
      answers: [],
      currentProblemCounter: 0,
      loading: false,
      error: null,
      isInitialized: true,
    });

    // Clear from localStorage
    clearProgressFromStorage();
  }, [clearProgressFromStorage]);

  // ============================================================================
  // ANSWER MANAGEMENT
  // ============================================================================

  /**
   * Save a draft answer (auto-save functionality)
   * @param problemId - The problem ID
   * @param boxStates - The current state of answer boxes
   */
  const saveDraftAnswer = useCallback(
    (
      problemId: string,
      boxStates: Record<ModelAnswerKey, { value: string; isCorrect: boolean }>,
    ) => {
      setSessionState((prev) => {
        const newDrafts = {
          ...(prev.draftAnswers || {}),
          [problemId]: boxStates,
        };

        const newState = { ...prev, draftAnswers: newDrafts };

        // Save to localStorage for persistence
        if (typeof window !== "undefined") {
          localStorage.setItem("quiz-session", JSON.stringify(newState));
        }

        return newState;
      });
    },
    [],
  );

  /**
   * Save a final answer for the current problem
   * @param answer - The answer data to save
   * @returns The updated answers array
   */
  const saveAnswer = useCallback(
    (answer: SingleQuestionResult): AnswerWithProblemId[] => {
      let updatedAnswers: AnswerWithProblemId[] = [];

      setSessionState((prev) => {
        if (!prev.quizData) {
          console.warn("No quiz data available for saving answer");
          return prev;
        }

        const currentProblem =
          prev.quizData.problems[prev.currentProblemCounter];
        if (!currentProblem) {
          console.warn("No current problem found");
          return prev;
        }

        // Remove draft answer for this problem
        const newDrafts = { ...(prev.draftAnswers || {}) };
        delete newDrafts[currentProblem.id];

        // Transform frontend data to match backend expectations
        const transformedAnswer: AnswerWithProblemId = {
          problemId: parseInt(currentProblem.id),
          ...answer,
        };

        const newState = {
          ...prev,
          answers: [...prev.answers, transformedAnswer],
          draftAnswers: newDrafts,
        };

        // Save to localStorage for persistence
        if (typeof window !== "undefined") {
          localStorage.setItem("quiz-session", JSON.stringify(newState));
        }

        // Store the updated answers for return
        updatedAnswers = newState.answers;

        return newState;
      });

      return updatedAnswers;
    },
    [],
  );

  /**
   * Move to the next question in the quiz
   */
  const goToNextQuestion = useCallback(() => {
    setSessionState((prev) => {
      const newState = {
        ...prev,
        currentProblemCounter: prev.currentProblemCounter + 1,
      };

      // Save progress to localStorage
      saveProgressToStorage(
        prev.currentQuizCode!,
        newState.currentProblemCounter,
      );

      return newState;
    });
  }, [saveProgressToStorage]);

  /**
   * Check if the current question is the last one
   * @returns true if this is the last question
   */
  const isLastQuestion = useCallback(() => {
    if (!sessionState.quizData) return false;
    return (
      sessionState.currentProblemCounter + 1 >=
      sessionState.quizData.problems.length
    );
  }, [sessionState.quizData, sessionState.currentProblemCounter]);

  /**
   * Submit all answers to the server
   * @param code - The quiz code
   * @param answers - The answers to submit
   * @returns Promise with submission result
   */
  const submitAllAnswers = useCallback(
    async (
      code: string,
      answers: AnswerWithProblemId[],
    ): Promise<{ success: boolean }> => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `${API_ENDPOINTS.quiz}/${encodeURIComponent(code)}/submit`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ answers }),
          },
        );

        if (!response.ok) {
          const data = await response.json();
          console.error("Submit error:", data);
          setError(data?.message || "Failed to submit quiz");
          return { success: false };
        }

        await response.json();

        // Clear localStorage on successful submission
        if (typeof window !== "undefined") {
          localStorage.removeItem("quiz-session");
        }

        return { success: true };
      } catch (error) {
        console.error("Failed to submit quiz:", error);
        setError("Network error. Please try again.");
        setLoading(false);
        return { success: false };
      }
    },
    [setLoading, setError],
  );

  // ============================================================================
  // ERROR HANDLING
  // ============================================================================

  /**
   * Display error toasts when errors occur
   */
  useEffect(() => {
    if (sessionState.error) {
      import("sonner").then(({ toast }) => toast.error(sessionState.error));
    }
  }, [sessionState.error]);

  // ============================================================================
  // CONTEXT VALUE
  // ============================================================================

  const value: QuizContextType = {
    // Session state
    currentQuizCode: sessionState.currentQuizCode,
    isQuizActive: sessionState.isQuizActive,

    // Quiz data
    problems: sessionState.quizData?.problems,
    answers: sessionState.answers,
    currentProblemCounter: sessionState.currentProblemCounter,

    // UI state
    loading: sessionState.loading,
    error: sessionState.error,
    isInitialized: sessionState.isInitialized,

    // Functions
    setQuizCode,
    clearQuiz,
    saveAnswer,
    goToNextQuestion,
    isLastQuestion,
    submitAllAnswers,
    saveDraftAnswer,
    setLoading,
    setError,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

// ============================================================================
// HOOK
// ============================================================================

/**
 * Hook to access quiz context
 * Must be used within a QuizProvider
 */
export function useQuizContext() {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error("useQuizContext must be used within a QuizProvider");
  }
  return context;
}
