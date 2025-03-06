import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";

async function getProject() {
  try {
    // Reference to the "projects" collection in Firestore
    const projectsCollection = collection(db, "projects");
    
    // Fetch all documents from the collection
    const snapshot = await getDocs(projectsCollection);
    
    // Map documents to an array of project objects
    const projects = snapshot.docs.map((doc) => ({
      id: doc.id, // Include the document ID
      ...doc.data(), // Spread the document data
      createdAt: doc.data().createdAt?.toDate() || new Date()
    }));
    
    return { project: projects };
  } catch (error) {
    console.error("Error fetching projects from Firestore:", error);
    throw error;
  }
}

export default getProject;