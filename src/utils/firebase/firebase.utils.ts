import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

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
