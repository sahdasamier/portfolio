"use client";

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGithub } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { MdOpenInNew } from "react-icons/md";

interface Project {
  id: string;
  title: string;
  details: string;
  category: string;
  author: string;
  avatar: string;
  createdAt: string;
  sourceCode: string;
  liveLink: string;
  image: string;
}

interface ProjectPageProps {
  project: Project;
}

export default function ProjectPage({ project }: ProjectPageProps) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="p-8 max-w-7xl mx-auto mt-28 mb-10 dark:bg-[#020617] bg-slate-100 rounded-xl border-[1px] dark:border-slate-500/10 border-slate-500/5">
      <div className="pb-5">
        <HoverBorderGradient
          onClick={handleBack}
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-slate-800 bg-slate-100 text-sm text-slate-700 dark:text-slate-100 flex items-center"
        >
          <IoIosArrowBack className="font-extrabold text-lg mr-1 -ml-2" /> Back
        </HoverBorderGradient>
      </div>

      {/* Project Image */}
      <div className="bg-blue-100 w-full h-full rounded-lg drop-shadow-md overflow-hidden">
        <Image
          src={project.image}
          width={1080}
          height={720}
          alt={project.title}
          className="w-full object-cover"
          priority
        />
      </div>

      {/* Project Details */}
      <div className="mt-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h1 className="text-3xl font-bold">{project.title}</h1>
          <div className="flex gap-4">
            {project.sourceCode && (
              <Link href={project.sourceCode} target="_blank">
                <HoverBorderGradient
                  containerClassName="rounded-lg"
                  as="button"
                  className="dark:bg-slate-800 bg-slate-100 text-slate-700 dark:text-slate-100 flex items-center"
                >
                  <FaGithub className="font-extrabold text-lg mr-2" /> GitHub
                </HoverBorderGradient>
              </Link>
            )}
            {project.liveLink && (
              <Link href={project.liveLink} target="_blank">
                <HoverBorderGradient
                  containerClassName="rounded-lg"
                  as="button"
                  className="dark:bg-indigo-500 bg-indigo-500 text-white flex items-center"
                >
                  <MdOpenInNew className="font-extrabold text-lg mr-2" /> Live Demo
                </HoverBorderGradient>
              </Link>
            )}
          </div>
        </div>

        <div className="mt-6">
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
            Category: {project.category}
          </p>
          <p className="mt-4 text-lg leading-relaxed">{project.details}</p>
        </div>

        {/* Author Info */}
        <div className="mt-8 flex items-center gap-4">
          <Image
            src={project.avatar}
            width={48}
            height={48}
            alt={project.author}
            className="rounded-full"
          />
          <div>
            <p className="font-semibold">{project.author}</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Created: {format(new Date(project.createdAt), "MMMM d, yyyy")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 