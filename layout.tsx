import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/ui/Navbar";
import Head from "next/head";
import Footer from "./components/ui/Footer";
import { GoogleTagManager } from '@next/third-parties/google'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "XNoman Marketing",
  description: "XNoman Marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <GoogleTagManager gtmId="GTM-KV8VNDDC" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
            <Head>
      <meta name='XNoman' content='index' />
    
     
    </Head>
    <Navbar />

        {children}
    <Footer />

      </body>
    </html>
  );
}
