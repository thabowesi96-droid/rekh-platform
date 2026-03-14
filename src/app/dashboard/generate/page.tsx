'use client';
import { useState, useEffect } from 'react';

export default function StrategyLab() {
  const [stage, setStage] = useState(1);
  const [directive, setDirective] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [history, setHistory] = useState([
    { role: 'ai', text: 'Council is online. I am your Lead Researcher. To begin Stage 1 (Discovery), please describe the core objective of your venture.' }
  ]);

  const stages = [
    { id: 1, label: 'Discovery', prompt: 'I need to understand the scale. Is this for local supply or export?' },
    { id: 2, label: 'Technicals', prompt: 'Let’s map the infrastructure. What are the key power and water requirements?' },
    { id: 3, label: 'Financials', prompt: 'I am the Quant. What is your estimated startup CAPEX budget?' },
    { id: 4, label: 'Compliance', prompt: 'I am the Strategist. Which specific provincial regulations are you most concerned with?' },
    { id: 5, label: 'Manifest', prompt: 'All data synthesized. Shall I generate the final Executive Prospectus?' }
  ];

  const handleExecute = async () => {
    if (!directive) return;
    const userMessage = directive;
    setHistory(prev => [...prev, { role: 'user', text: userMessage }]);
    setDirective('');
    setIsTyping(true);

    // Simulate Agent Thinking
    setTimeout(() => {
      const agentResponse = stages[stage - 1].prompt;
      setHistory(prev => [...prev, { 
        role: 'ai', 
        text: `[STATION: ${stages[stage-1].label}] Accepted. ${agentResponse}` 
      }]);
      setIsTyping(false);
      if (stage < 5) setStage(prev => prev + 1);
    }, 1500);
  };

  return (
    <div className="flex h-screen bg-black text-white font-mono">
      <aside className="w-72 border-r border-zinc-900 p-8">
        <h2 className="text-[10px] text-zinc-500 uppercase font-black mb-12">Project Lifecycle</h2>
        <div className="space-y-6">
          {stages.map((s) => (
            <div key={s.id} className="flex items-center gap-4">
              <div className={`w-3 h-3 rounded-full ${stage >= s.id ? 'bg-purple-500' : 'bg-zinc-800'}`} />
              <span className={`text-[11px] uppercase ${stage >= s.id ? 'text-white' : 'text-zinc-600'}`}>{s.label}</span>
            </div>
          ))}
        </div>
      </aside>

      <main className="flex-1 flex flex-col p-12 max-w-5xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-black italic uppercase tracking-tighter">
            {stages[stage-1].label} <span className="text-zinc-800">/ 0{stage}</span>
          </h1>
        </header>

        <div className="flex-1 bg-zinc-950 border border-zinc-900 p-8 overflow-y-auto mb-8 space-y-6">
          {history.map((msg, i) => (
            <div key={i} className={`text-xs ${msg.role === 'user' ? 'text-zinc-400 pl-4 border-l border-zinc-800' : 'text-purple-400'}`}>
              <p className="font-black uppercase mb-1">[{msg.role === 'ai' ? 'Council Agent' : 'Operator'}]</p>
              <p className="leading-relaxed">{msg.text}</p>
            </div>
          ))}
          {isTyping && <p className="text-purple-500 animate-pulse text-[10px]">AGENT IS ANALYZING...</p>}
        </div>

        <div className="flex gap-4">
          <input 
            autoFocus
            value={directive}
            onChange={(e) => setDirective(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleExecute()}
            className="flex-1 bg-black border border-zinc-800 p-5 text-sm outline-none focus:border-purple-500"
            placeholder="Type your response to the Council..."
          />
          <button onClick={handleExecute} className="bg-white text-black px-10 font-black uppercase text-[10px]">Execute →</button>
        </div>
      </main>
    </div>
  );
}
