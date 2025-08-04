"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Play,
  Users,
  Copy,
  ExternalLink,
  Clock,
  CheckCircle,
  AlertCircle,
  Loader2,
  Trash2,
  AlertTriangle,
  Eye,
} from "lucide-react";
import { format } from "date-fns";
import { useStudents } from "@/hooks/useStudents";
import { QuizSession } from "@/lib/types/quiz";

interface QuizManagementProps {
  selectedClass: { id: number; name: string; studentCount: number } | null;
  quizSessions: QuizSession[];
  loading: boolean;
  deleteQuiz: (quizId: number) => Promise<boolean>;
  fetchQuizSessions: () => void;
}

export function QuizManagement({
  selectedClass,
  quizSessions,
  loading,
  deleteQuiz,
  fetchQuizSessions,
}: QuizManagementProps) {
  const [showLinksDialog, setShowLinksDialog] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState<QuizSession | null>(null);
  const { students } = useStudents(selectedClass?.id || null);

  // Filter to only active quizzes
  const activeQuizzes = quizSessions.filter((q) => q.status === "ACTIVE");

  // Get student attempts from the existing session data
  const getStudentAttempts = (sessionId: number) => {
    const session = quizSessions.find(
      (session: any) => session.id === sessionId,
    );
    if (!session) return {};

    const attemptsMap: Record<number, { status: "not_started" | "completed" }> =
      {};

    students.forEach((student) => {
      const attempt = session.attempts?.find(
        (a: any) => a.student.id === student.id,
      );

      if (!attempt) {
        attemptsMap[student.id] = { status: "not_started" };
      } else if (attempt.endTime) {
        attemptsMap[student.id] = { status: "completed" };
      } else {
        attemptsMap[student.id] = { status: "not_started" };
      }
    });

    return attemptsMap;
  };

  // Show student links for a quiz
  const showStudentLinks = async (quiz: QuizSession) => {
    setSelectedQuiz(quiz);
    setShowLinksDialog(true);
  };

  // Delete a quiz session
  const handleDeleteQuiz = async (quizId: number) => {
    if (
      !confirm(
        "Are you sure you want to delete this quiz? This action cannot be undone.",
      )
    ) {
      return;
    }

    await deleteQuiz(quizId);
  };

  // Get participation stats
  const getParticipationStats = (quiz: QuizSession) => {
    const totalStudents = students.length;
    const attempts = quiz.attempts || [];
    const completedCount = attempts.filter((a) => a.endTime).length;

    return {
      total: totalStudents,
      completed: completedCount,
      notStarted: totalStudents - completedCount,
    };
  };

  // Add a helper to get a display string for the problem type(s)
  function getProblemTypeDisplay(quiz: QuizSession): string {
    const settings = quiz.settings || {};
    const type = settings.problemType;
    if (type === "All") return "All Types";
    if (type === "Mixed" && settings.selectedTypes) {
      return settings.selectedTypes.join(", ");
    }
    return type || "Unknown";
  }

  // Get status badge for a student
  const getStatusBadge = (studentId: number, sessionId: number) => {
    const attempts = getStudentAttempts(sessionId);
    const status = attempts[studentId]?.status || "not_started";

    if (status === "completed") {
      return (
        <Tooltip>
          <TooltipTrigger>
            <CheckCircle className="h-4 w-4 text-green-600 ml-2" />
          </TooltipTrigger>
          <TooltipContent>
            <p>Completed</p>
          </TooltipContent>
        </Tooltip>
      );
    }

    // Don't show anything for not started students
    return null;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-6 w-6 animate-spin mr-2" />
        <span>Loading quiz sessions...</span>
      </div>
    );
  }

  return (
    <div>
      {/* Header with Refresh Button */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-md font-medium">
          Active Quizzes ({activeQuizzes.length})
        </h3>
      </div>
      {/* Active Quizzes */}
      <div>
        {activeQuizzes.length === 0 ? (
          <Card className="min-h-130 p-4 text-center bg-white gap-0 text-gray-500 flex flex-col items-center justify-center bg-white shadow-sm border-b-1 border-gray-100 px-4 sm:px-6 lg:px-8">
            <AlertTriangle size={36} />
            <p className="text-sm font-medium mt-3">
              You have no active quizzes
            </p>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {activeQuizzes.map((quiz) => {
              const stats = getParticipationStats(quiz);
              const launchDate = quiz.startTime
                ? new Date(quiz.startTime)
                : new Date();
              return (
                <Card
                  key={quiz.id}
                  className="p-4 bg-white border-b-1 border-gray-100"
                >
                  <div className="space-y-4">
                    {/* Quiz Stats */}
                    <div className="text-sm text-gray-600">
                      <div className="flex items-center justify-between">
                        <p>Problems</p>
                        <p>{quiz.settings?.problemCount || 10}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p>Total Students</p>
                        <p>{stats.total}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p>Students Completed</p>
                        <p>{stats.completed}</p>
                      </div>
                    </div>

                    {/* Quiz Problem Type Display */}
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="outline" className="text-xs">
                        {getProblemTypeDisplay(quiz)}
                      </Badge>
                    </div>

                    {/* Launch Date/Time */}
                    <div className="pt-2 border-t border-gray-100 text-sm text-gray-600">
                      <p>Launched</p>
                      <p>{format(launchDate, "MMM dd, yyyy h:mm a")}</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-end space-x-2 pt-2">
                      <Button
                        onClick={() => showStudentLinks(quiz)}
                        variant="outline"
                        size="sm"
                        className="flex items-center border-gray-400 text-gray-400 hover:bg-gray-100"
                        title="View Student Links"
                      >
                        <Eye className="h-4 w-4" />
                        See Student Codes
                      </Button>
                      <Button
                        onClick={() => handleDeleteQuiz(quiz.id)}
                        variant="outline"
                        size="sm"
                        className="flex items-center text-red-600 hover:text-red-900"
                        title="Delete Quiz"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </div>

      {/* Student Links Dialog */}
      <Dialog open={showLinksDialog} onOpenChange={setShowLinksDialog}>
        <DialogContent className="sm:max-w-2xl bg-white">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-md text-gray-700 font-medium">
              Student Quiz Login Codes
            </DialogTitle>
            <DialogDescription className="text-sm text-gray-500 -mt-2">
              Give these codes to the corresponding students to start the quiz
            </DialogDescription>
          </DialogHeader>

          {selectedQuiz && (
            <div className="max-h-96 overflow-y-auto grid grid-cols-1 md:grid-cols-3 gap-2">
              {students.map((student) => {
                const code = selectedQuiz.codes?.find(
                  (c) => c.studentId === student.id,
                );
                return (
                  <div
                    key={student.id}
                    className="bg-gray-100 p-3 border rounded-lg border-gray-100"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="text-sm font-medium text-gray-700">
                        {student.name}
                      </div>
                      {getStatusBadge(student.id, selectedQuiz.id)}
                    </div>
                    <div className="text-xs text-gray-500">
                      Quiz Code:{" "}
                      <span className="font-mono">{code?.code || "-"}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
