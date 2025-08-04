"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import Image from "next/image";
import { ROUTES } from "@/lib/config";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.push(ROUTES.dashboard);
    }
  }, [router, isAuthenticated, isLoading]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Illustration/Branding Section */}
      <div className="relative hidden md:flex w-2/3 bg-gradient-to-br from-blue-700 to-orange-500 items-center justify-center overflow-hidden">
        <Image
          src="/images/auth-bg.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          fill
          priority
        />
      </div>
      {/* Form Section */}
      <div className="flex flex-1 items-center justify-center bg-gradient-to-br from-white to-blue-50 py-12 px-8">
        <div className="w-full max-w-md mx-auto min-h-[500px] flex flex-col justify-center">
          <Image
            src="/images/nutikas-logo.png"
            alt="Nutikas Logo"
            className="mx-auto mb-24"
            width={100}
            height={100}
            priority
          />

          {children}
        </div>
      </div>
    </div>
  );
}
