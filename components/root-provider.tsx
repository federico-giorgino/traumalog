"use client";

import { ThemeProvider } from "next-themes";
import React, { ReactNode } from "react";

export function RootProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
