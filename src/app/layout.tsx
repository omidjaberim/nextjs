import type { Metadata } from "next";
import "./globals.css";
import { Web3Modal } from "context/Web3Modal";

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
      <body className="font-Oxanium">
        {" "}
        <Web3Modal>{children}</Web3Modal>
      </body>
    </html>
  );
}
