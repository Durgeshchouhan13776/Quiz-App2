// firebase.js
import { initializeApp } from
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import { getFirestore } from
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA0LmRvInWdKC9p-tmyV3lHEwFVF6k5uKc",
  authDomain: "quiz-42518.firebaseapp.com",
  projectId: "quiz-42518",
  storageBucket: "quiz-42518.firebasestorage.app",
  messagingSenderId: "984967987934",
  appId: "1:984967987934:web:b2725169a6d7ec7b0cb84f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

