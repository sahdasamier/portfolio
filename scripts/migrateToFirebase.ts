import { db } from "../src/firebase/config";
import { collection, addDoc } from "firebase/firestore";

const projects = [
  {
    category: "web-development",
    title: "What's Cookin'",
    image: "What's Cookin'.png",
    details: "As the During my tenure as a front-end employee, I played a pivotal role in nurturing this vision, contributing to the development of our platform into a vast decentralized ecosystem. My responsibilities primarily revolved around resolving bugs and implementing small-scale features, each aimed at enhancing user experience and bolstering platform functionality.",
    liveLink: "https://www.whatscookin.us/",
    author: "Sahda Samier Ahmed",
    sourceCode: "https://github.com/Whats-Cookin/whats-cookin-v1.1/",
    avatar: "https://avatars.githubusercontent.com/u/80270685?v=4",
  },
  {
    category: "web-development",
    title: "Linked trust",
    image: "Trustclaim.png",
    details: "As the lead developer, I spearheaded the creation of a decentralized platform. Users express opinions through claims, and others can support or challenge them within interconnected nodes or chains. This innovative structure fosters collaborative discourse as circles diverge from the main one based on evolving claims, creating a dynamic and decentralized space for expression and discussion.",
    liveLink: "https://live.linkedtrust.us/feed",
    author: "Sahda Samier Ahmed",
    sourceCode: "https://github.com/Whats-Cookin/trust_claim",
    avatar: "https://avatars.githubusercontent.com/u/80270685?v=4",
  },
  {
    category: "web-development",
    title: "Magdi Yacoub Heart Foundation",
    image: "MagdyYacob.png",
    details: "Contributed to developing comprehensive Hospital Registration and Patient Management System.",
    liveLink: "https://www.myf-egypt.org/donation/?utm_source=google&utm_medium=cpc&utm_campaign=Ebranded&gad_source=1&gclid=CjwKCAjww_iwBhApEiwAuG6ccBq9XXhE7vdElYT35lAehNtAc5p3rqbCx6603Bf4247ASwzrw-vQqxoCQ3oQAvD_BwE",
    author: "Sahda Samier Ahmed",
    sourceCode: "https://github.com/AHC-APPS/observership/",
    avatar: "https://avatars.githubusercontent.com/u/80270685?v=4",
  },
  {
    category: "web-development",
    title: "Decentralized_linkedin",
    image: "Decentralize.png",
    details: "As the project lead and creator, I developed a decentralized platform similar to LinkedIn. This platform allows users to express themselves, create portfolios, and connect with potential employers or collaborators. It also features an evaluation system for users to receive feedback and continuously improve their profile.",
    liveLink: "",
    author: "Sahda Samier Ahmed",
    sourceCode: "https://github.com/Whats-Cookin/decentralized_linkedin",
    avatar: "https://avatars.githubusercontent.com/u/80270685?v=4",
  },
  {
    category: "web-development",
    title: "Tic Tac Toe",
    image: "tic_tac_toe.png",
    details: "A web application that allows users to play against the computer or against friends in this X, 0 game.",
    liveLink: "https://tic-tac-toe-game-tawny.vercel.app/",
    author: "Sahda Samier Ahmed",
    sourceCode: "https://github.com/sahdasamier/tic-tac-toe",
    avatar: "https://avatars.githubusercontent.com/u/80270685?v=4",
  },
  {
    category: "web-development",
    title: "In Symphony",
    image: "share posts.png",
    details: "A web application that allows users to create their own posts and like or remove any posts on the page as they like.",
    liveLink: "https://share-your-plogs.vercel.app/",
    author: "Sahda Samier Ahmed",
    sourceCode: "https://github.com/sahdasamier/Launching-a-post.git",
    avatar: "https://avatars.githubusercontent.com/u/80270685?v=4",
  },
  {
    category: "web-development",
    title: "Task Canvas: Your Daily Masterpiece",
    image: "todolist3.png",
    details: "A web application that allows users to create their list and mark tasks as completed. Users can also delete tasks and organize them into three tabs: all, completed, and uncompleted.",
    liveLink: "https://to-control-the-tabs.vercel.app/",
    author: "Sahda Samier Ahmed",
    sourceCode: "https://github.com/sahdasamier/to-control-the-tabs",
    avatar: "https://avatars.githubusercontent.com/u/80270685?v=4",
  },
  {
    category: "web-development",
    title: "Quill Quotient",
    image: "share plogs.png",
    details: "A web application that allows users to create two pages: one for writing a title, blog, and author, and another to upload data, which adds as a new blog on the website.",
    liveLink: "https://to-do-blog.vercel.app/",
    author: "Sahda Samier Ahmed",
    sourceCode: "https://github.com/sahdasamier/TO-DO-BLOG.git",
    avatar: "https://avatars.githubusercontent.com/u/80270685?v=4",
  },
];

async function migrateDataToFirebase() {
  try {
    // Reference to the projects collection
    const projectsCollection = collection(db, "projects");

    // Add each project to Firestore
    for (const project of projects) {
      await addDoc(projectsCollection, {
        ...project,
        createdAt: new Date(),
      });
      console.log(`Added project: ${project.title}`);
    }

    console.log("Migration completed successfully!");
  } catch (error) {
    console.error("Error migrating data to Firebase:", error);
  }
}

// Run the migration
migrateDataToFirebase(); 