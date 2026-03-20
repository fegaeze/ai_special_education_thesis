import express, { Request, Response, NextFunction } from "express";
import Joi from "joi";
import { SERVER_CONFIG } from "../config/server";
import authMiddleware from "../middleware/auth";
import { createAppError } from "../middleware/error-handler";
import { AuthenticatedRequest } from "../types/auth";
import {
  loginTeacher,
  registerTeacher,
  validateTeacher,
} from "../services/auth.service";

const router = express.Router();

const IS_PROD = SERVER_CONFIG.IS_PRODUCTION;

// ── simple per-IP registration rate limit ─────────────────────────────────
const REGISTER_MAX = 5;
const REGISTER_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const registerAttempts = new Map<string, { count: number; windowStart: number }>();

function checkRegisterLimit(req: Request, res: Response, next: NextFunction) {
  const ip =
    (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() ||
    req.socket.remoteAddress ||
    "unknown";
  const now = Date.now();
  const entry = registerAttempts.get(ip);

  if (!entry || now - entry.windowStart > REGISTER_WINDOW_MS) {
    registerAttempts.set(ip, { count: 1, windowStart: now });
    return next();
  }

  if (entry.count >= REGISTER_MAX) {
    return next(
      createAppError(
        "Too many registration attempts. Please try again in an hour.",
        429,
        "RATE_LIMITED",
      ),
    );
  }

  registerAttempts.set(ip, { count: entry.count + 1, windowStart: entry.windowStart });
  return next();
}

const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: IS_PROD,
  sameSite: IS_PROD ? ("strict" as const) : ("lax" as const),
  maxAge: SERVER_CONFIG.JWT_EXPIRES_SECONDS * 1000,
  path: "/",
};

const registerSchema = Joi.object({
  name: Joi.string().min(1).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(1).required(),
});

router.post(
  "/register",
  checkRegisterLimit,
  async (req: Request, res: Response, next: NextFunction) => {
    const { error } = registerSchema.validate(req.body);
    if (error) {
      return next(createAppError(error.details[0].message, 400, "BAD_REQUEST"));
    }
    const { name, email, password } = req.body;
    try {
      const teacher = await registerTeacher({ name, email, password });
      res.status(201).json(teacher);
    } catch (err) {
      return next(err);
    }
  },
);

router.post(
  "/login",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { error } = loginSchema.validate(req.body);
      if (error) {
        return next(createAppError(error.details[0].message, 400, "BAD_REQUEST"));
      }
      const { email, password } = req.body;
      const ip =
        (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() ||
        req.socket.remoteAddress ||
        "unknown";

      const { token, user } = await loginTeacher({ email, password, ip });

      // Set JWT in httpOnly cookie — JS cannot read this
      res.cookie("token", token, COOKIE_OPTIONS);

      // Return only user data (not the token)
      res.json({ user });
    } catch (err) {
      return next(err);
    }
  },
);

router.post(
  "/logout",
  (_req: Request, res: Response) => {
    // Mirror the same options used when setting the cookie so every browser
    // honours the deletion (some reject mismatched secure/sameSite attributes).
    res.clearCookie("token", {
      httpOnly: COOKIE_OPTIONS.httpOnly,
      secure: COOKIE_OPTIONS.secure,
      sameSite: COOKIE_OPTIONS.sameSite,
      path: COOKIE_OPTIONS.path,
    });
    res.json({ message: "Logged out" });
  },
);

// Token validation endpoint
router.get(
  "/validate",
  authMiddleware,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const teacher = (req as AuthenticatedRequest).teacher;
      const validationResult = await validateTeacher(teacher.teacherId);
      res.json(validationResult);
    } catch (err) {
      return next(err);
    }
  },
);

export default router;
