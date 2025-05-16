import Image from "next/image";
import { BiLogoTypescript } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import {
  FaGithub,
  FaLinkedin,
  FaNode,
  FaReact,
} from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { SiExpress, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import princessImage from "../../public/princessImage.jpeg";

import { FlipWords } from "@/components/ui/flip-words";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { SparklesText } from "@/components/ui/sparkles-text";
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Meteors } from "@/components/ui/meteors";
import Link from "next/link";
import { MdDownload } from "react-icons/md";

/* eslint-disable react/no-unescaped-entities */
const words = [
  "Javascript.",
  "Node.js",
  "React.js",
  "Next.js",
  "Backend.",
  "Frontend.",
];

export function HeroSection() {
  return (
    <div className="relative w-full lg:py-20 lg:pt-32 pt-10 bg-slate-50 dark:bg-[#020617] antialiased overflow-hidden transition-colors duration-300">
      <BackgroundBeams />
      <Meteors number={30} />
      <div className="z-0 dark:flex hidden">
        <Spotlight
          className="-top-32 left-0 md:left-80 md:-top-20 -z-0"
          fill="#6366f1"
        />
      </div>
      <div className="z-0 dark:hidden flex">
        <Spotlight
          className="-top-32 left-0 md:left-80 md:-top-20 -z-0"
          fill="#818cf8"
        />
      </div>

      <div className="mx-auto max-w-7xl lg:px-8 relative z-10">
        <div className="flex lg:flex-row flex-col justify-center px-4 py-10 lg:px-6">
          <div className="flex flex-col justify-center px-4 py-10 lg:z-40">
            <div className="mt-2 flex max-w-max items-center space-x-2 rounded-full border border-slate-200 dark:border-slate-800 p-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
              <SparklesText className="mx-2 text-slate-900 dark:text-white" text="Hey there!🙂" />
            </div>
            <h1 className="mt-3 max-w-4xl text-3xl font-extrabold tracking-tight md:text-4xl lg:text-6xl flex">
              <span className="mr-3 font-medium text-slate-900 dark:text-white">I'm</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                Sahda Samier
              </span>
            </h1>
            <h2 className="mt-6 font-bold lg:text-2xl md:text-xl sm:text-lg flex flex-row items-center">
              <span className="text-slate-800 dark:text-slate-300">I am a Web Developer in</span>
              <div className="text-slate-900 dark:text-white">
                <FlipWords words={words} />
              </div>
            </h2>
            <p className="mt-5 text-base font-medium lg:w-4/5 text-slate-800 dark:text-slate-300">
              Welcome to my portfolio! I hope you enjoy your visit. I specialize in
              Full-stack development with React.js
              and in Back-End development with Node.js. I have worked on various projects, including a Real{" "}
              <span className="text-indigo-600 dark:text-indigo-400">React-based</span> Website
              Design and Development, and more.
              <br />I am passionate about learning new technologies and building
              solutions that make a difference. Thank you for visiting my
              portfolio! I hope you like my work.{" "}
              <span className="text-yellow-500 dark:text-yellow-400">Happy coding!</span> 🧑🏻‍💻
            </p>

            <div className="flex gap-5 mt-5">
              <a
                href="https://github.com/Sahdasamier"
                aria-label="GitHub Icon"
                target="_blank"
                className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
              >
                <FaGithub className="h-7 w-7" />
              </a>
              <a
                href="https://www.linkedin.com/in/sahda-samier/"
                target="_blank"
                aria-label="Linkedin Icon"
                className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
              >
                <FaLinkedin className="h-7 w-7" />
              </a>
            </div>
            <div className="mt-5">
              <div className="flex mt-5 gap-x-2">
                <a
                  href="/SahdaSamier_front-end developer.pdf"
                  download="SahdaSamier_front-end_developer_resume.pdf"
                  className="inline-block"
                >
                  <ShimmerButton className="bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:text-white dark:hover:bg-indigo-600">
                    <span className="whitespace-pre-wrap flex items-center text-center text-sm font-medium leading-none tracking-tight lg:text-base">
                      My Resume
                      <MdDownload className="ml-1" />
                    </span>
                  </ShimmerButton>
                </a>

                <Link href="/contact">
                  <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    className="bg-white text-slate-900 dark:bg-slate-900 dark:text-white flex items-center space-x-2"
                  >
                    <span>Contact Me</span>
                  </HoverBorderGradient>
                </Link>
              </div>
            </div>
          </div>

          <div className="relative flex px-20 lg:h-[500px] h-[330px] w-full flex-col items-center justify-center overflow-hidden">
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-slate-900 to-slate-600 bg-clip-text text-center lg:text-8xl text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-400">
              Skills
            </span>

            <OrbitingCircles iconSize={40}>
              <BiLogoTypescript className="text-sky-600 dark:text-sky-400 lg:text-8xl text-3xl" />
              <FaNode className="text-lime-500 dark:text-lime-400 lg:text-8xl text-3xl" />
              <FaReact className="text-sky-500 dark:text-sky-400 lg:text-8xl text-3xl" />
              <SiExpress className="text-slate-900 dark:text-slate-100 lg:text-8xl text-3xl" />
              <SiTailwindcss className="text-cyan-500 dark:text-cyan-400 lg:text-8xl text-3xl" />
              <SiNextdotjs className="text-slate-900 dark:text-slate-100 lg:text-8xl text-3xl" />
              <DiMongodb className="text-lime-500 dark:text-lime-400 lg:text-8xl text-3xl" />
              <RiJavascriptFill className="text-yellow-500 dark:text-yellow-400 lg:text-8xl text-3xl" />
            </OrbitingCircles>

            <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
              <FaReact className="text-sky-500 dark:text-sky-400 lg:text-8xl text-3xl" />
              <DiMongodb className="text-lime-500 dark:text-lime-400 lg:text-8xl text-3xl" />
              <BiLogoTypescript className="text-sky-600 dark:text-sky-400 lg:text-8xl text-3xl" />
              <RiJavascriptFill className="text-yellow-500 dark:text-yellow-400 lg:text-8xl text-3xl" />
              <FaNode className="text-lime-500 dark:text-lime-400 lg:text-8xl text-3xl" />
              <SiExpress className="text-slate-900 dark:text-slate-100 lg:text-8xl text-3xl" />
              <SiNextdotjs className="text-slate-900 dark:text-slate-100 lg:text-8xl text-3xl" />
              <SiTailwindcss className="text-cyan-500 dark:text-cyan-400 lg:text-8xl text-3xl" />
            </OrbitingCircles>
          </div>
        </div>
        <hr className="my-5 w-full -mt-3 border-slate-200 dark:border-slate-800" />
        <div className="rounded-lg bg-slate-100 dark:bg-slate-800 lg:p-[3px] px-2">
          <Image
            placeholder="blur"
            className="rounded-lg"
            src={princessImage}
            alt="princess Image"
          />
        </div>
      </div>
    </div>
  );
}
