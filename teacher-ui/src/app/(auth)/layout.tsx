"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const authenticated = isAuthenticated();
    if (authenticated) {
      router.push('/dashboard');
    }
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Illustration/Branding Section */}
      <div className="relative hidden md:flex w-2/3 bg-gradient-to-br from-blue-700 to-orange-500 items-center justify-center overflow-hidden">
        <img src="/images/auth-bg.jpg" alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-60" />
      </div>
      {/* Form Section */}
      <div className="flex flex-1 items-center justify-center bg-gradient-to-br from-white to-blue-50 py-12 px-4">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>
    </div>
  );
} 