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
  technologies?: string[];
}

// Fallback data for build time
const fallbackProjects: Project[] = [
  {
    id: "1",
    title: "Linked Trust - A Decentralized Opinion Platform",
    details: "Developed a decentralized platform that extracts, verifies, and tracks business document claims, enabling transparent and tamper-proof credential verification through blockchain technology.",
    category: "Linked Trust",
    author: "Sahda Samier",
    avatar: "https://github.com/sahdasamier/portfolio/blob/main/public/sia.jpg",
    createdAt: "2023-03-23T02:08:03.312Z",
    sourceCode: "https://github.com/Whats-Cookin/trust_claim",
    liveLink: "https://live.linkedtrust.us/feed",
    image: "Trustclaim.png",
    technologies: ["TypeScript", "React", "MUI", "Node.js", "Express.js"]
  }
];

export async function getProjects(): Promise<{ project: Project[] }> {
  // Check if we're in a build/SSG environment without proper Firebase config
  if (process.env.NODE_ENV === 'production' && typeof window === 'undefined' && !process.env.NEXT_PUBLIC_FIREBASE_API_KEY) {
    console.log('Using fallback data during build time');
    return { project: fallbackProjects };
  }

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
        technologies: data.technologies || [],
      } as Project;
    });
    
    console.log('Returning projects:', projects);
    return { project: projects };
  } catch (error) {
    console.error("Error fetching projects from Firestore:", error);
    // Return fallback data on error
    return { project: fallbackProjects };
  }
}

export async function getProject(id: string): Promise<Project | null> {
  // Check if we're in a build/SSG environment without proper Firebase config
  if (process.env.NODE_ENV === 'production' && typeof window === 'undefined' && !process.env.NEXT_PUBLIC_FIREBASE_API_KEY) {
    console.log('Using fallback data during build time');
    const project = fallbackProjects.find(p => p.id === id);
    return project || null;
  }

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
      technologies: data.technologies || [],
    };
  } catch (error) {
    console.error("Error fetching project from Firestore:", error);
    // Return fallback project if ID matches, otherwise null
    return fallbackProjects.find(p => p.id === id) || null;
  }
}

export default getProjects;