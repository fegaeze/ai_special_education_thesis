import { Request, Response, NextFunction } from "express";
import { Prisma } from "@prisma/client";

// Error Classes
export class AppError extends Error {
  public status: number;
  public code?: string;
  public details?: any;

  constructor(
    message: string,
    status: number = 500,
    code?: string,
    details?: any,
  ) {
    super(message);
    this.name = "AppError";
    this.status = status;
    this.code = code;
    this.details = details;
  }
}

export class ValidationError extends Error {
  public field: string;
  public value?: any;

  constructor(field: string, message: string, value?: any) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
    this.value = value;
  }
}

// Error Handler Middleware
export const errorHandler = (
  error: Error | AppError | ValidationError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // Log error for debugging (in production, use proper logging service)
  console.error("Error:", {
    message: error.message,
    stack: error.stack,
    url: req.url,
    method: req.method,
    timestamp: new Date().toISOString(),
  });

  // Handle Prisma errors
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    switch (error.code) {
      case "P2002":
        return res.status(409).json({
          error: true,
          message: "A record with this unique field already exists",
          code: "DUPLICATE_ENTRY",
        });
      case "P2025":
        return res.status(404).json({
          error: true,
          message: "Record not found",
          code: "NOT_FOUND",
        });
      default:
        return res.status(500).json({
          error: true,
          message: "Database error occurred",
          code: "DATABASE_ERROR",
        });
    }
  }

  // Handle Prisma validation errors
  if (error instanceof Prisma.PrismaClientValidationError) {
    return res.status(400).json({
      error: true,
      message: "Invalid data provided",
      code: "VALIDATION_ERROR",
    });
  }

  // Handle custom AppError
  if (error instanceof AppError) {
    return res.status(error.status).json({
      error: true,
      message: error.message,
      code: error.code,
      details: error.details,
    });
  }

  // Handle ValidationError
  if (error instanceof ValidationError) {
    return res.status(400).json({
      error: true,
      message: error.message,
      code: "VALIDATION_ERROR",
      field: error.field,
      value: error.value,
    });
  }

  // Handle network errors
  if (error.name === "NetworkError" || error.message.includes("fetch")) {
    return res.status(503).json({
      error: true,
      message: "Service temporarily unavailable",
      code: "NETWORK_ERROR",
    });
  }

  // Default error response
  return res.status(500).json({
    error: true,
    message:
      process.env.NODE_ENV === "production"
        ? "Internal server error"
        : error.message,
    code: "INTERNAL_ERROR",
  });
};

// Async error wrapper
export const asyncHandler = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

// Validation error helper
export const createValidationError = (
  field: string,
  message: string,
  value?: any,
) => {
  return new ValidationError(field, message, value);
};

// App error helper
export const createAppError = (
  message: string,
  status: number = 500,
  code?: string,
) => {
  return new AppError(message, status, code);
};
