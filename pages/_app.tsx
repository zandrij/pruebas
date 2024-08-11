import "@/styles/globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GoogleOAuthProvider clientId="385759592701-kbmv53o6v33dkg2pjpa5q14oke7472jl.apps.googleusercontent.com">
        <Component {...pageProps} />
    </GoogleOAuthProvider>
  )
}
