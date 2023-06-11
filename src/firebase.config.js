import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAc0c6yFAVhI_QLApW--XS0ARACV-NTZoc",
  authDomain: "house-marketplace-app-91e20.firebaseapp.com",
  projectId: "house-marketplace-app-91e20",
  storageBucket: "house-marketplace-app-91e20.appspot.com",
  messagingSenderId: "583885744296",
  appId: "1:583885744296:web:5252861aad407c6d72fa9d",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
