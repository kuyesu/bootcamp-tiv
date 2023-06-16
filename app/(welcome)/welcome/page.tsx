import React from "react";
import Intro from "@/components/intro";

export default async function page() {
  return (
    <div className="grid w-full  md:px-28">
      <div className="w-full  py-8">
        <Intro />
      </div>

    </div>
  );
}
