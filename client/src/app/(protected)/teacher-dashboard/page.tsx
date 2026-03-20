"use client";

import { useState, useEffect } from "react";
import { BarChart3, BookOpen, Plus, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useClassContext } from "@/contexts/ClassContext";
import { useQuizManagement } from "@/hooks/useQuizManagement";
import { useAnalytics } from "@/hooks/useAnalytics";
import { CenteredLayout } from "@/components/shared/CenteredLayout";
import { StartQuizModal } from "./components/StartQuizModal";
import { QuizManagement } from "./components/QuizManagement";
import { StudentProgress } from "./components/StudentProgress";
import { SnapshotCard } from "./components/SnapshotCard";

// Helper function to format time in minutes and seconds
function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.round(seconds % 60);
  return `${minutes}m ${remainingSeconds}s`;
}

export default function DashboardPage() {
  const { classes, selectedClass } = useClassContext();
  const {
    quizSessions,
    loading: quizLoading,
    lastCompletedAt,
    createQuiz,
    deleteQuiz,
  } = useQuizManagement(selectedClass?.id || null);
  const [showStartQuizModal, setShowStartQuizModal] = useState(false);
  const [activeTab, setActiveTab] = useState<"analytics" | "quizzes">(
    "analytics",
  );

  const {
    students,
    classOverview,
    sessionDates,
    loading: analyticsLoading,
    selectedDate,
    setSelectedDate,
    refetchAnalytics,
  } = useAnalytics(selectedClass?.id || null);

  const hasActiveQuiz = quizSessions.some((q) => q.status === "ACTIVE");

  // When the poll detects the active quiz just auto-completed, refetch analytics
  // immediately so the teacher sees the final results without waiting 30 s.
  useEffect(() => {
    if (lastCompletedAt > 0) refetchAnalytics().catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastCompletedAt]);

  // Wraps deleteQuiz so that analytics clears immediately after deletion
  // instead of waiting for the next 30 s poll.
  const handleDeleteQuiz = async (quizId: number): Promise<boolean> => {
    const ok = await deleteQuiz(quizId);
    if (ok) refetchAnalytics().catch(() => {});
    return ok;
  };

  const handleQuizCreated = () => {
    setActiveTab("quizzes");
    refetchAnalytics();
  };

  if (classes.length === 0 || !selectedClass) {
    return (
      <CenteredLayout>
        <div className="mx-auto h-16 w-16 text-gray-400 mb-4">
          <BookOpen className="h-16 w-16" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Welcome to Nutikas!
        </h3>
        <p className="text-sm text-gray-500 mb-6 max-w-md mx-auto">
          You&apos;re all set up! Create your first class to start helping
          students learn with AI-powered personalized instruction.
        </p>
      </CenteredLayout>
    );
  }

  const summaryCards =
    classOverview.totalSessions === 0 ? (
      <div className="md:col-span-3 rounded-lg bg-gray-50 border border-gray-200 px-6 py-8">
        <div className="text-center min-h-[200px] flex flex-col items-center justify-center">
          <BarChart3 className="h-6 w-6 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900">No Analytics Data</h3>
          <p className="text-sm text-gray-500">
            Start a quiz session to see class performance analytics
          </p>
        </div>
      </div>
    ) : (
      <>
        <SnapshotCard
          title="CLASS ACCURACY"
          value={`${classOverview.avgClassAccuracy}%`}
          tooltip="Average accuracy across all students in the class"
        />
        <SnapshotCard
          title="TOTAL SESSIONS"
          value={classOverview.totalSessions.toString()}
          tooltip="Total number of quiz sessions conducted"
        />
        <SnapshotCard
          title="AVG TIME PER PROBLEM"
          value={formatTime(classOverview.avgClassTime)}
          tooltip="Average time students spend on each problem"
        />
      </>
    );

  return (
    <div className="px-4 py-6 sm:px-0">
      {/* Header with Start Quiz Button */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold">{selectedClass.name}</h1>
          <p className="text-sm">
            Monitor your class performance and manage quizzes
          </p>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <span>
                <Button
                  onClick={() => setShowStartQuizModal(true)}
                  className="rounded-lg font-medium text-sm"
                  disabled={hasActiveQuiz}
                >
                  <Plus className="h-4 w-4" />
                  Start New Quiz
                </Button>
              </span>
            </TooltipTrigger>
            {hasActiveQuiz && (
              <TooltipContent>
                <p>A quiz is already active. All students must finish (or delete it) first.</p>
              </TooltipContent>
            )}
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200 mb-8">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab("analytics")}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === "analytics"
                ? "border-primary text-primary"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            <BarChart3 className="h-4 w-4 inline mr-2" />
            Analytics
          </button>
          <button
            onClick={() => setActiveTab("quizzes")}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === "quizzes"
                ? "border-primary text-primary"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            <Trophy className="h-4 w-4 inline mr-2" />
            Quiz Management
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === "analytics" ? (
        <div className="space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {analyticsLoading ? (
              <>
                <div className="rounded-lg bg-white shadow-sm border border-gray-100 px-4 py-3 min-h-[64px] animate-pulse">
                  <div className="h-3 bg-gray-200 rounded mb-2"></div>
                  <div className="h-6 bg-gray-200 rounded"></div>
                </div>
                <div className="rounded-lg bg-white shadow-sm border border-gray-100 px-4 py-3 min-h-[64px] animate-pulse">
                  <div className="h-3 bg-gray-200 rounded mb-2"></div>
                  <div className="h-6 bg-gray-200 rounded"></div>
                </div>
                <div className="rounded-lg bg-white shadow-sm border border-gray-100 px-4 py-3 min-h-[64px] animate-pulse">
                  <div className="h-3 bg-gray-200 rounded mb-2"></div>
                  <div className="h-6 bg-gray-200 rounded"></div>
                </div>
              </>
            ) : summaryCards}
          </div>

          {/* Student Progress Table */}
          <StudentProgress
            students={students}
            loading={analyticsLoading}
            sessionDates={sessionDates}
            selectedDate={selectedDate}
            onDateChange={setSelectedDate}
          />
        </div>
      ) : (
        <QuizManagement
          selectedClass={selectedClass}
          quizSessions={quizSessions}
          loading={quizLoading}
          deleteQuiz={handleDeleteQuiz}
        />
      )}

      {/* Start Quiz Modal */}
      {showStartQuizModal && (
        <StartQuizModal
          isOpen={showStartQuizModal}
          onClose={() => setShowStartQuizModal(false)}
          selectedClass={selectedClass}
          onQuizCreated={handleQuizCreated}
          createQuiz={createQuiz}
          loading={quizLoading}
        />
      )}
    </div>
  );
}
