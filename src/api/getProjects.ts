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
    details: "💻 Front-End Development & UI/UX DesignLed the design and implementation of intuitive user interfaces for the TrustClaim platform using React.js and Material-UI, enhancing user engagement and navigation efficiency. Collaborated closely with UX designers to translate complex requirements into responsive, accessible, and visually appealing web components.🔧 Back-End Engineering & System ArchitectureSpearheaded the backend development of the TrustClaim platform utilizing Node.js and Prisma, ensuring robust data management and seamless API integrations. Implemented secure authentication and authorization mechanisms, safeguarding user data and maintaining system integrity. 🌐 Web3 & Decentralized Application Development Played a pivotal role in the LinkedClaims project, advancing Web3 technologies through the integration of Solid Server and Google SDK, promoting secure and decentralized data management. Developed and deployed decentralized applications (dApps), enhancing user privacy and data ownership in alignment with Web3 principles.",
    category: "Linked Trust",
    author: "Sahda Samier",
    avatar: "https://github.com/sahdasamier/portfolio/blob/main/public/sia.jpg",
    createdAt: "2023-03-23T02:08:03.312Z",
    sourceCode: "https://github.com/Whats-Cookin/trust_claim",
    liveLink: "https://live.linkedtrust.us/feed",
    image: "Trustclaim.png",
    technologies: ["TypeScript", "React", "MUI", "Node.js", "Express.js"]
  },
  {
    id: "2",
    title: "What's Cookin' - Recipe Platform",
    details: "A comprehensive recipe and cooking platform allowing users to discover, save, and share recipes with friends and family.",
    category: "Web Application",
    author: "Sahda Samier",
    avatar: "https://github.com/sahdasamier/portfolio/blob/main/public/sia.jpg",
    createdAt: "2023-02-15T10:30:00.000Z",
    sourceCode: "https://github.com/sahdasamier/whatscookin",
    liveLink: "https://whatscookin.vercel.app",
    image: "whatscookin.png",
    technologies: ["Next.js", "React", "Tailwind CSS", "Firebase"]
  },
  {
    id: "3",
    title: "Magdi Yacoub Heart Foundation",
    details: "Developed the website for Magdi Yacoub Heart Foundation, focusing on accessibility and donation integration.",
    category: "Non-profit",
    author: "Sahda Samier",
    avatar: "https://github.com/sahdasamier/portfolio/blob/main/public/sia.jpg",
    createdAt: "2023-01-10T14:45:00.000Z",
    sourceCode: "https://github.com/sahdasamier/magdi-yacoub",
    liveLink: "https://magdiyacoub.org",
    image: "magdiyacoub.png",
    technologies: ["JavaScript", "React", "CSS", "Stripe"]
  },
  {
    id: "4", 
    title: "Task Canvas: Your Daily Masterpiece",
    details: "A productivity application that transforms task management into a visual canvas, helping users organize and prioritize their daily activities.",
    category: "Productivity",
    author: "Sahda Samier",
    avatar: "https://github.com/sahdasamier/portfolio/blob/main/public/sia.jpg",
    createdAt: "2022-12-05T09:15:00.000Z",
    sourceCode: "https://github.com/sahdasamier/task-canvas",
    liveLink: "https://taskcanvas.vercel.app",
    image: "taskcanvas.png",
    technologies: ["React", "TypeScript", "Redux", "SCSS"]
  },
  {
    id: "5",
    title: "Tic Tac Toe",
    details: "A modern implementation of the classic Tic Tac Toe game with multiplayer capabilities and customizable themes.",
    category: "Game",
    author: "Sahda Samier",
    avatar: "https://github.com/sahdasamier/portfolio/blob/main/public/sia.jpg",
    createdAt: "2022-11-20T16:30:00.000Z",
    sourceCode: "https://github.com/sahdasamier/tic-tac-toe",
    liveLink: "https://play-tictactoe.vercel.app",
    image: "tictactoe.png",
    technologies: ["JavaScript", "HTML", "CSS", "Socket.io"]
  },
  {
    id: "6",
    title: "In Symphony",
    details: "A music streaming platform allowing users to discover and listen to music based on their mood and preferences.",
    category: "Entertainment",
    author: "Sahda Samier",
    avatar: "https://github.com/sahdasamier/portfolio/blob/main/public/sia.jpg",
    createdAt: "2022-10-15T11:20:00.000Z",
    sourceCode: "https://github.com/sahdasamier/in-symphony",
    liveLink: "https://insymphony.vercel.app",
    image: "insymphony.png",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Spotify API"]
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