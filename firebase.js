// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnau_ZbQW9e9WT7M0_RvattmJonkaP8kY",
  authDomain: "inventory-management-c8e44.firebaseapp.com",
  projectId: "inventory-management-c8e44",
  storageBucket: "inventory-management-c8e44.appspot.com",
  messagingSenderId: "30757198712",
  appId: "1:30757198712:web:e5943c67b69973b186068d",
  measurementId: "G-FMCVPD1WVX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export{firestore}