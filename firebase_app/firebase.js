// Import the functions you need from the SDKs you n
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth , createUserWithEmailAndPassword } from "firebase/auth";
import { getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMsHTIoWnRHKNAQtQNXKDAeb9HifvYncY",
  authDomain: "attendance-5acc1.firebaseapp.com",
  projectId: "attendance-5acc1",
  storageBucket: "attendance-5acc1.appspot.com",
  messagingSenderId: "717022022425",
  appId: "1:717022022425:web:53b87aeb5e889e775f1388",
  measurementId: "G-K599MKXZQZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore();
const auth = getAuth () ; 


export function signup(email,password){
  return createUserWithEmailAndPassword(auth,email,password) ; 
}
