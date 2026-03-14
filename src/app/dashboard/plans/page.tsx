'use client';
import { useState } from 'react';

export default function PlansPage() {
  const [input, setInput] = useState('');
  const handleSend = () => { if(input) { alert('Strategy Captured: ' + input); setInput(''); } };
  return (
    <div className="p-8 font-mono text-white">
      <h1 className="text-2xl font-black uppercase italic mb-8">Synthesis Engine</h1>
      <div className="bg-zinc-950 border border-zinc-900 p-8 min-h-[400px] flex flex-col">
        <div className="flex-1 text-zinc-400 text-sm"><p>[System Ready for Input]</p></div>
        <div className="flex gap-4">
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter Data..." className="flex-1 bg-black border border-zinc-800 p-4 text-sm focus:border-purple-500 outline-none" />
          <button onClick={handleSend} className="bg-white text-black px-8 font-black uppercase text-[10px]">Send</button>
        </div>
      </div>
    </div>
  );
}
