// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBs7M-og6dUdQQt1xKk3zuBsDXBhfQe4Y",
  authDomain: "react-curso-58f92.firebaseapp.com",
  projectId: "react-curso-58f92",
  storageBucket: "react-curso-58f92.appspot.com",
  messagingSenderId: "919191055403",
  appId: "1:919191055403:web:4087c464f78375bc2cce6e"
};

// Initialize Firebase
export const Firebaseapp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( Firebaseapp )
export const FirebaseDB = getFirestore( Firebaseapp )