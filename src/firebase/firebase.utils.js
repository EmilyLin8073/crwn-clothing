import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCHGMDhsns4Tww9PLFE1IE0inqOKWN-b5w",
  authDomain: "crwn-db-ee9a3.firebaseapp.com",
  projectId: "crwn-db-ee9a3",
  storageBucket: "crwn-db-ee9a3.appspot.com",
  messagingSenderId: "444235926160",
  appId: "1:444235926160:web:dd8c7e10a7da939cb12615",
  measurementId: "G-C7XDPNVEQL"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
