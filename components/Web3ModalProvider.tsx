"use client";

import { chains } from "@config/chains";
import { createWeb3Modal, defaultConfig } from "@web3modal/ethers5/react";

const mainnet = {
  chainId: 1,
  name: "Ethereum",
  currency: "ETH",
  explorerUrl: "https://etherscan.io",
  rpcUrl: "https://cloudflare-eth.com",
};

const metadata = {
  name: "Tally Zero",
  description:
    "Tally Zero is a decentralized application that allows users to create and vote on polls using Wagmi. It is built using Next.js, Tailwind CSS, and Wagmi.",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

export function Web3ModalProvider({ children }: { children: React.ReactNode }) {
  const projectId = process.env.NEXT_PUBLIC_WEB3STORAGE_PROJECT_ID;
  if (projectId === undefined) {
    throw new Error("NEXT_PUBLIC_WEB3STORAGE_PROJECT_ID is undefined");
  }

  createWeb3Modal({
    ethersConfig: defaultConfig({ metadata }),
    chains: [mainnet],
    projectId,
    enableAnalytics: true,
  });

  return children;
}
