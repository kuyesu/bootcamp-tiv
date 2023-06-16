/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import { useDebounce } from "use-debounce";

/* eslint-disable @next/next/no-img-element */

export default function Intro({
  setState,
}: {
  setState: Dispatch<SetStateAction<string>>;
}) {
  const [loading, setLoading] = useState(true);
  const onLoad = () => {
    setLoading(false);
  };
  // workarouond to avoid the blinking effect when Spline loads
  const [opacity] = useDebounce(loading ? 0 : 1, 200);

  const [showText] = useDebounce(loading ? false : true, 800);

  return (
    <motion.div
      className="z-50 w-full space-y-24 py-28 md:py-10 pb-44 justify-center items-center flex flex-col "
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <div className="flex w-full  items-center justify-between space-x-16 md:px-28 px-4  pt-5 text-start ">
        <div className="flex w-full flex-col ">
          <div className="w-full md:hidden items-center md:pt-24 pb-24 justify-start">
            <Image src="/exam.svg" width={500} height={500} alt="" />
          </div>
          <h1 className="text-black hidden md:flex md:pt-24 pb-24 md:pb-0 md:text-2xl">
            <span className="mr-2 text-xl  text-cyan-500">
              The future belongs to those who believe in the beauty of their
              dreams.
            </span>
          </h1>
          <h1 className="font-light text-gray-50 md:pt-24 md:text-sm">
            Welcome, legend! Are you ready to take your career or studies to the
            next level?
          </h1>

          <div className="mt-8 flex w-full gap-4">
            <div className=" w-full">
              <motion.button
                // type="button"
                onClick={() => setState("interim")}
                className="  w-full rounded-md px-8 py-2.5 text-center text-sm font-medium text-cyan-500 border-cyan-500 border shadow-2xl shadow-cyan-500 focus:outline-none  md:mr-0"
              >
                Get early access
              </motion.button>
            </div>
          </div>
        </div>

        <div className=" hidden md:flex w-full items-center justify-end md:pt-12 ">
          <div className="w-full items-center justify-start">
            <Image src="/exam.svg" width={500} height={500} alt="" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
