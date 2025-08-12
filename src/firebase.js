// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBq7Ssvg_z3bh6RWtmWDHwal4_s9qukxxE",
    authDomain: "chat-app-deb55.firebaseapp.com",
    projectId: "chat-app-deb55",
    storageBucket: "chat-app-deb55.firebasestorage.app",
    messagingSenderId: "372250505847",
    appId: "1:372250505847:web:6831de027b679da1458c72",
    measurementId: "G-0Q27VKT7TV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
// const analytics = getAnalytics(app);