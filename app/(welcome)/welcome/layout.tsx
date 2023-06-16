import Background from "@/components/shared/background";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import clsx from "clsx";
import { Toaster } from "@/ui/toast";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bootcamp Starter",
  description: "A starter for bootcamps, workshops, and other events.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="bg-black w-full justify-center items-center px-10 md:px-28 h-full"
    >
      <body className={clsx("flex w-full h-full", inter.className)}>
        <Background />
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
