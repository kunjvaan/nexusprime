// components/ui/PoolCard.tsx
import { usePoolData } from '@/hooks/contracts/usePoolData';
import { type PoolId } from '@/types/pools';

interface PoolCardProps {
  poolId: PoolId;
}

export function PoolCard({ poolId }: PoolCardProps) {
  const { apy, tvl, dailyRewards } = usePoolData(poolId);

  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">{poolId} Pool</h3>
        <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
          Active
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-600">APY</span>
          <span className="font-medium text-green-600">
            {apy ? `${apy.toFixed(2)}%` : '-'}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">TVL</span>
          <span className="font-medium">
            ${tvl ? tvl.toLocaleString(undefined, { maximumFractionDigits: 2 }) : '-'}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">Daily Rewards</span>
          <span className="font-medium">
            {dailyRewards ? dailyRewards.toFixed(2) : '-'} NUSD
          </span>
        </div>

        <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
          Stake Tokens
        </button>
      </div>
    </div>
  );
}