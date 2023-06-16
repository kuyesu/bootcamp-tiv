import React from 'react'
import Highlighter from "./highlighter";

export default function Portfolio() {
  return (
    <>
      <p className=" flex flex-col md:text-sm items-start  text-gray-400 w-full justify-start  pb-6  pt-24  ">
        Hey hero!, I know you like you like to challenge yourself, so:
        <span>
          Lets try to build a simple website using only HTML tags. For different
          brands, you can check my portfolio.
        </span>
      </p>
      <div className="w-full max-w-5xl items-center justify-center font-mono text-sm flex">
        <Highlighter
          title="HTML: The {`<button>`} tag"
          text={`
<!DOCTYPE html>
<html>

<head>
    <title>My Portfolio</title>
</head>

<body>
    <main>
        <section id="about-me">
            <h2>About Me</h2>
            <p>Hello, my name is [Your Name]. I am a [Your Profession] based in [Your Location]. I have [Number] years
                of
                experience in [Your Field].</p>
            <img src="[Image URL]" alt="Photo of [Your Name]">
        </section>

        <section id="skills">
            <h2>Skills</h2>
            <ul>
                <li>[Skill 1]</li>
                <li>[Skill 2]</li>
                <li>[Skill 3]</li>
            </ul>
        </section>

        <section id="projects">
            <h2>Projects</h2>
            <ul>
                <li>
                    <h3>[Project 1 Name]</h3>
                    <p>[Project 1 Description]</p>
                    <img src="[Project 1 Image URL]" alt="[Project 1 Name] Screenshot">
                </li>
                <li>
                    <h3>[Project 2 Name]</h3>
                    <p>[Project 2 Description]</p>
                    <img src="[Project 2 Image URL]" alt="[Project 2 Name] Screenshot">
                </li>
            </ul>
        </section>

        <section id="contact">
            <h2>Contact</h2>
            <form>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                <label for="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                <input type="submit" value="Send">
            </form>
        </section>
    </main>

</body>

</html>
                      `}
        />
      </div>
    </>
  );
}
