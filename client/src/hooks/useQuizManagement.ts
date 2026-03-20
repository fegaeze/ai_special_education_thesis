import { useState, useEffect, useRef } from "react";
import { API_ENDPOINTS } from "@/lib/config";
import { apiFetch } from "@/lib/api-fetch";
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
  const [quizSessions, setQuizSessions] = useState<QuizSession[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // Bumped whenever the poll detects an ACTIVE → COMPLETED transition so the
  // dashboard can immediately trigger an analytics refetch.
  const [lastCompletedAt, setLastCompletedAt] = useState(0);
  const prevActiveCountRef = useRef(0);

  const fetchQuizSessions = async () => {
    if (!classId) {
      setQuizSessions([]);
      return;
    }
    setLoading(true);
    setError(null);

    const { data, error: fetchError } = await apiFetch<QuizSession[]>(
      `${API_ENDPOINTS.quiz}/sessions?classId=${classId}`,
    );

    if (fetchError || !data) {
      const message = fetchError || "Failed to fetch quiz sessions";
      setError(message);
      toast.error(message);
    } else {
      prevActiveCountRef.current = data.filter((s) => s.status === "ACTIVE").length;
      setQuizSessions(data);
    }
    setLoading(false);
  };

  const createQuiz = async (
    quizData: CreateQuizData,
  ): Promise<QuizSession | null> => {
    setLoading(true);
    setError(null);

    const { data, error: fetchError } = await apiFetch<{ session: QuizSession }>(
      `${API_ENDPOINTS.quiz}/sessions`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(quizData),
      },
    );

    if (fetchError || !data) {
      const message = fetchError || "Failed to create quiz";
      setError(message);
      toast.error(message);
      setLoading(false);
      return null;
    }

    const newQuiz = data.session;
    toast.success("Quiz created successfully! You can now see student's codes.");

    // Fetch the full session list immediately so the new quiz (with status,
    // attempts, and codes) appears right away rather than waiting for the poll.
    const { data: sessions } = await apiFetch<QuizSession[]>(
      `${API_ENDPOINTS.quiz}/sessions?classId=${classId}`,
    );
    if (sessions) setQuizSessions(sessions);

    setLoading(false);
    return newQuiz;
  };

  const deleteQuiz = async (quizId: number): Promise<boolean> => {
    setLoading(true);
    setError(null);

    const { error: fetchError } = await apiFetch(
      `${API_ENDPOINTS.quiz}/sessions/${quizId}`,
      { method: "DELETE" },
    );

    if (fetchError) {
      setError(fetchError);
      toast.error(fetchError);
      setLoading(false);
      return false;
    }

    // Optimistic removal so the UI clears instantly
    setQuizSessions((prev) => prev.filter((quiz) => quiz.id !== quizId));
    toast.success("Quiz deleted successfully");

    // Confirm with a fresh server fetch so any in-flight poll can't race-overwrite
    // the deleted state, and so prevActiveCountRef stays accurate
    const { data: sessions } = await apiFetch<QuizSession[]>(
      `${API_ENDPOINTS.quiz}/sessions?classId=${classId}`,
    );
    if (sessions) {
      prevActiveCountRef.current = sessions.filter(
        (s) => s.status === "ACTIVE",
      ).length;
      setQuizSessions(sessions);
    }

    setLoading(false);
    return true;
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
      const studentName: string | undefined = data?.student?.name;
      return { valid: true, studentName };
    } catch {
      return { valid: false };
    }
  };

  // Keep a stable ref to classId so the polling interval can always read the current value
  const classIdRef = useRef(classId);
  useEffect(() => {
    classIdRef.current = classId;
  });

  useEffect(() => {
    if (!classId) {
      setQuizSessions([]);
      return;
    }

    void fetchQuizSessions();

    // Silent background poll — no loading spinner, just quietly updates the list
    const silentPoll = async () => {
      const id = classIdRef.current;
      if (!id) return;
      const { data } = await apiFetch<QuizSession[]>(
        `${API_ENDPOINTS.quiz}/sessions?classId=${id}`,
      );
      if (data) {
        const prevActive = prevActiveCountRef.current;
        const newActive = data.filter((s) => s.status === "ACTIVE").length;
        prevActiveCountRef.current = newActive;

        // A quiz just auto-completed — tell the dashboard to refetch analytics now
        if (prevActive > 0 && newActive === 0) {
          setLastCompletedAt(Date.now());
        }

        setQuizSessions(data);
      }
    };

    const interval = setInterval(() => void silentPoll(), 15_000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [classId]);

  return {
    quizSessions,
    loading,
    error,
    lastCompletedAt,
    createQuiz,
    deleteQuiz,
    verifyQuizCode,
  };
}
