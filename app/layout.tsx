import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const geistInter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

import localFont from "next/font/local";
const arialLocalFont = localFont({
  src: '../public/fonts/arial/Arial.ttf',
  display: 'swap',
  variable: '--font-arial'
})

export const metadata: Metadata = {
  title: "Harmony Dental",
  description: "Dental CLinic Website made with Next.js, GSAP and Lenis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistInter.variable} ${arialLocalFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
