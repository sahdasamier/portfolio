'use client';

import { HoverBorderGradient } from "@/src/components/ui/hover-border-gradient";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
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
  tags?: string[];
}

interface ProjectPageProps {
  project: Project;
}

export default function ProjectPage({ project }: ProjectPageProps) {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-[#020617] py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <Link href="/projects" prefetch>
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-slate-800 bg-slate-100 text-sm text-slate-700 dark:text-slate-100 flex items-center"
            >
              <IoIosArrowBack className="font-extrabold text-lg mr-1 -ml-2" /> Back to Projects
            </HoverBorderGradient>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Image
              src={project?.image || "/default-project.png"}
              alt={project?.title || "Project Image"}
              width={700}
              height={500}
              className="rounded-lg shadow-lg"
              priority
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4">{project?.title}</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {project?.details}
            </p>
            <div className="flex space-x-4">
              {project?.sourceCode && (
                <Link
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <HoverBorderGradient
                    containerClassName="rounded-lg"
                    as="button"
                    className="dark:bg-slate-800 bg-slate-100 text-slate-700 dark:text-slate-100 flex items-center space-x-2"
                  >
                    <FaGithub className="font-extrabold text-lg mr-1" /> GitHub
                  </HoverBorderGradient>
                </Link>
              )}
              {project?.liveLink && (
                <Link
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <HoverBorderGradient
                    containerClassName="rounded-lg"
                    as="button"
                    className="dark:bg-indigo-500 bg-slate-100 text-slate-700 dark:text-slate-100 flex items-center space-x-2"
                  >
                    <MdOpenInNew className="font-extrabold text-lg mr-1" /> Live
                  </HoverBorderGradient>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 