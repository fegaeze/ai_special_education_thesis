import { useState, useEffect } from "react";
import { API_ENDPOINTS } from "@/lib/config";
import { useAuth } from "./useAuth";
import { toast } from "sonner";

import { QuizSession } from "@/lib/types/quiz";

export interface CreateQuizData {
  classId: number;
  settings?: {
    problemCount?: number;
    problemType?: string;
    selectedTypes?: string[];
  };
}

export function useQuizManagement(classId: number | null) {
  const { getCurrentToken } = useAuth();
  const [quizSessions, setQuizSessions] = useState<QuizSession[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchQuizSessions = async () => {
    if (!classId) {
      setQuizSessions([]);
      return;
    }
    setLoading(true);
    setError(null);

    try {
      const token = getCurrentToken();
      if (!token) {
        throw new Error("Not authenticated");
      }

      const response = await fetch(
        `${API_ENDPOINTS.quiz}/sessions?classId=${classId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to fetch quiz sessions");
      }

      const data: QuizSession[] = await response.json();
      setQuizSessions(data);
    } catch (error: unknown) {
      const message =
        error instanceof Error
          ? error.message
          : "Failed to fetch quiz sessions";
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const createQuiz = async (
    quizData: CreateQuizData,
  ): Promise<QuizSession | null> => {
    setLoading(true);
    setError(null);

    try {
      const token = getCurrentToken();
      if (!token) {
        throw new Error("Not authenticated");
      }

      const response = await fetch(`${API_ENDPOINTS.quiz}/sessions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(quizData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to create quiz");
      }

      const data = await response.json();
      const newQuiz = data.session;
      setQuizSessions((prev) => [newQuiz, ...prev]);
      toast.success(
        "Quiz created successfully! You can now see student's codes.",
      );
      return newQuiz;
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Failed to create quiz";
      setError(message);
      toast.error(message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const deleteQuiz = async (quizId: number): Promise<boolean> => {
    setLoading(true);
    setError(null);

    try {
      const token = getCurrentToken();
      if (!token) {
        throw new Error("Not authenticated");
      }

      const response = await fetch(`${API_ENDPOINTS.quiz}/sessions/${quizId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to delete quiz");
      }

      // Remove the quiz from the list
      setQuizSessions((prev) => prev.filter((quiz) => quiz.id !== quizId));
      toast.success("Quiz deleted successfully");
      return true;
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Failed to delete quiz";
      setError(message);
      toast.error(message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const verifyQuizCode = async (
    code: string,
  ): Promise<{ valid: boolean; studentName?: string }> => {
    try {
      const res = await fetch(
        `${API_ENDPOINTS.quiz}/${encodeURIComponent(code)}`,
      );
      if (!res.ok) return { valid: false };
      const data = await res.json();
      // Try to extract student name if present in the response
      let studentName = undefined;
      if (data && data.student && data.student.name) {
        studentName = data.student.name;
      }
      return { valid: true, studentName };
    } catch {
      return { valid: false };
    }
  };

  useEffect(() => {
    fetchQuizSessions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [classId]);

  return {
    quizSessions,
    loading,
    error,
    fetchQuizSessions,
    createQuiz,
    deleteQuiz,
    verifyQuizCode,
  };
}
