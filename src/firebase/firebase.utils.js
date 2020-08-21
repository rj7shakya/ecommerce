import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDDxJvMuWuIOwYZcmz3slSkLbO6ac7OlJo",
  authDomain: "crwn-db-8f089.firebaseapp.com",
  databaseURL: "https://crwn-db-8f089.firebaseio.com",
  projectId: "crwn-db-8f089",
  storageBucket: "crwn-db-8f089.appspot.com",
  messagingSenderId: "839546479414",
  appId: "1:839546479414:web:0629c8dbc2e5f7b67ec997",
  measurementId: "G-S6P2VL951N",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log(error);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
