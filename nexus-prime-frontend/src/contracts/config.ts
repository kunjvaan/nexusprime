import { mainnet, arbitrum } from 'viem/chains';

export const SUPPORTED_CHAINS = [mainnet, arbitrum] as const;

export const CONTRACT_ADDRESSES = {
  [mainnet.id]: {
    NUSD: "MAINNET_CONTRACT_ADDRESS",
  },
  [arbitrum.id]: {
    NUSD: "ARBITRUM_CONTRACT_ADDRESS",
  },
} as const;