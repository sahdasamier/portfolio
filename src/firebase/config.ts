// src/firebase/config.ts

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";
import type { ServiceAccount } from 'firebase-admin/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyhX2CfgMSq9UT5pSf8slvo9EOKw3SOCU",
  authDomain: "sahda-samier.firebaseapp.com",
  projectId: "sahda-samier",
  storageBucket: "sahda-samier.firebasestorage.app",
  messagingSenderId: "460904066646",
  appId: "1:460904066646:web:e3dd3f5ac7e736b0a595f7",
  measurementId: "G-VSNLF5C69H"
} as const;

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Analytics only in browser environment
let analytics = null;
if (typeof window !== 'undefined') {
  isSupported().then(yes => yes && (analytics = getAnalytics(app)));
}

// Export what you need
export { db, analytics };