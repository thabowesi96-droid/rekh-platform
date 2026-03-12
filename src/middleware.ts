import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/request';

/**
 * Middleware to protect routes starting with /dashboard.
 * Checks for a Firebase session cookie and redirects to /login if not found.
 */
export function middleware(request: NextRequest) {
  // '__session' is the required cookie name for Firebase Hosting/App Hosting 
  // to persist cookies to the server-side logic in SSR/Middleware.
  const session = request.cookies.get('__session');

  const { pathname } = request.nextUrl;

  // Protect all routes starting with /dashboard
  if (pathname.startsWith('/dashboard')) {
    if (!session) {
      // Redirect to the login page if no session cookie exists
      const url = new URL('/login', request.url);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

// Configure the matcher to only run middleware on dashboard routes
export const config = {
  matcher: ['/dashboard/:path*'],
};
