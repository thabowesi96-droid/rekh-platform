'use client';

import { Button } from '@/components/ui/button';
import { auth, provider } from '../../lib/firebase';
import { signInWithRedirect, getRedirectResult } from 'firebase/auth';
import { useEffect } from 'react';

export default function LoginPage() {
  
  useEffect(() => {
    // This checks if we just returned from Google
    const checkRedirect = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result) {
          const idToken = await result.user.getIdToken();
          const response = await fetch('/api/auth', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ idToken }),
          });
          if (response.ok) {
            window.location.href = '/dashboard';
          }
        }
      } catch (error) {
        console.error("Redirect Auth Error:", error);
      }
    };
    checkRedirect();
  }, []);

  const handleLogin = () => {
    signInWithRedirect(auth, provider);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white p-4">
      <div className="text-center space-y-8">
        <h1 className="text-5xl font-extrabold tracking-tighter uppercase italic">Rekh Suite</h1>
        <Button 
          onClick={handleLogin} 
          className="px-12 py-8 text-2xl bg-white text-black hover:bg-zinc-200 font-bold"
        >
          ENTER SUITE
        </Button>
      </div>
    </div>
  );
}
