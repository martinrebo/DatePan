// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    FacebookAuthProvider,
    signInWithCredential,
  } from 'firebase/auth';

  import * as Facebook from 'expo-facebook';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArQAmEfs_ZbTa3ayzQNJd_M7Q_5kRhBlM",
  authDomain: "datepan-app.firebaseapp.com",
  projectId: "datepan-app",
  storageBucket: "datepan-app.appspot.com",
  messagingSenderId: "505349980528",
  appId: "1:505349980528:web:714b038efdf3ce33a3cfb5",
  measurementId: "G-7DLDRKG09Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth()
const signIn = signInWithEmailAndPassword
const createUser = createUserWithEmailAndPassword

export {auth, signIn, createUser }