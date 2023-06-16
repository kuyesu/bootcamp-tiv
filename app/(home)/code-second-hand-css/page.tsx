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
            Cascade Style Sheets
            <span className="font-mono flex space-x-8 items-center font-bold md:px-4 px-2  ">
              CSS{" "}
              <Image
                src="/css.svg"
                className="ml-2"
                width={25}
                alt=""
                height={25}
              />
            </span>
          </div>
          <p className="text-gray-400 text-sm text-justify md:text-base w-full justify-start flex py-8 ">
            CSS stands for Cascading Style Sheets, and it is a style sheet
            language used for describing the presentation of a document written
            in HTML or XML. It separates the presentation of a document from its
            content, allowing for a more flexible and dynamic web design.
          </p>
          <p className="text-cyan-400 text-sm md:text-base w-full justify-start flex py-4 ">
            CSS is important for several reasons:
          </p>
          <p className="text-cyan-500 justify-start text-justify px-12  inline-flex md:pt-4 pt-2 text-xs">
            <span className="text-cyan-500 mr-4">✔</span>
            Separation of concerns: CSS allows for separation of concerns by
            separating the content of a webpage from its presentation. This
            makes it easier to maintain and update web pages, as changes can be
            made to the CSS file without affecting the HTML content.
          </p>
          <p className="text-cyan-500 px-12 inline-flex text-justify md:pt-4 pt-2 text-xs">
            <span className="text-cyan-500 mr-4">✔</span>
            Accessibility: CSS allows for more accessible web design by
            providing options for text alternatives and improved readability.
          </p>
          <p className="text-cyan-500 justify-start px-12 text-justify  inline-flex md:pt-4 pt-2 text-xs">
            <span className="text-cyan-500 mr-4">✔</span>
            Consistency and efficiency: By using CSS, developers can create
            consistent styling across multiple pages and reduce the amount of
            code needed to achieve a certain design.
          </p>
        </div>
        <p className="text-cyan-400 text-sm md:text-base w-full justify-start flex py-6 ">
          Code Snippet:
        </p>
        {/* Intro code */}
        <div className="w-full max-w-5xl items-center justify-center font-mono text-sm flex">
          <Highlighter
            title="css"
            text={`
selector {
  property: value;
}
                      `}
          />
        </div>
        <p className="text-gray-400 text-sm md:text-base text-justify w-full justify-start flex py-8 ">
          For example, to change the font color of all the headings on a page to
          red, you would use the following CSS code:
        </p>

        {/* tag intro */}
        <div className="w-full max-w-5xl items-center justify-center font-mono text-sm flex">
          <Highlighter
            title="css"
            text={`
h1, h2, h3 {
  color: red;
}
                      `}
          />
        </div>
        <p className="text-gray-400 text-sm md:text-base text-justify w-full justify-start flex py-8 ">
          To link a CSS file to an HTML document, you can use the {`<link>`}{" "}
          element in the head section of your HTML file. Here{"'"}s an example:
        </p>
        <p className="text-gray-400 text-sm text-justify md:text-base w-full justify-start flex py-8 ">
          In this example, the href attribute specifies the path to the CSS
          file, which is named style.css. When the HTML file is loaded, it will
          also load the CSS file and apply the styles defined in it to the HTML
          content.
        </p>

        {/* tag intro */}
        <div className="w-full max-w-5xl items-center justify-center font-mono text-sm flex">
          <Highlighter
            title="css"
            text={`
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <!-- HTML content goes here -->
  </body>
</html>
                      `}
          />
        </div>
        <p className="text-cyan-400 text-sm md:text-base w-full justify-start flex py-3 pt-20 ">
          CSS has a variety of attributes that are used to style HTML elements.
          Here are some of the most commonly used CSS attributes:
        </p>
        <p className="text-gray-400 text-sm md:text-base w-full justify-start flex py-8 ">
          1. Color: Changes the color of text and background color of an
          element.
        </p>
        {/* Intro code */}
        <div className="w-full max-w-5xl items-center justify-center font-mono text-sm flex">
          <Highlighter
            title="css"
            text={`
color: red;
background-color: white;

                      `}
          />
        </div>
        <p className="text-gray-400 text-sm md:text-base w-full justify-start flex py-8 ">
          2. Font: Sets the font family, size, weight, and style of text.
        </p>
        {/* Intro code */}
        <div className="w-full max-w-5xl items-center justify-center font-mono text-sm flex">
          <Highlighter
            title="css"
            text={`
font-family: Arial, sans-serif;
font-size: 16px;
font-weight: bold;
font-style: italic;


                      `}
          />
        </div>
        <p className="text-gray-400 text-sm md:text-base w-full justify-start flex py-8 ">
          3. Text: Controls the spacing and decoration of text.
        </p>
        {/* Intro code */}
        <div className="w-full max-w-5xl items-center justify-center font-mono text-sm flex">
          <Highlighter
            title="css"
            text={`
text-align: center;
line-height: 1.5;
text-decoration: underline;

                      `}
          />
        </div>
        <p className="text-gray-400 text-sm md:text-base w-full justify-start flex py-8 ">
          4. Box model: Sets the size, margin, padding, and border of an
          element.
        </p>
        {/* Intro code */}
        <div className="w-full max-w-5xl items-center justify-center font-mono text-sm flex">
          <Highlighter
            title="css"
            text={`
width: 200px;
height: 100px;
margin: 20px;
padding: 10px;
border: 1px solid black;

                      `}
          />
        </div>
        <p className="text-gray-400 text-sm md:text-base w-full justify-start flex py-8 ">
          5. Positioning: Specifies the position of an element.
        </p>
        {/* Intro code */}
        <div className="w-full max-w-5xl items-center justify-center font-mono text-sm flex">
          <Highlighter
            title="css"
            text={`
position: relative;
top: 10px;
left: 20px;
                      `}
          />
        </div>
        <p className="text-gray-400 text-sm md:text-base w-full justify-start flex py-8 ">
          6. Display: Controls how an element is displayed.
        </p>
        {/* Intro code */}
        <div className="w-full max-w-5xl items-center justify-center font-mono text-sm flex">
          <Highlighter
            title="css"
            text={`
display: block;
display: inline;
display: none;

                      `}
          />
        </div>
        <p className="text-gray-400 text-sm md:text-base w-full justify-start flex py-8 ">
          7. Background: Sets the background properties of an element, including
          color, image, and position.
        </p>
        {/* Intro code */}
        <div className="w-full max-w-5xl items-center justify-center font-mono text-sm flex">
          <Highlighter
            title="css"
            text={`
background-color: white;
background-image: url("image.jpg");
background-position: center;

                      `}
          />
        </div>
        <p className="text-gray-400 text-sm md:text-base w-full justify-start flex py-8 ">
          8. Border: Sets the properties of an element{"'"}s border, including
          width, style, and color.
        </p>
        {/* Intro code */}
        <div className="w-full max-w-5xl items-center justify-center font-mono text-sm flex">
          <Highlighter
            title="css"
            text={`
border-width: 1px;
border-style: solid;
border-color: black;

                      `}
          />
        </div>
        <p className="text-gray-400 text-sm md:text-base w-full justify-start flex py-8 ">
          9. Box-shadow: Adds a shadow effect to an element.
        </p>
        {/* Intro code */}
        <div className="w-full max-w-5xl items-center justify-center font-mono text-sm flex">
          <Highlighter
            title="css"
            text={`
box-shadow: 2px 2px 4px grey;
                      `}
          />
        </div>
        <p className="text-gray-400 text-sm md:text-base w-full justify-start flex py-8 ">
          10. Float: Controls the positioning of an element in relation to other
          elements on the page.
        </p>
        {/* Intro code */}
        <div className="w-full max-w-5xl items-center justify-center font-mono text-sm flex">
          <Highlighter
            title="css"
            text={`
float: left;
float: right;

                      `}
          />
        </div>
        <p className="text-gray-400 text-sm md:text-base w-full justify-start flex py-8 ">
          11. List-style: Controls the appearance of list items.
        </p>
        {/* Intro code */}
        <div className="w-full max-w-5xl items-center justify-center font-mono text-sm flex">
          <Highlighter
            title="css"
            text={`
list-style-type: disc;
list-style-image: url("image.jpg");

                      `}
          />
        </div>
        <p className="text-gray-400 text-sm md:text-base w-full justify-start flex py-8 ">
          12. Transition: Adds animation effects to elements.
        </p>
        {/* Intro code */}
        <div className="w-full max-w-5xl items-center justify-center font-mono text-sm flex">
          <Highlighter
            title="css"
            text={`
transition: all 0.3s ease-in-out;

                      `}
          />
        </div>
        <p className="text-gray-400 text-sm md:text-base w-full justify-start flex py-8 ">
          13. Flexbox: A set of properties that allow for flexible layouts.
        </p>
        {/* Intro code */}
        <div className="w-full max-w-5xl items-center justify-center font-mono text-sm flex">
          <Highlighter
            title="css"
            text={`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

                      `}
          />
        </div>
        <p className="text-gray-400 text-sm md:text-base w-full justify-start flex py-8 ">
          6. Display: Controls how an element is displayed.
        </p>
        {/* Intro code */}
        <div className="w-full max-w-5xl items-center justify-center font-mono text-sm flex">
          <Highlighter
            title="css"
            text={`
display: block;
display: inline;
display: none;

                      `}
          />
        </div>
        <NonSelfClosingTags />
        {/* <Portfolio /> */}
      </>
    </main>
  );
}
