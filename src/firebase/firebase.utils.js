import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD70pYbeehNwdBdO3cMBe8e62_RcvUAz_M",
  authDomain: "crwn-db-d4e16.firebaseapp.com",
  projectId: "crwn-db-d4e16",
  storageBucket: "crwn-db-d4e16.appspot.com",
  messagingSenderId: "517226538647",
  appId: "1:517226538647:web:290522c84234e082636bd2",
  measurementId: "G-H1DE2BTSQ1"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

/* google auth */

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
