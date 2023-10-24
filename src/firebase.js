import { initializeApp } from "firebase/app";
import {getStorage}  from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyCrt6JvL4K_vrNqvI4LL7ls3IFvV5wn5K8",
  authDomain: "image-test-f8734.firebaseapp.com",
  projectId: "image-test-f8734",
  storageBucket: "image-test-f8734.appspot.com",
  messagingSenderId: "827093827048",
  appId: "1:827093827048:web:2c2681f6ed85dfdf02385d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  imageDb = getStorage(app)