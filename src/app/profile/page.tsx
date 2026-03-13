'use client';
import { useState } from 'react';
import Navigation from '@/components/Navigation';

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    name: 'Thabowe si',
    company: 'Rekh Industries',
    email: 'contact@rekh.io',
    phone: '+27 82 000 0000',
    designation: 'Managing Director'
  });

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="p-6 border-b border-zinc-900 flex justify-between items-center sticky top-0 bg-black/90 backdrop-blur-md z-50">
        <h1 className="text-xl font-black italic uppercase tracking-tighter">Sovereign Profile</h1>
        <Navigation />
      </header>

      <main className="p-8 max-w-2xl mx-auto w-full space-y-12">
        <div className="space-y-2 border-l-4 border-white pl-6">
          <h2 className="text-4xl font-black uppercase italic tracking-tighter">Personal Identity</h2>
          <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Global PDF Header Metadata</p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {Object.entries(profile).map(([key, value]) => (
            <div key={key} className="space-y-2">
              <label className="text-[10px] uppercase font-black text-zinc-600 tracking-widest">{key}</label>
              <input 
                type="text" 
                value={value}
                onChange={(e) => setProfile({...profile, [key]: e.target.value})}
                className="w-full bg-zinc-900 border border-zinc-800 p-4 text-sm font-bold focus:outline-none focus:border-white transition-all italic uppercase"
              />
            </div>
          ))}
        </div>

        <button className="w-full bg-white text-black py-4 font-black uppercase text-xs tracking-widest hover:bg-zinc-200 transition-all mt-8">
          Save Identity
        </button>
      </main>
    </div>
  );
}
