/* eslint-disable @next/next/no-img-element */
"use client"

import * as React from "react"
import { useSearchParams } from "next/navigation"
import { signIn } from "next-auth/react"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import toast from "react-hot-toast";


import { cn } from "@/lib/utils"
import { userAuthSchema } from "@/lib/validations/auth"
// import { toast } from "@/ui/toast"
import { Icons } from "@/components/shared/icons"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type FormData = z.infer<typeof userAuthSchema>

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userAuthSchema),
  })
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [emailSent, setEmailSent] = React.useState<boolean>(false)
  const searchParams = useSearchParams()

  async function onSubmit(data: FormData) {
    setIsLoading(true)

    const signInResult = await signIn("email", {
      email: data.email.toLowerCase(),
      redirect: false,

      callbackUrl: "/",
    })
    if (signInResult?.ok) {
      setIsLoading(false);
      setEmailSent(true);
      toast.success("Check your email for a login link!");

    } else {
        setIsLoading(false);
        toast.error("Something went wrong. Please try again later.");
    }
    setIsLoading(false)
    // toast.success("Logged in! Redirecting...");
  }

  return (
    <div
      className={cn("flex justify-center flex-col items-center", className)}
      {...props}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="pb-4">
        <div className="flex flex-col">
          {emailSent ? (
            <h1 className=" text-cyan-500 text-sm text-center  font-medium">
              A Magic Link has been sent to your email.
            </h1>
          ) : (
            <>
              <div className="flex flex-col space-x-10">
                <input
                  id="email"
                  placeholder="name@example.com"
                  className="my-0 mb-2  flex h-9 w-full text-cyan-500 rounded-3xl border border-cyan-500 text-left py-2 px-5 text-sm placeholder:text-cyan-500 focus:placeholder:text-cyan-500 bg-transparent focus:border-cyan-500 shadow-2xl shadow-cyan-500 focus:outline-none "
                  type="email"
                  autoCapitalize="none"
                  autoComplete="none"
                  autoCorrect="off"
                  // name="email"
                  disabled={isLoading}
                  {...register("email")}
                />
                {errors?.email && (
                  <p className="px-1 text-xs text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="py-10">
                <button
                  className=" inline-flex items-center justify-center w-full rounded-sm bg-transparent px-8 py-2.5 text-center text-sm font-medium text-cyan-500 focus:outline-none  md:mr-0"
                  disabled={isLoading}
                >
                  {isLoading && (
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  <span className="text-cyan-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 ml-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </>
          )}
        </div>
      </form>
    </div>
  );
}
