import { getProject } from "@/src/api/getProjects";
import { Metadata } from "next";
import ProjectPage from "./projectPage";
import { notFound } from 'next/navigation';

// This generates the paths at build time
export async function generateStaticParams() {
  try {
    const { project: projects } = await getProjects();
    return projects.map(project => ({
      id: project.id
    }));
  } catch (error) {
    console.error('Error generating static paths:', error);
    return [];
  }
}

// This generates the metadata for each page
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
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
}

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
    throw error; // This will trigger the closest error boundary
  }
}

// Force dynamic rendering for project pages
export const dynamic = 'force-dynamic'; 