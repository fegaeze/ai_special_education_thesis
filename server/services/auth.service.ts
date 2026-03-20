import bcrypt from "bcrypt";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client";
import prisma from "../config/prisma";
import { signTeacherToken } from "../lib/jwt";
import { createAppError } from "../middleware/error-handler";

const MAX_LOGIN_ATTEMPTS = 5;
const LOGIN_WINDOW_MS = 15 * 60 * 1000;
const loginAttempts = new Map<string, { count: number; firstAttemptAt: number }>();

function getLoginAttemptKey(ip: string, email: string) {
  return `${ip}:${email.toLowerCase()}`;
}

function isRateLimited(key: string, now: number): boolean {
  const current = loginAttempts.get(key);
  if (!current) return false;

  if (now - current.firstAttemptAt > LOGIN_WINDOW_MS) {
    loginAttempts.delete(key);
    return false;
  }

  return current.count >= MAX_LOGIN_ATTEMPTS;
}

function recordFailedAttempt(key: string, now: number) {
  const current = loginAttempts.get(key);
  if (!current || now - current.firstAttemptAt > LOGIN_WINDOW_MS) {
    loginAttempts.set(key, { count: 1, firstAttemptAt: now });
    return;
  }

  loginAttempts.set(key, {
    count: current.count + 1,
    firstAttemptAt: current.firstAttemptAt,
  });
}

function clearFailedAttempts(key: string) {
  loginAttempts.delete(key);
}

export async function registerTeacher(input: {
  name: string;
  email: string;
  password: string;
}) {
  const { name, email, password } = input;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const teacher = await prisma.teacher.create({
      data: { name, email, hashedPassword },
    });

    return { id: teacher.id, name: teacher.name, email: teacher.email };
  } catch (err: unknown) {
    if (err instanceof PrismaClientKnownRequestError && err.code === "P2002") {
      throw createAppError("Email already in use", 409, "CONFLICT");
    }
    throw err;
  }
}

export async function loginTeacher(input: {
  email: string;
  password: string;
  ip: string;
}) {
  const { email, password, ip } = input;
  const now = Date.now();
  const attemptKey = getLoginAttemptKey(ip, email);

  if (isRateLimited(attemptKey, now)) {
    throw createAppError(
      "Too many login attempts. Please try again in 15 minutes.",
      429,
      "RATE_LIMITED",
    );
  }

  const teacher = await prisma.teacher.findUnique({ where: { email } });
  if (!teacher) {
    recordFailedAttempt(attemptKey, now);
    throw createAppError("Invalid credentials", 401, "UNAUTHORIZED");
  }

  const valid = await bcrypt.compare(password, teacher.hashedPassword);
  if (!valid) {
    recordFailedAttempt(attemptKey, now);
    throw createAppError("Invalid credentials", 401, "UNAUTHORIZED");
  }

  clearFailedAttempts(attemptKey);

  const token = signTeacherToken({
    teacherId: teacher.id,
    name: teacher.name,
    email: teacher.email,
  });

  return {
    token,
    user: { id: teacher.id, name: teacher.name, email: teacher.email },
  };
}

export async function validateTeacher(teacherId: number) {
  const teacherData = await prisma.teacher.findUnique({
    where: { id: teacherId },
    select: { id: true, name: true, email: true },
  });

  if (!teacherData) {
    throw createAppError("Teacher not found", 404, "NOT_FOUND");
  }

  return {
    user: {
      id: teacherData.id,
      name: teacherData.name,
      email: teacherData.email,
    },
  };
}
