"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

import Header from "@/components/shared/navigation/Header";
import { ErrorBoundary } from "@/components/shared/ErrorBoundary";
import { ClassProvider } from "@/contexts/ClassContext";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login");
    }
  }, [router, isAuthenticated, isLoading]);

  return (
    <ErrorBoundary>
      <ClassProvider>
        <div className="min-h-screen flex flex-col bg-gray-100">
          <Header />
          <main className="py-6 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">{children}</div>
          </main>
        </div>
      </ClassProvider>
    </ErrorBoundary>
  );
}
