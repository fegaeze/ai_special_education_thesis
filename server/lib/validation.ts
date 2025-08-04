import { z } from "zod";

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
