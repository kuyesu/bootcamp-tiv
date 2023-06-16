import React from "react";
import Highlighter from "./highlighter";
import Link from "next/link";

export default function noSelfClosingTags() {
  return (
    <>
      <div className="z-10 flex-col w-full max-w-5xl items-center justify-center font-mono text-sm flex">
        <p className=" flex md:text-xl items-start  text-cyan-500 w-full justify-start  pb-6  pt-24  ">
          CSS Grid layout:
        </p>
        <p className="text-gray-400 text-sm text-justify md:text-base w-full justify-start flex  py-8 ">
          CSS Grid layout is a powerful grid system that allows you to create
          complex layouts for web pages. It provides a two-dimensional grid
          system that enables you to define rows and columns for your content,
          and then place elements within those rows and columns. To use CSS
          Grid, you first define a grid container by setting the display
          property to grid or inline-grid. You can then define the rows and
          columns of the grid using the grid-template-column properties. These
          properties accept a list of values, which can be either a fixed length
          (such as pixels or ems) or a relative length (such as percentages).
          Once you have defined the rows and columns, you can place elements
          within the grid using the grid-column and grid-row properties. These
          properties accept a start and end value, which can be either a line
          number or a named grid area. For example, you could place an element
          in the second row and third column of the grid by setting grid-row: 2
          / 3 and grid-column: 3 / 4 CSS Grid also provides many other features,
          such as the ability to create nested grids, control the alignment and
          spacing of grid items, and define the size of grid tracks. With its
          powerful and flexible layout system, CSS Grid is a great tool for
          creating modern and responsive web designs.
        </p>
        <p className="text-cyan-400 text-sm md:text-base w-full justify-start flex py-4 ">
          Code snippet html
        </p>
      </div>
      {/* tag intro */}
      <div className="w-full max-w-5xl items-center justify-center font-mono text-sm flex">
        <Highlighter
          title="HTML"
          text={`
<div class="grid-container">
  <header class="header">Header</header>
  <main class="main">Main Content</main>
  <aside class="sidebar">Sidebar</aside>
</div>
                      `}
        />
      </div>
      <p className=" flex md:text-sm items-start  text-gray-400 w-full justify-start  pb-6  pt-24  ">
        css
      </p>
      <div className="w-full max-w-5xl items-center justify-center font-mono text-sm flex">
        <Highlighter
          title="css"
          text={`
.grid-container {
  display: grid;
  grid-template-columns: 1fr 3fr; /* one column for sidebar, three columns for main content */
  grid-template-rows: auto 1fr; /* auto row for header, one row for main content */
  gap: 20px; /* adds space between grid items */
}

.header {
  grid-column: 1 / -1; /* spans across all columns */
}

.main {
  grid-column: 2 / -1; /* starts in second column, spans across remaining columns */
}

.sidebar {
  grid-column: 1 / 2; /* starts in first column */
  grid-row: 2 / -1; /* starts in second row, spans across remaining rows */
}

                      `}
        />
      </div>
      <p className=" flex md:text-sm items-start text-justify text-gray-400 w-full justify-start  pb-6  pt-24  ">
        This code will create a grid with two columns and two rows, with the
        header spanning both columns and the main content area spanning the
        second column and the remaining rows. The sidebar will be placed in the
        first column and will span the remaining rows. The auto value for the
        header row height will ensure that the header is sized to fit its
        content, while the 1fr value for the main content row height will ensure
        that it takes up the remaining available space. The gap property adds a
        20px gap between each grid item for visual separation.
      </p>
      <p className="text-cyan-400 text-lg md:text-xl w-full justify-start flex py-4 pt-24">
        CSS Framworks
      </p>
      <p className=" flex flex-col md:text-md items-start  text-cyan-400 w-full justify-start  pb-6  p  ">
        Introduction to CSS frameworks (Bootstrap, Foundation)
      </p>
      <p className=" flex flex-col md:text-md items-start  text-cyan-400 w-full justify-start  pb-6  p  ">
        What is Bootstrap?
      </p>
      <p className=" flex md:text-sm items-start text-justify text-gray-400 w-full justify-start  pb-6  pt-8  ">
        Bootstrap is a free and open-source front-end framework that includes
        pre-built HTML, CSS, and JavaScript components for creating responsive
        and mobile-first websites. It includes a grid system for laying out
        content, as well as a variety of UI components such as forms, buttons,
        and navigation menus. Bootstrap also includes JavaScript plugins for
        things like modals, carousels, and dropdowns. Foundation is another
        popular front-end framework that is similar to Bootstrap in many ways.
        It includes a grid system and UI components, but is designed with more
        flexibility and customization options in mind. Foundation is also
        modular, so you can choose which components you want to use in your
        project and leave out the rest. Using a CSS framework can make it faster
        and easier to build a responsive website, since much of the code is
        already written for you. You can simply include the framework files in
        your project, and then use the pre-built components and styles to create
        your website{"'"}s layout and design. To use a CSS framework like
        Bootstrap or Foundation, you typically start by downloading the
        framework files and including them in your HTML file{"'"}s head section.
        Then, you can use the framework{"'"}s classes and components to style
        your website. For example, you might use Bootstrap{"'"}s grid classes to
        create a responsive layout, or use its button classes to style your
        website{"'"}s buttons.
      </p>
      <p className=" flex flex-col md:text-md items-start  text-cyan-400 w-full justify-start  pb-6  p  ">
        Setting up Bootstrap in your project
      </p>
      <p className=" flex md:text-sm items-start  text-gray-400 w-full justify-start   pt-8  ">
        √ <span className="">Download </span>
      </p>
      <p className=" flex md:text-sm items-start  text-gray-400 w-full justify-start  py-3  ">
        √{" "}
        <span className="">
          Download Bootstrap: You can download Bootstrap from its official
          website at{" "}
          <Link
            href="https://getbootstrap.com/."
            className="underline text-blue-500"
          >
            Click the Download
          </Link>{" "}
          button and choose whether you want to download the compiled CSS and
          JavaScript files, or the source code.
        </span>
      </p>
      <p className=" flex md:text-sm items-start text-justify text-gray-400 w-full justify-start  py-3  ">
        √{" "}
        <span className="">
          Add the Bootstrap files to your project: Once you have downloaded
          Bootstrap, add the CSS and JavaScript files to your projects
          directory. You can either link to the compiled files directly, or use
          a package manager like npm to install Bootstrap and link to the files
          in your project.
        </span>
      </p>
      <p className=" flex md:text-sm items-start text-justify  text-gray-400 w-full justify-start  py-3  ">
        √{" "}
        <span className="">
          Link to the Bootstrap files in your HTML file: In the head section of
          your HTML file, add links to the Bootstrap CSS and JavaScript files.
          The links should look something like this:
        </span>
      </p>

      <div className="w-full max-w-5xl items-center justify-center font-mono text-sm flex">
        <Highlighter
          title="HTML: The {`<div>`} tag"
          text={`
<head>
  <link rel="stylesheet" href="path/to/bootstrap.css">
  <script src="path/to/bootstrap.js"></script>
</head>

                      `}
        />
      </div>
      <p className=" flex md:text-sm items-start text-justify  text-gray-400 w-full justify-start  py-3  ">
        √{" "}
        <span className="">
          Use Bootstrap classes in your HTML: Once you have linked to the
          Bootstrap files, you can start using Bootstrap classes to style your
          HTML elements. For example, you might use the container class to
          create a responsive container for your website{"'"}s content:
        </span>
      </p>
      <div className="w-full max-w-5xl items-center justify-center font-mono text-sm flex">
        <Highlighter
          title="HTML: The {`<div>`} tag"
          text={`
<div class="container">
  <!-- Your content goes here -->
</div>


                      `}
        />
      </div>
      <p className=" flex md:text-sm items-start text-justify  text-gray-400 w-full justify-start  pb-6  pt-24  ">
        You can also use Bootstrap{"'"}s built-in components like buttons,
        forms, and navigation menus. For example, you might use the btn class to
        create a styled button:
      </p>
      <div className="w-full max-w-5xl items-center justify-center font-mono text-sm flex">
        <Highlighter
          title="HTML: The {`<div>`} tag"
          text={`
<button class="btn btn-primary">Click me!</button>


                      `}
        />
      </div>
    </>
  );
}
