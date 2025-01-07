'use client';

import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createWeb3Modal } from '@web3modal/wagmi';
import { defaultWagmiConfig } from '@web3modal/wagmi';
import { sepolia } from 'wagmi/chains';

const projectId = 'YOUR_WALLETCONNECT_PROJECT_ID'; // Get from walletconnect.com

const metadata = {
  name: 'Nexus Prime',
  description: 'Property Tokenization Platform',
  url: 'https://nexusprime.io',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
};

const config = defaultWagmiConfig({ 
  chains: [sepolia], 
  projectId, 
  metadata 
});

createWeb3Modal({ 
  wagmiConfig: config, 
  projectId,
  defaultChain: sepolia
});

const queryClient = new QueryClient();

export function Web3Provider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}