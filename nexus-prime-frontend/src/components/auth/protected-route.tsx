'use client';

import { useAccount } from 'wagmi';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isConnected } = useAccount();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isConnected && pathname !== '/') {
      router.push('/');
    }
  }, [isConnected, router, pathname]);

  if (!isConnected && pathname !== '/') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return <>{children}</>;
}