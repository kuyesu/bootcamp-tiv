import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/ui/accordion";
import Link from "next/link";

export default function AccordionDemo() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full flex flex-col text-gray-100"
    >
      <AccordionItem
        value="item-1"
        className="border  w-full border-gray-900 border-b-0 py-0.5 md:py-3 rounded-sm px-2 md:px-8"
      >
        <AccordionTrigger className="text-sx md:text-sm flex w-full justify-between">
          Introduction to Web Development
        </AccordionTrigger>
        <AccordionContent className="flex flex-col w-full">
          <div className="flex flex-col w-full px-4">
            <p className="text-cyan-500 inline-flex md:pt-4 pt-2 text-xs">
            <span className="text-cyan-500 mr-4">✔</span>
            Internet and the web
          </p>
          <p className="text-cyan-500 inline-flex md:pt-4 pt-2 text-xs">
            <span className="text-cyan-500 mr-4">✔</span>
            How does the web works
          </p>
          <p className="text-cyan-500 inline-flex md:pt-4 pt-2 text-xs">
            <span className="text-cyan-500 mr-4">✔</span>
            Server: Client and the server
          </p>
          <p className="text-cyan-500 inline-flex md:pt-4 pt-2 text-xs">
            <span className="text-cyan-500 mr-4">✔</span>
            Domain name and hosting
            </p>
            </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-2"
        className="border w-full border-gray-900 border-b-0 py-0.5 md:py-3 rounded-sm px-2 md:px-8"
      >
        <AccordionTrigger className="text-sx md:text-sm flex w-full justify-between">
          Get Started with HTML
        </AccordionTrigger>
        <AccordionContent className="flex flex-col w-full">
          <div className="flex flex-col w-full px-4">
            <Link href="/code-first-hand" className="text-cyan-500  inline-flex md:pt-4 pt-2 text-xs">
              <span className="text-cyan-500 mr-4">✔</span>
              Intro to HTML, HEAD, BODY, and HEADER
            </Link>
            <Link href="/code-first-hand" className="text-cyan-500  inline-flex md:pt-4 pt-2 text-xs">
              <span className="text-cyan-500 mr-4">✔</span>
              HTML: Lists, Paragraphs, and Text Styling
            </Link>
            <Link href="/code-first-hand" className="text-cyan-500  inline-flex md:pt-4 pt-2 text-xs">
              <span className="text-cyan-500 mr-4">✔</span>
              HTML: Displaying Data With Tables
            </Link>
            <Link href="/code-first-hand" className="text-cyan-500  inline-flex md:pt-4 pt-2 text-xs">
              <span className="text-cyan-500 mr-4">✔</span>
              HTML: Images & Forms
            </Link>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-3"
        className="border w-full border-gray-900 border-b-0 py-0.5 md:py-3 rounded-sm px-2 md:px-8"
      >
        <AccordionTrigger className="text-sx md:text-sm flex w-full justify-between">
          Building and Styling web apps
        </AccordionTrigger>
        <AccordionContent className="flex flex-col">
          <div className="flex flex-col w-full px-4">
            <p className="text-cyan-500 inline-flex  md:pt-4 pt-2 text-xs">
              <span className="text-cyan-500 mr-4">✔</span>
              CSS: Element, ID & Class Selectors
            </p>
            <p className="text-cyan-500 inline-flex md:pt-4 pt-2 text-xs">
              <span className="text-cyan-500 mr-4">✔</span>
              CSS: Colors: HEX, RGB, RGBA, HSL, HSLA, and Color Names
            </p>
            <p className="text-cyan-500 inline-flex md:pt-4 pt-2 text-xs">
              <span className="text-cyan-500 mr-4">✔</span>
              CSS: Backgrounds & Borders
            </p>
            <p className="text-cyan-500 inline-flex md:pt-4 pt-2 text-xs">
              <span className="text-cyan-500 mr-4">✔</span>
              Using browser inspector tools
            </p>
            <p className="text-cyan-500 inline-flex md:pt-4 pt-2 text-xs">
              <span className="text-cyan-500 mr-4">✔</span>
              Bootsrap 4: Grid System & Components
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-4"
        className="border w-full border-gray-900 border-b-0 py-0.5 md:py-3 rounded-sm px-2 md:px-8"
      >
        <AccordionTrigger className="text-sx md:text-sm flex w-full justify-between">
          Diving into JavaScript & Nodjs
        </AccordionTrigger>
        <AccordionContent className="flex flex-col">
          <div className="flex flex-col w-full px-4">
            <p className="text-cyan-500 inline-flex md:pt-4 pt-2 text-xs">
              <span className="text-cyan-500 mr-4">✔</span>
              Javascript: Simple Numbers
            </p>
            <p className="text-cyan-500 inline-flex md:pt-4 pt-2 text-xs">
              <span className="text-cyan-500 mr-4">✔</span>
              Javascript: Comparison Operators, Logical Operators
            </p>

            <p className="text-cyan-500 inline-flex md:pt-4 pt-2 text-xs">
              <span className="text-cyan-500 mr-4">✔</span>
              Javascript: Arrays, Objects, Loops, Bind
            </p>
            <p className="text-cyan-500 inline-flex md:pt-4 pt-2 text-xs">
              <span className="text-cyan-500 mr-4">✔</span>
              Percentage Calculator - Setting Up the Form
            </p>
            <p className="text-cyan-500 inline-flex md:pt-4 pt-2 text-xs">
              <span className="text-cyan-500 mr-4">✔</span>
              Percentage Calculator - Grabbing Elements With Javascript
            </p>
            <p className="text-cyan-500 inline-flex md:pt-4 pt-2 text-xs">
              <span className="text-cyan-500 mr-4">✔</span>
              Percentage Calculator - Using Event Listeners
            </p>
            <p className="text-cyan-500 inline-flex md:pt-4 pt-2 text-xs">
              <span className="text-cyan-500 mr-4">✔</span>
              Percentage Calculator - Algorithm & Prevent Default
            </p>
            <p className="text-cyan-500 inline-flex md:pt-4 pt-2 text-xs">
              <span className="text-cyan-500 mr-4">✔</span>
              Nodejs: What is Nodejs and how to setup
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-5"
        className="border w-full border-gray-900 border-b-0 py-0.5 md:py-3 rounded-sm px-2 md:px-8"
      >
        <AccordionTrigger className="text-sx md:text-sm flex w-full justify-between">
          Introducing Reactjs and Express
        </AccordionTrigger>
        <AccordionContent className="flex flex-col">
          <div className="flex flex-col w-full px-4">
            <p className="text-cyan-500 inline-flex md:pt-4 pt-2 text-xs">
              <span className="text-cyan-500 mr-4">✔</span>
              React: Setting Up the Project With Create React App
            </p>
            <p className="text-cyan-500 inline-flex md:pt-4 pt-2 text-xs">
              <span className="text-cyan-500 mr-4">✔</span>
              Frontend: Understanding file structure in Reactjs
            </p>
            <p className="text-cyan-500 inline-flex md:pt-4 pt-2 text-xs">
              <span className="text-cyan-500 mr-4">✔</span>
              Frontend: Understanding file structure in Reactjs and states
            </p>
            <p className="text-cyan-500 inline-flex md:pt-4 pt-2 text-xs">
              <span className="text-cyan-500 mr-4">✔</span>
              Backend: Fetching data with Expressjs
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-6"
        className="border w-full border-gray-900 py-0.5 md:py-3 rounded-sm px-2 md:px-8"
      >
        <AccordionTrigger className="text-sx md:text-sm flex w-full justify-between">
          Showcasing Demo
        </AccordionTrigger>
        <AccordionContent className="flex flex-col">
          <div className="flex flex-col w-full px-4">
            <p className="text-cyan-500 inline-flex font-semibold md:pt-4 pt-2 text-xs">
              Congragulations! You{"'"}ve made it.
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
