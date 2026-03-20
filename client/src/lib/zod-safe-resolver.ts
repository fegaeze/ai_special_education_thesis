import type { FieldError, FieldErrors, Resolver } from "react-hook-form";
import type { z } from "zod";

/**
 * Like zodResolver, but uses safeParse only — never throws ZodError.
 * Prevents Next/React devtools from logging validation failures as uncaught errors.
 */
export function zodSafeResolver<Schema extends z.ZodTypeAny>(
  schema: Schema,
): Resolver<z.infer<Schema>> {
  return async (values) => {
    const result = schema.safeParse(values);
    if (result.success) {
      return {
        values: result.data,
        errors: {},
      };
    }

    const fieldErrors: Partial<Record<string, FieldError>> = {};
    for (const issue of result.error.issues) {
      if (!issue.path.length) continue;
      const path = issue.path.join(".");
      if (fieldErrors[path]) continue;
      fieldErrors[path] = {
        type: issue.code,
        message: issue.message,
      };
    }

    return {
      values: {} as z.infer<Schema>,
      errors: fieldErrors as FieldErrors<z.infer<Schema>>,
    };
  };
}
