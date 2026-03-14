'use client';
import { useChat } from 'ai/react';
import { useState, useEffect } from 'react';

export default function StrategyLab() {
  const [stage, setStage] = useState(1);
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
    body: { stage },
    initialMessages: [{ 
      id: 'init', 
      role: 'assistant', 
      content: '[COUNCIL ONLINE] I have processed your broiler farm brief. 20k birds, Solar/Biogas, and Abattoir detected. We are currently in Stage 3: Financials. Please provide your estimated feed cost per bird to begin the modeling.' 
    }]
  });

  // Force the UI state to match the prompt context
  useEffect(() => { setStage(3); }, []);

  return (
    <div className="flex h-screen bg-black text-white font-mono">
      <aside className="w-72 border-r border-zinc-900 p-8 space-y-6">
        <h2 className="text-[10px] text-zinc-500 uppercase font-black mb-12">Project Lifecycle</h2>
        {['Discovery', 'Technicals', 'Financials', 'Compliance', 'Manifest'].map((label, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className={`w-3 h-3 rounded-full ${stage > i ? 'bg-purple-500' : 'bg-zinc-800'} ${stage === i + 1 ? 'animate-pulse' : ''}`} />
            <span className={`text-[11px] uppercase ${stage > i ? 'text-white' : 'text-zinc-600'}`}>{label}</span>
          </div>
        ))}
      </aside>

      <main className="flex-1 flex flex-col p-12 max-w-5xl mx-auto w-full">
        <div className="flex-1 bg-zinc-950 border border-zinc-900 p-8 overflow-y-auto mb-8 space-y-6 text-xs">
          {messages.map((m) => (
            <div key={m.id} className={m.role === 'assistant' ? 'text-purple-400' : 'text-zinc-400 pl-4 border-l border-zinc-800'}>
              <p className="font-black uppercase mb-1">[{m.role === 'assistant' ? 'Council Agent' : 'Operator'}]</p>
              <p className="leading-relaxed">{m.content}</p>
            </div>
          ))}
          {isLoading && <p className="text-purple-500 animate-pulse text-[10px]">COUNCIL IS ANALYZING FEED COSTS...</p>}
        </div>

        <form onSubmit={handleSubmit} className="flex gap-4">
          <input 
            value={input}
            onChange={handleInputChange}
            className="flex-1 bg-black border border-zinc-800 p-5 outline-none focus:border-purple-500"
            placeholder="Provide financial data..."
          />
          <button type="submit" className="bg-white text-black px-10 font-black uppercase text-[10px]">Execute →</button>
        </form>
      </main>
    </div>
  );
}
