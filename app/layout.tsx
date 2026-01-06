import type React from "react";
import type { Metadata } from "next";
import { Arimo, Caprasimo } from "next/font/google";
import "../styles/globals.css";
import { AuroraEffect } from "@/components/aurora-effect";
import { ThemeProvider } from "@/providers/theme-provider";
import ShortcutsMenuProvider from "@/providers/shortcuts-provider";
import { ShortcutsButton } from "@/components/shortcuts-button";
import { Toaster } from "sonner";
import { Reveal } from "@/components/animations/reveal";
import { Bubble } from "@/components/animations/bubble";

const arimo = Arimo({
  subsets: ["latin"],
  display: "swap",
});

// const caprasimo = Caprasimo({
//   weight: "400",
//   subsets: ["latin"],
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "Ernesto Reyes",
  description:
    "Portfolio Website of Ernesto Reyes - Software Engineer & Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${arimo.className}`}>
        <ThemeProvider>
          <AuroraEffect>
            <div className="flex flex-col md:max-w-4xl max-w-xl w-full max-h-2/3 h-full mx-auto rounded-lg bg-glass backdrop-blur-2xl border border-trim shadow-md">
              <header className="flex flex-row justify-between items-center px-5 py-3 border-b border-trim flex-shrink-0">
                <div className="flex flex-row gap-x-3">
                  <div className="rounded-full w-3 h-3 bg-red-400" />
                  <div className="rounded-full w-3 h-3 bg-yellow-400" />
                  <div className="rounded-full w-3 h-3 bg-green-400" />
                </div>
                <ShortcutsMenuProvider>
                  <ShortcutsButton />
                </ShortcutsMenuProvider>
              </header>
              <div className="flex-grow overflow-y-auto">{children}</div>
            </div>
            {/* <footer className="absolute bottom-2 text-center text-sm left-1/2 -translate-x-1/2 -translate-y-1/2">
              Copyright © 2025 Ernesto Reyes. All rights reserved.
            </footer> */}
            <Toaster richColors position="bottom-center" />
          </AuroraEffect>
        </ThemeProvider>
      </body>
    </html>
  );
}
