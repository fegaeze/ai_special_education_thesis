"use client";

import { useParams, useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { XCircle } from "lucide-react";
import { ModelEvaluation } from "../components/ModelEvaluation";
import { useQuizContext } from "@/contexts/QuizContext";
import { SingleQuestionResult, WordProblem } from "@/lib/types/quiz";
import { ROUTES } from "@/lib/config";
import { QuizProtectedRoute } from "@/components/shared/QuizProtectedRoute";
import { LoadingComponent } from "../components/LoadingComponent";

export default function QuizAttemptPage() {
  const params = useParams();
  const code = params?.code as string;
  const router = useRouter();

  const {
    problems,
    loading,
    error,
    answers,
    currentProblemCounter,
    saveAnswer,
    goToNextQuestion,
    isLastQuestion,
    submitAllAnswers,
    isInitialized,
  } = useQuizContext();

  // Quiz is already validated when setQuizCode was called
  // No need to verify again

  const handleNextQuestion = async (answerData: SingleQuestionResult) => {
    const updatedAnswers = saveAnswer(answerData);

    if (isLastQuestion()) {
      const result = await submitAllAnswers(code, updatedAnswers);

      if (result.success) {
        router.replace(`${ROUTES.quiz}/${code}/results?completed=true`);
      }
    } else {
      goToNextQuestion();
    }
  };

  if (loading || !isInitialized) {
    return <LoadingComponent />;
  }

  return (
    <QuizProtectedRoute quizCode={code}>
      {error || !problems || problems.length === 0 ? (
        <Card className="min-h-100 p-8 text-center max-w-md mx-auto bg-white border border-purple-100 shadow-xl rounded-3xl flex flex-col items-center justify-center gap-0">
          <XCircle className="h-12 w-12 text-red-500 mb-2" />
          <div className="mb-6 mt-6">
            <h2 className="text-xl font-semibold text-purple-800 mb-2">
              Oops! Something went wrong.
            </h2>
            <p className="text-gray-600 text-sm max-w-xs">
              {error ||
                "We couldn’t load your quiz. Let’s try again."}
            </p>
          </div>
          <Button
            onClick={() => globalThis.window.location.reload()}
            className="bg-purple-600 hover:bg-purple-500 min-w-40"
          >
            Try Again
          </Button>
        </Card>
      ) : (
        (() => {
          const currentProblem: WordProblem = problems[currentProblemCounter];
          const progressPercentage =
            Math.round(((answers.length / problems.length) * 100) / 10) * 10;
          const isLast = currentProblemCounter + 1 >= problems.length;

          return (
            <div className="relative z-10 container mx-auto px-4 py-6">
              <div className="max-w-5xl mx-auto">
                {/* Progress */}
                <div className="my-6">
                  <div className="flex justify-between text-white mb-2">
                    <span className="text-sm">Progress</span>
                    <span className="text-sm font-semibold">
                      {progressPercentage}%
                    </span>
                  </div>
                  <Progress
                    value={progressPercentage}
                    className="h-3 bg-white/20"
                  />
                </div>

                {/* Quiz Card */}
                <Card className="min-h-150 p-8 mb-6 bg-white/95 backdrop-blur-sm border-0 shadow-2xl flex flex-col items-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4">
                    <span className="text-2xl font-bold text-white">
                      {currentProblemCounter + 1}
                    </span>
                  </div>
                  <div className="max-w-2xl mx-auto text-xl text-center font-medium text-gray-700 mb-4">
                    {currentProblem.content}
                  </div>

                  <ModelEvaluation
                    problem={currentProblem}
                    isLastQuestion={isLast}
                    onNext={handleNextQuestion}
                  />
                </Card>
              </div>
            </div>
          );
        })()
      )}
    </QuizProtectedRoute>
  );
}
