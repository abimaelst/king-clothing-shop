'use client';

import { signInWithGooglePopup } from '@/utils/firebase/firebase.utils';

const SignIn = () => {
  const logGoogleUser = async () => {
    const res = await signInWithGooglePopup();
    console.log(res);
  };

  return (
    <div>
      <h1>This is the SIGN IN page</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </div>
  );
};

export default SignIn;
