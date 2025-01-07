'use client';

import React from 'react';

// Simple Web3Button component using createElement to bypass type checking
const Web3Button = () => {
  return React.createElement('w3m-button' as any, {}) as any;
};

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Welcome to Nexus Prime</h1>
        <div className="flex justify-center">
          <Web3Button />
        </div>
      </div>
    </div>
  );
}