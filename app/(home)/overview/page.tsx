import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Overview from "./overview";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex w-full h-full flex-col items-center justify-start md:justify-between md:p-10 pt-10 md:pt-10 ">
      <h1 className="text-black  md:text-2xl">
        <p className=" flex text-xl  text-cyan-500 w-full justify-center  pb-6  pt-8    ">
          Program
          <span className="font-mono font-bold px-4 ">Overview</span>
        </p>
        <p className="text-gray-50 md:text-sm hidden md:flex">
          Hands-on exercises are essential in the learning process, reinforcing
          lecture concepts and enabling application in real-world situations.
          This program offers multiple exercises to practice and build web
          applications, completed using free and user-friendly text editors like
          Visual Studio Code or Sublime Text, and viewed in a web browser
        </p>
      </h1>
      <div className="flex flex-col space-y-6 w-full h-full py-20">
        <Overview />
        <Link
          // type="button"
          href="/get-started"
          className="text-sm items-center justify-center py-10 inline-flex text-right text-cyan-500"
        >
          Next
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
        </Link>
      </div>
    </main>
  );
}
