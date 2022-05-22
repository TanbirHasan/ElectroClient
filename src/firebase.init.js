// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjPA_JdctWQGZhdynr5MhPM_ifKjnPmxk",
  authDomain: "electro-25b75.firebaseapp.com",
  projectId: "electro-25b75",
  storageBucket: "electro-25b75.appspot.com",
  messagingSenderId: "544967974231",
  appId: "1:544967974231:web:2dfc49cac0c6529f19f212",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
