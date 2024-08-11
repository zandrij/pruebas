'use client';
import { useGoogleLogin } from "@react-oauth/google";

export default function SignIn() {
  return (
    <>
      <a href="/api/auth/login"
        
      >
        Sign In
      </a>
    </>
  );
}
