"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { API_ENDPOINTS, ROUTES } from "@/lib/config";
import { AUTH_ERRORS, SUCCESS_MESSAGES } from "@/lib/errors";
import { apiFetch, unauthorizedEvent } from "@/lib/api-fetch";
import type { LoginData, RegisterData, AuthUser, AuthState } from "@/hooks/useAuth";

// ── user persistence (localStorage stores user data only — NOT the token) ───
const USER_KEY = "auth_user";

function saveUser(user: AuthUser) {
  try {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  } catch {}
}

function loadUser(): AuthUser | null {
  try {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? (JSON.parse(raw) as AuthUser) : null;
  } catch {
    return null;
  }
}

function clearUser() {
  try {
    localStorage.removeItem(USER_KEY);
  } catch {}
}

// ── initial state: sync read from localStorage (no async, no flash) ─────────
function initState(): AuthState {
  if (globalThis.window === undefined) {
    return { user: null, token: null, isAuthenticated: false, isLoading: false };
  }
  const user = loadUser();
  return user
    ? { user, token: null, isAuthenticated: true, isLoading: false }
    : { user: null, token: null, isAuthenticated: false, isLoading: false };
}

// ── context types ────────────────────────────────────────────────────────────
interface AuthContextValue extends AuthState {
  login: (data: LoginData) => Promise<boolean>;
  register: (data: RegisterData) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

// ── helpers for full-page auth redirects ─────────────────────────────────────
// Always use window.location so the browser makes a fresh request and
// middleware runs before any page content is painted. This eliminates flashes.
function redirectToLogin(reason?: string) {
  const url = reason ? `/login?reason=${reason}` : "/login";
  globalThis.window.location.replace(url);
}

export function AuthProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const router = useRouter();
  const [authState, setAuthState] = useState<AuthState>(initState);

  // ── background server validation ──────────────────────────────────────────
  // Fires once per app mount. If the httpOnly cookie is gone / expired
  // server-side, we clear local state and redirect to login immediately.
  useEffect(() => {
    const user = loadUser();
    if (!user) return;

    fetch(API_ENDPOINTS.validate, {
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) {
          clearUser();
          redirectToLogin("session_expired");
        }
      })
      .catch(() => {
        // Network error — keep local state, don't log out
      });
  }, []);

  // ── global 401 handler ────────────────────────────────────────────────────
  // Any apiFetch that gets a 401 fires this event.
  useEffect(() => {
    const emitter = unauthorizedEvent;
    if (!emitter) return;

    const handle = () => {
      clearUser();
      redirectToLogin("session_expired");
    };

    emitter.addEventListener("unauthorized", handle);
    return () => emitter.removeEventListener("unauthorized", handle);
  }, []);

  // ── login ─────────────────────────────────────────────────────────────────
  const login = useCallback(
    async (data: LoginData): Promise<boolean> => {
      const { data: result, error } = await apiFetch<{ user: AuthUser }>(
        API_ENDPOINTS.login,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        },
      );

      if (error || !result) {
        toast.error(error || AUTH_ERRORS.LOGIN_FAILED);
        return false;
      }

      saveUser(result.user);
      setAuthState({
        user: result.user,
        token: null,
        isAuthenticated: true,
        isLoading: false,
      });
      // Client-side push — middleware already let the login page through, and
      // the dashboard layout trusts middleware so there's no guard to trip over.
      router.push(ROUTES.dashboard);
      return true;
    },
    [router],
  );

  // ── register ──────────────────────────────────────────────────────────────
  const register = useCallback(
    async (data: RegisterData): Promise<boolean> => {
      const { error } = await apiFetch(API_ENDPOINTS.register, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
          name: data.fullName,
        }),
      });

      if (error) {
        toast.error(error);
        return false;
      }

      toast.success(SUCCESS_MESSAGES.REGISTER_SUCCESS);
      router.push(ROUTES.login);
      return true;
    },
    [router],
  );

  // ── logout ────────────────────────────────────────────────────────────────
  // Awaiting the server call ensures the httpOnly cookie is cleared before the
  // new request triggered by window.location.replace (which middleware reads).
  const logoutAsync = useCallback(async () => {
    await apiFetch(API_ENDPOINTS.logout, {
      method: "POST",
    }).catch(() => {});
    clearUser();
    globalThis.window.location.replace("/login");
  }, []);

  // Expose a synchronous signature so callers can safely use it as an onClick
  // handler without TypeScript complaining about unhandled Promise returns.
  const logout = useCallback(() => {
    void logoutAsync();
  }, [logoutAsync]);

  const value = useMemo<AuthContextValue>(
    () => ({ ...authState, login, register, logout }),
    [authState, login, register, logout],
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within <AuthProvider>");
  return ctx;
}
