// Import the functions needed from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyCpm1BXOY8TfKcRFlfV4TgpKOVlak9SvUw",
  authDomain: "savannah-app-17aa9.firebaseapp.com",
  projectId: "savannah-app-17aa9",
  storageBucket: "savannah-app-17aa9.appspot.com",
  messagingSenderId: "788557141066",
  appId: "1:788557141066:web:a8e7c513a78cdfe302c2b3",
  measurementId: "G-F35FSDQF66"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
// const analytics = getAnalytics(app);