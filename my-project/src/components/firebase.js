// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // এটা যোগ করতে হবে
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBT4wkASCLvxYALNkH5hryY-8gztA0i6Ug",
  authDomain: "online-grocery-delivery-system.firebaseapp.com",
  projectId: "online-grocery-delivery-system",
  storageBucket: "online-grocery-delivery-system.firebasestorage.app",
  messagingSenderId: "724721453805",
  appId: "1:724721453805:web:ce7ebd6534e562c4565ae4",
  measurementId: "G-605DXVMYV3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// এটা সবচেয়ে গুরুত্বপূর্ণ - Auth এক্সপোর্ট করো
export const auth = getAuth(app);