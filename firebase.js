// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCqzMGSfrANTaExhN8a5XaUzaj5n-gpuM0",
  authDomain: "react-notes-9b2a6.firebaseapp.com",
  projectId: "react-notes-9b2a6",
  storageBucket: "react-notes-9b2a6.appspot.com",
  messagingSenderId: "1002867758325",
  appId: "1:1002867758325:web:1f640493f7c83d70ebe1bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")