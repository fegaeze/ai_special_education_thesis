"use client";

import Header from "@/components/shared/navigation/Header";
import { ErrorBoundary } from "@/components/shared/ErrorBoundary";
import { ClassProvider } from "@/contexts/ClassContext";

// Middleware enforces authentication before this layout renders, so we can
// trust that any visitor here has a valid session. No client-side guard needed.
export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
