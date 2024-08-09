"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import Image from "next/image";

function About() {
  return (
    <section
      id="about"
      className="h-auto px-[100px] w-full rounded-md mx-auto py-10 md:py-0"
    >
      <div className="flex flex-col gap-[2rem]">
        <div className="flex flex-col gap-[0.5rem]">
          <h1 className="text-3xl font-bold text-white">About Me</h1>
          <div className="h-px w-full bg-white"></div>
        </div>
        <p className="text-4xl font-semibold text-slate-400">
          I&apos;m a 20 year old developer from{" "}
          <span className="font-bold text-slate-200">India</span>.
        </p>
        <p className="text-2xl font-semibold text-slate-400">
          Currently pursuing my{" "}
          <span className="font-bold text-slate-200">B.Tech</span> in{" "}
          <span className="font-bold text-slate-200">
            Electronics and Communication
          </span>{" "}
          from{" "}
          <span className="font-bold text-slate-200">
            Delhi Technological University
          </span>
        </p>
        <p className="text-2xl font-semibold text-slate-400">
          Primarily a{" "}
          <span className="font-bold text-slate-200">
            Software Developer / Competitive Programmer
          </span>{" "}
          exploring different domains and enjoying college life. Feel free to
          connect with me using my social links.
        </p>
        <ul className="decoration-none flex flex-row gap-[1rem]">
          <li>
            <a href="https://www.linkedin.com/in/guptamadhav1729" target="blank">
              <img
                src="https://www.yashkvr.com/_next/image?url=https%3A%2F%2Fimgur.com%2FJRgbGsP.png&w=128&q=75"
                alt="LinkedIn"
                style={{ width: "40px", height: "40px" }}
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/shivaay2210" target="blank">
              <img
                src="https://www.yashkvr.com/_next/image?url=https%3A%2F%2Fimgur.com%2FqVhGNtD.png&w=128&q=75"
                alt="GitHub"
                style={{ width: "40px", height: "40px" }}
              />
            </a>
          </li>
        </ul>
      </div>
      <BackgroundBeams className="top-[200px]" />
    </section>
  );
}

export default About;
