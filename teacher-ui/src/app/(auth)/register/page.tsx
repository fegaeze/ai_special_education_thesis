"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { API_ENDPOINTS, ROUTES } from "@/lib/config";

const registerSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.email({ message: "Invalid email address" }),
  password: z.string().min(8, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(1, "Please confirm your password"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type RegisterForm = z.infer<typeof registerSchema>;

export default function TeacherRegisterPage() {
  const router = useRouter();
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
    try {
      const res = await fetch(API_ENDPOINTS.register, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          email: data.email, 
          password: data.password,
          name: data.fullName 
        }),
      });

      if (!res.ok) {
        const result = await res.json();
        toast.error(result.error || "We couldn't register you. Please try again.");
        return;
      }
      
      toast.success("Registration successful! Redirecting to login...");
      router.push(ROUTES.login);
    } catch (err: any) {
      toast.error("Registration failed. Please try again.");
    } finally {
      reset();
      setIsLoading(false);
    }
  };

  return (
      <div className="w-full max-w-md mx-auto min-h-[500px] flex flex-col justify-center">
        <img src="/images/nutikas-logo.svg" alt="Nutikas Logo" className="h-12 mx-auto mb-2" />
        <div className="my-8">
          <div className="text-blue-700 text-xs uppercase font-bold">Create your account</div>
          <div className="text-gray-500 text-sm font-medium max-w-xs mt-2">Sign up as a Nutikas teacher and guide your class through AI-powered math learning</div>
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
            {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              autoComplete="email"
              {...register("email")}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-700 text-gray-900 bg-white"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              autoComplete="new-password"
              {...register("password")}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-700 text-gray-900 bg-white"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>
          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              autoComplete="new-password"
              {...register("confirmPassword")}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-700 text-gray-900 bg-white"
            />
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded font-semibold hover:bg-blue-800 transition flex items-center justify-center gap-2"
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
          </button>
        </form>
        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account? <a href={ROUTES.login} className="text-blue-700 font-semibold hover:underline">Sign in</a>
        </div>
      </div>
  );
} 