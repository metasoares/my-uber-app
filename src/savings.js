// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { GoogleAuthProvider, getAuth} from 'firebase/auth'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider
  } from "firebase/auth";
  import { getFirestore, addDoc, collection } from "firebase/firestore";

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
// const analytics = getAnalytics(app);
const db = getFirestore();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
// const auth = getAuth(app);

// export{ analytics, provider, auth}

//Register
export const register = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        email: user.email,
      });
    //   return true
    return user
    } catch (error) {
      return {error: error.message}
    }
  };

//LOgin
  export const logIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
    //   return true
    return user
    } catch (error) {
      return {error: error.message}
    }
  };

  //LogOut
  export const logOut = async() => {
    try {
      await signOut(auth)
      return true
    } catch (error) {
      return false
    }
  };


  