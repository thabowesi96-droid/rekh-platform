'use client';

import { Button } from '@/components/ui/button';
import { auth, provider } from '../../lib/firebase';
import { signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const idToken = await result.user.getIdToken();

      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idToken }),
      });

      if (response.ok) {
        // We add a tiny delay to give Firefox time to register the cookie in the background
        setTimeout(() => {
          window.location.href = '/dashboard';
        }, 500);
      }
    } catch (error) {
      console.error("Auth Error:", error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white p-4">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tighter uppercase">Rekh Suite</h1>
        <Button onClick={handleLogin} className="px-10 py-6 text-lg bg-white text-black hover:bg-slate-200">
          Enter Suite
        </Button>
      </div>
    </div>
  );
}
