"use client";

import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import { ReactTyped } from "react-typed";
import { BackgroundBeams } from "./ui/background-beams";
import { Link as ScrollLink } from "react-scroll"; // Import ScrollLink

function HeroSection() {
  return (
    <section
      id="heroSection"
      className="h-auto md:h-[43rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
      <BackgroundBeams />
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="px-[100px] flex flex-col gap-[2rem] relative z-10 w-full">
        <p className="md:mt-0 text-md font-bold md:text-lg text-slate-400">
          Hi I am,
        </p>
        <p className="md:mt-0 text-4xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Madhav Gupta
        </p>
        <h1 className="flex flex-row md:mt-0 text-3xl md:text-5xl font-bold bg-clip-text">
          <p className="md:mt-0 text-3xl md:text-5xl font-semibold text-slate-400 inline">
            {" "}
            I am a&nbsp;
          </p>
          <ReactTyped
            strings={[
              "Competitive Programmer",
              "Full Stack Web Developer",
              "Tech Enthusiast",
            ]}
            typeSpeed={50}
            backSpeed={30}
            startDelay={1000}
            backDelay={2000}
            loop
          />
        </h1>

        <div className="mt-8">
          {" "}
          {/* Adjusted margin to create more space */}
          <ScrollLink
            to="projects" // Target section id
            smooth={true}
            duration={500}
          >
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              View my Projects
            </Button>
          </ScrollLink>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
