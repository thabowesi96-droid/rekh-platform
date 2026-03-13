'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function LoginPage() {
  const [passcode, setPasscode] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAuth = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ passcode }),
      });
      if (res.ok) {
        window.location.href = '/dashboard';
      } else {
        alert("Access Denied: Invalid Access Key.");
      }
    } catch (err) {
      alert("System Error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white p-4 font-sans text-center">
      <div className="space-y-8 w-full max-w-sm">
        <div className="space-y-2">
          <h1 className="text-5xl font-black tracking-tighter uppercase italic">Rekh Suite</h1>
          <p className="text-zinc-500 text-xs tracking-[0.3em] uppercase">Sovereign Strategic Environment</p>
        </div>
        
        <div className="space-y-4">
          <input 
            type="password" 
            placeholder="ENTER ACCESS KEY"
            className="bg-zinc-900 border border-zinc-800 p-4 rounded-none w-full text-center tracking-widest focus:outline-none focus:border-white transition-colors"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAuth()}
          />
          <Button 
            onClick={handleAuth} 
            disabled={loading}
            className="w-full bg-white text-black font-bold py-6 rounded-none hover:bg-zinc-200 transition-all uppercase tracking-widest"
          >
            {loading ? 'Verifying...' : 'Authorize Device'}
          </Button>
        </div>
      </div>
    </div>
  );
}
