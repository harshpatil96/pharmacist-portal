// firebase.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMYhrg2URjGPwbsSf5U5iWj7oa5x3vqg0",
  authDomain: "sahaya-2814e.firebaseapp.com",
  projectId: "sahaya-2814e",
  storageBucket: "sahaya-2814e.appspot.com",
  messagingSenderId: "678806040625",
  appId: "1:678806040625:web:0a228d2061c779e0fe6510",
  measurementId: "G-HVE27Z0NX4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, analytics, auth, db, storage };
