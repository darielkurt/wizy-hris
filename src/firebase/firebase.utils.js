import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC372RTXReIgCIBB0R6MXGHSHpWOBCQjeI",
  authDomain: "wizy-hris-v1.firebaseapp.com",
  databaseURL: "https://wizy-hris-v1.firebaseio.com",
  projectId: "wizy-hris-v1",
  storageBucket: "wizy-hris-v1.appspot.com",
  messagingSenderId: "570673971698",
  appId: "1:570673971698:web:6a5d051ad8731b4ebfab6b",
  measurementId: "G-W1V2ZTZV1L",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  // console.log(snapShot)

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }

    catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef;
};

export const getCurrentUserUid = async (userAuth) => {
  if (!userAuth) return;

  const response = firestore.doc(`users/${userAuth.uid}`);

  const currentUserUid = await response.get();

  console.log(currentUserUid)

  return currentUserUid
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
