"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import LoadingDots from "@/components/shared/icon/loading-dots";
import Link from "next/link";

interface Option {
  value: string;
  label: string;
}

interface Option2 {
  value: string;
  label: string;
}

// @ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const profession = [
  { id: 1, name: "Developer" },
  { id: 2, name: "Student " },
  { id: 3, name: "Passionate about Technology" },
];

export default function Interim({
  setState,
}: {
  setState: Dispatch<SetStateAction<string>>;
}) {
  const [selectedProfession, setSelectedProfession] = useState(null);
  const [item, setItem] = useState(1);

  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const handleProgramSelect = (program) => {
    setSelectedProfession(program);
  };
  const handleNext = () => {
    setItem(item + 1);
  };

  const handleEnrollment = async () => {
    setLoading(true);
    const formDetails = {
      // @ts-ignore
      profession: selectedProfession.name,
    };
    fetch("/api/user/create", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDetails),
    }).then(async (res) => {
      setLoading(false);
      if (res.status === 200) {
        toast.success(
          "Your profile has been updated! Redirecting to dashboard..."
        );
        const data = await res.json();
        router.push("/intro");
      } else {
        toast.error(await res.text());
        setLoading(false);
      }
    });
  };

  return (
    <motion.div
      className="z-50 w-full space-y-5 md:py-28"
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <div className="flex w-full justify-start flex-col md:flex-row   items-start md:justify-between md:px-28 md:space-x-16 pt-8  md:pt-5 text-start ">
        <div className="w-full md:hidden items-center justify-start">
          <Image src="/exam.svg" width={300} height={300} alt="" />
        </div>
        <div className="flex w-full flex-col justify-start ">
          {item === 1 ? (
            <>
              <h1 className="text-black pt-10 md:text-2xl">
                <span className="md:mr-2 md:text-xl  w-full flex text-md  text-gray-50">
                  Find Your Inspiration
                </span>
              </h1>
              <p className="text-cyan-500 inline-flex md:pt-4 pt-2 text-xs">
                <span className="text-cyan-500 mr-4">✔</span>
                Look at cool projects and programs that have been created
              </p>
              <p className="text-cyan-500 inline-flex md:pt-4 pt-2 text-xs">
                <span className="text-cyan-500 mr-4">✔</span>
                Explore the different programming languages and what they can do
              </p>
              <p className="text-cyan-500 inline-flex md:pt-4 pt-2 text-xs">
                <span className="text-cyan-500 mr-4">✔</span>Find a programmer
                role model to learn from
              </p>
            </>
          ) : (
            <>
              {item === 2 ? (
                <>
                  <h1 className="text-black pt-10 md:text-2xl">
                    <span className="md:mr-2 md:text-xl  w-full flex text-md  text-gray-50">
                      Get the Basics Down
                    </span>
                  </h1>
                  <p className="text-cyan-500 inline-flex md:pt-4 pt-2 text-xs">
                    <span className="text-cyan-500 mr-4">✔</span>
                    Learn the fundamentals of programming: data types,
                    variables, functions, and loops
                  </p>
                  <p className="text-cyan-500 inline-flex md:pt-4 pt-2 text-xs">
                    <span className="text-cyan-500 mr-4">✔</span>
                    Practice, practice, practice!
                  </p>
                  <p className="text-cyan-500 inline-flex md:pt-4 pt-2 text-xs">
                    <span className="text-cyan-500 mr-4">✔</span>Find online
                    resources, tutorials, and books to help you learn
                  </p>
                </>
              ) : (
                <>
                  {item === 3 ? (
                    <>
                      <h1 className="text-black pt-10 md:text-2xl">
                        <span className="md:mr-2 md:text-xl  w-full flex text-md  text-gray-50">
                          Build Your First Program
                        </span>
                      </h1>
                      <p className="text-cyan-500 inline-flex md:pt-4 pt-2 text-xs">
                        <span className="text-cyan-500 mr-4">✔</span>
                        Choose a small project, such as a simple game or
                        calculator
                      </p>
                      <p className="text-cyan-500 inline-flex md:pt-4 pt-2 text-xs">
                        <span className="text-cyan-500 mr-4">✔</span>
                        Plan out your program using pseudocode
                      </p>
                      <p className="text-cyan-500 inline-flex md:pt-4 pt-2 text-xs">
                        <span className="text-cyan-500 mr-4">✔</span>Code your
                        program using your chosen language
                      </p>
                    </>
                  ) : (
                    <>
                      {item === 4 ? (
                        <>
                          <h1 className="text-black pt-10 md:text-2xl">
                            <span className="md:mr-2 md:text-xl  w-full flex text-md  text-gray-50">
                              Learn More Advanced Topics
                            </span>
                          </h1>
                          <p className="text-cyan-500 inline-flex md:pt-4 pt-2 text-xs">
                            <span className="text-cyan-500 mr-4">✔</span>
                            Explore object-oriented programming, algorithms, and
                            data structures
                          </p>
                          <p className="text-cyan-500 inline-flex md:pt-4 pt-2 text-xs">
                            <span className="text-cyan-500 mr-4">✔</span>
                            Get familiar with common tools and frameworks, such
                            as Git, GitHub, and React
                          </p>
                          <p className="text-cyan-500 inline-flex md:pt-4 pt-2 text-xs">
                            <span className="text-cyan-500 mr-4">✔</span>
                            Join online programming communities to learn from
                            other programmers
                          </p>
                        </>
                      ) : (
                        <>
                          {item === 5 ? (
                            <>
                              <h1 className="text-black pt-10 md:text-2xl">
                                <span className="md:mr-2 md:text-xl  w-full flex text-md  text-gray-50">
                                  Build More Complex Programs
                                </span>
                              </h1>
                              <p className="text-cyan-500 inline-flex md:pt-4 pt-2 text-xs">
                                <span className="text-cyan-500 mr-4">✔</span>
                                Challenge yourself with bigger projects, such as
                                building a website or app
                              </p>
                              <p className="text-cyan-500 inline-flex md:pt-4 pt-2 text-xs">
                                <span className="text-cyan-500 mr-4">✔</span>
                                Keep learning new programming languages and
                                technologies to expand your skillset
                              </p>
                            </>
                          ) : (
                            <>
                              {item === 6 ? (
                                <>
                                  <h1 className="text-black pt-10 md:text-2xl">
                                    <span className="md:mr-2 md:text-xl  w-full flex text-md  text-gray-50">
                                      Get Experience
                                    </span>
                                  </h1>
                                  <p className="text-cyan-500 inline-flex md:pt-4 pt-2 text-xs">
                                    <span className="text-cyan-500 mr-4">
                                      ✔
                                    </span>
                                    Build a portfolio of your projects to
                                    showcase your skills to potential employers
                                  </p>
                                  <p className="text-cyan-500 inline-flex md:pt-4 pt-2 text-xs">
                                    <span className="text-cyan-500 mr-4">
                                      ✔
                                    </span>
                                    Look for internships or entry-level jobs to
                                    gain practical experience
                                  </p>
                                  <p className="text-cyan-500 inline-flex md:pt-4 pt-2 text-xs">
                                    <span className="text-cyan-500 mr-4">
                                      ✔
                                    </span>
                                    Participate in coding competitions or
                                    hackathons to sharpen your skills and
                                    network with other programmers
                                  </p>
                                </>
                              ) : (
                                <>
                                  {item === 7 ? (
                                    <>
                                      <h1 className="text-black pt-10 md:text-2xl">
                                        <span className="md:mr-2 md:text-xl  w-full flex text-md  text-gray-50">
                                          Have Fun
                                        </span>
                                      </h1>
                                      <p className="text-cyan-500 inline-flex md:pt-4 pt-2 text-xs">
                                        <span className="text-cyan-500 mr-4">
                                          ✔
                                        </span>
                                        Remember to take breaks and enjoy the
                                        process of programming
                                      </p>
                                      <p className="text-cyan-500 inline-flex md:pt-4 pt-2 text-xs">
                                        <span className="text-cyan-500 mr-4">
                                          ✔
                                        </span>
                                        Try out fun coding challenges and
                                        puzzles to keep your skills sharp
                                      </p>
                                      <p className="text-cyan-500 inline-flex md:pt-4 pt-2 text-xs">
                                        <span className="text-cyan-500 mr-4">
                                          ✔
                                        </span>
                                        Collaborate with other programmers to
                                        work on fun projects and build new
                                        friendships
                                      </p>
                                    </>
                                  ) : (
                                    <>
                                      {item === 8 ? (
                                        <>
                                          <h1 className="text-black pt-10 md:text-2xl">
                                            <span className="md:mr-2 md:text-xl  w-full flex text-md  text-gray-50">
                                              Congratulations, you{"'"}re now a
                                              programmer!
                                            </span>
                                          </h1>
                                          <p className="text-cyan-500 inline-flex md:pt-4 pt-2 text-xs">
                                            <span className="text-cyan-500 mr-4">
                                              ✔
                                            </span>
                                            Keep learning, practicing, and
                                            building to become an even better
                                            programmer
                                          </p>
                                          <p className="text-cyan-500 inline-flex md:pt-4 pt-2 text-xs">
                                            <span className="text-cyan-500 mr-4">
                                              ✔
                                            </span>
                                            Welcome to the awesome world of
                                            programming!
                                          </p>
                                        </>
                                      ) : (
                                        <></>
                                      )}
                                    </>
                                  )}
                                </>
                              )}
                            </>
                          )}
                        </>
                      )}
                    </>
                  )}
                </>
              )}
            </>
          )}
          <div className=" w-full pt-12 left-0 ">
            {item > 7 ? (
              <Link
                href="/overview"
                className="text-sm inline-flex text-left text-gray-50"
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
            ) : (
              <motion.button
                // type="button"
                onClick={() => setItem(item + 1)}
                className="text-sm inline-flex text-left text-gray-50"
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
              </motion.button>
            )}
          </div>
        </div>
        <div className="hidden md:flex w-full items-start justify-start md:pt-12 ">
          <div className="w-full items-center justify-start">
            <Image src="/personal.svg" width={300} height={300} alt="" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
