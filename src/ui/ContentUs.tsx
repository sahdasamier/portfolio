import { BoxReveal } from '@/components/ui/box-reveal';
import Sia from "../../public/sia.jpg";
import { ShinyButton } from '@/components/ui/shiny-button';
import Image from "next/image";
import Link from "next/link";
import { BackgroundBeams } from '@/components/ui/background-beams';

/* eslint-disable react/no-unescaped-entities */
export const ContentUs = () => {
  return (
    <div className="relative flex flex-col-reverse rounded-xl py-16 my-20 pt-20 lg:dark:bg-slate-900 lg:bg-slate-50 lg:pt-0 lg:flex-col lg:pb-0">
      <BackgroundBeams />
      <div className="inset-y-0 top-0 right-0 z-0 w-full rounded-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full z-10 dark:text-slate-900 text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <Image
          width={500}
          height={500}
          className="object-cover z-50 overflow-hidden w-full h-56 rounded-xl shadow-lg lg:shadow-none md:h-96 lg:h-full"
          placeholder="blur"
          src={Sia}
          alt="Sia Images"
        />
      </div>

      <div className="relative flex flex-col items-start w-full z-10 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5 z-10">
          <BoxReveal boxColor={"#6366f1"} duration={0.5}>
            <p className="text-[2rem] font-semibold rounded-lg text-slate-900 dark:text-white">
              About Me<span className="text-indigo-600 dark:text-indigo-400">.</span>
            </p>
          </BoxReveal>
          <p className="pr-5 mb-5 text-base text-slate-800 dark:text-slate-300 md:text-lg">
            Hi, I'm{" "}
            <span className="text-xl font-bold md:text-2xl text-indigo-600 dark:text-indigo-400">
              Sahda Samier
            </span>
            , a passionate Web Application Developer from Egypt.
            I began my journey into web development in 2021, the same year I
            completed my Bachelors in Business Informatics. Currently, I am
            pursuing further studies at Degree College while continuing to
            enhance my skills in both front-end and back-end technologies.
            <br />
            Over the past few years, I have honed my expertise in Web
            Application Development, enabling me to build dynamic, responsive
            websites and applications from the ground up. My skill set spans
            various programming languages and frameworks, including HTML, CSS,
            JavaScript, TypeScript, Node.js, React.js, Next.js, MongoDB and more. I am
            committed to delivering efficient, high-quality solutions that meet
            the needs of clients and users alike.
          </p>
          <div className="flex items-center z-10">
            <Link href="/contact">
              <ShinyButton className="bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100">
                Contact Me
              </ShinyButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
