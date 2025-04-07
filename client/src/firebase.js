// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "filmledger-71460.firebaseapp.com",
  projectId: "filmledger-71460",
  storageBucket: "filmledger-71460.firebasestorage.app",
  messagingSenderId: "812438427620",
  appId: "1:812438427620:web:bab0796854329b717719f1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);