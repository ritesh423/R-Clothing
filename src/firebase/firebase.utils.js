import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDH3mgbD4ssh0qGLX60xNj08Fj9mXasz2w",
  authDomain: "r-clothing-20cca.firebaseapp.com",
  projectId: "r-clothing-20cca",
  storageBucket: "r-clothing-20cca.appspot.com",
  messagingSenderId: "571963602730",
  appId: "1:571963602730:web:25e274de6baef3fe06d053",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
