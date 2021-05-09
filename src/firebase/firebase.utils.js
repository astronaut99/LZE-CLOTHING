import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB71szKU03XgL5jIY5ENXzC8rrBvROno_c",
  authDomain: "kali-db.firebaseapp.com",
  projectId: "kali-db",
  storageBucket: "kali-db.appspot.com",
  messagingSenderId: "461791484665",
  appId: "1:461791484665:web:7c862d779e1c1a423ce028",
  measurementId: "G-QMCXFM23Q2",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
