"use client";

import { Suspense, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import { z } from "zod";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

import { zodSafeResolver } from "@/lib/zod-safe-resolver";
import { ROUTES } from "@/lib/config";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { VALIDATION_MESSAGES } from "@/lib/errors";

const loginSchema = z.object({
  email: z.string().email({ message: VALIDATION_MESSAGES.EMAIL_INVALID }),
  password: z.string().min(1, VALIDATION_MESSAGES.PASSWORD_REQUIRED),
});

type LoginForm = z.infer<typeof loginSchema>;

// Reads ?reason=session_expired and surfaces it as a toast.
// Must be a separate component so useSearchParams is inside <Suspense>.
function SessionExpiredNotice() {
  const params = useSearchParams();

  useEffect(() => {
    if (params.get("reason") === "session_expired") {
      toast.error("Your session has expired. Please log in again.");
    }
  }, [params]);

  return null;
}

function LoginForm() {
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodSafeResolver(loginSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: LoginForm) => {
    setIsLoading(true);
    await login(data);
    setIsLoading(false);
  };

  return (
    <>
      <div className="mb-8">
        <div className="text-blue-700 text-xs uppercase font-bold">
          Sign in to your account
        </div>
        <div className="text-gray-500 text-sm font-medium max-w-xs mt-2">
          Welcome back to Nutikas! Please enter your login details to access
          your dashboard.
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <input
            type="email"
            placeholder="Email"
            autoComplete="email"
            {...register("email")}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-700 text-gray-900 bg-white"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <input
            type="password"
            placeholder="Enter password"
            autoComplete="current-password"
            {...register("password")}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-700 text-gray-900 bg-white"
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          variant="default"
          className="w-full flex items-center justify-center gap-2 text-white"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Logging in...
            </>
          ) : (
            "Login"
          )}
        </Button>
      </form>

      <div className="mt-6 text-center text-sm text-gray-600">
        Don&apos;t have an account?{" "}
        <Link
          prefetch
          href={ROUTES.register}
          className="text-blue-700 font-semibold hover:underline"
        >
          Get Started
        </Link>
      </div>
    </>
  );
}

export default function TeacherLoginPage() {
  return (
    <>
      <Suspense>
        <SessionExpiredNotice />
      </Suspense>
      <LoginForm />
    </>
  );
}
