/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import Link from "next/link";
import Login from "@/components/auth/login";
import Programmer from "./components/intro";


export default async function index() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <main className="flex w-full  flex-col justify-center items-start md:justify-start  md:p-24 py-24">
      {user ? (
        <>
          <div className="z-10 w-full max-w-5xl items-start justify-center font-mono text-sm flex">
            <p className=" flex md:text-xl  text-cyan-500 w-full justify-center  pb-6 md:pt-8 py-24  ">
              How to become a
              <span className="font-mono font-bold md:px-4 px-2  ">Programmer!</span>
            </p>
          </div>
          <div className="w-full max-w-5xl items-start justify-center font-mono text-sm flex">
            <Programmer />
          </div>
        </>
      ) : (
        <Login />
      )}
    </main>
  );
}
