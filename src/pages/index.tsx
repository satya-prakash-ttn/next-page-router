import { Geist, Geist_Mono } from "next/font/google";
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '700'], 
  subsets: ['latin'], 
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} ${roboto.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <div className="container">
        <h1>Home Page</h1>
      </div>

    </div>

  );
}
