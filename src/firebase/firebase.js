// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBme6duhwXlEaondEl9wlhOAgZaj_P9Q0c",
  authDomain: "react-housetec.firebaseapp.com",
  projectId: "react-housetec",
  storageBucket: "react-housetec.appspot.com",
  messagingSenderId: "999415987757",
  appId: "1:999415987757:web:0bce57e4577e252be9c2a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
