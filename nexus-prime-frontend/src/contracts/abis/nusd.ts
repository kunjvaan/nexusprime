'use client';

import { 
  useAccount, 
  usePublicClient,
  useWalletClient,
  useContractRead,
  useTransaction,
} from 'wagmi';
import { useState } from 'react';
import { type Hash } from 'viem';

const NUSD_ABI = [
  {
    name: 'balanceOf',
    type: 'function',
    stateMutability: 'view',
    inputs: [{ type: 'address' }],
    outputs: [{ type: 'uint256' }]
  },
  {
    name: 'transfer',
    type: 'function',
    stateMutability: 'nonpayable',
    inputs: [
      { type: 'address', name: 'recipient' },
      { type: 'uint256', name: 'amount' }
    ],
    outputs: [{ type: 'bool' }]
  }
] as const;

const NUSD_ADDRESS = '0x1234567890123456789012345678901234567890' as const;

export function useNUSDBalance() {
  const { address } = useAccount();

  const { data, isError, isLoading } = useContractRead({
    address: NUSD_ADDRESS,
    abi: NUSD_ABI,
    functionName: 'balanceOf',
    args: address ? [address] : undefined
  });

  return {
    balance: data as bigint | undefined,
    isError,
    isLoading,
  };
}

export function useNUSDTransfer() {
  const [isPending, setIsPending] = useState(false);
  const [txHash, setTxHash] = useState<Hash>();
  const { address } = useAccount();
  const { data: walletClient } = useWalletClient();
  const publicClient = usePublicClient();

  const { data: transaction } = useTransaction({
    hash: txHash,
  });

  const sendTokens = async (to: `0x${string}`, amount: bigint) => {
    if (!walletClient || !address || !publicClient) throw new Error('Client not ready');
    
    try {
      setIsPending(true);

      const { request } = await publicClient.simulateContract({
        address: NUSD_ADDRESS,
        abi: NUSD_ABI,
        functionName: 'transfer',
        args: [to, amount],
        account: address,
      });

      const hash = await walletClient.writeContract(request);
      setTxHash(hash);

      return { hash };
    } catch (error) {
      console.error("Transaction failed", error);
      throw error;
    } finally {
      setIsPending(false);
    }
  };

  return {
    sendTokens,
    isPending: isPending && !transaction,
    transactionHash: txHash,
  };
}