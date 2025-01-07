// hooks/contracts/usePriceFeed.ts
import { useContractRead } from 'wagmi';

const CHAINLINK_ABI = [
  {
    inputs: [],
    name: "decimals",
    outputs: [{ type: "uint8", name: "" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "description",
    outputs: [{ type: "string", name: "" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "latestRoundData",
    outputs: [
      { type: "uint80", name: "roundId" },
      { type: "int256", name: "answer" },
      { type: "uint256", name: "startedAt" },
      { type: "uint256", name: "updatedAt" },
      { type: "uint80", name: "answeredInRound" }
    ],
    stateMutability: "view",
    type: "function"
  }
] as const;

const PRICE_FEEDS = {
  'ETH/USD': '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419',
  'BTC/USD': '0xF4030086522a5bEEa4988F8cA5B36dbC97BeE88c',
  'USDC/USD': '0x8fFfFfd4AfB6115b954Bd326cbe7B4BA576818f6',
} as const;

export function usePriceFeed(pair: keyof typeof PRICE_FEEDS) {
  const address = PRICE_FEEDS[pair];

  const { data: decimals } = useContractRead({
    address,
    abi: CHAINLINK_ABI,
    functionName: 'decimals',
  });

  const { data: latestData, isError, isLoading } = useContractRead({
    address,
    abi: CHAINLINK_ABI,
    functionName: 'latestRoundData',
  });

  const formatPrice = (price: bigint, dec: number) => {
    return Number(price) / Math.pow(10, dec);
  };

  return {
    price: latestData ? formatPrice(latestData[1], Number(decimals ?? 8)) : undefined,
    lastUpdate: latestData ? new Date(Number(latestData[3]) * 1000) : undefined,
    isError,
    isLoading
  };
}