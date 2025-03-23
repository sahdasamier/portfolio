import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, deleteDoc, doc, getDocs } from 'firebase/firestore';
import data from '../data/data.json';

interface Project {
  category: string;
  title: string;
  image: string;
  details: string;
  liveLink: string;
  author: string;
  sourceCode: string;
  avatar: string;
  technologies: string[];
  order?: number;
  createdAt?: string;
}

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyhX2CfgMSq9UT5pSf8slvo9EOKw3SOCU",
  authDomain: "sahda-samier.firebaseapp.com",
  projectId: "sahda-samier",
  storageBucket: "sahda-samier.firebasestorage.app",
  messagingSenderId: "460904066646",
  appId: "1:460904066646:web:e3dd3f5ac7e736b0a595f7",
  measurementId: "G-VSNLF5C69H"
};

console.log('Initializing Firebase...');

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Define the correct image paths
const imagePaths: Record<string, string> = {
  "Linked Trust - A Decentralized Opinion Platform": "Trustclaim.png",
  "Magdi Yacoub Heart Foundation - Hospital Management System": "MagdyYacob.png",
  "Decentralized LinkedIn - A Web3 Professional Network": "Decentralize.png",
  "What's Cookin' - A Decentralized Ecosystem": "whats-cookin.png",
  "Tic Tac Toe - Multiplayer Game": "tic-tac-toe.png",
  "In Symphony - Social Media Platform": "share-posts.png",
  "Task Canvas - To-Do List Application": "todolist3.png",
  "Quill Quotient - Blogging Platform": "share-plogs.png"
};

async function migrateData() {
  try {
    console.log('Starting migration...');
    const projects = data as Project[];
    console.log('Data loaded:', projects.length, 'projects');

    console.log('Deleting existing documents...');
    const querySnapshot = await getDocs(collection(db, 'projects'));
    console.log('Found', querySnapshot.size, 'existing documents');
    
    const deletePromises = querySnapshot.docs.map(doc => deleteDoc(doc.ref));
    await Promise.all(deletePromises);
    console.log('All existing documents deleted.');

    console.log('\nUploading projects in original order...');
    for (let i = 0; i < projects.length; i++) {
      const project = projects[i];
      const projectData: Project = {
        ...project,
        order: i + 1,
        image: imagePaths[project.title] || project.image,
        createdAt: new Date().toISOString()
      };
      
      try {
        await addDoc(collection(db, 'projects'), projectData);
        console.log(`Added project: ${project.title} (order: ${i + 1}, image: ${projectData.image})`);
      } catch (error) {
        console.error(`Error adding project ${project.title}:`, error);
        throw error;
      }
    }

    console.log('\nVerifying order...');
    const newQuerySnapshot = await getDocs(collection(db, 'projects'));
    const updatedProjects = newQuerySnapshot.docs.map(doc => doc.data() as Project);
    updatedProjects.sort((a, b) => (a.order || 0) - (b.order || 0));
    
    updatedProjects.forEach((project, index) => {
      console.log(`${index + 1}. ${project.title} (image: ${project.image})`);
    });

    console.log('\nMigration completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error during migration:', error);
    if (error instanceof Error) {
      console.error('Error details:', error.message);
      console.error('Stack trace:', error.stack);
    }
    process.exit(1);
  }
}

process.on('unhandledRejection', (error) => {
  console.error('Unhandled promise rejection:', error);
  process.exit(1);
});

migrateData(); 