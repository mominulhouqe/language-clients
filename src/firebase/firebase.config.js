// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAVqPeyBpRbP5KpyDVcc4yzpvlRyab2cQ",
  authDomain: "language-club-a06e8.firebaseapp.com",
  projectId: "language-club-a06e8",
  storageBucket: "language-club-a06e8.appspot.com",
  messagingSenderId: "772474726095",
  appId: "1:772474726095:web:b8215ab2cd82606fccb9ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app