import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

//This util file runs when you import anything from this file.

// Our web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_2mcj5UFa7dj7_UCXLBStAEpsR7GenRk",
  authDomain: "crown-clothing-db-f44ed.firebaseapp.com",
  projectId: "crown-clothing-db-f44ed",
  storageBucket: "crown-clothing-db-f44ed.appspot.com",
  messagingSenderId: "238628909496",
  appId: "1:238628909496:web:8ecfdb2957f34175c39f4d",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("Error creating the user", error.message);
    }
  }
  return userDocRef;
};
