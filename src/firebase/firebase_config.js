import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

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
