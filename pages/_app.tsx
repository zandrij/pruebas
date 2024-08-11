import "@/styles/globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GoogleOAuthProvider clientId="361520884393-c6pt58cttt98m8nn8u67m2dgek2qqu3c.apps.googleusercontent.com">
        <Component {...pageProps} />
    </GoogleOAuthProvider>
  )
}
