// hooks/contracts/usePoolData/index.ts
import { useContractRead } from 'wagmi';
import { POOL_ADDRESSES, type PoolId } from '@/types/pools';

const POOL_ABI = [
  {
    inputs: [],
    name: "getAPY",
    outputs: [{ type: "uint256", name: "apy" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getTotalValueLocked",
    outputs: [{ type: "uint256", name: "tvl" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getRewardsPerDay",
    outputs: [{ type: "uint256", name: "rewards" }],
    stateMutability: "view",
    type: "function"
  }
] as const;

export function usePoolData(poolId: PoolId) {
  const address = POOL_ADDRESSES[poolId];

  const { data: apyData } = useContractRead({
    address,
    abi: POOL_ABI,
    functionName: 'getAPY'
  });

  const { data: tvlData } = useContractRead({
    address,
    abi: POOL_ABI,
    functionName: 'getTotalValueLocked'
  });

  const { data: rewardsData } = useContractRead({
    address,
    abi: POOL_ABI,
    functionName: 'getRewardsPerDay'
  });

  return {
    apy: apyData ? Number(apyData) / 100 : undefined,
    tvl: tvlData ? Number(tvlData) / 1e18 : undefined,
    dailyRewards: rewardsData ? Number(rewardsData) / 1e18 : undefined
  };
}