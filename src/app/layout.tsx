import type { Metadata } from "next";
import "./globals.css";
import { Web3Modal } from "context/Web3Modal";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "meta v",
  description: "Meta",
};
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="english" className="scroll-smooth">
      <head>
        <link rel="icon" href="/assets/logo.svg" type="image/png" sizes="32x32" />
        <meta
            name="description"
            content=""
          />
          <title>Meta-V</title>
      </head>
      <body className="font-Oxanium">        
          <Web3Modal>{children} <Analytics/><SpeedInsights/></Web3Modal>          
      </body>
    </html>
  );
}
