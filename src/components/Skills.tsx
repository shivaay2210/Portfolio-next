import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Allskills = [
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    name: "JavaScript",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    name: "HTML5",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    name: "CSS3",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    name: "React",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    name: "Next.js",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    name: "TypeScript",
  },
  {
    image: "https://simpleicons.org/icons/tailwindcss.svg",
    name: "Tailwind CSS",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    name: "MongoDB",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    name: "GitHub",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    name: "MySQL",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    name: "C++",
  },
  {
    image: "https://prismalens.vercel.app/header/logo-dark.svg",
    name: "Prisma",
  },
  {
    image:
      "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000",
    name: "Express",
  },
];

const Skills: React.FC = () => {
  return (
    <>
      <div className="px-[100px] flex flex-col gap-[0.5rem]" id="skills">
        <h1 className="text-3xl font-bold text-white">Skills</h1>
        <div className="h-px w-full bg-white"></div>
      </div>

      <div className="h-[30rem] w-full bg-white dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-6xl">
            <InfiniteMovingCards
              items={Allskills}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
