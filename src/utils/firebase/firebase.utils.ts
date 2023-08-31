import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  UserCredential,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAsSB_jF-tsM2PDInjEEYRSCQxx3fpknKA',
  authDomain: 'king-clothing-db-97976.firebaseapp.com',
  projectId: 'king-clothing-db-97976',
  storageBucket: 'king-clothing-db-97976.appspot.com',
  messagingSenderId: '66226202489',
  appId: '1:66226202489:web:6999aa4c5c11247ee1f1a8',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth: UserCredential) => {
  const userDocRef = doc(db, 'users', userAuth.user.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const {
      user: { email, displayName },
    } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (e: any) {
      console.log('error creating the user', e.message);
    }

    return userDocRef;
  }
};
