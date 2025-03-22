"use client";
import { getProjects, Project } from "@/api/getProjects";
import ShineBorder from "@/components/ui/shine-border";
import SkeletonUI from "@/ui/SkeletonUI";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { MdOpenInNew } from "react-icons/md";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Meteors from "@/components/ui/meteors";
import ScrollProgress from "@/components/ui/scroll-progress";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

export function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
    staleTime: 60000,
    retry: 3,
  });

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setIsDetailsOpen(true);
  };

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
                      {project.category?.toLowerCase() || "uncategorized"}
                    </p>
                    <h2 className="mt-2 text-xl font-bold">{project.title}</h2>
                    <p className="mt-2 line-clamp-3 text-slate-600 dark:text-slate-400">
                      {project.details}
                    </p>
                    
                    <div className="mt-4 flex flex-col gap-4">
                      <button
                        onClick={() => handleViewDetails(project)}
                        className="w-full"
                      >
                        <HoverBorderGradient
                          containerClassName="rounded-lg"
                          as="div"
                          className="dark:bg-slate-800 bg-slate-200 text-slate-900 dark:text-slate-100 flex items-center justify-center"
                        >
                          View Details
                        </HoverBorderGradient>
                      </button>
                      
                      <div className="flex gap-4">
                        {project.sourceCode && (
                          <Link href={project.sourceCode} target="_blank" className="flex-1">
                            <HoverBorderGradient
                              containerClassName="rounded-lg"
                              as="button"
                              className="dark:bg-slate-800 bg-slate-100 text-slate-700 dark:text-slate-100 flex items-center w-full"
                            >
                              <FaGithub className="text-lg mr-2" /> GitHub
                            </HoverBorderGradient>
                          </Link>
                        )}
                        {project.liveLink && (
                          <Link href={project.liveLink} target="_blank" className="flex-1">
                            <HoverBorderGradient
                              containerClassName="rounded-lg"
                              as="button"
                              className="dark:bg-indigo-500 bg-indigo-500 text-white flex items-center w-full"
                            >
                              <MdOpenInNew className="text-lg mr-2" /> Live
                            </HoverBorderGradient>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </ShineBorder>
            ))}
          </div>
        </div>
      </div>

      {/* Project Details Popup */}
      {isDetailsOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsDetailsOpen(false)}
          />
          
          <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsDetailsOpen(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <IoClose size={24} />
            </button>

            <div className="p-6">
              <Image
                src={selectedProject.image || "/default-project.png"}
                alt={selectedProject.title}
                width={800}
                height={400}
                className="w-full rounded-lg object-cover"
              />
              
              <div className="mt-4">
                <p className="text-sm font-semibold text-slate-500">
                  {selectedProject.category?.toLowerCase() || "uncategorized"}
                </p>
                <h3 className="text-2xl font-bold leading-6 text-gray-900 dark:text-white mt-2">
                  {selectedProject.title}
                </h3>
                
                <div className="mt-4">
                  <p className="text-gray-600 dark:text-gray-300 whitespace-pre-wrap">
                    {selectedProject.details}
                  </p>
                </div>

                {selectedProject.tags && selectedProject.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-6 flex gap-4">
                  {selectedProject.sourceCode && (
                    <Link href={selectedProject.sourceCode} target="_blank" className="flex-1">
                      <HoverBorderGradient
                        containerClassName="rounded-lg"
                        as="button"
                        className="dark:bg-slate-800 bg-slate-100 text-slate-700 dark:text-slate-100 flex items-center w-full"
                      >
                        <FaGithub className="text-lg mr-2" /> GitHub
                      </HoverBorderGradient>
                    </Link>
                  )}
                  {selectedProject.liveLink && (
                    <Link href={selectedProject.liveLink} target="_blank" className="flex-1">
                      <HoverBorderGradient
                        containerClassName="rounded-lg"
                        as="button"
                        className="dark:bg-indigo-500 bg-indigo-500 text-white flex items-center w-full"
                      >
                        <MdOpenInNew className="text-lg mr-2" /> Live Demo
                      </HoverBorderGradient>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
