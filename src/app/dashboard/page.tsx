'use client';
import { useState, useEffect } from 'react';

export default function DashboardPage() {
  const [status, setStatus] = useState('Active');

  return (
    <div className="p-8 font-mono text-white">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-2xl font-black uppercase italic tracking-tighter">Command Center</h1>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
          <span className="text-[10px] text-purple-500 uppercase font-black">Orchestration Engine: Online</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <button 
          onClick={() => alert('Specialist Swarm Initialized')}
          className="border border-zinc-800 p-8 text-left hover:bg-zinc-900 transition-all group"
        >
          <p className="text-[10px] text-zinc-500 uppercase mb-2">Portfolio Status</p>
          <p className="text-xl font-bold group-hover:text-purple-400">Sovereign Active</p>
        </button>

        <button 
          onClick={() => alert('Context Engine: Analyzing Placeholders')}
          className="border border-zinc-800 p-8 text-left hover:bg-zinc-900 transition-all group"
        >
          <p className="text-[10px] text-zinc-500 uppercase mb-2">Next Stage</p>
          <p className="text-xl font-bold group-hover:text-blue-400">Discovery Phase</p>
        </button>
      </div>

      <div className="mt-12 bg-zinc-950 border border-zinc-900 p-6 min-h-[300px]">
        <p className="text-zinc-700 text-[10px] uppercase font-black mb-4">Live Tactical Feed</p>
        <p className="text-zinc-400 italic">Waiting for operator input...</p>
      </div>
    </div>
  );
}
