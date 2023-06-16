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
      className="z-50 w-full py-16 md:py-10  justify-center items-start flex flex-col "
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <div className="flex w-full  items-start justify-between space-x-16 md:px-28 px-4  pt-5 text-start ">
        <div className="flex w-full flex-col ">
          <div className="w-full md:hidden items-center md:pt-24 pb-12 justify-start">
            <Image src="/hacker.svg" width={500} height={500} alt="" />
          </div>
          <h1 className="text-black hidden md:flex md:pt-24 pb-16 md:pb-0 md:text-2xl"></h1>
          <h1 className="font-light text-gray-50 md:pt-24 md:text-sm flex w-full">
            Welcome to the world of programming!
          </h1>

          <div className="mt-8 flex w-full gap-4">
            <a className=" w-full">
              <motion.button
                // type="button"
                onClick={() => setState("interim")}
                className="text-sm inline-flex text-left text-cyan-500"
              >
                Let{"'"}s explore the world of programming
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
              </motion.button>
            </a>
          </div>
        </div>

        <div className=" hidden md:flex w-full items-center justify-end md:pt-12 ">
          <div className="w-full items-center justify-start">
            <Image src="/hacker.svg" width={500} height={500} alt="" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
