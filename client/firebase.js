// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  // onAuthStateChanged,
  // FacebookAuthProvider,
  // signInWithCredential,
  updateProfile,
} from "firebase/auth";

// import * as Facebook from "expo-facebook";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArQAmEfs_ZbTa3ayzQNJd_M7Q_5kRhBlM",
  authDomain: "datepan-app.firebaseapp.com",
  databaseURL:
    "https://datepan-app-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "datepan-app",
  storageBucket: "datepan-app.appspot.com",
  messagingSenderId: "505349980528",
  appId: "1:505349980528:web:714b038efdf3ce33a3cfb5",
  measurementId: "G-7DLDRKG09Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
// const analytics = getAnalytics(app);
const db = initializeFirestore(app, { experimentalForceLongPolling: true });
const realTimedDB = getDatabase(app);

const auth = getAuth();
const signIn = signInWithEmailAndPassword;
const createUser = createUserWithEmailAndPassword;

export {
  auth,
  storage,
  db,
  realTimedDB,
  uploadBytes,
  ref,
  getDownloadURL,
  signIn,
  createUser,
  updateProfile,
};
