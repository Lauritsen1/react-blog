import firebase from "firebase/app";
import 'firebase/analytics'
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBPnWPlOCcPJpuLAX9ljJDIFbvfoWSFxuU",
    authDomain: "react-blog-6f401.firebaseapp.com",
    projectId: "react-blog-6f401",
    storageBucket: "react-blog-6f401.appspot.com",
    messagingSenderId: "232158371452",
    appId: "1:232158371452:web:df8b1fa8d7225ea273f3f9",
    measurementId: "G-Y9V889F4KG"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;