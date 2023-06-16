"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import Link from "next/link";

export default function Interim() {
  return (
    <motion.div
      className="z-50 w-full space-y-24 md:py-28"
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <div className="flex w-full justify-center flex-col md:flex-row   items-center md:justify-between md:px-28 md:space-x-16 pt-20  md:pt-5 text-start ">
        <div className="w-full md:hidden items-center justify-start">
          <Image src="/exam.svg" width={300} height={300} alt="" />
        </div>
        <div className="flex w-full flex-col justify-start ">
          <h1 className="text-black pt-24 md:text-2xl">
            <span className="md:mr-2 md:text-4xl  w-full flex text-2xl font-extrabold text-gray-50">
              Start here.
            </span>
          </h1>
          <p className="text-gray-50 md:pt-4 pt-4 text-xs"></p>
          <Link
            href="/code-first-hand"
            className="text-cyan-500 inline-flex md:pt-4 pt-4 text-xs"
          >
            <span className="text-cyan-500 mr-4">✔</span>
            HTML and the Web - Learn the basics of HTML and the Web
          </Link>
          <Link
            href="/code-second-hand-css"
            className="text-cyan-500 inline-flex md:pt-6 pt-4 text-xs"
          >
            <span className="text-cyan-500 mr-4">✔</span>
            CSS and Bootsrap - Learn the basics of CSS and Bootstrap
          </Link>
          <Link
            href="#"
            className="text-gray-700 inline-flex md:pt-6 pt-4 text-xs"
          >
            <span className="text-gray-700  mr-4">✔</span>
            Diving into JavaScript and Nodejs
          </Link>
          <Link
            href="#"
            className="text-gray-700 inline-flex md:pt-6 pt-4 text-xs"
          >
            <span className="text-gray-700  mr-4">✔</span>
            Reactjs and Express. What are they?
          </Link>
          <Link
            href="#"
            className="text-gray-700 inline-flex md:pt-6 pt-4 text-xs"
          >
            <span className="text-gray-700  mr-4">✔</span>
            Register for the Demo Day
          </Link>
        </div>
        <div className="hidden md:flex w-full items-start justify-start md:pt-12 ">
          <div className="w-full items-center justify-start">
            <Image src="/hacker.svg" width={300} height={300} alt="" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
