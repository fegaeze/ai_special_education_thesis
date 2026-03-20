import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { jwtDecode } from "jwt-decode";
import { API_ENDPOINTS, ROUTES } from "@/lib/config";
import { AUTH_ERRORS, SUCCESS_MESSAGES, getErrorMessage } from "@/lib/errors";
import { apiFetch } from "@/lib/api-fetch";

// Types
export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AuthUser {
  id: number;
  name: string;
  email: string;
}

export interface AuthState {
  user: AuthUser | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

interface JwtPayload {
  teacherId: number;
  name: string;
  email: string;
  exp: number;
}

// Token management utilities
const getToken = (): string | null => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("token");
};

const setToken = (token: string): void => {
  if (typeof window === "undefined") return;
  localStorage.setItem("token", token);
};

const removeToken = (): void => {
  if (typeof window === "undefined") return;
  localStorage.removeItem("token");
};

/** Decode token and return user + validity without a network call. */
function readTokenLocally(token: string): {
  user: AuthUser;
  valid: boolean;
} | null {
  try {
    const payload = jwtDecode<JwtPayload>(token);
    const valid = payload.exp * 1000 > Date.now();
    return {
      user: { id: payload.teacherId, name: payload.name, email: payload.email },
      valid,
    };
  } catch {
    return null;
  }
}

export function useAuth() {
  const router = useRouter();

  // Initialise synchronously from localStorage so there is no loading flash.
  const [authState, setAuthState] = useState<AuthState>(() => {
    const token = getToken();
    if (!token) {
      return { user: null, token: null, isAuthenticated: false, isLoading: false };
    }
    const decoded = readTokenLocally(token);
    if (!decoded || !decoded.valid) {
      removeToken();
      return { user: null, token: null, isAuthenticated: false, isLoading: false };
    }
    return { user: decoded.user, token, isAuthenticated: true, isLoading: false };
  });

  // Background re-validation: silently invalidate if the server rejects the token
  // (e.g. secret rotated). Does NOT block rendering.
  useEffect(() => {
    const token = getToken();
    if (!token) return;

    fetch(`${API_ENDPOINTS.base}/api/teachers/auth/validate`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (!res.ok) {
          removeToken();
          setAuthState({ user: null, token: null, isAuthenticated: false, isLoading: false });
          router.push(ROUTES.login);
        }
      })
      .catch(() => {
        // Network error — keep the locally-decoded state, don't log out.
      });
  }, [router]);

  // Login function
  const login = useCallback(
    async (data: LoginData): Promise<boolean> => {
      const { data: result, error } = await apiFetch<{
        token: string;
        user?: AuthUser;
      }>(API_ENDPOINTS.login, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (error || !result) {
        toast.error(error || AUTH_ERRORS.LOGIN_FAILED);
        return false;
      }

      setToken(result.token);
      setAuthState({
        user: result.user || null,
        token: result.token,
        isAuthenticated: true,
        isLoading: false,
      });
      toast.success(SUCCESS_MESSAGES.LOGIN_SUCCESS);
      router.push(ROUTES.dashboard);
      return true;
    },
    [router],
  );

  // Register function
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

  // Logout function
  const logout = useCallback(() => {
    removeToken();
    setAuthState({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
    });
    toast.success(SUCCESS_MESSAGES.LOGOUT_SUCCESS);
    router.push(ROUTES.login);
  }, [router]);

  // Check if user is authenticated
  const checkAuth = useCallback(() => {
    const token = getToken();
    return !!token;
  }, []);

  // Get current token
  const getCurrentToken = useCallback(() => {
    return getToken();
  }, []);

  return {
    // State
    user: authState.user,
    token: authState.token,
    isAuthenticated: authState.isAuthenticated,
    isLoading: authState.isLoading,

    // Actions
    login,
    register,
    logout,
    checkAuth,
    getCurrentToken,
  };
}
