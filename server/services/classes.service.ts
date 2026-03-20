import { v4 as uuidv4 } from "uuid";
import prisma from "../config/prisma";
import { createAppError } from "../middleware/error-handler";

export async function ensureTeacherOwnsClass(teacherId: number, classId: number) {
  const classExists = await prisma.class.findFirst({
    where: { id: classId, teacherId },
    select: { id: true },
  });

  if (!classExists) {
    throw createAppError("Class not found or access denied", 404, "NOT_FOUND");
  }
}

export async function listTeacherClasses(teacherId: number) {
  const classes = await prisma.class.findMany({
    where: { teacherId },
    include: { students: true },
    orderBy: { id: "asc" },
  });

  return classes.map((cls: any) => ({
    id: cls.id,
    name: cls.name,
    createdAt: cls.createdAt,
    studentCount: cls.students.length,
  }));
}

export async function createTeacherClass(input: {
  teacherId: number;
  name: string;
  students?: Array<{ name: string }>;
}) {
  const { teacherId, name, students } = input;
  const normalizedName = name.trim().toLowerCase();

  const existing = await prisma.class.findFirst({
    where: { teacherId, name: normalizedName },
  });
  if (existing) {
    throw createAppError("A class with this name already exists.", 409, "CONFLICT");
  }

  return prisma.$transaction(async (tx) => {
    const newClass = await tx.class.create({
      data: {
        name: normalizedName,
        teacher: { connect: { id: teacherId } },
      },
    });

    let createdStudentCount = 0;

    if (Array.isArray(students) && students.length > 0) {
      const validStudents = students.filter(
        (s: any) => s && typeof s.name === "string" && s.name.trim().length > 0,
      );

      if (validStudents.length === 0) {
        throw createAppError("No valid student names found in file.", 400, "BAD_REQUEST");
      }

      const uniqueNames = new Set();
      for (const s of validStudents) {
        const cleaned = s.name.trim().toLowerCase();
        if (uniqueNames.has(cleaned)) {
          throw createAppError(
            "Duplicate student names are not allowed.",
            400,
            "BAD_REQUEST",
          );
        }
        uniqueNames.add(cleaned);
      }

      const studentData = validStudents.map((s: any) => {
        const nameParts = s.name.trim().split(/\s+/);
        const initials = nameParts
          .filter(Boolean)
          .map((part: string) => part[0].toLowerCase())
          .join("");
        const uuidSuffix = uuidv4().replaceAll("-", "").slice(-4);
        return {
          name: s.name.trim(),
          userName: `${initials}${uuidSuffix}`,
          classId: newClass.id,
        };
      });

      const studentResult = await tx.student.createMany({
        data: studentData,
      });
      createdStudentCount = studentResult.count;
    }

    const classWithCreatedAt = await tx.class.findUnique({
      where: { id: newClass.id },
    });
    if (!classWithCreatedAt) {
      throw createAppError(
        "Failed to retrieve class after creation.",
        500,
        "INTERNAL_ERROR",
      );
    }

    return {
      id: newClass.id,
      name: newClass.name,
      createdAt: classWithCreatedAt.createdAt,
      studentCount: createdStudentCount,
    };
  });
}

export async function getClassStudentsStats(input: {
  classId: number;
  teacherId: number;
  search?: string;
}) {
  const { classId, teacherId, search = "" } = input;
  await ensureTeacherOwnsClass(teacherId, classId);

  const students = await prisma.student.findMany({
    where: {
      classId,
      ...(search.trim()
        ? { name: { contains: search.trim(), mode: "insensitive" as const } }
        : {}),
    },
    select: { id: true, name: true },
    orderBy: { id: "asc" },
  });

  return Promise.all(
    students.map(async (student) => {
      const responses = await prisma.quizResponse.findMany({
        where: {
          attempt: {
            studentId: student.id,
          },
        },
        include: {
          attempt: {
            select: { studentId: true },
          },
        },
      });
      const problemsAttempted = new Set(responses.map((r: any) => r.problemId)).size;
      const totalResponses = responses.length;
      const correctCount = responses.filter((r: any) => r.isCorrect).length;
      const avgAccuracy =
        totalResponses > 0 ? Math.round((correctCount / totalResponses) * 100) : null;
      const avgTime =
        problemsAttempted > 0
          ? responses.reduce((sum: number, r: any) => sum + r.timeSpent, 0) /
            problemsAttempted
          : null;
      return {
        id: student.id,
        name: student.name,
        problemsAttempted,
        avgAccuracy,
        avgTime,
        totalResponses,
      };
    }),
  );
}

export async function addStudentsToClass(input: {
  classId: number;
  teacherId: number;
  students: Array<{ name: string }>;
}) {
  const { classId, teacherId, students } = input;
  await ensureTeacherOwnsClass(teacherId, classId);

  if (!Array.isArray(students) || students.length === 0) {
    throw createAppError("No students provided", 400, "BAD_REQUEST");
  }

  const validStudents = students.filter(
    (s: any) => s && typeof s.name === "string" && s.name.trim().length > 0,
  );
  if (validStudents.length === 0) {
    throw createAppError("No valid student names found", 400, "BAD_REQUEST");
  }

  const uniqueNames = new Set();
  for (const s of validStudents) {
    const cleaned = s.name.trim().toLowerCase();
    if (uniqueNames.has(cleaned)) {
      throw createAppError(
        "Duplicate student names are not allowed.",
        400,
        "BAD_REQUEST",
      );
    }
    uniqueNames.add(cleaned);
  }

  const studentData = validStudents.map((s: any) => {
    const nameParts = s.name.trim().split(/\s+/);
    const initials = nameParts
      .filter(Boolean)
      .map((part: string) => part[0].toLowerCase())
      .join("");
    const uuidSuffix = uuidv4().replaceAll("-", "").slice(-4);
    return {
      name: s.name.trim(),
      userName: `${initials}${uuidSuffix}`,
      classId,
    };
  });
  const result = await prisma.student.createMany({
    data: studentData,
  });
  return { count: result.count };
}

export async function getClassAnalytics(input: {
  classId: number;
  teacherId: number;
  selectedDate?: Date | null;
}) {
  const { classId, teacherId, selectedDate = null } = input;
  await ensureTeacherOwnsClass(teacherId, classId);

  const students = await prisma.student.findMany({
    where: { classId },
    select: { id: true, name: true },
    orderBy: { name: "asc" },
  });

  const sessions = await prisma.quizSession.findMany({
    where: { classId },
    include: {
      attempts: {
        include: {
          responses: {
            include: {
              problem: {
                include: {
                  groundTruth: true,
                },
              },
            },
          },
        },
      },
    },
    orderBy: { startTime: "desc" },
  });

  const studentAnalytics = await Promise.all(
    students.map(async (student) => {
      const studentAttempts = sessions.flatMap((session) =>
        session.attempts.filter((attempt) => attempt.studentId === student.id),
      );

      let relevantResponses: any[] = [];
      if (selectedDate) {
        const targetSession = sessions.find((session) => {
          const sessionDate = new Date(session.startTime);
          return (
            sessionDate.getFullYear() === selectedDate.getFullYear() &&
            sessionDate.getMonth() === selectedDate.getMonth() &&
            sessionDate.getDate() === selectedDate.getDate()
          );
        });

        if (targetSession) {
          const sessionAttempt = targetSession.attempts.find(
            (attempt) => attempt.studentId === student.id,
          );
          relevantResponses = sessionAttempt ? sessionAttempt.responses : [];
        }
      } else {
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        relevantResponses = studentAttempts
          .filter((attempt) => attempt.startTime >= thirtyDaysAgo)
          .flatMap((attempt) => attempt.responses);
      }

      const problemsAttempted = new Set(relevantResponses.map((r) => r.problemId)).size;
      const totalResponses = relevantResponses.length;
      const correctResponses = relevantResponses.filter(
        (r) => r.finalAnswerCorrect && r.storyGrammarCorrect,
      ).length;

      const avgAccuracy =
        totalResponses > 0 ? Math.round((correctResponses / totalResponses) * 100) : null;

      const avgTime =
        problemsAttempted > 0
          ? relevantResponses.reduce((sum, r) => sum + r.timeSpent, 0) / problemsAttempted
          : null;

      const subtypeBreakdown = {
        change: { attempted: 0, correct: 0, accuracy: 0 },
        combine: { attempted: 0, correct: 0, accuracy: 0 },
        compare: { attempted: 0, correct: 0, accuracy: 0 },
      };

      relevantResponses.forEach((response) => {
        const subcategory = response.problem.groundTruth.subcategory;
        let type: keyof typeof subtypeBreakdown;

        if (subcategory.startsWith("CJ") || subcategory.startsWith("CS")) {
          type = "change";
        } else if (subcategory.startsWith("CP")) {
          type = "combine";
        } else if (subcategory.startsWith("CL") || subcategory.startsWith("CM")) {
          type = "compare";
        } else {
          return;
        }

        subtypeBreakdown[type].attempted++;
        if (response.finalAnswerCorrect && response.storyGrammarCorrect) {
          subtypeBreakdown[type].correct++;
        }
      });

      Object.keys(subtypeBreakdown).forEach((type) => {
        const subtype = subtypeBreakdown[type as keyof typeof subtypeBreakdown];
        subtype.accuracy =
          subtype.attempted > 0
            ? Math.round((subtype.correct / subtype.attempted) * 100)
            : 0;
      });

      const failureAnalysis = {
        finalAnswerFailures: 0,
        storyGrammarFailures: 0,
        totalProblems: totalResponses,
      };

      relevantResponses.forEach((response) => {
        if (!response.finalAnswerCorrect) failureAnalysis.finalAnswerFailures++;
        if (!response.storyGrammarCorrect) failureAnalysis.storyGrammarFailures++;
      });

      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

      const recentSessions = studentAttempts.filter(
        (attempt) => attempt.startTime >= thirtyDaysAgo,
      ).length;

      const lastActive =
        studentAttempts.length > 0 ? studentAttempts[0].startTime.toISOString() : null;

      const recentAttempts = studentAttempts
        .filter((attempt) => !selectedDate || new Date(attempt.startTime) <= selectedDate)
        .slice(0, 5);

      const accuracyTrend = recentAttempts.map((attempt) => {
        const responses = attempt.responses;
        const correct = responses.filter(
          (r) => r.finalAnswerCorrect && r.storyGrammarCorrect,
        ).length;
        return responses.length > 0 ? Math.round((correct / responses.length) * 100) : 0;
      });

      const timeTrend = recentAttempts.map((attempt) => {
        const responses = attempt.responses;
        return responses.length > 0
          ? responses.reduce((sum, r) => sum + r.timeSpent, 0) / responses.length
          : 0;
      });

      return {
        id: student.id,
        name: student.name,
        problemsAttempted,
        avgAccuracy,
        avgTime,
        totalResponses,
        recentSessions,
        lastActive,
        accuracyTrend,
        timeTrend,
        subtypeBreakdown,
        failureAnalysis,
      };
    }),
  );

  const allResponses = sessions.flatMap((session) =>
    session.attempts.flatMap((attempt) => attempt.responses),
  );

  const totalStudents = students.length;
  const totalSessions = sessions.length;

  const studentAccuracies = students.map((student) => {
    const studentAttempts = sessions.flatMap((session) =>
      session.attempts.filter((attempt) => attempt.studentId === student.id),
    );
    const studentResponses = studentAttempts.flatMap((attempt) => attempt.responses);
    const correctResponses = studentResponses.filter(
      (r) => r.finalAnswerCorrect && r.storyGrammarCorrect,
    );
    return studentResponses.length > 0
      ? (correctResponses.length / studentResponses.length) * 100
      : 0;
  });

  const classAccuracy =
    studentAccuracies.length > 0
      ? Math.round(
          studentAccuracies.reduce((sum, acc) => sum + acc, 0) / studentAccuracies.length,
        )
      : 0;

  const classTime =
    allResponses.length > 0
      ? allResponses.reduce((sum, r) => sum + r.timeSpent, 0) / allResponses.length
      : 0;

  return {
    students: studentAnalytics,
    classOverview: {
      totalStudents,
      totalSessions,
      avgClassAccuracy: classAccuracy,
      avgClassTime: classTime,
    },
  };
}
