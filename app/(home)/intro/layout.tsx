"use client";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/ui/toast";

export default function IntroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
