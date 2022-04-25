// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9EdBXItZsTzXSHcgGWo4Yf9Rurffx5RI",
  authDomain: "house-marketplace-app-a3646.firebaseapp.com",
  projectId: "house-marketplace-app-a3646",
  storageBucket: "house-marketplace-app-a3646.appspot.com",
  messagingSenderId: "657872860879",
  appId: "1:657872860879:web:a02ee5ddf5e4d2994b29ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()