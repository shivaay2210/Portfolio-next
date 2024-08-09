// Projects.tsx
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import fitflex from "../../public/images/fitflex.png";
import estate from "../../public/images/estate.png";
import megablog from "../../public/images/megablog.png";
import curioseek from "../../public/images/curioseek.png";

const dataProject = [
  {
    title: "FitFlex",
    description:
      "Collaborated on creating FitFlex, a fitness web app offering tailored plans for maintaining fitness streaks. Designed for easy use, it helps users stay on track with personalized subscriptions. Developed with a focus on user-friendly design using modern web technologies. Deployed and maintained for reliability and scalability on live servers.",
    image: fitflex,
  },
  {
    title: "Estate-Explorer",
    description:
      "Estate-Explorer is a real estate web app built with Express.js, React, Socket.io, Prisma, and React-Leaflet. It enables users to effortlessly browse, search, and manage property listings. Styled with SASS for streamlined CSS management. Implemented Socket.io for real-time updates and secure JWT authentication for user privacy and platform security, enhancing user interaction and engagement.",
    image: estate,
  },
  {
    title: "Mega Blog",
    description:
      "MegaBlog is a React.js application featuring real-time editing capabilities, powered by AppWrite for secure backend operations. It offers a seamless user experience with React Redux Toolkit and React Router, ensuring smooth navigation and a responsive single-page application interface.",
    image: megablog,
  },
  // {
  //   title: "Curio-seek",
  //   description:
  //     "It seems like you've listed various phrases or prompts that could be used in a messaging or social media app. Are you looking for suggestions on how to organize or use these phrases in your app interface, or do you have a specific question about them",
  //   image: curioseek,
  // },
];

function Projects() {
  return (
    <section id="projects" className="my-[4rem]">
      <div className="px-[100px] flex flex-col gap-[0.5rem]">
        <h1 className="text-3xl font-bold text-white">Projects</h1>
        <div className="h-px w-full bg-white"></div>
      </div>
      <StickyScroll content={dataProject} />
    </section>
  );
}

export default Projects;
