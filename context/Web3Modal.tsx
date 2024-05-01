"use client";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { WagmiConfig } from "wagmi";
import { bsc } from "wagmi/chains";
import { ConectivityProvider } from "./utils";

// wallet start

const projectId = "cba73ada547c01c1a64d7725fb732495";
const chains = [bsc];

const wagmiConfig: any = defaultWagmiConfig({ chains, projectId });

createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
  themeMode: "dark",
});
// wallet end

export function Web3Modal({ children }: { children: React.ReactNode }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <ConectivityProvider>{children}</ConectivityProvider>
    </WagmiConfig>
  );
}
