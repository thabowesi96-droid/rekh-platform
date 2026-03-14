import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Hard-coded key with strict type handling
const AUTH_PIN = "22733";

export function middleware(request: NextRequest) {
  const session = request.cookies.get('rekh_session');
  const { pathname } = request.nextUrl;

  // Protect all routes under /dashboard
  if (pathname.startsWith('/dashboard')) {
    if (!session || session.value !== AUTH_PIN) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
