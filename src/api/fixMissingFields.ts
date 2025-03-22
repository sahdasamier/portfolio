import { db } from "../lib/firebase/config"; // Use correct import path
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";

async function fixMissingFields() {
  const projectsCollection = collection(db, "projects");
  const snapshot = await getDocs(projectsCollection);

  snapshot.docs.forEach(async (doc) => {
    const data = doc.data();
    if (!data.sourceCode) {
      await updateDoc(doc.ref, { sourceCode: "" });
    }
    if (!data.liveLink) {
      await updateDoc(doc.ref, { liveLink: "" });
    }
    if (!data.id) {
      await updateDoc(doc.ref, { id: doc.id }); // Use Firestore document ID
    }
  });

  console.log("Missing fields fixed");
}

fixMissingFields();