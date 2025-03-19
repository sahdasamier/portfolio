import { db } from "@/firebase/config";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";

export async function getProjects() {
  try {
    // Reference to the "projects" collection in Firestore
    const projectsCollection = collection(db, "projects");
    
    // Fetch all documents from the collection
    const snapshot = await getDocs(projectsCollection);
    
    // Map documents to an array of project objects
    const projects = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date()
    }));
    
    return { project: projects };
  } catch (error) {
    console.error("Error fetching projects from Firestore:", error);
    throw error;
  }
}

export async function getProject(id: string) {
  try {
    const projectRef = doc(db, "projects", id);
    const projectSnap = await getDoc(projectRef);
    
    if (!projectSnap.exists()) {
      throw new Error("Project not found");
    }

    const projectData = projectSnap.data();
    return {
      id: projectSnap.id,
      ...projectData,
      createdAt: projectData.createdAt?.toDate() || new Date()
    };
  } catch (error) {
    console.error("Error fetching project from Firestore:", error);
    throw error;
  }
}

export default getProjects;