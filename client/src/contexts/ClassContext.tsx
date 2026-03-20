"use client"

import React, { createContext, useContext, ReactNode } from "react";
import { useClasses } from "@/hooks/useClasses";

const ClassContext = createContext<ReturnType<typeof useClasses> | undefined>(
  undefined,
);

export function ClassProvider({ children }: { children: ReactNode }) {
  const value = useClasses();
  return (
    <ClassContext.Provider value={value}>{children}</ClassContext.Provider>
  );
}

export function useClassContext() {
  const ctx = useContext(ClassContext);
  if (!ctx)
    throw new Error("useClassContext must be used within a ClassProvider");
  return ctx;
}
