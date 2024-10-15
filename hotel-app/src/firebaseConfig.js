// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; 
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6TTFkOxC-MAqhEAPxfnLhA9AsidDhFwU",
  authDomain: "hotel-app-8be1e.firebaseapp.com",
  databaseURL: "https://hotel-app-8be1e-default-rtdb.firebaseio.com",
  projectId: "hotel-app-8be1e",
  storageBucket: "hotel-app-8be1e.appspot.com",
  messagingSenderId: "598225716292",
  appId: "1:598225716292:web:9137e56bb5158d7fb42811",
  measurementId: "G-Q6CL8RGC7D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); 
const storage = getStorage(app);
const db = getFirestore(app);

export { app, db, auth, storage, analytics };