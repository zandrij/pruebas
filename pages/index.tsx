'use client';
import { useGoogleLogin } from "@react-oauth/google";

export default function SignIn() {
  const login = useGoogleLogin({
    onSuccess: codeResponse => console.log(codeResponse),
    flow: 'auth-code',
    redirect_uri: 'http://localhost:3000/auth/google/callback',
    ux_mode: 'redirect'
  });

  return (
    <>
      <button
        onClick={() => login()}
      >
        Sign In
      </button>
    </>
  );
}
