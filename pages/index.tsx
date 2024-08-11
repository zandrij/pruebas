"use client";

import Link from "next/link";

export default function SignIn() {
  return (
    <>
      <Link href="/api/auth/login">Sign In</Link>
    </>
  );
}
