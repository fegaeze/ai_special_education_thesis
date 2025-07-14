"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { API_ENDPOINTS, ROUTES } from "@/lib/config";

const loginSchema = z.object({
  email: z.email({ message: "Invalid email address" }),
  password: z.string().min(1, "Password is required"),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function TeacherLoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    setIsLoading(true);
    try {
      const res = await fetch(API_ENDPOINTS.login, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) {
        const result = await res.json();
        toast.error(result.error || "We couldn't log you in. Please try again.");
        return;
      }
      
      const result = await res.json();
      localStorage.setItem("token", result.token);
      toast.success("Login successful!");
      router.push(ROUTES.dashboard);
    } catch (err: any) {
      toast.error("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
      <div className="w-full max-w-md mx-auto min-h-[500px] flex flex-col justify-center">
        <img src="/images/nutikas-logo.svg" alt="Nutikas Logo" className="h-12 mx-auto mb-2" />
        <div className="my-8">
          <div className="text-blue-700 text-xs uppercase font-bold">Sign in to your account</div>
          <div className="text-gray-500 text-sm font-medium max-w-xs mt-2">Welcome back to Nutikas! Please enter your login details to access your dashboard.</div>
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
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter password"
              autoComplete="current-password"
              {...register("password")}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-700 text-gray-900 bg-white"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded font-semibold hover:bg-blue-800 transition flex items-center justify-center gap-2"
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
          </button>
        </form>
        <div className="mt-6 text-center text-sm text-gray-600">
          Don&apos;t have an account? <a href={ROUTES.register} className="text-blue-700 font-semibold hover:underline">Get Started</a>
        </div>
      </div>
  );
} 