import { z } from "zod";
import Joi from "joi";
import { createAppError } from "../middleware/error-handler";

// Problem filter schemas
export const problemFilterSchema = z.object({
  category: z.string().optional(),
  subcategory: z.string().optional(),
  model: z.string().optional(),
  includeEvaluations: z
    .string()
    .optional()
    .transform((val) => val === "true"),
  showFailuresOnly: z
    .string()
    .optional()
    .transform((val) => val === "true"),
});

// Validation functions
export function validateQuery<T extends z.ZodType>(
  schema: T,
  query: any,
): z.infer<T> {
  return schema.parse(query);
}

export function validateParams<T extends z.ZodType>(
  schema: T,
  params: any,
): z.infer<T> {
  return schema.parse(params);
}

export function validateOrThrow<T>(schema: Joi.ObjectSchema<T>, payload: unknown): T {
  const { error, value } = schema.validate(payload);
  if (error) {
    throw createAppError(error.details[0].message, 400, "BAD_REQUEST");
  }
  return value as T;
}
