'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [key, setKey] = useState('');
  const [status, setStatus] = useState('AUTHORIZE DEVICE');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('VERIFYING...');
    
    // Set the cookie for the middleware to check
    document.cookie = `rekh_session=${key}; path=/; max-age=86400; SameSite=Strict`;
    
    // Attempt to enter the dashboard
    router.push('/dashboard');
    
    // If the middleware kicks us back, reset the status
    setTimeout(() => setStatus('AUTHORIZE DEVICE'), 2000);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center font-mono text-white">
      <h1 className="text-4xl font-black italic mb-2 tracking-tighter">REKH SUITE</h1>
      <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-8">Sovereign Strategic Environment</p>
      
      <form onSubmit={handleLogin} className="w-full max-w-sm space-y-4">
        <input
          type="password"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          placeholder="ENTER ACCESS KEY"
          className="w-full bg-transparent border border-zinc-800 p-4 text-center focus:outline-none focus:border-white transition-colors"
        />
        <button className="w-full bg-white text-black p-4 font-black uppercase hover:bg-zinc-200 transition-all">
          {status}
        </button>
      </form>
    </div>
  );
}
