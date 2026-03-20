"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trash2, Trophy, CheckCircle, Clock, Loader2 } from "lucide-react";
import { format } from "date-fns";
import { QuizSession } from "@/lib/types/quiz";

interface QuizManagementProps {
  selectedClass: { id: number; name: string; studentCount: number } | null;
  quizSessions: QuizSession[];
  loading: boolean;
  deleteQuiz: (quizId: number) => Promise<boolean>;
}

export function QuizManagement({
  selectedClass: _selectedClass,
  quizSessions,
  loading,
  deleteQuiz,
}: Readonly<QuizManagementProps>) {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const activeQuiz = quizSessions.find((q) => q.status === "ACTIVE") ?? null;

  const handleDelete = async () => {
    if (!activeQuiz) return;
    setDeleting(true);
    await deleteQuiz(activeQuiz.id);
    setConfirmDelete(false);
    setDeleting(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-6 w-6 animate-spin mr-2" />
        <span className="text-sm text-gray-500">Loading quiz sessions...</span>
      </div>
    );
  }

  if (!activeQuiz) {
    return (
      <Card className="min-h-[200px] p-4 text-center bg-white gap-0 text-gray-500 flex flex-col items-center justify-center shadow-sm border border-gray-100">
        <Trophy size={36} />
        <p className="text-sm font-medium mt-3">No active quiz</p>
        <p className="text-xs text-gray-400 mt-1">
          Start a quiz session to see student codes and track progress
        </p>
      </Card>
    );
  }

  const { settings } = activeQuiz;
  const launchDate = new Date(activeQuiz.startTime);
  const completedCount = activeQuiz.attempts.filter((a) => a.endTime).length;
  const totalCount = activeQuiz.codes.length;
  const progressPct =
    totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  const problemTypeLabel =
    settings.problemType === "All" ? "All Types" : (settings.problemType ?? "Unknown");

  const studentRows = activeQuiz.codes
    .slice()
    .sort((a, b) => a.studentName.localeCompare(b.studentName))
    .map((code) => {
      const attempt = activeQuiz.attempts.find(
        (a) => a.student.id === code.studentId,
      );
      return {
        studentId: code.studentId,
        name: code.studentName,
        code: code.code,
        done: Boolean(attempt?.endTime),
      };
    });

  return (
    <div className="space-y-4">
      {/* Header row */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-md font-medium text-gray-800">Active Quiz</h3>
          <p className="text-sm text-gray-400">
            Started {format(launchDate, "MMM d, yyyy 'at' h:mm a")}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {confirmDelete ? (
            <>
              <span className="text-sm text-red-600">
                All quiz data will be erased. Sure?
              </span>
              <Button
                variant="destructive"
                size="sm"
                onClick={handleDelete}
                disabled={deleting}
              >
                {deleting ? (
                  <Loader2 className="h-3 w-3 animate-spin" />
                ) : (
                  "Yes, delete"
                )}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setConfirmDelete(false)}
                disabled={deleting}
              >
                Cancel
              </Button>
            </>
          ) : (
            <Button
              variant="outline"
              size="sm"
              className="text-red-600 hover:text-red-800 border-red-200 hover:border-red-300"
              onClick={() => setConfirmDelete(true)}
            >
              <Trash2 className="h-4 w-4 mr-1" />
              Delete Quiz
            </Button>
          )}
        </div>
      </div>

      {/* Metadata + progress bar */}
      <Card className="bg-white shadow-sm border border-gray-100 p-5 space-y-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
              Problems
            </p>
            <p className="font-medium text-gray-800">
              {settings.problemCount ?? 10}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
              Type
            </p>
            <Badge variant="outline" className="text-xs font-normal">
              {problemTypeLabel}
            </Badge>
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
              Students
            </p>
            <p className="font-medium text-gray-800">{totalCount}</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
              Completed
            </p>
            <p className="font-medium text-gray-800">
              {completedCount}{" "}
              <span className="text-gray-400 font-normal">/ {totalCount}</span>
            </p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="space-y-1">
          <div className="w-full bg-gray-100 rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-500"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <p className="text-xs text-gray-400 text-right">
            {progressPct}% complete
          </p>
        </div>
      </Card>

      {/* Student codes */}
      <Card className="bg-white shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-100">
          <h4 className="text-sm font-medium text-gray-700">Student Codes</h4>
        </div>
        <div className="divide-y divide-gray-50">
          {studentRows.map((row) => (
            <div
              key={row.studentId}
              className="flex items-center justify-between px-5 py-3"
            >
              <span className="text-sm text-gray-800">{row.name}</span>
              <div className="flex items-center gap-4">
                <span className="font-mono text-sm bg-gray-100 px-2 py-0.5 rounded text-gray-700 tracking-wider">
                  {row.code}
                </span>
                {row.done ? (
                  <span className="flex items-center gap-1 text-green-600 text-sm w-20">
                    <CheckCircle className="h-4 w-4" />
                    Done
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-gray-400 text-sm w-20">
                    <Clock className="h-4 w-4" />
                    Waiting
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
