import jwt from "jsonwebtoken";
import { SERVER_CONFIG } from "../config/server";
import { TeacherTokenPayload } from "../types/auth";

export function signTeacherToken(payload: TeacherTokenPayload): string {
  const expiresIn = SERVER_CONFIG.JWT_EXPIRES_IN as jwt.SignOptions["expiresIn"];

  return jwt.sign(payload, SERVER_CONFIG.JWT_SECRET, {
    expiresIn,
  });
}

export function verifyTeacherToken(token: string): TeacherTokenPayload {
  return jwt.verify(token, SERVER_CONFIG.JWT_SECRET) as TeacherTokenPayload;
}
