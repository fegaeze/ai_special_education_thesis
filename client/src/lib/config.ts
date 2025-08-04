import { CONFIG_ERRORS } from "./errors";

// Environment Configuration
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
const NODE_ENV = process.env.NODE_ENV || "development";

// Configuration validation
if (!API_BASE_URL) {
  throw new Error(CONFIG_ERRORS.MISSING_API_URL);
}

export const API_ENDPOINTS = {
  base: API_BASE_URL,
  register: `${API_BASE_URL}/api/teachers/auth/register`,
  login: `${API_BASE_URL}/api/teachers/auth/login`,
  classes: `${API_BASE_URL}/api/classes`,
  problems: `${API_BASE_URL}/api/problems`,
  quiz: `${API_BASE_URL}/api/quiz`,
} as const;

export const ROUTES = {
  login: "/login",
  register: "/register",
  dashboard: "/teacher-dashboard",
  modelEvaluations: "/model-evaluations",
  quiz: "/quiz",
} as const;

export const CONFIG = {
  API_BASE_URL,
  NODE_ENV,
  IS_PRODUCTION: NODE_ENV === "production",
  IS_DEVELOPMENT: NODE_ENV === "development",
} as const;

// Type exports
export type ApiEndpoint = keyof typeof API_ENDPOINTS;
export type Route = keyof typeof ROUTES;
