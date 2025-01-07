'use client';

import { useEffect } from 'react';

interface TransactionNotificationProps {
  hash?: string;
  isPending: boolean;
}

export default function TransactionNotification({ hash, isPending }: TransactionNotificationProps) {
  if (!hash) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg p-4 max-w-md">
      <div className="flex items-center space-x-3">
        {isPending ? (
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900" />
        ) : (
          <div className="h-4 w-4 bg-green-500 rounded-full" />
        )}
        <div>
          <p className="font-medium">
            {isPending ? 'Transaction Pending' : 'Transaction Confirmed'}
          </p>
          <a
            href={`https://etherscan.io/tx/${hash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-500 hover:text-blue-600"
          >
            View on Etherscan
          </a>
        </div>
      </div>
    </div>
  );
}
