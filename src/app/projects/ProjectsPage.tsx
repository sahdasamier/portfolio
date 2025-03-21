"use client";
import { getProjects, Project } from "@/src/api/getProjects";
import { createProjectLink } from "@/src/lib/firebase/dynamicLinks";
import ShineBorder from "@/src/components/ui/shine-border";
import SkeletonUI from "@/src/ui/SkeletonUI";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { HiViewGridAdd } from "react-icons/hi";
import { MdOpenInNew } from "react-icons/md";
import { HoverBorderGradient } from "@/src/components/ui/hover-border-gradient";
import Meteors from "@/src/components/ui/meteors";
import ScrollProgress from "@/src/components/ui/scroll-progress";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface ProjectsPageProps {
  projects: Project[];
}

export default function ProjectsPage({ projects }: ProjectsPageProps) {
  const router = useRouter();
  const [projectLinks, setProjectLinks] = useState<Record<string, string>>({});
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
    staleTime: 60000,
    retry: 3,
  });

  useEffect(() => {
    // Log any errors for debugging
    if (isError) {
      console.error("Error fetching projects:", error);
    }
  }, [isError, error]);

  useEffect(() => {
    async function generateProjectLinks() {
      if (data?.project) {
        const links: Record<string, string> = {};
        for (const project of data.project) {
          try {
            const link = await createProjectLink(project.id);
            links[project.id] = link;
          } catch (error) {
            console.error(`Error generating link for project ${project.id}:`, error);
            links[project.id] = `/projects/${project.id}`;
          }
        }
        setProjectLinks(links);
      }
    }

    generateProjectLinks();
  }, [data?.project]);

  if (isLoading) {
    return <SkeletonUI />;
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-slate-100 dark:bg-[#020617] pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Error Loading Projects</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              An error occurred while loading the projects.
            </p>
            <button
              onClick={() => refetch()}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  const sortedProjects = data?.project?.sort((a: Project, b: Project) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return dateB.getTime() - dateA.getTime();
  });

  if (!sortedProjects || sortedProjects.length === 0) {
    return (
      <div className="min-h-screen bg-slate-100 dark:bg-[#020617] pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">No Projects Found</h1>
            <p className="text-gray-600 dark:text-gray-400">
              There are currently no projects to display.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const handleDetailsClick = (projectId: string) => {
    window.location.href = `/projects/${projectId}`;
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-[#020617]">
      <ScrollProgress />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-10">
        <div className="relative">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-3xl font-bold sm:text-4xl">Projects</h1>
            <p className="mt-4 max-w-[85%] leading-normal text-slate-900 dark:text-slate-200 sm:text-lg sm:leading-7">
              Explore my portfolio of web development projects, showcasing my skills
              in building modern, responsive, and user-friendly applications.
            </p>
            <Meteors number={20} />
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sortedProjects.map((project: Project) => (
              <ShineBorder key={project.id}>
                <div className="group relative h-full rounded-xl bg-slate-100 dark:bg-slate-900">
                  <Image
                    src={project.image || "/default-project.png"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="aspect-video w-full rounded-t-xl object-cover"
                    priority
                  />
                  <div className="p-4">
                    <p className="text-sm font-semibold text-slate-500">
                      #{project.category?.toLowerCase() || "uncategorized"}
                    </p>
                    <h2 className="mt-2 text-xl font-bold">{project.title}</h2>
                    <p className="mt-2 line-clamp-3 text-slate-600 dark:text-slate-400">
                      {project.details}
                    </p>
                    
                    <div className="mt-4 flex gap-4">
                      {project.sourceCode && (
                        <Link href={project.sourceCode} target="_blank">
                          <HoverBorderGradient
                            containerClassName="rounded-lg"
                            as="button"
                            className="dark:bg-slate-800 bg-slate-100 text-slate-700 dark:text-slate-100 flex items-center"
                          >
                            <FaGithub className="text-lg mr-2" /> GitHub
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
                            <MdOpenInNew className="text-lg mr-2" /> Live
                          </HoverBorderGradient>
                        </Link>
                      )}
                      <a
                        href={`/projects/${project.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleDetailsClick(project.id);
                        }}
                      >
                        <HoverBorderGradient
                          containerClassName="rounded-lg"
                          as="button"
                          className="dark:bg-slate-800 bg-slate-200 text-slate-900 dark:text-slate-100 flex items-center"
                        >
                          <HiViewGridAdd className="text-lg mr-2" /> Details
                        </HoverBorderGradient>
                      </a>
                    </div>
                  </div>
                </div>
              </ShineBorder>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
