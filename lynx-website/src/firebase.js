// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhU-xzySzmkiYvLtLNpxiP91Ot07NQHg0",
  authDomain: "lynx-id20.firebaseapp.com",
  projectId: "lynx-id20",
  storageBucket: "lynx-id20.firebasestorage.app",
  messagingSenderId: "82098628112",
  appId: "1:82098628112:web:a9e2c31de2f9b021204c95",
  measurementId: "G-5QNHKQP2B2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
