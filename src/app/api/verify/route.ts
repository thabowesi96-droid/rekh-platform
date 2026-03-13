import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { passcode } = await request.json();
    const adminSecret = process.env.REKH_MASTER_PASSCODE;
    const observerSecret = process.env.REKH_OBSERVER_PASSCODE;

    let role = null;
    let maxAge = 0;

    if (passcode === adminSecret) {
      role = 'admin';
      maxAge = 60 * 60 * 24 * 30; // 30 days
    } else if (passcode === observerSecret) {
      role = 'observer';
      maxAge = 60 * 60 * 24 * 7;  // 7 days
    }

    if (role) {
      const cookieStore = await cookies();
      cookieStore.set('rekh_hardware_token', role, {
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        path: '/',
        maxAge: maxAge,
      });
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: false }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}
