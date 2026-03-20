import { API_ERRORS } from "./errors";

export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  status: number;
}

// Fires when any request returns 401 so AuthContext can log the user out.
export const unauthorizedEvent =
  globalThis.window === undefined
    ? null
    : new EventTarget();

// ---------------------------------------------------------------------------
// Token store — module-level so apiFetch can always access it without needing
// React context. AuthContext calls setAuthToken on login / restore / logout.
// ---------------------------------------------------------------------------
const TOKEN_KEY = "auth_token";
let _token: string | null = null;

export function setAuthToken(token: string | null) {
  _token = token;
  if (globalThis.window === undefined) return;
  if (token) {
    localStorage.setItem(TOKEN_KEY, token);
  } else {
    localStorage.removeItem(TOKEN_KEY);
  }
}

export function loadAuthToken(): string | null {
  if (globalThis.window === undefined) return null;
  _token = localStorage.getItem(TOKEN_KEY);
  return _token;
}

/**
 * Wrapper around fetch that:
 * - Always sends cookies (credentials: "include")
 * - Adds Authorization: Bearer header when a token is available
 * - Never throws — returns { data, error, status }
 * - Fires "unauthorized" event on 401 for global logout handling
 * - Handles non-JSON server error bodies gracefully
 */
export async function apiFetch<T = unknown>(
  url: string,
  options?: RequestInit,
): Promise<ApiResponse<T>> {
  const token = _token ?? loadAuthToken();
  const authHeader = token ? { Authorization: `Bearer ${token}` } : {};

  try {
    const res = await fetch(url, {
      ...options,
      credentials: "include",
      headers: {
        ...authHeader,
        ...options?.headers,
      },
    });

    const contentType = res.headers.get("content-type") ?? "";
    const isJson = contentType.includes("application/json");

    if (res.ok) {
      const data = isJson ? ((await res.json()) as T) : (null as T);
      return { data, error: null, status: res.status };
    }

    // Emit global 401 event so AuthContext can log out without coupling
    if (res.status === 401) {
      unauthorizedEvent?.dispatchEvent(new Event("unauthorized"));
    }

    if (isJson) {
      const body = await res.json().catch(() => ({}));
      const message =
        body?.message ||
        (res.status >= 500 ? API_ERRORS.SERVER_ERROR : API_ERRORS.UNKNOWN_ERROR);
      return { data: null, error: message, status: res.status };
    }

    const message =
      res.status >= 500 ? API_ERRORS.SERVER_ERROR : API_ERRORS.UNKNOWN_ERROR;
    return { data: null, error: message, status: res.status };
  } catch {
    return { data: null, error: API_ERRORS.NETWORK_ERROR, status: 0 };
  }
}
