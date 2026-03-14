'use client';
import { useState } from 'react';

export default function StrategyLab() {
  const [title, setTitle] = useState('');
  const [brief, setBrief] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [output, setOutput] = useState('');

  const handleSynthesize = async () => {
    if (!brief) return;
    setIsProcessing(true);
    
    // Simulating the Council's initial response
    setTimeout(() => {
      setOutput(`[COUNCIL ACKNOWLEDGEMENT]\n\nScope: ${brief.substring(0, 50)}...\n\nResearcher: Initializing South African poultry market analysis.\nQuant: Modeling CAPEX for 20k broiler houses + Abattoir.\nStrategist: Drafting the vertical integration narrative (Silo -> Abattoir).\n\n[ACTION REQUIRED]: Operator, please confirm the Province for specific environmental regulatory logic.`);
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="p-8 font-mono text-white max-w-4xl mx-auto">
      <h1 className="text-4xl font-black uppercase italic mb-2">Strategy Lab</h1>
      <p className="text-zinc-500 mb-12 uppercase text-[10px] tracking-widest">Council of Agents: Online</p>

      <div className="space-y-8 bg-zinc-950 border border-zinc-900 p-8">
        <div>
          <label className="text-[10px] uppercase text-zinc-500 font-black block mb-2">Venture Title</label>
          <input 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-black border border-zinc-800 p-4 outline-none focus:border-purple-500" 
            placeholder="e.g., Gauteng Broiler Enterprise"
          />
        </div>

        <div>
          <label className="text-[10px] uppercase text-zinc-500 font-black block mb-2">Detailed Concept Brief</label>
          <textarea 
            value={brief}
            onChange={(e) => setBrief(e.target.value)}
            rows={6}
            className="w-full bg-black border border-zinc-800 p-4 outline-none focus:border-purple-500 text-sm"
          />
        </div>

        <button 
          onClick={handleSynthesize}
          disabled={isProcessing}
          className="w-full bg-white text-black font-black p-6 uppercase hover:bg-purple-500 hover:text-white transition-all disabled:opacity-50"
        >
          {isProcessing ? 'Council Convening...' : 'Initiate Synthesis'}
        </button>

        {output && (
          <div className="mt-8 p-6 bg-black border border-purple-500/30 text-purple-400 text-xs whitespace-pre-wrap animate-pulse">
            {output}
          </div>
        )}
      </div>
    </div>
  );
}
