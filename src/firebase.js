// Import the functions you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "process.env.REACT_APP_FIREBASE_API_KEY",
  authDomain: "lynx-chat-4ceb9.firebaseapp.com",
  projectId: "lynx-chat-4ceb9",
  storageBucket: "lynx-chat-4ceb9.appspot.com",
  messagingSenderId: "624341326911",
  appId: "1:624341326911:web:d7dff4f5360e2c9410ec8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firestore instance
const db = getFirestore(app);

export { db };
