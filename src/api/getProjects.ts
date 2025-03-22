import { db } from "@/lib/firebase/config";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";

export interface Project {
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

export async function getProjects(): Promise<{ project: Project[] }> {
  try {
    console.log('Starting getProjects function...');
    // Reference to the "projects" collection in Firestore
    const projectsCollection = collection(db, "projects");
    
    // Fetch all documents from the collection
    console.log('Fetching projects from Firestore...');
    const snapshot = await getDocs(projectsCollection);
    
    // Map documents to an array of project objects
    console.log('Number of projects found:', snapshot.docs.length);
    const projects = snapshot.docs.map((doc) => {
      const data = doc.data();
      console.log('Project data:', { id: doc.id, ...data });
      return {
        id: doc.id,
        title: data.title || "",
        details: data.details || "",
        category: data.category || "",
        author: data.author || "",
        avatar: data.avatar || "",
        createdAt: data.createdAt || new Date().toISOString(),
        sourceCode: data.sourceCode || "",
        liveLink: data.liveLink || "",
        image: data.image || "",
      } as Project;
    });
    
    console.log('Returning projects:', projects);
    return { project: projects };
  } catch (error) {
    console.error("Error fetching projects from Firestore:", error);
    throw error;
  }
}

export async function getProject(id: string): Promise<Project | null> {
  try {
    console.log('Fetching project with ID:', id);
    const projectRef = doc(db, "projects", id);
    const projectSnap = await getDoc(projectRef);
    
    if (!projectSnap.exists()) {
      console.log('Project not found:', id);
      return null;
    }

    const data = projectSnap.data();
    console.log('Project data:', data);
    return {
      id: projectSnap.id,
      title: data.title || "",
      details: data.details || "",
      category: data.category || "",
      author: data.author || "",
      avatar: data.avatar || "",
      createdAt: data.createdAt || new Date().toISOString(),
      sourceCode: data.sourceCode || "",
      liveLink: data.liveLink || "",
      image: data.image || "",
    };
  } catch (error) {
    console.error("Error fetching project from Firestore:", error);
    throw error;
  }
}

export default getProjects;