import { hotjar } from 'react-hotjar'
import { useEffect } from 'react'
import { SessionProvider } from "next-auth/react";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    hotjar.initialize(3216021, 6)
  }, [])
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
