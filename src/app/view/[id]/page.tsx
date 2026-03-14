

import { use } from 'react';

export default function FunderPortal({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col items-center justify-center p-8">
      <div className="max-w-md w-full border border-zinc-900 p-12 space-y-8 animate-in fade-in zoom-in duration-700">
        <div className="text-center space-y-2">
          <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-500">Secure Access Portal</h2>
          <h1 className="text-4xl font-black italic uppercase">Project {id}</h1>
        </div>
        <div className="space-y-4">
          <p className="text-[10px] text-zinc-600 uppercase font-bold text-center">Verification Required</p>
          <input type="password" placeholder="5-DIGIT PIN" className="w-full bg-zinc-950 border border-zinc-800 p-4 text-center text-xl font-mono tracking-[1em] focus:border-white outline-none transition-all" />
          <button className="w-full bg-white text-black py-4 font-black uppercase tracking-widest text-xs hover:bg-zinc-200">Unlock</button>
        </div>
      </div>
    </div>
  );
}
