import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBLecahtCmHIr5Pfk08JEPjuhGBGLHjMaY',
  authDomain: 'crwn-db2-f3bdf.firebaseapp.com',
  databaseURL: 'https://crwn-db2-f3bdf.firebaseio.com',
  projectId: 'crwn-db2-f3bdf',
  storageBucket: 'crwn-db2-f3bdf.appspot.com',
  messagingSenderId: '473014135677',
  appId: '1:473014135677:web:73753eb27912e0be58ba14',
  measurementId: 'G-CH3CQKLHE6',
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
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
