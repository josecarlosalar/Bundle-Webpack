
import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBCVgiiW6G5LxNz7_DUNtkuYVbrMxXyTsE",
    authDomain: "roomsarea-8550f.firebaseapp.com",
    projectId: "roomsarea-8550f",
    storageBucket: "roomsarea-8550f.appspot.com",
    messagingSenderId: "982147319814",
    appId: "1:982147319814:web:24c8c9a5c480c0f26a5b87",
    measurementId: "G-WP1JX8SPJB"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

