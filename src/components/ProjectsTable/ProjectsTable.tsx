"use client";
import getProjects from "@/api/getProjects"; // Import your Firebase function
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

const ProjectsTable = () => {
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
                key={project.id} // Use Firebase document ID
                className="odd:bg-white odd:dark:bg-slate-900 even:bg-slate-50 even:dark:bg-slate-900/50 border-b dark:border-slate-700 border-slate-200"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap dark:text-white"
                >
                  <Image
                    src={project.image || "/default-project.png"} // Fallback for missing image
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
                  <a
                    href={`/project/${project.id}`} // Link to project details
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    View
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectsTable;