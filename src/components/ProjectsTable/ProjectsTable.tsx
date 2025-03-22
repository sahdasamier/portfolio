"use client";
import { getProjects } from "@/api/getProjects";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { FaGithub } from "react-icons/fa6";
import { MdOpenInNew } from "react-icons/md";
import Link from "next/link";

const ProjectsTable = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  
  // Use useQuery to fetch projects from Firebase
  const { data, isLoading, isError } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  if (isLoading) {
    return <div>Loading projects...</div>;
  }

  if (isError) {
    return <div>Error loading projects. Please try again later.</div>;
  }

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-10">
        <table className="w-full text-sm text-left rtl:text-right text-slate-500 dark:text-slate-400">
          <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-800 dark:text-slate-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Details
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Live Link
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.project?.map((project: any) => {
              // Add validation for required fields
              if (!project.id || !project.title) {
                console.error('Invalid project data:', project);
                return null; // Skip rendering invalid projects
              }

              return (
                <tr
                  key={project.id}
                  className="odd:bg-white odd:dark:bg-slate-900 even:bg-slate-50 even:dark:bg-slate-900/50 border-b dark:border-slate-700 border-slate-200"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap dark:text-white"
                  >
                    <Image
                      src={project.image || "/default-project.png"}
                      className="w-10 h-10 rounded-md"
                      width={50}
                      height={50}
                      alt={project.title || "Project image"}
                    />
                  </th>
                  <td className="px-6 py-4">
                    {project.title || "Untitled Project"}
                  </td>
                  <td className="px-6 py-4">
                    {project.details?.length > 100
                      ? project.details.substring(0, 100).concat("...")
                      : project.details || "No description"}
                  </td>
                  <td className="px-6 py-4">
                    {project.category?.toLocaleLowerCase() || "uncategorized"}
                  </td>
                  <td className="px-6 py-4">
                    {project.liveLink ? (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        View Live
                      </a>
                    ) : (
                      "Not available"
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => {
                        setSelectedProject(project);
                        setIsDetailsOpen(true);
                      }}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Project Details Modal */}
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
                    {selectedProject.tags.map((tag: string, index: number) => (
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
    </>
  );
};

export default ProjectsTable;