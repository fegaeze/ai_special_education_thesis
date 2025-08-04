import express, { Request, Response, NextFunction } from "express";
import Joi from "joi";
import prisma from "../config/prisma";
import authMiddleware from "../middleware/auth";

// Extend Express Request to include teacher info
interface AuthenticatedRequest extends Request {
  teacher: {
    teacherId: number;
    email: string;
  };
}

const router = express.Router();

// ============================================================================
// VALIDATION SCHEMAS
// ============================================================================

const createQuizSessionSchema = Joi.object({
  classId: Joi.number().integer().positive().required(),
  settings: Joi.object({
    problemCount: Joi.number().integer().min(1).max(50).default(10),
    problemType: Joi.string().optional(),
    selectedTypes: Joi.array().items(Joi.string()).optional(),
  }).optional(),
});

const startQuizSchema = Joi.object({});

// ============================================================================
// TEACHER ROUTES (Protected)
// ============================================================================

// POST /api/quiz/sessions - Create a new quiz session
router.post(
  "/sessions",
  authMiddleware,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { error } = createQuizSessionSchema.validate(req.body);
      if (error) {
        const err = new Error(error.details[0].message);
        (err as any).status = 400;
        return next(err);
      }

      const teacherId = (req as AuthenticatedRequest).teacher.teacherId;
      const { classId, settings = {} } = req.body;
      const {
        problemCount: initialProblemCount = 10,
        problemType: initialProblemType,
        selectedTypes: initialSelectedTypes,
      } = settings;

      // Verify the class belongs to the teacher
      const classExists = await prisma.class.findFirst({
        where: { id: classId, teacherId },
      });

      if (!classExists) {
        const err = new Error("Class not found or access denied");
        (err as any).status = 404;
        return next(err);
      }

      // Create the quiz session
      const quizSession = await prisma.quizSession.create({
        data: {
          classId,
          teacherId,
          status: "ACTIVE",
          settings: {
            problemCount: initialProblemCount,
            problemType: initialProblemType,
            selectedTypes: initialSelectedTypes,
          },
        },
        include: {
          class: {
            select: { name: true },
          },
        },
      });

      // Select and randomize problems for this session
      const problemCount = initialProblemCount;
      const problemType = initialProblemType || "All";
      const selectedTypes = initialSelectedTypes || [];

      // Map frontend problem types to database subcategory codes
      const getSubcategoryCodes = (
        problemType: string,
        selectedTypes?: string[],
      ) => {
        const changeCodes = ["CJPU", "CJWU", "CSPU", "CSWU"];
        const combineCodes = ["CPU", "CWU"];
        const compareCodes = [
          "CLDU",
          "CLLQU",
          "CLSQU",
          "CMDU",
          "CMLQU",
          "CMSQU",
        ];

        if (problemType === "All") {
          return [...changeCodes, ...combineCodes, ...compareCodes];
        }

        if (
          problemType === "Mixed" &&
          selectedTypes &&
          selectedTypes.length > 0
        ) {
          const codes: string[] = [];
          selectedTypes.forEach((type) => {
            if (type === "Change") codes.push(...changeCodes);
            if (type === "Combine") codes.push(...combineCodes);
            if (type === "Compare") codes.push(...compareCodes);
          });
          return codes;
        }

        if (problemType === "Change") return changeCodes;
        if (problemType === "Combine") return combineCodes;
        if (problemType === "Compare") return compareCodes;

        return [...changeCodes, ...combineCodes, ...compareCodes];
      };

      const subcategoryCodes = getSubcategoryCodes(problemType, selectedTypes);

      // Get problems that have correct model evaluations
      const problems = await prisma.problem.findMany({
        where: {
          groundTruth: {
            subcategory: {
              in: subcategoryCodes as any,
            },
          },
          modelEvaluations: {
            some: {
              modelName: "GOOGLE_GEMINI_2_5_FLASH",
              isAnswerCorrect: true,
              isModelMappingCorrect: true,
              predictedCategory: {
                not: null,
              },
              predictedSubcategory: {
                not: null,
              },
            },
          },
        },
        include: {
          groundTruth: true,
          modelEvaluations: {
            where: {
              modelName: "GOOGLE_GEMINI_2_5_FLASH",
            },
            take: 1,
          },
        },
      });

      if (problems.length === 0) {
        const err = new Error(
          "No suitable problems found for the selected criteria",
        );
        (err as any).status = 400;
        return next(err);
      }

      // Randomize and limit problems
      const shuffledProblems = problems.sort(() => Math.random() - 0.5);
      const selectedProblems = shuffledProblems
        .slice(0, problemCount)
        .map((problem, index) => ({
          id: problem.id,
          order: index + 1,
        }));

      // Update session with selected problems
      await prisma.quizSession.update({
        where: { id: quizSession.id },
        data: {
          settings: {
            problemCount: initialProblemCount,
            problemType: initialProblemType,
            selectedTypes: initialSelectedTypes,
            selectedProblems,
          },
        },
      });

      // Generate quiz codes for all students in the class
      const students = await prisma.student.findMany({
        where: { classId },
        select: { id: true, name: true },
      });

      const quizCodes = students.map((student) => ({
        code: Math.random().toString(36).substring(2, 6).toUpperCase(),
        sessionId: quizSession.id,
        studentId: student.id,
      }));

      await prisma.quizCode.createMany({
        data: quizCodes,
      });

      res.status(201).json({
        success: true,
        session: {
          id: quizSession.id,
          class: quizSession.class,
          settings: quizSession.settings,
        },
        codes: quizCodes,
        message: "Quiz session created successfully",
      });
    } catch (err) {
      (err as any).status = 500;
      return next(err);
    }
  },
);

// GET /api/quiz/sessions - Get all quiz sessions for a class
router.get(
  "/sessions",
  authMiddleware,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { classId } = req.query;
      const teacherId = (req as any).teacher.teacherId;

      if (!classId) {
        const err = new Error("Class ID is required");
        (err as any).status = 400;
        return next(err);
      }

      const sessions = await prisma.quizSession.findMany({
        where: {
          classId: parseInt(classId as string),
          teacherId,
        },
        include: {
          class: {
            select: { name: true },
          },
          attempts: {
            include: {
              student: {
                select: { id: true, name: true },
              },
            },
          },
          quizCodes: {
            include: {
              student: {
                select: { id: true, name: true },
              },
            },
          },
        },
        orderBy: { startTime: "desc" },
      });

      const mappedSessions = sessions.map((session) => ({
        id: session.id,
        startTime: session.startTime,
        endTime: session.endTime,
        status: session.status,
        class: session.class,
        settings: session.settings || {
          problemCount: 10,
          problemType: "All",
          selectedTypes: [],
        },
        attempts: session.attempts.map((attempt) => ({
          id: attempt.id,
          student: attempt.student,
          startTime: attempt.startTime,
          endTime: attempt.endTime,
        })),
        codes: session.quizCodes.map((code) => ({
          code: code.code,
          studentId: code.student.id,
          studentName: code.student.name,
        })),
      }));

      res.json(mappedSessions);
    } catch (err) {
      return next(err);
    }
  },
);

// GET /api/quiz/sessions/:sessionId - Get quiz session details
router.get(
  "/sessions/:sessionId",
  authMiddleware,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { sessionId } = req.params;
      const teacherId = (req as any).teacher.teacherId;

      const session = await prisma.quizSession.findFirst({
        where: {
          id: parseInt(sessionId),
          teacherId,
        },
        include: {
          class: {
            select: { name: true },
          },
          attempts: {
            include: {
              student: {
                select: { name: true },
              },
              responses: {
                include: {
                  problem: {
                    select: { content: true },
                  },
                },
              },
            },
          },
          quizCodes: {
            include: {
              student: {
                select: { name: true },
              },
            },
          },
        },
      });

      if (!session) {
        const err = new Error("Quiz session not found");
        (err as any).status = 404;
        return next(err);
      }

      res.json({
        session: {
          id: session.id,
          class: session.class.name,
          startTime: session.startTime,
          attempts: session.attempts.map((attempt) => ({
            id: attempt.id,
            student: attempt.student.name,
            startTime: attempt.startTime,
            endTime: attempt.endTime,
            progress: attempt.responses.length,
          })),
          codes: session.quizCodes.map((qc) => ({
            code: qc.code,
            student: qc.student.name,
          })),
        },
      });
    } catch (err) {
      return next(err);
    }
  },
);

// DELETE /api/quiz/sessions/:sessionId - Delete quiz session
router.delete(
  "/sessions/:sessionId",
  authMiddleware,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { sessionId } = req.params;
      const teacherId = (req as any).teacher.teacherId;

      // Verify the session belongs to the teacher
      const session = await prisma.quizSession.findFirst({
        where: {
          id: parseInt(sessionId),
          teacherId,
        },
      });

      if (!session) {
        const err = new Error("Quiz session not found");
        (err as any).status = 404;
        return next(err);
      }

      // Delete related records first (due to foreign key constraints)
      await prisma.quizCode.deleteMany({
        where: { sessionId: parseInt(sessionId) },
      });

      await prisma.quizResponse.deleteMany({
        where: {
          attempt: {
            sessionId: parseInt(sessionId),
          },
        },
      });

      await prisma.quizAttempt.deleteMany({
        where: { sessionId: parseInt(sessionId) },
      });

      // Finally delete the session
      await prisma.quizSession.delete({
        where: { id: parseInt(sessionId) },
      });

      res.json({ success: true, message: "Quiz session deleted successfully" });
    } catch (err) {
      return next(err);
    }
  },
);

// ============================================================================
// STUDENT ROUTES (Public)
// ============================================================================

// GET /api/quiz/:quizCode - Get quiz details by code
router.get(
  "/:quizCode",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { quizCode } = req.params;

      // Look up the code in QuizCode
      const quizCodeStr = quizCode.toString();
      const quizCodeEntry = await prisma.quizCode.findUnique({
        where: { code: quizCodeStr },
      });

      if (!quizCodeEntry) {
        return res.status(404).json({
          error: "Invalid or expired quiz code",
        });
      }

      const sessionId = quizCodeEntry.sessionId;
      const studentId = quizCodeEntry.studentId;

      // Find the session
      const session = await prisma.quizSession.findFirst({
        where: { id: sessionId },
        include: {
          class: {
            select: { name: true },
          },
        },
      });

      if (!session) {
        return res.status(404).json({
          error: "Quiz session not found",
        });
      }

      // Check if student exists and belongs to the session's class
      const student = await prisma.student.findFirst({
        where: {
          id: studentId,
          classId: session.classId,
        },
      });

      if (!student) {
        return res.status(404).json({
          error: "Student not found or not in this class",
        });
      }

      // Get the student's attempt for this session
      const attempt = await prisma.quizAttempt.findFirst({
        where: {
          sessionId: session.id,
          studentId: student.id,
        },
        include: {
          student: {
            select: { name: true },
          },
          responses: {
            select: {
              id: true,
              problemId: true,
              finalAnswerCorrect: true,
              storyGrammarCorrect: true,
            },
          },
        },
      });

      // Check if quiz is already completed
      if (attempt && attempt.endTime) {
        return res.status(400).json({
          error: "Quiz already completed",
          completed: true,
          attempt: {
            id: attempt.id,
            startTime: attempt.startTime,
            endTime: attempt.endTime,
            responses: attempt.responses,
          },
        });
      }

      // Get pre-selected problems from session settings
      const settings = session.settings as any;
      const selectedProblems = settings?.selectedProblems || [];

      if (!selectedProblems || selectedProblems.length === 0) {
        return res.status(500).json({
          error: "No problems selected for this quiz session",
        });
      }

      // Get the problems in the pre-determined order
      const problemIds = selectedProblems.map((p: any) => p.id);
      const problems = await prisma.problem.findMany({
        where: {
          id: { in: problemIds },
        },
        include: {
          modelEvaluations: {
            where: {
              modelName: "GOOGLE_GEMINI_2_5_FLASH", // Use Gemini as default
            },
            select: {
              id: true,
              modelName: true,
              predictedCategory: true,
              predictedSubcategory: true,
              modelAnswers: true,
              answer: true,
              modelAnswerReasoning: true,
              storyGrammarPrompts: true,
            },
          },
        },
        orderBy: {
          id: "asc",
        },
      });

      // Sort problems according to the pre-determined order
      const orderedProblems = selectedProblems
        .map((selectedProblem: any) => {
          return problems.find((p) => p.id === selectedProblem.id);
        })
        .filter(Boolean);

      res.json({
        problems: orderedProblems.map((problem: any, index: number) => ({
          id: problem.id,
          content: problem.content,
          modelEvaluations: problem.modelEvaluations,
          questionOrder: index + 1,
        })),
      });
    } catch (err) {
      return next(err);
    }
  },
);

// POST /api/quiz/:quizCode/start - Start a quiz attempt
router.post(
  "/:quizCode/start",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { quizCode } = req.params;
      const { error } = startQuizSchema.validate(req.body);
      if (error) {
        const err = new Error(error.details[0].message);
        (err as any).status = 400;
        return next(err);
      }

      // Look up the code in QuizCode
      const quizCodeStr = quizCode.toString();
      const quizCodeEntry = await prisma.quizCode.findUnique({
        where: { code: quizCodeStr },
      });

      if (!quizCodeEntry) {
        const err = new Error("Invalid or expired quiz code");
        (err as any).status = 404;
        return next(err);
      }

      const sessionId = quizCodeEntry.sessionId;
      const studentId = quizCodeEntry.studentId;

      // Check if attempt already exists
      const existingAttempt = await prisma.quizAttempt.findFirst({
        where: {
          sessionId,
          studentId,
        },
      });

      if (existingAttempt) {
        res.json({
          success: true,
          attempt: existingAttempt,
          message: "Attempt already exists",
        });
        return;
      }

      // Create new attempt
      const attempt = await prisma.quizAttempt.create({
        data: {
          sessionId,
          studentId,
        },
        include: {
          student: {
            select: { name: true },
          },
        },
      });

      res.status(201).json({
        success: true,
        attempt,
        message: "Quiz attempt started successfully",
      });
    } catch (err) {
      return next(err);
    }
  },
);

// POST /api/quiz/:quizCode/submit - Submit all quiz answers
router.post(
  "/:quizCode/submit",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { quizCode } = req.params;
      const { answers, totalTime } = req.body;

      // Look up the code in QuizCode
      const quizCodeStr = quizCode.toString();
      const quizCodeEntry = await prisma.quizCode.findUnique({
        where: { code: quizCodeStr },
      });

      if (!quizCodeEntry) {
        const err = new Error("Invalid or expired quiz code");
        (err as any).status = 404;
        return next(err);
      }

      const sessionId = quizCodeEntry.sessionId;
      const studentId = quizCodeEntry.studentId;

      // Get or create the attempt
      let attempt = await prisma.quizAttempt.findFirst({
        where: {
          sessionId,
          studentId,
        },
      });

      if (!attempt) {
        attempt = await prisma.quizAttempt.create({
          data: {
            sessionId,
            studentId,
          },
        });
      }

      // Create all responses at once
      const responses = await Promise.all(
        answers.map(async (answer: any) => {
          let storyGrammarCorrect = null;

          if (answer.boxStates) {
            const boxStates = answer.boxStates;
            const correctAnswers = Object.values(boxStates).filter(
              (box: any) => box.isCorrect,
            ).length;

            const totalBoxes = Object.keys(boxStates).length;
            storyGrammarCorrect =
              totalBoxes > 0 ? correctAnswers === totalBoxes : null;
          }

          return prisma.quizResponse.create({
            data: {
              attemptId: attempt.id,
              problemId: answer.problemId,
              studentAnswer: answer.finalAnswer, // finalAnswer is now a number
              timeSpent: answer.timeSpent,
              storyGrammarAnswers: answer.boxStates,
              finalAnswerCorrect: answer.finalAnswerCorrect,
              storyGrammarCorrect: storyGrammarCorrect,
            },
          });
        }),
      );

      // Mark attempt as completed
      await prisma.quizAttempt.update({
        where: { id: attempt.id },
        data: { endTime: new Date() },
      });

      // Check if all students have completed
      const session = await prisma.quizSession.findUnique({
        where: { id: sessionId },
        include: {
          quizCodes: true,
          attempts: true,
        },
      });
      if (session) {
        const totalStudents = session.quizCodes.length;
        const completedAttempts = session.attempts.filter(
          (a) => a.endTime,
        ).length;
        if (totalStudents > 0 && completedAttempts === totalStudents) {
          await prisma.quizSession.update({
            where: { id: sessionId },
            data: {
              status: "COMPLETED",
              endTime: new Date(),
            },
          });
        }
      }

      res.status(201).json({
        success: true,
        attempt,
        responses,
        message: "Quiz submitted successfully",
      });
    } catch (err) {
      return next(err);
    }
  },
);

export default router;
