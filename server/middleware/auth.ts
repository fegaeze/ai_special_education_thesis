import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET must be defined in environment variables.");
}

function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    const err = new Error("No token provided");
    (err as any).status = 401;
    return next(err);
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    (req as any).teacher = decoded;
    next();
  } catch (err: any) {
    (err as any).status = 401;
    (err as any).message = "Invalid token";
    return next(err);
  }
}

export default authMiddleware;
