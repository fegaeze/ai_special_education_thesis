import { Request, Response, NextFunction } from "express";
import { verifyTeacherToken } from "../lib/jwt";
import { createAppError } from "./error-handler";
import { AuthenticatedRequest } from "../types/auth";

// cookie-parser populates req.cookies but the base Express types don't include
// it — augment only what we need rather than casting the whole request to any.
type RequestWithCookies = Request & { cookies: Record<string, string | undefined> };

function authMiddleware(req: Request, res: Response, next: NextFunction) {
  // Prefer httpOnly cookie — fall back to Bearer header for API/mobile clients
  const cookieToken = (req as RequestWithCookies).cookies.token;
  const bearerToken = req.headers.authorization?.startsWith("Bearer ")
    ? req.headers.authorization.slice(7)
    : undefined;

  const token = cookieToken || bearerToken;

  if (!token) {
    return next(createAppError("No token provided", 401, "UNAUTHORIZED"));
  }

  try {
    const decoded = verifyTeacherToken(token);
    (req as AuthenticatedRequest).teacher = decoded;
    next();
  } catch {
    return next(createAppError("Invalid or expired token", 401, "UNAUTHORIZED"));
  }
}

export default authMiddleware;
