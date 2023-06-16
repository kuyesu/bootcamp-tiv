/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import Image from "next/image";
import Highlighter from "./component/highlighter";
import swal from "sweetalert";
import NonSelfClosingTags from "./component/no-self-closing-tags";
import Portfolio from "./component/portfolio";
export default async function index() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <main className="flex w-full h-full flex-col items-start md:justify-start  md:px-24 ">
      <>
        <div className="z-10 flex-col w-full max-w-5xl items-center justify-center font-mono text-sm flex">
          <div className=" flex md:text-xl items-center  text-cyan-500 w-full justify-between border-b border-gray-900  pb-6  pt-24  ">
            Hyper Text Markup Language
            <span className="font-mono flex space-x-8 items-center font-bold md:px-4 px-2  ">
              HTML <Image src="/html-5.svg" className="ml-2" width={25} alt="" height={25} />
            </span>
          </div>
          <p className="text-gray-400 text-sm md:text-base w-full justify-start flex py-8 ">
            HTML stands for HyperText Markup Language and is used to create web
            pages. HTML consists of a series of tags, which are used to mark up
            the content of a web page. These tags tell the web browser how to
            display the content, such as text, images, and links.
          </p>
          <p className="text-cyan-400 text-sm md:text-base w-full justify-start flex py-4 ">
            Here{"'"}s a quick example of HTML code that displays a simple web
            page:
          </p>
        </div>
        {/* Intro code */}
        <div className="w-full max-w-5xl items-center justify-center font-mono text-sm flex">
          <Highlighter
            title="html"
            text={`
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
<body>
...body goes here
</body>
</html>
                      `}
          />
        </div>
        <div className="z-10 flex-col w-full max-w-5xl items-center justify-center font-mono text-sm flex">
          <p className=" flex md:text-xl items-start  text-cyan-500 w-full justify-start  pb-6  pt-24  ">
            HTML Tags
          </p>
          <p className="text-gray-400 text-sm md:text-base w-full justify-start flex py-8 ">
            HTML tags are the building blocks of HTML documents. They are used
            to define the structure and content of a web page. HTML tags are
            surrounded by angle brackets {`"<" and ">"`}. Most HTML tags have an
            opening tag and a closing tag, although some tags are self-closing
            and do not require a closing tag. For example, the {`<html>`} tag is
            used to define the beginning and end of an HTML document. The{" "}
            {`<head>`} tag is used to contain information about the document,
            such as the title of the page, and the {`<body>`} tag is used to
            define the main content of the document.
          </p>
          <p className="text-cyan-400 text-sm md:text-base w-full justify-start flex py-4 ">
            Here{"'"}s an example of a simple HTML document with a few basic tags:
          </p>
        </div>
        {/* tag intro */}
        <div className="w-full max-w-5xl items-center justify-center font-mono text-sm flex">
          <Highlighter
            title="html"
            text={`
<!DOCTYPE html>
<html>
  <head>
    <title>My Web Page</title>
  </head>
  <body>
    <h1>Welcome to my web page!</h1>
    <p>This is a paragraph of text.</p>
    <img src="image.jpg" alt="A beautiful image">
    <a href="https://www.example.com">Click here to visit Example.com</a>
  </body>
</html>

                      `}
          />
        </div>
        <NonSelfClosingTags />
        <Portfolio />
      </>
    </main>
  );
}
