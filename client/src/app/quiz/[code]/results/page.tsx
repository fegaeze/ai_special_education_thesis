"use client";

import { useRouter, useSearchParams, useParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import { ROUTES } from "@/lib/config";
import { CongratulatoryPage } from "../../components/CongratulatoryPage";
import { useEffect, useState } from "react";
import { LoadingComponent } from "../../components/LoadingComponent";
import { QuizProtectedRoute } from "@/components/shared/QuizProtectedRoute";
import { useQuizContext } from "@/contexts/QuizContext";

export default function QuizResultsPage() {
  const params = useParams();
  const code = params?.code as string;
  const searchParams = useSearchParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const { clearQuiz } = useQuizContext();

  useEffect(() => {
    const completed = searchParams.get("completed");

    if (completed !== "true") {
      setLoading(false);
      return;
    }

    setLoading(false);
  }, [searchParams, router]);

  const handleExitToHome = () => {
    // Set the completion flag BEFORE clearing quiz to suppress error toast
    if (typeof window !== "undefined") {
      sessionStorage.setItem("quiz-completed-redirect", "true");
    }
    clearQuiz(); // Clear all quiz state
    router.push(ROUTES.quiz);
  };

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <QuizProtectedRoute quizCode={code}>
      <Card className="min-h-150 p-8 mb-6 bg-white/95 backdrop-blur-sm border-0 shadow-2xl flex flex-col items-center">
        <CongratulatoryPage onExitHome={handleExitToHome} />
      </Card>
    </QuizProtectedRoute>
  );
}
