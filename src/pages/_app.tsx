import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
        <SessionProvider session={pageProps.session}>

        
        <Header />
        <main>
            <Component {...pageProps} />
        </main>
        <Footer />

        </SessionProvider>
    </div>
);
}
