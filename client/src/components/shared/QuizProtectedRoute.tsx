"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useQuizContext } from "@/contexts/QuizContext";
import { ROUTES } from "@/lib/config";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

interface QuizProtectedRouteProps {
  children: React.ReactNode;
  quizCode?: string;
}

export function QuizProtectedRoute({
  children,
  quizCode,
}: QuizProtectedRouteProps) {
  const { currentQuizCode, isQuizActive, clearQuiz } = useQuizContext();
  const router = useRouter();
  const hasRedirected = useRef(false);

  useEffect(() => {
    // Prevent infinite loops by tracking if we've already redirected
    if (hasRedirected.current) return;

    // Check for completion redirect flag
    let suppressToast = false;
    if (
      typeof window !== "undefined" &&
      sessionStorage.getItem("quiz-completed-redirect")
    ) {
      suppressToast = true;
      sessionStorage.removeItem("quiz-completed-redirect");
    }

    // If no quiz is active, redirect to quiz entry
    if (!isQuizActive || !currentQuizCode) {
      hasRedirected.current = true;
      if (!suppressToast) {
        toast.error("You need a valid quiz code to access this page.");
      }
      clearQuiz();
      router.replace(ROUTES.quiz);
      return;
    }

    // If quiz code doesn't match, redirect to quiz entry
    if (quizCode && currentQuizCode !== quizCode) {
      hasRedirected.current = true;
      if (!suppressToast) {
        toast.error("You need a valid quiz code to access this page.");
      }
      clearQuiz();
      router.replace(ROUTES.quiz);
      return;
    }
  }, [isQuizActive, currentQuizCode, quizCode, router, clearQuiz]);

  // Show loading while checking
  if (!isQuizActive || !currentQuizCode) {
    return (
      <div className="text-center">
        <div className="animate-bounce mb-4">
          <Loader2 className="h-12 w-12 text-white animate-spin mx-auto" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">
          Checking quiz access...
        </h2>
        <p className="text-white/80">Verifying your quiz session</p>
      </div>
    );
  }

  return <>{children}</>;
}
