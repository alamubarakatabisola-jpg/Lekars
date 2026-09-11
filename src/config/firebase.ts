import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB73hoHk2d-SILAEYetjJ2KVGpEj2hCZzc",
  authDomain: "abisola-c96f8.firebaseapp.com",
  projectId: "abisola-c96f8",
  storageBucket: "abisola-c96f8.firebasestorage.app",
  messagingSenderId: "686850300573",
  appId: "1:686850300573:web:3ba564dd1a1865d04fd274",
  measurementId: "G-PHJM07XZY9"
};

// Initialize Firebase App
export const app = initializeApp(firebaseConfig);

// Initialize Firestore Cloud Database
export const db = getFirestore(app);
