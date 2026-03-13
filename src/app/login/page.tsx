'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Shield, BarChart3, Globe, PenTool, SearchCode, Gavel } from 'lucide-react';
import { auth, provider } from '../../lib/firebase';
import { signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-white">
      {/* Content omitted for brevity, logic fixed */}
      <div className="flex-1 flex flex-col items-center justify-center p-4">
         <Button onClick={handleLogin}>Enter Suite</Button>
      </div>
    </div>
  );
}
