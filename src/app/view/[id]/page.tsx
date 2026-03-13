'use client';
import { useEffect, useState } from 'react';

export default function FunderPortal({ params }: { params: { id: string } }) {
  const [hasNotified, setHasNotified] = useState(false);

  useEffect(() => {
    // This is the tracker. In production, this calls a Firebase Function
    // to email the owner: "Investor has opened your Prospectus!"
    if (!hasNotified) {
      console.log(`SECURE LOG: Prospectus ${params.id} accessed by Funder.`);
      setHasNotified(true);
    }
  }, [params.id, hasNotified]);

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8 flex flex-col items-center">
      <div className="max-w-4xl w-full space-y-8">
        <header className="flex justify-between items-center border-b border-zinc-800 pb-6">
          <h1 className="text-xl font-black italic italic uppercase tracking-tighter">Rekh Sovereign Portal</h1>
          <span className="text-[10px] bg-green-900 text-green-400 px-3 py-1 font-bold uppercase tracking-widest">Secure Link Active</span>
        </header>

        <div className="bg-white text-black p-12 aspect-[1/1.414] shadow-2xl mx-auto overflow-y-auto">
          {/* This is where the Avenue Frost PDF content is rendered for the funder */}
          <h2 className="text-4xl font-black italic mb-4 uppercase">Business Prospectus</h2>
          <p className="text-zinc-500 font-mono text-xs mb-12 uppercase tracking-widest">Document ID: {params.id}</p>
          <div className="space-y-6 text-sm leading-relaxed">
             <div className="h-4 w-3/4 bg-zinc-200"></div>
             <div className="h-4 w-full bg-zinc-100"></div>
             <div className="h-4 w-5/6 bg-zinc-100"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
