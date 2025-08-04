import express, { Request, Response, NextFunction } from "express";
import Joi from "joi";
import { v4 as uuidv4 } from "uuid";

import prisma from "../config/prisma";
import authMiddleware from "../middleware/auth";

const router = express.Router();

const classCreateSchema = Joi.object({
  name: Joi.string().min(1).required(),
  description: Joi.string().allow("").optional(),
  students: Joi.array()
    .items(
      Joi.object({
        name: Joi.string().min(1).required(),
        userName: Joi.string().optional(),
      }),
    )
    .optional(),
});

// List all classes for the authenticated teacher
router.get(
  "/",
  authMiddleware,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const teacherId = (req as any).teacher.teacherId;
      // Only fetch active classes. If you have an 'active' or 'status' field, filter here.
      // Example: where: { teacherId, status: 'ACTIVE' }
      // If not, all classes are considered active by default.
      const classes = await prisma.class.findMany({
        where: { teacherId }, // Add status: 'ACTIVE' if such a field exists
        include: {
          students: true,
        },
        orderBy: { id: "asc" },
      });
      res.json(
        classes.map((cls: any) => ({
          id: cls.id,
          name: cls.name,
          createdAt: cls.createdAt,
          studentCount: cls.students.length,
        })),
      );
    } catch (err) {
      return next(err);
    }
  },
);

// Create a new class for the authenticated teacher
router.post(
  "/",
  authMiddleware,
  async (req: Request, res: Response, next: NextFunction) => {
    const { error } = classCreateSchema.validate(req.body);

    if (error) {
      const err = new Error(error.details[0].message);
      (err as any).status = 400;
      return next(err);
    }

    try {
      const teacherId = (req as any).teacher.teacherId;
      const { name, students } = req.body;

      const normalizedName = name.trim().toLowerCase();
      const existing = await prisma.class.findFirst({
        where: { teacherId, name: normalizedName },
      });

      if (existing) {
        const err = new Error("A class with this name already exists.");
        (err as any).status = 409;
        return next(err);
      }

      const result = await prisma.$transaction(async (tx) => {
        const newClass = await tx.class.create({
          data: {
            name: normalizedName,
            teacher: { connect: { id: teacherId } },
          },
        });

        let createdStudentCount = 0;

        if (Array.isArray(students) && students.length > 0) {
          const validStudents = students.filter(
            (s: any) =>
              s && typeof s.name === "string" && s.name.trim().length > 0,
          );

          if (validStudents.length === 0) {
            const err = new Error("No valid student names found in file.");
            (err as any).status = 400;
            return next(err);
          }

          // Check for duplicate student names
          const uniqueNames = new Set();
          for (const s of validStudents) {
            const cleaned = s.name.trim().toLowerCase();
            if (uniqueNames.has(cleaned)) {
              const err = new Error("Duplicate student names are not allowed.");
              (err as any).status = 400;
              return next(err);
            }
            uniqueNames.add(cleaned);
          }

          const studentData = validStudents.map((s: any) => {
            const nameParts = s.name.trim().split(/\s+/);
            const initials = nameParts
              .filter(Boolean)
              .map((part: string) => part[0].toLowerCase())
              .join("");
            const uuidSuffix = uuidv4().replace(/-/g, "").slice(-4);
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
          const err = new Error("Failed to retrieve class after creation.");
          (err as any).status = 500;
          return next(err);
        }

        return {
          id: newClass.id,
          name: newClass.name,
          createdAt: classWithCreatedAt.createdAt,
          studentCount: createdStudentCount,
        };
      });

      return res.status(201).json(result);
    } catch (err) {
      console.error(err);
      return next(err);
    }
  },
);

// Get all students for a class, with stats
router.get(
  "/:id/students",
  authMiddleware,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const classId = parseInt(req.params.id, 10);
      if (isNaN(classId)) {
        const err = new Error("Invalid class ID");
        (err as any).status = 400;
        return next(err);
      }
      const search = (req.query.search as string) || "";
      // Get all students in the class
      const students = await prisma.student.findMany({
        where: {
          classId,
          ...(search.trim()
            ? { name: { contains: search.trim(), mode: "insensitive" } }
            : {}),
        },
        select: { id: true, name: true },
        orderBy: { id: "asc" },
      });
      // For each student, aggregate stats from Quiz Responses
      const studentStats = await Promise.all(
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
          const problemsAttempted = new Set(
            responses.map((r: any) => r.problemId),
          ).size;
          const totalResponses = responses.length;
          const correctCount = responses.filter((r: any) => r.isCorrect).length;
          const avgAccuracy =
            totalResponses > 0
              ? Math.round((correctCount / totalResponses) * 100)
              : null;
          const avgTime =
            problemsAttempted > 0
              ? responses.reduce(
                  (sum: number, r: any) => sum + r.timeSpent,
                  0,
                ) / problemsAttempted
              : null;
          return {
            id: student.id,
            name: student.name,
            problemsAttempted,
            avgAccuracy, // percent
            avgTime, // seconds
            totalResponses,
          };
        }),
      );
      res.json(studentStats);
    } catch (err) {
      return next(err);
    }
  },
);

// Add students to a class
router.post(
  "/:id/students",
  authMiddleware,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const classId = parseInt(req.params.id, 10);
      if (isNaN(classId)) {
        const err = new Error("Invalid class ID");
        (err as any).status = 400;
        return next(err);
      }
      const { students } = req.body;
      if (!Array.isArray(students) || students.length === 0) {
        const err = new Error("No students provided");
        (err as any).status = 400;
        return next(err);
      }
      // Validate and create students
      const validStudents = students.filter(
        (s: any) => s && typeof s.name === "string" && s.name.trim().length > 0,
      );
      if (validStudents.length === 0) {
        const err = new Error("No valid student names found");
        (err as any).status = 400;
        return next(err);
      }
      // Check for duplicate names in the request
      const uniqueNames = new Set();
      for (const s of validStudents) {
        const cleaned = s.name.trim().toLowerCase();
        if (uniqueNames.has(cleaned)) {
          const err = new Error("Duplicate student names are not allowed.");
          (err as any).status = 400;
          return next(err);
        }
        uniqueNames.add(cleaned);
      }
      // Generate userName for each student
      const { v4: uuidv4 } = require("uuid");
      const studentData = validStudents.map((s: any) => {
        const nameParts = s.name.trim().split(/\s+/);
        const initials = nameParts
          .filter(Boolean)
          .map((part: string) => part[0].toLowerCase())
          .join("");
        const uuidSuffix = uuidv4().replace(/-/g, "").slice(-4);
        return {
          name: s.name.trim(),
          userName: `${initials}${uuidSuffix}`,
          classId,
        };
      });
      const result = await prisma.student.createMany({
        data: studentData,
      });
      res.status(201).json({ count: result.count });
    } catch (err) {
      return next(err);
    }
  },
);

// Get comprehensive analytics for a class
router.get(
  "/:id/analytics",
  authMiddleware,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const classId = parseInt(req.params.id, 10);
      const selectedDate = req.query.date
        ? new Date(req.query.date as string)
        : null;

      if (isNaN(classId)) {
        const err = new Error("Invalid class ID");
        (err as any).status = 400;
        return next(err);
      }

      // Verify the class belongs to the teacher
      const teacherId = (req as any).teacher.teacherId;
      const classExists = await prisma.class.findFirst({
        where: { id: classId, teacherId },
      });

      if (!classExists) {
        const err = new Error("Class not found or access denied");
        (err as any).status = 404;
        return next(err);
      }

      // Get all students in the class
      const students = await prisma.student.findMany({
        where: { classId },
        select: { id: true, name: true },
        orderBy: { name: "asc" },
      });

      // Get all quiz sessions for this class
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

      // Calculate individual student analytics
      const studentAnalytics = await Promise.all(
        students.map(async (student) => {
          const studentAttempts = sessions.flatMap((session) =>
            session.attempts.filter(
              (attempt) => attempt.studentId === student.id,
            ),
          );

          let relevantResponses: any[] = [];
          let trendResponses: any[] = [];

          if (selectedDate) {
            // Find the specific session for the selected date
            const targetSession = sessions.find((session) => {
              const sessionDate = new Date(session.startTime);
              return (
                sessionDate.getFullYear() === selectedDate.getFullYear() &&
                sessionDate.getMonth() === selectedDate.getMonth() &&
                sessionDate.getDate() === selectedDate.getDate()
              );
            });

            if (targetSession) {
              // Get responses for the specific session
              const sessionAttempt = targetSession.attempts.find(
                (attempt) => attempt.studentId === student.id,
              );
              relevantResponses = sessionAttempt
                ? sessionAttempt.responses
                : [];

              // Get all historical responses up to the selected date for trends
              trendResponses = studentAttempts
                .filter(
                  (attempt) => new Date(attempt.startTime) <= selectedDate,
                )
                .flatMap((attempt) => attempt.responses);
            } else {
              // No session found for the selected date
              relevantResponses = [];
              trendResponses = [];
            }
          } else {
            // Default: last 30 days
            const thirtyDaysAgo = new Date();
            thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

            relevantResponses = studentAttempts
              .filter((attempt) => attempt.startTime >= thirtyDaysAgo)
              .flatMap((attempt) => attempt.responses);

            trendResponses = relevantResponses;
          }

          const problemsAttempted = new Set(
            relevantResponses.map((r) => r.problemId),
          ).size;
          const totalResponses = relevantResponses.length;
          const correctResponses = relevantResponses.filter(
            (r) => r.finalAnswerCorrect && r.storyGrammarCorrect,
          ).length;

          const avgAccuracy =
            totalResponses > 0
              ? Math.round((correctResponses / totalResponses) * 100)
              : null;

          const avgTime =
            problemsAttempted > 0
              ? relevantResponses.reduce((sum, r) => sum + r.timeSpent, 0) /
                problemsAttempted
              : null;

          // Calculate subtype breakdown
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
            } else if (
              subcategory.startsWith("CL") ||
              subcategory.startsWith("CM")
            ) {
              type = "compare";
            } else {
              return; // Skip unknown types
            }

            subtypeBreakdown[type].attempted++;
            if (response.finalAnswerCorrect && response.storyGrammarCorrect) {
              subtypeBreakdown[type].correct++;
            }
          });

          // Calculate accuracy for each subtype
          Object.keys(subtypeBreakdown).forEach((type) => {
            const subtype =
              subtypeBreakdown[type as keyof typeof subtypeBreakdown];
            subtype.accuracy =
              subtype.attempted > 0
                ? Math.round((subtype.correct / subtype.attempted) * 100)
                : 0;
          });

          // Calculate failure analysis
          const failureAnalysis = {
            finalAnswerFailures: 0,
            storyGrammarFailures: 0,
            totalProblems: totalResponses,
          };

          relevantResponses.forEach((response) => {
            if (!response.finalAnswerCorrect) {
              failureAnalysis.finalAnswerFailures++;
            }
            if (!response.storyGrammarCorrect) {
              failureAnalysis.storyGrammarFailures++;
            }
          });

          // Calculate recent activity (last 30 days)
          const thirtyDaysAgo = new Date();
          thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

          const recentSessions = studentAttempts.filter(
            (attempt) => attempt.startTime >= thirtyDaysAgo,
          ).length;

          const lastActive =
            studentAttempts.length > 0
              ? studentAttempts[0].startTime.toISOString()
              : null;

          // Calculate trends based on historical data up to selected date
          const recentAttempts = studentAttempts
            .filter(
              (attempt) =>
                !selectedDate || new Date(attempt.startTime) <= selectedDate,
            )
            .slice(0, 5);

          const accuracyTrend = recentAttempts.map((attempt) => {
            const responses = attempt.responses;
            const correct = responses.filter(
              (r) => r.finalAnswerCorrect && r.storyGrammarCorrect,
            ).length;
            return responses.length > 0
              ? Math.round((correct / responses.length) * 100)
              : 0;
          });

          const timeTrend = recentAttempts.map((attempt) => {
            const responses = attempt.responses;
            return responses.length > 0
              ? responses.reduce((sum, r) => sum + r.timeSpent, 0) /
                  responses.length
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

      // Calculate class-wide analytics
      const allResponses = sessions.flatMap((session) =>
        session.attempts.flatMap((attempt) => attempt.responses),
      );

      const totalStudents = students.length;
      const totalSessions = sessions.length;

      // Calculate class accuracy using student-level averaging
      const studentAccuracies = students.map((student) => {
        // Get all attempts for this student
        const studentAttempts = sessions.flatMap((session) =>
          session.attempts.filter(
            (attempt) => attempt.studentId === student.id,
          ),
        );
        // Get all responses for this student
        const studentResponses = studentAttempts.flatMap(
          (attempt) => attempt.responses,
        );
        const correctResponses = studentResponses.filter(
          (r) => r.finalAnswerCorrect && r.storyGrammarCorrect,
        );
        return studentResponses.length > 0
          ? (correctResponses.length / studentResponses.length) * 100
          : 0; // Students with no responses get 0% accuracy
      });

      const classAccuracy =
        studentAccuracies.length > 0
          ? Math.round(
              studentAccuracies.reduce((sum, acc) => sum + acc, 0) /
                studentAccuracies.length,
            )
          : 0;

      const classTime =
        allResponses.length > 0
          ? allResponses.reduce((sum, r) => sum + r.timeSpent, 0) /
            allResponses.length
          : 0;

      const classOverview = {
        totalStudents,
        totalSessions,
        avgClassAccuracy: classAccuracy,
        avgClassTime: classTime,
      };

      res.json({
        students: studentAnalytics,
        classOverview,
      });
    } catch (err) {
      return next(err);
    }
  },
);

export default router;
