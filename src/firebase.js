// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwKX2ZFaf3vcD3IFSSxiadQ8q0q80KlvI",
  authDomain: "uber-clone-app-dcf9a.firebaseapp.com",
  projectId: "uber-clone-app-dcf9a",
  storageBucket: "uber-clone-app-dcf9a.appspot.com",
  messagingSenderId: "115072444610",
  appId: "1:115072444610:web:a64f9efa11e48be374335b",
  measurementId: "G-7CWENNFVNL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export{ analytics, provider, auth}