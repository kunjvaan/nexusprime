import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Add routes that should be protected
const protectedRoutes = ['/dashboard', '/properties', '/stake'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the route should be protected
  if (protectedRoutes.some(route => pathname.startsWith(route))) {
    // You can add additional checks here if needed
    // For now, we'll let the client-side handle the protection
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};