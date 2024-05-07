import type { Metadata } from "next";
import "./globals.css";
import { Web3Modal } from "context/Web3Modal";
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: "meta v",
  description: "Meta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/assets/logo.svg" type="image/png" sizes="32x32" />
      </head>
      <body className="font-Oxanium">
        
          <Web3Modal>{children} <Analytics/></Web3Modal>
          
      </body>
    </html>
  );
}
