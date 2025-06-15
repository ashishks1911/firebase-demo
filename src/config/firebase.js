// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-FtyzYkDzDow7wcWJ0OzZPkLr6On3TRs",
  authDomain: "learn-firebase-954e2.firebaseapp.com",
  projectId: "learn-firebase-954e2",
  storageBucket: "learn-firebase-954e2.firebasestorage.app",
  messagingSenderId: "354927176079",
  appId: "1:354927176079:web:180145c1a46a3a10b643fa",
  measurementId: "G-0CZKSYWYDG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
