// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB4SUmmiVbBTbSLfuI7pahxGOqZ0zlXhY",
  authDomain: "instagraf-cfe07.firebaseapp.com",
  projectId: "instagraf-cfe07",
  storageBucket: "instagraf-cfe07.appspot.com",
  messagingSenderId: "175981475053",
  appId: "1:175981475053:web:6ae8b93a76224cd8cb88e4"
};

// Initialize Firebase
// make it singleton!! 
// const app = initializeApp(firebaseConfig);
// import { initializeApp, getApp, getApps } from "firebase/app";
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };