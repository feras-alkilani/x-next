// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "x-next-bb402.firebaseapp.com",
  projectId: "x-next-bb402",
  storageBucket: "x-next-bb402.appspot.com",
  messagingSenderId: "1018033513085",
  appId: "1:1018033513085:web:8aef6b6444e4d190420714"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };
