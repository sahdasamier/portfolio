import { getProjects } from '@/api/getProjects';

export async function getProjectPaths() {
  try {
    const { project: projects } = await getProjects();
    return projects.map(project => ({
      params: { id: project.id }
    }));
  } catch (error) {
    console.error('Error getting project paths:', error);
    return [];
  }
} 