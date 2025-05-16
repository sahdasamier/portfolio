import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import type { ServiceAccount } from 'firebase-admin/app';

// Initialize Firebase Admin with service account
const serviceAccount = {
  type: "service_account",
  project_id: "sahda-samier",
  private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
  private_key: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
  client_id: process.env.FIREBASE_CLIENT_ID,
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: process.env.FIREBASE_CERT_URL,
  universe_domain: "googleapis.com"
} as ServiceAccount;

// Initialize Firebase Admin
const app = initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore(app);

const projects = [
  {
    category: "web-development",
    title: "What's Cookin'",
    image: "/whats-cookin.png",
    details: "As the During my tenure as a front-end employee, I played a pivotal role in nurturing this vision, contributing to the development of our platform into a vast decentralized ecosystem. My responsibilities primarily revolved around resolving bugs and implementing small-scale features, each aimed at enhancing user experience and bolstering platform functionality.",
    liveLink: "https://www.whatscookin.us/",
    author: "Sia.Samier",
    sourceCode: "https://github.com/Whats-Cookin/whats-cookin-v1.1/",
    avatar: "/sia.jpg",
    createdAt: new Date().toISOString()
  },
  {
    category: "web-development",
    title: "Linked trust",
    image: "/Trustclaim.png",
    details: "As the lead developer, 💻 Front-End Development & UI/UX DesignLed the design and implementation of intuitive user interfaces for the TrustClaim platform using React.js and Material-UI, enhancing user engagement and navigation efficiency. Collaborated closely with UX designers to translate complex requirements into responsive, accessible, and visually appealing web components.🔧 Back-End Engineering & System ArchitectureSpearheaded the backend development of the TrustClaim platform utilizing Node.js and Prisma, ensuring robust data management and seamless API integrations. Implemented secure authentication and authorization mechanisms, safeguarding user data and maintaining system integrity. 🌐 Web3 & Decentralized Application Development Played a pivotal role in the LinkedClaims project, advancing Web3 technologies through the integration of Solid Server and Google SDK, promoting secure and decentralized data management. Developed and deployed decentralized applications (dApps), enhancing user privacy and data ownership in alignment with Web3 principles.",
    liveLink: "https://linkedtrust.us",
    author: "Sia.Samier",
    sourceCode: "https://github.com/Whats-Cookin/trust_claim",
    avatar: "/sia.jpg",
    createdAt: new Date().toISOString()
  },
  {
    category: "web-development",
    title: "Magdi Yacoub Heart Foundation",
    image: "/MagdyYacob.png",
    details: "Contributed to developing comprehensive Hospital Registration and Patient Management System.",
    liveLink: "https://www.myf-egypt.org/donation/?utm_source=google&utm_medium=cpc&utm_campaign=Ebranded&gad_source=1&gclid=CjwKCAjww_iwBhApEiwAuG6ccBq9XXhE7vdElYT35lAehNtAc5p3rqbCx6603Bf4247ASwzrw-vQqxoCQ3oQAvD_BwE",
    author: "Sia.Samier",
    sourceCode: "https://github.com/AHC-APPS/observership/",
    avatar: "/sia.jpg",
    createdAt: new Date().toISOString()
  },
  {
    category: "web-development",
    title: "Decentralized_linkedin",
    image: "/Decentralize.png",
    details: "As the product and tech lead , I developed a decentralized platform similar to LinkedIn. This platform allows users to express themselves, create portfolios, and connect with potential employers or collaborators. It also features an evaluation system for users to receive feedback and continuously improve their profile.",
    liveLink: "",
    author: "Sia.Samier",
    sourceCode: "https://github.com/Whats-Cookin/decentralized_linkedin",
    avatar: "/sia.jpg",
    createdAt: new Date().toISOString()
  },
  {
    category: "web-development",
    title: "Tic Tac Toe",
    image: "/tic-tac-toe.png",
    details: "A web application that allows users to play against the computer or against friends in this X, 0 game.",
    liveLink: "https://tic-tac-toe-game-tawny.vercel.app/",
    author: "Sia.Samier",
    sourceCode: "https://github.com/sahdasamier/tic-tac-toe",
    avatar: "/sia.jpg",
    createdAt: new Date().toISOString()
  },
  {
    category: "web-development",
    title: "In Symphony",
    image: "/share-posts.png",
    details: "A web application that allows users to create their own posts and like or remove any posts on the page as they like.",
    liveLink: "https://share-your-plogs.vercel.app/",
    author: "Sia.Samier",
    sourceCode: "https://github.com/sahdasamier/Launching-a-post.git",
    avatar: "/sia.jpg",
    createdAt: new Date().toISOString()
  },
  {
    category: "web-development",
    title: "Task Canvas: Your Daily Masterpiece",
    image: "/todolist.png",
    details: "A web application that allows users to create their list and mark tasks as completed. Users can also delete tasks and organize them into three tabs: all, completed, and uncompleted.",
    liveLink: "https://to-control-the-tabs.vercel.app/",
    author: "Sia.Samier",
    sourceCode: "https://github.com/sahdasamier/to-control-the-tabs",
    avatar: "/sia.jpg",
    createdAt: new Date().toISOString()
  },
  {
    category: "web-development",
    title: "Quill Quotient",
    image: "/share-plogs.png",
    details: "A web application that allows users to create two pages: one for writing a title, blog, and author, and another to upload data, which adds as a new blog on the website.",
    liveLink: "https://to-do-blog.vercel.app/",
    author: "Sia.Samier",
    sourceCode: "https://github.com/sahdasamier/TO-DO-BLOG.git",
    avatar: "/sia.jpg",
    createdAt: new Date().toISOString()
  },
];

async function migrateDataToFirebase() {
  try {
    // Reference to the projects collection
    const projectsCollection = db.collection('projects');

    // Add each project to Firestore
    for (const project of projects) {
      await projectsCollection.add(project);
      console.log(`Added project: ${project.title}`);
    }

    console.log("Migration completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error migrating data to Firebase:", error);
    process.exit(1);
  }
}

// Run the migration
migrateDataToFirebase();