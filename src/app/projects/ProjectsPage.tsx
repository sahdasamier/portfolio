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
    <div className="min-h-screen bg-white dark:bg-slate-900/30 transition-colors duration-300">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-slate-900 dark:text-white">
          My Projects
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProjects.map((project: Project) => (
            <ShineBorder key={project.id}>
              <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden transition-colors duration-300 shadow-lg hover:shadow-xl">
                <div className="relative aspect-video">
                  <Image
                    src={project.image || "/default-project.png"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-4">
                  <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                    {project.category?.toLowerCase() || "uncategorized"}
                  </p>
                  <h2 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                    {project.title}
                  </h2>
                  <p className="mt-2 line-clamp-3 text-slate-700 dark:text-slate-300">
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
                        className="bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-slate-800 dark:text-slate-100 flex items-center justify-center"
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
                            className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 hover:bg-slate-200 flex items-center w-full"
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
                            className="bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 flex items-center w-full"
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

      {/* Project Details Popup */}
      {isDetailsOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsDetailsOpen(false)}
          />
          
          <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsDetailsOpen(false)}
              className="absolute right-4 top-4 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
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
              
              <div className="mt-6">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {selectedProject.title}
                </h2>
                <p className="mt-2 text-slate-700 dark:text-slate-300">
                  {selectedProject.details}
                </p>
                
                <div className="mt-6 flex gap-4">
                  {selectedProject.sourceCode && (
                    <Link href={selectedProject.sourceCode} target="_blank" className="flex-1">
                      <HoverBorderGradient
                        containerClassName="rounded-lg"
                        as="button"
                        className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 flex items-center w-full"
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
                        className="bg-indigo-500 text-white flex items-center w-full"
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
