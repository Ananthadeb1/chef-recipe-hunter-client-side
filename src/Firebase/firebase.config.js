// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1YL4DXYuvwVUFVpAqJKxfsCY9P8Z67Uk",
  authDomain: "chafe-assignment-10.firebaseapp.com",
  projectId: "chafe-assignment-10",
  storageBucket: "chafe-assignment-10.appspot.com",
  messagingSenderId: "771551138057",
  appId: "1:771551138057:web:37bdf9577b772487d603d8"
  // apiKey: import.meta.env.vite_apiKey,
  // authDomain: import.meta.env.vite_authDomain,
  // projectId: import.meta.env.vite_projectId,
  // storageBucket: import.meta.env.vite_storageBucket,
  // messagingSenderId: import.meta.env.vite_messagingSenderId,
  // appId: import.meta.env.vite_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;