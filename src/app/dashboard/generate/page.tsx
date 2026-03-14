'use client';
import { useState } from 'react';

export default function StrategyLab() {
  const [stage, setStage] = useState(1);
  const [directive, setDirective] = useState('');
  const [history, setHistory] = useState([
    { role: 'ai', text: 'Council is online. Define your sector and vision to begin Stage 1.' }
  ]);

  const stages = [
    { id: 1, label: 'Discovery' },
    { id: 2, label: 'Technicals' },
    { id: 3, label: 'Financials' },
    { id: 4, label: 'Compliance' },
    { id: 5, label: 'Manifest' }
  ];

  const handleExecute = () => {
    if (!directive) return;
    setHistory([...history, { role: 'user', text: directive }]);
    
    // Universal stage-advancement logic
    setTimeout(() => {
      setHistory(prev => [...prev, { 
        role: 'ai', 
        text: `Stage ${stage} validated. Advancing to ${stages[stage]?.label || 'Final Export'}.` 
      }]);
      if (stage < 5) setStage(stage + 1);
      setDirective('');
    }, 1000);
  };

  return (
    <div className="flex h-screen bg-black text-white font-mono">
      {/* --- PROGRESS SIDEBAR --- */}
      <aside className="w-72 border-r border-zinc-900 flex flex-col p-8">
        <h2 className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-12">Project Lifecycle</h2>
        <div className="space-y-6 flex-1">
          {stages.map((s) => (
            <div key={s.id} className="relative flex items-center gap-4">
              <div className={`z-10 w-3 h-3 rounded-full border-2 ${
                stage >= s.id ? 'bg-purple-500 border-purple-500' : 'bg-black border-zinc-800'
              } ${stage === s.id ? 'animate-pulse' : ''}`} />
              <span className={`text-[11px] uppercase font-bold ${stage >= s.id ? 'text-white' : 'text-zinc-600'}`}>
                {s.label}
              </span>
              {s.id < 5 && <div className={`absolute left-[5px] top-3 w-[2px] h-6 ${stage > s.id ? 'bg-purple-500' : 'bg-zinc-900'}`} />}
            </div>
          ))}
        </div>
      </aside>

      {/* --- WORKSPACE --- */}
      <main className="flex-1 flex flex-col p-12 max-w-5xl mx-auto w-full">
        <header className="mb-12">
          <h1 className="text-4xl font-black italic uppercase tracking-tighter">
            {stages[stage-1].label} <span className="text-zinc-800">/ 0{stage}</span>
          </h1>
        </header>

        <div className="flex-1 bg-zinc-950 border border-zinc-900 p-8 overflow-y-auto mb-8 space-y-4">
          {history.map((msg, i) => (
            <div key={i} className={`text-xs ${msg.role === 'user' ? 'text-zinc-500 pl-4 border-l border-zinc-800' : 'text-purple-400'}`}>
              <span className="font-black mr-2 uppercase">[{msg.role}]</span> {msg.text}
            </div>
          ))}
        </div>

        <div className="flex gap-4">
          <input 
            value={directive}
            onChange={(e) => setDirective(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleExecute()}
            className="flex-1 bg-black border border-zinc-800 p-5 text-sm outline-none focus:border-purple-500 transition-colors"
            placeholder={`Submit Directive for Stage ${stage}...`}
          />
          <button 
            onClick={handleExecute}
            className="bg-white text-black px-10 font-black uppercase text-[10px] hover:bg-purple-500 hover:text-white transition-all"
          >
            Execute →
          </button>
        </div>
      </main>
    </div>
  );
}
