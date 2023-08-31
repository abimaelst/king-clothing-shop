'use client';

import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from '@/utils/firebase/firebase.utils';
import { SignUpFormComponent } from '@/components/SignUpForm/SignUpFormComponent';

const SignIn = () => {
  const logGoogleUser = async () => {
    const res = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(res);
  };

  return (
    <div>
      <h1>This is the SIGN IN page</h1>
      <button className="p-2 bg-green-400 text-white" onClick={logGoogleUser}>
        Sign in with Google
      </button>
      <SignUpFormComponent />
    </div>
  );
};

export default SignIn;
