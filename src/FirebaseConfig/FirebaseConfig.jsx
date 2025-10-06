// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ1Gb2bdR4A4-dsevucEh4CSScsAWyZJk",
  authDomain: "dragon-news-auth-ee49f.firebaseapp.com",
  projectId: "dragon-news-auth-ee49f",
  storageBucket: "dragon-news-auth-ee49f.firebasestorage.app",
  messagingSenderId: "569703966479",
  appId: "1:569703966479:web:ded13691fcf957a213c07a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default app;