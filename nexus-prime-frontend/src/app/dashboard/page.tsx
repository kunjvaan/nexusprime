'use client';

import { useAccount, useBalance } from 'wagmi';
import { useNUSDBalance } from '@/hooks/contracts/useNUSD';
import { useEffect, useState } from 'react';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { TokenPrice } from '@/components/ui/TokenPrice';

export default function Dashboard() {
  const { address, isConnected } = useAccount();
  const { data: ethBalance } = useBalance({ address });
  const { balance: nusdBalance, isLoading: isNusdLoading } = useNUSDBalance();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || isNusdLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Wallet Information</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-medium">Address:</span>
              <span className="font-mono">{address}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">ETH Balance:</span>
              <span>{ethBalance?.formatted} {ethBalance?.symbol}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">NUSD Balance:</span>
              <span>{nusdBalance ? (Number(nusdBalance) / 1e18).toFixed(2) : '0'} NUSD</span>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Market Prices</h2>
          <div className="space-y-4">
            <TokenPrice pair="ETH/USD" />
            <TokenPrice pair="BTC/USD" />
            <TokenPrice pair="USDC/USD" />
          </div>
        </div>
      </div>
    </div>
  );
}