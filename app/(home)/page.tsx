import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex w-full h-full flex-col items-center justify-center md:justify-between md:p-24 py-20  md:pt-24 ">
      <h1 className="text-black md:pt-24 md:text-2xl">
        <p className=" flex text-xl  text-cyan-500 w-full justify-center  pb-6 pt-8   ">
          Welcome
          <span className="font-mono font-bold px-4 ">Hero!</span>
        </p>
        <p className="text-gray-50 md:text-sm text-justify">
          {" "}
          We have been looking for you. You are an absolute legend, and we
          couldn
          {"'"}t be more excited to see what you{"'"}ll achieve next!
        </p>
      </h1>
      <div className="md:flex w-full hidden h-full  items-center md:justify-between md:space-x-16 md:px-28  pt-5 text-start ">
        <div className="flex w-full flex-col ">
          <h1 className="font-light text-gray-50 text-justify md:pt-24 md:text-sm">
            We would love to offer you early access, so you can get started on
            your journey right away.
          </h1>

          <div className="mt-8 flex w-full gap-4">
            <Link
              href="/get-started"
              className="  w-full rounded-md px-8 py-2.5 text-center text-sm font-medium text-cyan-500 border-cyan-500 border  shadow-2xl shadow-cyan-500 focus:outline-none  md:mr-0 hover:shadow-xl"
            >
              Get early access
            </Link>
          </div>
        </div>

        <div className=" w-full items-center justify-end pt-24 ">
          <div className="w-full items-center justify-start">
            <Image src="/team.svg" width={500} height={500} alt="" />
          </div>
        </div>
      </div>
      <div className="md:hidden w-full flex flex-col   items-center justify-between  py-16  pt-5 text-start ">
        <div className=" w-full items-center justify-end pt-16 ">
          <div className="w-full items-center justify-start">
            <Image src="/team.svg" width={500} height={500} alt="" />
          </div>
        </div>
        <div className="flex w-full flex-col py-10">
          <h1 className="font-light text-gray-50 text-justify md:pt-24 md:text-sm">
            We would love to offer you early access, so you can get started on
            your journey right away.
          </h1>

          <div className="mt-8 flex w-full gap-4">
            <Link
              href="/get-started"
              className="  w-full rounded-md px-8 py-2.5 text-center text-sm font-medium text-cyan-500 border-cyan-500 border shadow-2xl shadow-cyan-500 focus:outline-none  md:mr-0"
            >
              Get early access
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
