// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRxDosuDxQhfrU1RMnbzJaIwNPvrAWK5A",
  authDomain: "ai-notion-clone-3157c.firebaseapp.com",
  projectId: "ai-notion-clone-3157c",
  storageBucket: "ai-notion-clone-3157c.firebasestorage.app",
  messagingSenderId: "49401836610",
  appId: "1:49401836610:web:74f5ea01e7f655c093e9db"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };