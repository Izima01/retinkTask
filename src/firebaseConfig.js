/* eslint-disable no-undef */
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import 'dotenv/config';
const key = import.meta.env.VITE_FIREBASE_KEY;

const firebaseConfig = {
  apiKey: key,
  authDomain: "retinkproject.firebaseapp.com",
  projectId: "retinkproject",
  storageBucket: "retinkproject.appspot.com",
  messagingSenderId: "707554343175",
  appId: "1:707554343175:web:dd1604f499231e19c9ada2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();