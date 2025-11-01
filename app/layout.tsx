import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import localFont from "next/font/local";

const geistInter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const arialLocalFont = localFont({
  src: 'fonts/arial/arial.ttf',
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
