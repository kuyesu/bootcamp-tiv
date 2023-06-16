"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { UserAuthForm } from "@/components/auth/user-auth-form";

export default function page() {
  return (
    <motion.div
      className="z-50 w-full h-full flex-col flex items-center justify-center px-10 space-y-16 py-10"
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <p className="text-gray-50 z-10 text-md">Start here with your email address</p>
      <UserAuthForm />
    </motion.div>
  );
}
