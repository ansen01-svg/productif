// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCT3zaryXP4-iPBU4O_N4KQoCLb8fn8dwE",
  authDomain: "mytodos-fea38.firebaseapp.com",
  projectId: "mytodos-fea38",
  storageBucket: "mytodos-fea38.appspot.com",
  messagingSenderId: "240504828042",
  appId: "1:240504828042:web:849e9c8af9ed42eb2d3d73",
  measurementId: "G-EQGTC5GPCP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export { app, db };
