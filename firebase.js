// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
// 1. Analytics import karein
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyA0LmRvInWdKC9p-tmyV3lHEwFVF6k5uKc",
  authDomain: "quiz-42518.firebaseapp.com",
  projectId: "quiz-42518",
  storageBucket: "quiz-42518.firebasestorage.app",
  messagingSenderId: "984967987934",
  appId: "1:984967987934:web:b2725169a6d7ec7b0cb84f",
  // 2. Aapki measurement ID yahan add kar di gayi hai
  measurementId: "G-5M0B8PZ6CM" 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
export const db = getFirestore(app);
export const auth = getAuth(app);
// 3. Analytics initialize karein
export const analytics = getAnalytics(app); 

export { app };
