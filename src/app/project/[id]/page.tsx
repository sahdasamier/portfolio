import { getProject } from "@/api/getProjects";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectPage from "./projectPage";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  try {
    const project = await getProject(params.id);
    
    if (!project) {
      return {
        title: "Project Not Found",
        description: "The requested project could not be found.",
      };
    }

    return {
      title: project.title || "Project Details",
      description: project.details || "Project details and information",
      openGraph: {
        title: project.title || "Project Details",
        description: project.details || "Project details and information",
        images: project.image ? [
          {
            url: project.image,
            width: 1200,
            height: 630,
            alt: project.title || "Project image",
          },
        ] : [],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Error",
      description: "An error occurred while loading the project.",
    };
  }
}

export default async function ProjectDetails({ 
  params 
}: { 
  params: { id: string } 
}) {
  try {
    const project = await getProject(params.id);

    if (!project) {
      notFound();
    }

    return (
      <div className="min-h-screen bg-slate-100 dark:bg-[#020617]">
        <ProjectPage project={project} />
      </div>
    );
  } catch (error) {
    console.error("Error loading project:", error);
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-100 dark:bg-[#020617]">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Error Loading Project</h1>
          <p className="text-gray-600 dark:text-gray-400">
            An error occurred while loading the project. Please try again later.
          </p>
        </div>
      </div>
    );
  }
} 