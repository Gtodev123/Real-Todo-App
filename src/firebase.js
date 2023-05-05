    // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAskAZxnYjy4lZHo9-zNOJOyK0gfCu7SRY",
  authDomain: "login-react-blogpage.firebaseapp.com",
  projectId: "login-react-blogpage",
  storageBucket: "login-react-blogpage.appspot.com",
  messagingSenderId: "517320431855",
  appId: "1:517320431855:web:1b5e4d7b23fe094af5a31a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
