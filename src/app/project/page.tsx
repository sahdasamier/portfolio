import { getProject } from "@/api/getProjects";
import { Metadata } from "next";
import ProjectPage from "./projectPage";

const Project = async ({ params }: { params: { id: string } }) => {
  const project = await getProject(params.id);

  if (!project) {
    return <div>Project not found.</div>;
  }

  // Add the tags property if it doesn't exist
  const projectWithTags = {
    ...project,
    tags: project.tags || [], // Provide a default empty array if tags doesn't exist
  };

  return (
    <>
      <ProjectPage project={projectWithTags} />
    </>
  );
};

export default Project;