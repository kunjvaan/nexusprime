'use client';

import { useAccount } from 'wagmi';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isConnected } = useAccount();
  const router = useRouter();
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    if (!isConnected && pathname !== '/') {
      router.push('/');
    }
  }, [isConnected, router, pathname]);

  if (!isMounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!isConnected && pathname !== '/') {
    return null;
  }

  return <>{children}</>;
}