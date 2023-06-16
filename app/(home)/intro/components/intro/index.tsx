"use client";
import Intro from "./intro";
import Interim from "./interim";
import { AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react";
import Meta from "@/components/layout/meta";

export default function Welcome() {
  const [state, setState] = useState("intro");


  return (
    <div className="flex  w-full flex-col items-start ">
      <Meta title=" onboarding Eduguide" />
      <AnimatePresence mode="wait" >
        {state === "intro" && <Intro key="intro" setState={setState} />}
        {state === "interim" && <Interim key="interim" setState={setState} />}
      </AnimatePresence>
    </div>
  );
}
