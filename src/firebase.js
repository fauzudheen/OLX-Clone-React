// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo8aI6dSZiLCC_LQrB-1-JpRwViYC_2og",
  authDomain: "olx-react-3bf5a.firebaseapp.com",
  projectId: "olx-react-3bf5a",
  storageBucket: "olx-react-3bf5a.appspot.com",
  messagingSenderId: "442006242611",
  appId: "1:442006242611:web:986acaf5f778dc8bbc2a46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage

export {auth, app, db, storage};