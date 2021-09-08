import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHGMDhsns4Tww9PLFE1IE0inqOKWN-b5w",
  authDomain: "crwn-db-ee9a3.firebaseapp.com",
  projectId: "crwn-db-ee9a3",
  storageBucket: "crwn-db-ee9a3.appspot.com",
  messagingSenderId: "444235926160",
  appId: "1:444235926160:web:dd8c7e10a7da939cb12615",
  measurementId: "G-C7XDPNVEQL"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ params: "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
