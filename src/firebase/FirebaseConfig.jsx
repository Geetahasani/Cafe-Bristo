
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCI7HJFO9GuYTjE3O8uqXvod04Sxravc0Y",
  authDomain: "cafe-web-4e56e.firebaseapp.com",
  projectId: "cafe-web-4e56e",
  storageBucket: "cafe-web-4e56e.firebasestorage.app",
  messagingSenderId: "77942333761",
  appId: "1:77942333761:web:07d640f88cdd3bb744c1c0",
  measurementId: "G-BW5150TCVH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;