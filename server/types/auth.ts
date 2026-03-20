import { Request } from "express";

export interface TeacherTokenPayload {
  teacherId: number;
  name: string;
  email: string;
  iat?: number;
  exp?: number;
}

export interface AuthenticatedRequest extends Request {
  teacher: TeacherTokenPayload;
}
