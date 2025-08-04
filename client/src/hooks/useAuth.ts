import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { API_ENDPOINTS, ROUTES } from "@/lib/config";
import { AUTH_ERRORS, SUCCESS_MESSAGES, getErrorMessage } from "@/lib/errors";

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

export function useAuth() {
  const router = useRouter();
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    token: null,
    isAuthenticated: false,
    isLoading: true,
  });

  // Initialize auth state on mount
  useEffect(() => {
    const validateToken = async () => {
      const token = getToken();
      if (!token) {
        setAuthState({
          user: null,
          token: null,
          isAuthenticated: false,
          isLoading: false,
        });
        return;
      }

      try {
        // Validate token with backend
        const response = await fetch(
          `${API_ENDPOINTS.base}/api/teachers/auth/validate`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          },
        );

        if (response.ok) {
          const userData = await response.json();
          setAuthState({
            user: userData.user,
            token,
            isAuthenticated: true,
            isLoading: false,
          });
        } else {
          // Token is invalid, remove it and redirect to login
          removeToken();
          setAuthState({
            user: null,
            token: null,
            isAuthenticated: false,
            isLoading: false,
          });
          router.push(ROUTES.login);
        }
      } catch (error) {
        console.error("Token validation error:", error);
        // On network error, remove token and redirect to login
        removeToken();
        setAuthState({
          user: null,
          token: null,
          isAuthenticated: false,
          isLoading: false,
        });
        router.push(ROUTES.login);
      }
    };

    validateToken();
  }, [router]);

  // Login function
  const login = useCallback(
    async (data: LoginData): Promise<boolean> => {
      try {
        const res = await fetch(API_ENDPOINTS.login, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        if (!res.ok) {
          const result = await res.json();
          toast.error(result.error || AUTH_ERRORS.LOGIN_FAILED);
          return false;
        }

        const result = await res.json();
        setToken(result.token);

        setAuthState({
          user: result.user || null, // Backend should return user info
          token: result.token,
          isAuthenticated: true,
          isLoading: false,
        });

        toast.success(SUCCESS_MESSAGES.LOGIN_SUCCESS);
        router.push(ROUTES.dashboard);
        return true;
      } catch (error) {
        console.error("Login error:", error);
        toast.error(AUTH_ERRORS.LOGIN_NETWORK_ERROR);
        return false;
      }
    },
    [router],
  );

  // Register function
  const register = useCallback(
    async (data: RegisterData): Promise<boolean> => {
      try {
        const res = await fetch(API_ENDPOINTS.register, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: data.email,
            password: data.password,
            name: data.fullName,
          }),
        });

        if (!res.ok) {
          const result = await res.json();
          toast.error(result.error || AUTH_ERRORS.REGISTER_FAILED);
          return false;
        }

        toast.success(SUCCESS_MESSAGES.REGISTER_SUCCESS);
        router.push(ROUTES.login);
        return true;
      } catch (error) {
        console.error("Registration error:", error);
        toast.error(AUTH_ERRORS.REGISTER_NETWORK_ERROR);
        return false;
      }
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
