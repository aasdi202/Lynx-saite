import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "lynx-chat-4ceb9.firebaseapp.com",
  projectId: "lynx-chat-4ceb9",
  storageBucket: "lynx-chat-4ceb9.appspot.com",
  messagingSenderId: "624341326911",
  appId: "1:624341326911:web:d7dff4f5360e2c9410ec8a"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { db, auth, googleProvider };
