"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/lib/config";
import { useQuizContext } from "@/contexts/QuizContext";
import { toast } from "sonner";

type FormData = {
  quizCode: string;
};

export default function QuizCodeEntryPage() {
  const { setQuizCode, loading } = useQuizContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setError,
  } = useForm<FormData>();

  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    reset();
    const { quizCode } = data;

    if (!quizCode.trim()) {
      setError("quizCode", {
        type: "manual",
        message: "Please enter your code",
      });
      return;
    }

    try {
      const isValid = await setQuizCode(quizCode.trim());

      if (isValid) {
        toast.success("Quiz found! Starting your adventure...");
        router.push(`${ROUTES.quiz}/${quizCode.trim()}`);
      }
      // Don't show error toast here - the QuizContext useEffect will handle it
    } catch {
      // Only show fallback error for network/technical issues
      toast.error("Network error. Please try again.");
    }
  };

  const quizCode = watch("quizCode");

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex flex-col justify-center items-center mb-8 text-white mb-12">
        <h1 className="text-3xl font-semibold mb-2">
          Ready to go on a new maths adventure? 🎉
        </h1>
        <p>Enter the magic code your teacher gave you</p>
      </div>

      {/* Code Entry Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <div className="flex items-center gap-2">
            <Input
              id="quizCode"
              type="text"
              maxLength={10}
              placeholder="e.g. 1234"
              autoFocus
              className={`min-h-14 text-center text-2xl font-semibold bg-transparent text-white rounded-full px-6 py-4 border-2 border-yellow-400 focus:!ring-0 focus:outline-none transition-all duration-200
              }`}
              style={{
                boxShadow: errors.quizCode ? "0 0 0 4px white" : undefined,
              }}
              {...register("quizCode", { required: true })}
            />

            <Button
              type="submit"
              disabled={loading || !quizCode?.trim()}
              className="min-h-14 min-w-30 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-full px-6 py-4 text-xl shadow-lg transition-all duration-200"
            >
              {loading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900 mr-2"></div>
                  Go!
                </div>
              ) : (
                <span>Go!</span>
              )}
            </Button>
          </div>

          {errors.quizCode && (
            <p className="text-red-400 text-sm mt-4 animate-fade-in">
              {errors.quizCode.message}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
