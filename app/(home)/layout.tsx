import Background from '@/components/shared/background'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import clsx from 'clsx'
const inter = Inter({ subsets: ['latin'] })
import { Toaster } from "@/ui/toast";

export const metadata = {
  title: 'Bootcamp Starter',
  description: 'A starter for bootcamps, workshops, and other events.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-black w-full justify-center items-center px-1.5 md:px-28 h-full">
      <body className={clsx("flex w-full h-full", inter.className)}>
        <Background />
        {children}
      </body>
    </html>
  );
}
