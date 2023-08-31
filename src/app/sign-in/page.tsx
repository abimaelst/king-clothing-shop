'use client';

import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from '@/utils/firebase/firebase.utils';

const SignIn = () => {
  const logGoogleUser = async () => {
    const res = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(res);
  };

  return (
    <div>
      <h1>This is the SIGN IN page</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </div>
  );
};

export default SignIn;
