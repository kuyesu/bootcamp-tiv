"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import LoadingDots from "../shared/icon/loading-dots";



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

  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const handleProgramSelect = (program) => {
    setSelectedProfession(program);
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
          "Your profile has been updated! Redirecting to dashboard...",
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
              Let{"'"}s get started
            </span>
          </h1>
          <p className="text-gray-50 md:pt-4 pt-2 text-xs">
            We need to know a little bit about you to get you started
          </p>
          <div className=" w-full pt-12 ">
            {selectedProfession === null ? (
              <>
                {profession.map((program) => (
                  <button
                    key={program.id}
                    className="mb-2 mr-2 rounded-md border border-cyan-500 py-2.5 text-sm font-medium text-cyan-500 focus:outline-none px-4 text-leftfocus:outline-none "
                    onClick={() => handleProgramSelect(program)}
                  >
                    {program.name}
                  </button>
                ))}
              </>
            ) : (
              <>
                <div className="flex w-full py-5 font-light text-gray-50 ">
                  We noticed you are{" "}
                </div>
                <h1 className="pb-6 font-light text-cyan-500 md:pt-12 md:text-xl">
                  {/* @ts-ignore */}
                  {selectedProfession.name}{" "}
                  <span className="text-cyan-500">✔</span>
                </h1>

                <div className="mt-8 flex w-full gap-4">
                  <motion.button
                    // type="button"
                    onClick={handleEnrollment}
                    className="  w-full rounded-md px-8 py-2.5 text-center text-sm font-medium text-cyan-500 border-cyan-500 border shadow-2xl shadow-cyan-500 focus:outline-none  md:mr-0"
                  >
                    {loading ? (
                      <>
                        <span className="mr-3">setting you account</span>{" "}
                        <LoadingDots color="#fff" />
                      </>
                    ) : (
                      "Complete"
                    )}
                  </motion.button>
                </div>
              </>
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