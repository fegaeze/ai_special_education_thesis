import express, { Request, Response, NextFunction } from "express";
import Joi from "joi";
import { paramToString } from "../lib/route-params";
import authMiddleware from "../middleware/auth";
import { AuthenticatedRequest } from "../types/auth";
import { createAppError } from "../middleware/error-handler";
import {
  createQuizSession,
  deleteQuizSession,
  getQuizByCode,
  getQuizSessionDetail,
  getQuizSessionsByClass,
  startQuizAttemptByCode,
  submitQuizByCode,
} from "../services/quiz.service";

const router = express.Router();

// ============================================================================
// VALIDATION SCHEMAS
// ============================================================================

const createQuizSessionSchema = Joi.object({
  classId: Joi.number().integer().positive().required(),
  settings: Joi.object({
    problemCount: Joi.number().integer().min(1).default(10),
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
        return next(createAppError(error.details[0].message, 400, "BAD_REQUEST"));
      }

      const teacherId = (req as AuthenticatedRequest).teacher.teacherId;
      const result = await createQuizSession({
        classId: req.body.classId,
        teacherId,
        settings: req.body.settings,
      });
      res.status(201).json(result);
    } catch (err) {
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
      const teacherId = (req as AuthenticatedRequest).teacher.teacherId;

      if (!classId) {
        return next(createAppError("Class ID is required", 400, "BAD_REQUEST"));
      }

      const mappedSessions = await getQuizSessionsByClass({
        classId: Number.parseInt(classId as string, 10),
        teacherId,
      });

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
      const teacherId = (req as AuthenticatedRequest).teacher.teacherId;

      const result = await getQuizSessionDetail({
        sessionId: Number.parseInt(paramToString(sessionId), 10),
        teacherId,
      });
      res.json(result);
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
      const teacherId = (req as AuthenticatedRequest).teacher.teacherId;
      const result = await deleteQuizSession({
        sessionId: Number.parseInt(paramToString(sessionId), 10),
        teacherId,
      });
      res.json(result);
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
      const result = await getQuizByCode(paramToString(quizCode));
      if (result.completed) {
        return res.status(400).json(result.payload);
      }
      res.json(result.payload);
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
        return next(createAppError(error.details[0].message, 400, "BAD_REQUEST"));
      }
      const result = await startQuizAttemptByCode(paramToString(quizCode));
      res.status(result.message === "Attempt already exists" ? 200 : 201).json(result);
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
      const { answers } = req.body;
      const result = await submitQuizByCode({
        quizCode: paramToString(quizCode),
        answers,
      });
      res.status(201).json(result);
    } catch (err) {
      return next(err);
    }
  },
);

export default router;
