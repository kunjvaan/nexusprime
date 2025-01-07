'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Web3Button = () => {
  return React.createElement('w3m-button' as any, {}) as any;
};

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Properties', path: '/properties' },
    { name: 'Stake', path: '/stake' },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              Nexus Prime
            </Link>
            <div className="hidden md:flex ml-10 space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    pathname === link.path
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <Web3Button />
          </div>
        </div>
      </div>
    </nav>
  );
}