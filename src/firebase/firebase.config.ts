// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxnDLbnDMvFjxzd9YT-mPvK8-RffKdfgo",
  authDomain: "lingo-chat-97b89.firebaseapp.com",
  projectId: "lingo-chat-97b89",
  storageBucket: "lingo-chat-97b89.appspot.com",
  messagingSenderId: "948496447366",
  appId: "1:948496447366:web:39250300c30cd089f29e07"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const db = getFirestore();
