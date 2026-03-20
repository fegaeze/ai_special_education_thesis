import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  TrendingUp,
  TrendingDown,
  Clock,
  Target,
  Activity,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { SessionCalendar } from "./SessionCalendar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { StudentAnalytics } from "@/lib/types/quiz";

interface StudentProgressProps {
  students: StudentAnalytics[];
  loading: boolean;
  sessionDates?: Date[];
  classId?: number | null;
  selectedDate?: Date | undefined;
  onDateChange?: (date: Date | undefined) => void;
}

function formatTime(seconds: number | null) {
  if (seconds == null) return "-";
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}


export function StudentProgress({
  students,
  loading,
  sessionDates = [],
  selectedDate,
  onDateChange,
}: StudentProgressProps) {
  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set());
  const [sortBy, setSortBy] = useState<
    "name" | "accuracy" | "problems" | "time"
  >("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const toggleRow = (studentId: number) => {
    const newExpandedRows = new Set(expandedRows);
    if (newExpandedRows.has(studentId)) {
      newExpandedRows.delete(studentId);
    } else {
      newExpandedRows.add(studentId);
    }
    setExpandedRows(newExpandedRows);
  };

  const handleSort = (field: "name" | "accuracy" | "problems" | "time") => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  const sortedStudents = [...students].sort((a, b) => {
    let aValue: string | number | null;
    let bValue: string | number | null;

    switch (sortBy) {
      case "name":
        aValue = a.name;
        bValue = b.name;
        break;
      case "accuracy":
        aValue = a.avgAccuracy;
        bValue = b.avgAccuracy;
        break;
      case "problems":
        aValue = a.problemsAttempted;
        bValue = b.problemsAttempted;
        break;
      case "time":
        aValue = a.avgTime;
        bValue = b.avgTime;
        break;
      default:
        return 0;
    }

    if (aValue === null) aValue = sortOrder === "asc" ? -Infinity : Infinity;
    if (bValue === null) bValue = sortOrder === "asc" ? -Infinity : Infinity;

    if (sortOrder === "asc") {
      return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
    } else {
      return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
    }
  });

  const getTrendIcon = (trend: number[]) => {
    if (trend.length < 2) return null;

    const recent = trend[trend.length - 1];
    const previous = trend[trend.length - 2];
    const difference = Math.abs(recent - previous);

    // Only show trend if difference is significant (5% or more)
    if (difference < 5) return null;

    return recent > previous ? (
      <TrendingUp className="h-4 w-4 text-green-500" />
    ) : (
      <TrendingDown className="h-4 w-4 text-red-500" />
    );
  };

  if (loading) {
    return (
      <Card className="p-6">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-16 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </Card>
    );
  }

  const emptyHeading = selectedDate ? "No Data for Selected Date" : "No Student Data";
  const emptyBody = selectedDate
    ? "No students participated in this session. Try a different date or clear the filter."
    : "No students have attempted any problems yet. Start a quiz to see progress.";

  return (
    <div className="my-6 mt-16">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Student Progress
          </h3>
          <p className="text-sm text-gray-500">
            Individual performance metrics and trends
          </p>
        </div>
        <div className="flex gap-2">
          <Select
            value={sortBy}
            onValueChange={(v) =>
              setSortBy(v as "name" | "accuracy" | "problems" | "time")
            }
          >
            <SelectTrigger className="w-[220px] h-9 text-sm text-gray-700 bg-white border-gray-300 shadow-sm rounded-md focus:ring-0 focus-visible:ring-0 focus:border-gray-400">
              <SelectValue />
            </SelectTrigger>
            <SelectContent align="end" className="bg-white border-gray-200 shadow-lg text-gray-700 text-sm">
              <SelectItem value="name">Sort by Name</SelectItem>
              <SelectItem value="accuracy">Sort by Accuracy</SelectItem>
              <SelectItem value="problems">Sort by Problems Attempted</SelectItem>
              <SelectItem value="time">Sort by Avg Time</SelectItem>
            </SelectContent>
          </Select>
          <SessionCalendar
            availableDates={sessionDates}
            selectedDate={selectedDate}
            onSelect={onDateChange ?? (() => {})}
          />
        </div>
      </div>

      {loading ? (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <h4 className="text-lg font-medium text-gray-900 mb-2">
            Loading Student Data
          </h4>
          <p className="text-gray-500">Fetching analytics information...</p>
        </div>
      ) : sortedStudents.length === 0 ? (
        <Card className="min-h-[200px] p-4 text-center bg-white gap-0 text-gray-500 flex flex-col items-center justify-center shadow-sm border border-gray-100">
          <Activity className="h-9 w-9 text-gray-400 mb-3" />
          <h4 className="text-sm font-medium text-gray-700 mt-1">
            {emptyHeading}
          </h4>
          <p className="text-xs text-gray-400 mt-1 max-w-xs">
            {emptyBody}
          </p>
        </Card>
      ) : (
        <TooltipProvider>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort("name")}
                  >
                    <div className="flex items-center gap-1">
                      Student Name
                      <Tooltip>
                        <TooltipTrigger className="cursor-help">
                          <Target className="h-3 w-3 text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Student&apos;s full name</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort("accuracy")}
                  >
                    <div className="flex items-center gap-1">
                      Accuracy
                      <Tooltip>
                        <TooltipTrigger className="cursor-help">
                          <Target className="h-3 w-3 text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>
                            Percentage of correct answers across all problems
                            attempted
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort("problems")}
                  >
                    <div className="flex items-center gap-1">
                      Problems Attempted
                      <Tooltip>
                        <TooltipTrigger className="cursor-help">
                          <Target className="h-3 w-3 text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>
                            Total number of unique problems the student has
                            worked on
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort("time")}
                  >
                    <div className="flex items-center gap-1">
                      Avg Time
                      <Tooltip>
                        <TooltipTrigger className="cursor-help">
                          <Clock className="h-3 w-3 text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>
                            Average time spent per problem in minutes and
                            seconds
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {sortedStudents.map((student) => (
                  <React.Fragment key={student.id}>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <button
                            onClick={() => toggleRow(student.id)}
                            className="mr-2 p-1 hover:bg-gray-100 rounded"
                          >
                            {expandedRows.has(student.id) ? (
                              <ChevronDown className="h-4 w-4 text-gray-500" />
                            ) : (
                              <ChevronRight className="h-4 w-4 text-gray-500" />
                            )}
                          </button>
                          <div className="text-sm font-medium text-gray-900">
                            {student.name}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="text-sm text-gray-900">
                            {student.avgAccuracy !== null
                              ? `${student.avgAccuracy}%`
                              : "-"}
                          </span>
                          {getTrendIcon(student.accuracyTrend)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {student.problemsAttempted}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {formatTime(student.avgTime)}
                      </td>
                    </tr>

                    {/* Expanded Row Content */}
                    {expandedRows.has(student.id) && (
                      <tr className="bg-gray-50">
                        <td colSpan={4} className="px-6 py-4">
                          <div className="space-y-4">
                            {/* Subtype Breakdown */}
                            <div>
                              <h4 className="text-sm font-semibold text-gray-700 mb-2">
                                Accuracy by Problem Type
                              </h4>
                              <div className="grid grid-cols-3 gap-4">
                                <div className="bg-white p-3 rounded border">
                                  <div className="text-xs text-gray-500">
                                    Change
                                  </div>
                                  <div className="text-lg font-semibold text-blue-600">
                                    {student.subtypeBreakdown?.change
                                      ?.accuracy || 0}
                                    %
                                  </div>
                                  <div className="text-xs text-gray-400">
                                    {student.subtypeBreakdown?.change
                                      ?.correct || 0}
                                    /
                                    {student.subtypeBreakdown?.change
                                      ?.attempted || 0}{" "}
                                    correct
                                  </div>
                                </div>
                                <div className="bg-white p-3 rounded border">
                                  <div className="text-xs text-gray-500">
                                    Combine
                                  </div>
                                  <div className="text-lg font-semibold text-green-600">
                                    {student.subtypeBreakdown?.combine
                                      ?.accuracy || 0}
                                    %
                                  </div>
                                  <div className="text-xs text-gray-400">
                                    {student.subtypeBreakdown?.combine
                                      ?.correct || 0}
                                    /
                                    {student.subtypeBreakdown?.combine
                                      ?.attempted || 0}{" "}
                                    correct
                                  </div>
                                </div>
                                <div className="bg-white p-3 rounded border">
                                  <div className="text-xs text-gray-500">
                                    Compare
                                  </div>
                                  <div className="text-lg font-semibold text-purple-600">
                                    {student.subtypeBreakdown?.compare
                                      ?.accuracy || 0}
                                    %
                                  </div>
                                  <div className="text-xs text-gray-400">
                                    {student.subtypeBreakdown?.compare
                                      ?.correct || 0}
                                    /
                                    {student.subtypeBreakdown?.compare
                                      ?.attempted || 0}{" "}
                                    correct
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Failure Analysis */}
                            <div>
                              <h4 className="text-sm font-semibold text-gray-700 mb-2">
                                Failure Analysis
                              </h4>
                              <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white p-3 rounded border">
                                  <div className="text-xs text-gray-500">
                                    Final Answer Failures
                                  </div>
                                  <div className="text-lg font-semibold text-red-600">
                                    {student.failureAnalysis
                                      ?.finalAnswerFailures || 0}
                                  </div>
                                  <div className="text-xs text-gray-400">
                                    {student.failureAnalysis?.totalProblems ||
                                      0}{" "}
                                    total problems
                                  </div>
                                </div>
                                <div className="bg-white p-3 rounded border">
                                  <div className="text-xs text-gray-500">
                                    Story Grammar Failures
                                  </div>
                                  <div className="text-lg font-semibold text-orange-600">
                                    {student.failureAnalysis
                                      ?.storyGrammarFailures || 0}
                                  </div>
                                  <div className="text-xs text-gray-400">
                                    {student.failureAnalysis?.totalProblems ||
                                      0}{" "}
                                    total problems
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </TooltipProvider>
      )}
    </div>
  );
}
