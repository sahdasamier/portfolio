import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, isSupported } from 'firebase/analytics';

// Firebase configuration from environment variables
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Validate required configuration
const validateConfig = () => {
  const required = ['apiKey', 'authDomain', 'projectId'];
  const missing = required.filter(key => !firebaseConfig[key]);
  
  if (missing.length > 0) {
    throw new Error(`Missing required Firebase configuration: ${missing.join(', ')}`);
  }
};

// Initialize Firebase with error handling
let app: FirebaseApp | null = null;
let auth;
let db;
let analytics;

try {
  // Validate configuration before initialization
  validateConfig();

  // Initialize app if not already initialized
  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApps()[0];
  }

  // Initialize services only if app initialization was successful
  if (app) {
    auth = getAuth(app);
    db = getFirestore(app);
    
    // Initialize Analytics only in browser environment
    if (typeof window !== 'undefined') {
      isSupported().then(supported => {
        if (supported) {
          analytics = getAnalytics(app);
        }
      }).catch(error => {
        console.warn('Analytics not supported:', error);
      });
    }
  }
} catch (error) {
  console.error('Firebase initialization error:', error);
  // Log detailed error information in development
  if (process.env.NODE_ENV === 'development') {
    console.error('Firebase config:', {
      apiKey: firebaseConfig.apiKey ? '***' : 'missing',
      authDomain: firebaseConfig.authDomain,
      projectId: firebaseConfig.projectId,
    });
  }
}

// Initialize provider regardless of app initialization
const googleProvider = new GoogleAuthProvider();

export { app, auth, db, analytics, googleProvider };