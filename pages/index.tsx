'use client';
import { useGoogleLogin } from "@react-oauth/google";

export default function SignIn() {
  const login = useGoogleLogin({
    onSuccess: tokenResponse => console.log(tokenResponse),
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
