import { API_ERRORS } from "./errors";

export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  status: number;
}

// Fires when any request returns 401 so AuthContext can log the user out.
export const unauthorizedEvent =
  typeof window !== "undefined"
    ? new EventTarget()
    : null;

/**
 * Wrapper around fetch that:
 * - Always sends cookies (credentials: "include")
 * - Never throws — returns { data, error, status }
 * - Fires "unauthorized" event on 401 for global logout handling
 * - Handles non-JSON server error bodies gracefully
 */
export async function apiFetch<T = unknown>(
  url: string,
  options?: RequestInit,
): Promise<ApiResponse<T>> {
  try {
    const res = await fetch(url, {
      ...options,
      credentials: "include",
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
