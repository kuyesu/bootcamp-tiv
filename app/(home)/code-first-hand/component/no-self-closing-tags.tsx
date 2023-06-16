import React from 'react'
import Highlighter from "./highlighter";

export default function noSelfClosingTags() {
  return (
    <>
      <div className="z-10 flex-col w-full max-w-5xl items-center justify-center font-mono text-sm flex">
        <p className=" flex md:text-xl items-start  text-cyan-500 w-full justify-start  pb-6  pt-24  ">
          Self-closing-tags and non-self-closing-tags
        </p>
        <p className="text-gray-400 text-sm md:text-base w-full justify-start flex py-8 ">
          In HTML, tags can be either self-closing or non-self-closing.
          Self-closing tags do not have a closing tag, and they are used for
          elements that do not have any content, such as images and line breaks.
          Non-self-closing tags, on the other hand, do have a closing tag, and
          they are used for elements that contain content, such as paragraphs
          and headings.
        </p>
        <p className="text-cyan-400 text-sm md:text-base w-full justify-start flex py-4 ">
          Non-self-closing-tags:
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
      <p className=" flex md:text-sm items-start  text-gray-400 w-full justify-start  pb-6  pt-24  ">
        The {`<p>`} tag is used to define a paragraph of text:
      </p>
      <div className="w-full max-w-5xl items-center justify-center font-mono text-sm flex">
        <Highlighter
          title="html"
          text={`
<p>This is a paragraph of text.</p>
                      `}
        />
      </div>
      <p className=" flex md:text-sm items-start  text-gray-400 w-full justify-start  pb-6  pt-24  ">
        The {`<div>`} tag is used to define a division or section of the web
        page
      </p>
      <div className="w-full max-w-5xl items-center justify-center font-mono text-sm flex">
        <Highlighter
          title="html"
          text={`
<div>
  <h1>Section Heading</h1>
  <p>This is the content of the section.</p>
</div>
                      `}
        />
      </div>
      <p className=" flex flex-col md:text-sm items-start  text-gray-400 w-full justify-start  pb-6  pt-24  ">
        The {`<ul>`} tag is used to create an unordered list page
        <span>
          In the example below, the {`<li>`} tags are used to define each item
          in the list, and the {`<ul>`} tag contains all of the list items.
        </span>
      </p>
      <div className="w-full max-w-5xl items-center justify-center font-mono text-sm flex">
        <Highlighter
          title="html"
          text={`
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

                      `}
        />
      </div>
      <p className=" flex md:text-sm items-start  text-gray-400 w-full justify-start  pb-6  pt-24  ">
        The {`<table>`} tag is used to create a table:
      </p>
      <div className="w-full max-w-5xl items-center justify-center font-mono text-sm flex">
        <Highlighter
          title="html"
          text={`
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>Occupation</th>
  </tr>
  <tr>
    <td>John</td>
    <td>25</td>
    <td>Engineer</td>
  </tr>
  <tr>
    <td>Jane</td>
    <td>30</td>
    <td>Writer</td>
  </tr>
</table>
                      `}
        />
      </div>
      <p className=" flex flex-col md:text-sm items-start  text-gray-400 w-full justify-start  pb-6  pt-24  ">
        The {`<a>`} tag is used to create hyperlinks, allowing users to navigate
        to other web pages or websites
        <span>
          In the example below, the {"`href`"} attribute defines the destination
          URL of the hyperlink.
        </span>
      </p>
      <div className="w-full max-w-5xl items-center justify-center font-mono text-sm flex">
        <Highlighter
          title="html"
          text={`
<a href="https://www.example.com">Visit Example.com</a>

                      `}
        />
      </div>
      <p className=" flex flex-col md:text-sm items-start  text-gray-400 w-full justify-start  pb-6  pt-24  ">
        The {`<img>`} tag is used to display images on a web page
        <span>
          the {"`src`"} attribute defines the path to the image file, and the{" "}
          {"`alt`"}
          attribute provides a text description of the image for accessibility
          purposes.
        </span>
      </p>
      <div className="w-full max-w-5xl items-center justify-center font-mono text-sm flex">
        <Highlighter
          title="html"
          text={`
<img src="image.jpg" alt="Image Description">

                      `}
        />
      </div>
      <p className=" flex flex-col md:text-sm items-start  text-gray-400 w-full justify-start  pb-6  pt-24  ">
        {`<table>, <tr>, <th>, and <td>`} tags are used to create tables
        <span>
          The {`<table>`} tag creates a table, and each row is created using the{" "}
          {`<tr>`} tag. The first row contains table headings created using the{" "}
          {`<th>`} tag, while the remaining rows contain table cells created
          using the {`<td>`} tag.
        </span>
      </p>
      <div className="w-full max-w-5xl items-center justify-center font-mono text-sm flex">
        <Highlighter
          title="html"
          text={`
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>John</td>
    <td>30</td>
  </tr>
  <tr>
    <td>Jane</td>
    <td>25</td>
  </tr>
</table>

                      `}
        />
      </div>
      <p className=" flex flex-col md:text-sm items-start  text-gray-400 w-full justify-start  pb-6  pt-24  ">
              {`<button>`} tags are used to create clickable buttons
              <span>The {`<button>`} tag creates a clickable button with the text {`"Click me!"`}. The behavior of the button can be modified using JavaScript.</span>
      </p>
      <div className="w-full max-w-5xl items-center justify-center font-mono text-sm flex">
        <Highlighter
          title="html"
          text={`
<button>Click me!</button>
                      `}
        />
      </div>
    </>
  );
}
