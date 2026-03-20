"use client"

import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import {
  type FallbackProps,
  ErrorBoundary as ReactErrorBoundary,
  getErrorMessage,
} from "react-error-boundary";

import Header from "./navigation/Header";
import { Button } from "../ui/button";
import { UI_MESSAGES } from "@/lib/errors";

function ErrorFallback({ error }: Readonly<Pick<FallbackProps, "error">>) {
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    fetch("/animations/errorIllustration.json")
      .then((res) => res.json())
      .then((data: object) => setAnimationData(data))
      .catch(() => setAnimationData(null));
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header hasError />
      <div className="flex-1 flex flex-col items-center justify-center px-4 bg-gray-100">
        {animationData ? (
          <Lottie
            animationData={animationData}
            loop
            autoplay
            className="w-100 h-70 mb-6 pointer-events-none object-contain"
          />
        ) : null}
        <div className="flex flex-col items-center justify-center z-10">
          <h2 className="text-xl font-semibold text-gray-700 text-center">
            Oops! Something went wrong.
          </h2>
          <p className="text-gray-500 mb-6 text-center max-w-md text-sm md:text-base">
            {getErrorMessage(error) || UI_MESSAGES.UNEXPECTED_ERROR}
          </p>
          <Button onClick={() => globalThis.window.location.reload()}>
            Refresh Page
          </Button>
        </div>
      </div>
    </div>
  );
}

export function ErrorBoundary({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ReactErrorBoundary>
  );
}
