import bcrypt from "bcrypt";
import express, { Request, Response, NextFunction } from "express";
import Joi from "joi";
import jwt from "jsonwebtoken";
import authMiddleware from "../middleware/auth";

import prisma from "../config/prisma";

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET must be defined in environment variables.");
}

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
  async (req: Request, res: Response, next: NextFunction) => {
    const { error } = registerSchema.validate(req.body);
    if (error) {
      const err = new Error(error.details[0].message);
      (err as any).status = 400;
      return next(err);
    }
    const { name, email, password } = req.body;
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const teacher = await prisma.teacher.create({
        data: { name, email, hashedPassword },
      });
      res
        .status(201)
        .json({ id: teacher.id, name: teacher.name, email: teacher.email });
    } catch (err: any) {
      if (err.code === "P2002") {
        err = new Error("Email already in use");
        (err as any).status = 409;
      }
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
        const err = new Error(error.details[0].message);
        (err as any).status = 400;
        return next(err);
      }
      const { email, password } = req.body;
      const teacher = await prisma.teacher.findUnique({ where: { email } });
      if (!teacher) {
        const err = new Error("Invalid credentials");
        (err as any).status = 401;
        return next(err);
      }
      const valid = await bcrypt.compare(password, teacher.hashedPassword);
      if (!valid) {
        const err = new Error("Invalid credentials");
        (err as any).status = 401;
        return next(err);
      }
      const token = jwt.sign(
        { teacherId: teacher.id, name: teacher.name, email: teacher.email },
        JWT_SECRET,
        { expiresIn: "1d" },
      );
      res.json({ token });
    } catch (err) {
      return next(err);
    }
  },
);

// Token validation endpoint
router.get(
  "/validate",
  authMiddleware,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // The authMiddleware already validated the token and attached teacher info to req
      const teacher = (req as any).teacher;

      // Get fresh teacher data from database
      const teacherData = await prisma.teacher.findUnique({
        where: { id: teacher.teacherId },
        select: { id: true, name: true, email: true },
      });

      if (!teacherData) {
        const err = new Error("Teacher not found");
        (err as any).status = 404;
        return next(err);
      }

      res.json({
        user: {
          id: teacherData.id,
          name: teacherData.name,
          email: teacherData.email,
        },
      });
    } catch (err) {
      return next(err);
    }
  },
);

export default router;
