'use client';
import { useState } from 'react';

export default function DashboardPage() {
  const [input, setInput] = useState('');
  const [feed, setFeed] = useState(['[SYSTEM] Orchestration Engine Online.', '[SYSTEM] Waiting for operator directive...']);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input) return;
    setFeed(prev => [...prev, `> ${input}`, `[AI] Directive received. Processing "${input}"...`]);
    setInput('');
  };

  return (
    <div className="p-8 font-mono text-white">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-2xl font-black uppercase italic tracking-tighter">Command Center</h1>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
          <span className="text-[10px] text-purple-500 uppercase font-black">Online</span>
        </div>
      </div>

      <div className="bg-black border border-zinc-900 p-6 min-h-[400px] flex flex-col">
        <div className="flex-1 overflow-y-auto mb-4 space-y-2 text-xs text-zinc-400">
          {feed.map((line, i) => (
            <p key={i} className={line.startsWith('>') ? 'text-purple-400' : ''}>{line}</p>
          ))}
        </div>
        
        <form onSubmit={handleCommand} className="flex gap-2 border-t border-zinc-900 pt-4">
          <span className="text-purple-500 font-bold">{'>'}</span>
          <input 
            autoFocus
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none text-sm text-white placeholder-zinc-700"
            placeholder="TYPE DIRECTIVE..."
          />
        </form>
      </div>
    </div>
  );
}
