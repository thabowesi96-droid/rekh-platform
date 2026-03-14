'use client';
import { useChat } from 'ai/react';
import { useState, useEffect } from 'react';

export default function StrategyLab() {
  const [stage, setStage] = useState(3); // Hard-coded to start at Financials

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
    body: { stage },
    initialMessages: [
      {
        id: 'initial-context',
        role: 'assistant',
        content: '[COUNCIL: THE QUANT] Vertical integration confirmed: 20k broiler houses + 1.5k/day abattoir in Gauteng. I have the technical specs. We are moving directly to Stage 03: FINANCIALS. Please provide your estimated cost per chick (Rands) or feed budget to generate the cash flow model.'
      }
    ],
  });

  return (
    <div className="flex h-screen bg-black text-white font-mono">
      {/* --- PROGRESS SIDEBAR --- */}
      <aside className="w-72 border-r border-zinc-900 p-8 flex flex-col">
        <h2 className="text-[10px] text-zinc-500 uppercase font-black mb-12 tracking-widest">Project Lifecycle</h2>
        <div className="space-y-6">
          {['Discovery', 'Technicals', 'Financials', 'Compliance', 'Manifest'].map((label, i) => (
            <div key={label} className="flex items-center gap-4">
              <div className={`w-3 h-3 rounded-full ${stage > i ? 'bg-purple-500' : 'bg-zinc-800'} ${stage === i + 1 ? 'animate-pulse' : ''}`} />
              <span className={`text-[11px] uppercase font-bold ${stage > i ? 'text-white' : 'text-zinc-600'}`}>{label}</span>
            </div>
          ))}
        </div>
      </aside>

      {/* --- WORKSPACE --- */}
      <main className="flex-1 flex flex-col p-12 max-w-5xl mx-auto w-full">
        <div className="flex-1 bg-zinc-950 border border-zinc-900 p-8 overflow-y-auto mb-8 space-y-6 text-xs border-l-4 border-l-purple-900/30">
          {messages.map((m) => (
            <div key={m.id} className={m.role === 'assistant' ? 'text-purple-400' : 'text-zinc-400 pl-4 border-l border-zinc-800'}>
              <p className="font-black uppercase mb-1">[{m.role === 'assistant' ? 'Council Agent' : 'Operator'}]</p>
              <p className="leading-relaxed">{m.content}</p>
            </div>
          ))}
          {isLoading && <p className="text-purple-500 animate-pulse text-[10px] uppercase font-black tracking-tighter">>>> Council is calculating financials...</p>}
        </div>

        <form onSubmit={handleSubmit} className="flex gap-4">
          <input 
            value={input}
            onChange={handleInputChange}
            className="flex-1 bg-black border border-zinc-800 p-6 text-sm outline-none focus:border-purple-500 transition-all placeholder:text-zinc-800"
            placeholder="ENTER FINANCIAL DIRECTIVE (e.g., Feed cost R12.50 per bird)..."
          />
          <button type="submit" className="bg-white text-black px-12 font-black uppercase text-[10px] tracking-widest hover:bg-purple-500 hover:text-white transition-all">
            Execute →
          </button>
        </form>
      </main>
    </div>
  );
}
