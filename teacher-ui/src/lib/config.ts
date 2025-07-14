export const API_BASE_URL = "http://localhost:4000";

export const API_ENDPOINTS = {
  register: `${API_BASE_URL}/api/register`,
  login: `${API_BASE_URL}/api/login`,
} as const;

export const ROUTES = {
  login: "/login",
  register: "/register",
  dashboard: "/dashboard",
} as const; 