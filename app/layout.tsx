'use client';

import { Geist } from "next/font/google";
import "./globals.css";
import TopBar from '../components/TopBar';
import { Analytics } from "@vercel/analytics/react"

const geist = Geist({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Template Red - Next.js Stripe Checkout</title>
        <meta name="description" content="Modern Next.js template with Stripe integration and reddish theme" />
      </head>
      <body className={geist.className}>
        <Analytics mode="auto" />
        <TopBar />    
        <main>{children}</main>
      </body>
    </html>
  );
}
