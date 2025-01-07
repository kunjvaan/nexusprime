// components/ui/TokenPrice.tsx
'use client';

import { usePriceFeed } from '@/hooks/contracts/usePriceFeed';
import { formatDistance } from 'date-fns';

interface TokenPriceProps {
  pair: 'ETH/USD' | 'BTC/USD' | 'USDC/USD';
  className?: string;
}

export function TokenPrice({ pair, className }: TokenPriceProps) {
  const { price, lastUpdate, isError, isLoading } = usePriceFeed(pair);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching price</div>;
  if (!price || !lastUpdate) return null;

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="text-lg font-bold">
        {pair}: ${price.toLocaleString(undefined, { maximumFractionDigits: 2 })}
      </div>
      <div className="text-sm text-gray-500">
        Updated {formatDistance(lastUpdate, new Date(), { addSuffix: true })}
      </div>
    </div>
  );
}