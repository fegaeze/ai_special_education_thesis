import { create } from "zustand";
import { persist } from "zustand/middleware";

interface QuizSessionState {
  currentQuizCode: string | null;
  isQuizActive: boolean;
  setQuizCode: (code: string) => void;
  clearQuiz: () => void;
}

export const useQuizSessionStore = create<QuizSessionState>()(
  persist(
    (set) => ({
      currentQuizCode: null,
      isQuizActive: false,
      setQuizCode: (code: string) =>
        set({
          currentQuizCode: code,
          isQuizActive: true,
        }),
      clearQuiz: () =>
        set({
          currentQuizCode: null,
          isQuizActive: false,
        }),
    }),
    {
      name: "quiz-session-storage",
    },
  ),
);
