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
            content="META-V is an immersive digital space that leverages advanced technologies such as blockchain, virtual reality, and artificial intelligence to create a comprehensive and interactive virtual experience"
          />
          <meta
            name="keywords"
            content="META-V metaverse, virtual world, computer-generated environments, real-time interaction, blockchain integration, VR in metaverse, AI in metaverse, digital universe, explore virtual environments, virtual events, virtual business, socialize online, physical and digital blend, metaverse entertainment, redefine living in metaverse, work in metaverse, interact in metaverse, blockchain transactions, AI governance, trusted metaverse community, efficient metaverse community, metaverse technology, immersive digital experiences, metaverse platforms, secure transactions metaverse, transparent transactions metaverse, blockchain technology in metaverse, virtual reality technology, artificial intelligence metaverse, metaverse ecosystem, digital assets metaverse, metaverse real estate, META-V platform, META-V universe, metaverse innovation, metaverse applications, metaverse development, metaverse for business, metaverse social networks, virtual collaboration, metaverse investments, metaverse security, decentralized metaverse, metaverse interaction, future of metaverse, metaverse trends, metaverse growth, metaverse scalability, metaverse experiences, metaverse communities, virtual property, avatar customization, virtual identity, metaverse governance, virtual economy, crypto in metaverse, NFTs in metaverse, digital currency metaverse, virtual goods metaverse, virtual services, virtual markets, metaverse advertising, metaverse branding, metaverse marketing, VR headsets metaverse, AI interactions metaverse, machine learning metaverse, virtual landscapes, immersive gaming, virtual sports metaverse, virtual tourism, metaverse education, virtual training, remote work metaverse, virtual conferences, blockchain networks metaverse, AI algorithms metaverse, user-generated content metaverse, virtual concerts, virtual art galleries, digital collectibles, metaverse regulation, metaverse accessibility, metaverse ethics, metaverse privacy, data security metaverse, metaverse user experience, custom virtual spaces, metaverse UI/UX, metaverse connectivity, metaverse servers, metaverse technology stack, cloud computing metaverse, edge computing metaverse, metaverse data analysis, big data metaverse, metaverse AI solutions, virtual reality developments, metaverse content creation, metaverse platform providers "
          />
          <meta name="author" content="Jaberi Ahmad" />
          <title>Meta-V</title>
      </head>
      <body className="font-Oxanium">        
          <Web3Modal>{children} <Analytics/><SpeedInsights/></Web3Modal>          
      </body>
    </html>
  );
}
