import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, Auth } from 'firebase/auth';

// Create a mock implementation for build time when Firebase config is missing
const mockFirestore = {
  collection: () => ({
    docs: [],
    get: () => Promise.resolve({ docs: [] })
  }),
  doc: () => ({
    get: () => Promise.resolve({ 
      exists: () => false, 
      data: () => ({}) 
    })
  })
};

// Check if we're in a build environment without proper Firebase config
const isBuildWithoutConfig = 
  process.env.NODE_ENV === 'production' && 
  typeof window === 'undefined' && 
  !process.env.NEXT_PUBLIC_FIREBASE_API_KEY;

let app: FirebaseApp;
let db: any;
let auth: Auth;
let analytics: any = null;
let googleProvider: GoogleAuthProvider;

if (isBuildWithoutConfig) {
  console.log('Firebase config missing during build - using mock implementation');
  // Create mock implementations for build time
  db = mockFirestore;
  auth = {} as Auth;
  googleProvider = {} as GoogleAuthProvider;
} else {
  // Proper Firebase initialization for runtime
  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  };
  
  try {
    // Initialize Firebase
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    
    // Initialize services
    db = getFirestore(app);
    auth = getAuth(app);
    googleProvider = new GoogleAuthProvider();
    
    // Initialize analytics only in browser environment
    if (typeof window !== 'undefined') {
      try {
        analytics = getAnalytics(app);
      } catch (error) {
        console.error('Error initializing Firebase Analytics:', error);
      }
    }
  } catch (error) {
    console.error('Error initializing Firebase:', error);
    db = mockFirestore;
    auth = {} as Auth;
    googleProvider = {} as GoogleAuthProvider;
  }
}

export { app, analytics, db, auth, googleProvider };