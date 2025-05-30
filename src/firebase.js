// Import the functions you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration (REAL CONFIG)
const firebaseConfig = {
  apiKey: "AIzaSyAhU-xzySzmkiYvLtLNpxiP91Ot07NQHg0",
  authDomain: "helplynx-id20.firebaseapp.com",
  projectId: "lynx-id20",
  storageBucket: "lynx-id20.appspot.com",
  messagingSenderId: "82098628112",
  appId: "1:82098628112:web:a9e2c31de2f9b021204c95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { db, auth, googleProvider };
