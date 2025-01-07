'use client';

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react';
import { WagmiConfig } from 'wagmi';
import { mainnet, arbitrum } from 'viem/chains';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import ProtectedRoute from '@/components/auth/protected-route';
import '@/styles/globals.css';

const projectId = 'YOUR_PROJECT_ID';

const metadata = {
  name: 'Nexus Prime',
  description: 'Your application description',
  url: 'https://your-url.com',
  icons: ['https://your-url.com/icon.png']
};

const chains = [mainnet, arbitrum] as const;
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

createWeb3Modal({ wagmiConfig, projectId });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50">
        <WagmiConfig config={wagmiConfig}>
          <ProtectedRoute>
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </ProtectedRoute>
        </WagmiConfig>
      </body>
    </html>
  );
}