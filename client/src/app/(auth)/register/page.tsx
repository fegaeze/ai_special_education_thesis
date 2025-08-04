"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { ROUTES } from "@/lib/config";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { VALIDATION_MESSAGES } from "@/lib/errors";

const registerSchema = z
  .object({
    fullName: z.string().min(1, VALIDATION_MESSAGES.FULL_NAME_REQUIRED),
    email: z.string().email({ message: VALIDATION_MESSAGES.EMAIL_INVALID }),
    password: z.string().min(8, VALIDATION_MESSAGES.PASSWORD_MIN_LENGTH),
    confirmPassword: z
      .string()
      .min(1, VALIDATION_MESSAGES.CONFIRM_PASSWORD_REQUIRED),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: VALIDATION_MESSAGES.PASSWORDS_DONT_MATCH,
    path: ["confirmPassword"],
  });

type RegisterForm = z.infer<typeof registerSchema>;

export default function TeacherRegisterPage() {
  const { register: registerUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterForm) => {
    setIsLoading(true);
    const success = await registerUser(data);
    if (success) {
      reset();
    }
    setIsLoading(false);
  };

  return (
    <>
      <div className="mb-8">
        <div className="text-blue-700 text-xs uppercase font-bold">
          Create your account
        </div>
        <div className="text-gray-500 text-sm font-medium max-w-xs mt-2">
          Sign up as a Nutikas teacher and guide your class through AI-powered
          math learning
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <input
            type="text"
            placeholder="Full Name"
            autoComplete="name"
            {...register("fullName")}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-700 text-gray-900 bg-white"
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs mt-1">
              {errors.fullName.message}
            </p>
          )}
        </div>
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
            placeholder="Password"
            autoComplete="new-password"
            {...register("password")}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-700 text-gray-900 bg-white"
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            autoComplete="new-password"
            {...register("confirmPassword")}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-700 text-gray-900 bg-white"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs mt-1">
              {errors.confirmPassword.message}
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
              Registering...
            </>
          ) : (
            "Register"
          )}
        </Button>
      </form>
      <div className="mt-6 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <a
          href={ROUTES.login}
          className="text-blue-700 font-semibold hover:underline"
        >
          Sign in
        </a>
      </div>
    </>
  );
}
