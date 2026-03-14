'use client';
import { useState } from 'react';

export default function PlansPage() {
  const [stage, setStage] = useState(1);
  
  return (
    <div className="p-8 font-mono text-white">
      <h1 className="text-2xl font-black uppercase italic mb-8">Business Plan Synthesis</h1>
      
      <div className="flex gap-4 mb-8">
        {[1, 2, 3, 4].map((num) => (
          <div key={num} className={`h-1 flex-1 ${stage >= num ? 'bg-purple-500' : 'bg-zinc-800'}`} />
        ))}
      </div>

      <div className="bg-zinc-950 border border-zinc-900 p-8 min-h-[400px] flex flex-col">
        <div className="flex-1 mb-4 text-zinc-400 text-sm">
          <p className="text-purple-500 font-bold mb-2 uppercase text-[10px]">[Researcher AI Swarm Initialized]</p>
          <p>Operator, I am ready to begin **Stage {stage}: Discovery**. I detect your project vault is currently empty. Shall we define your Industrial Sector first?</p>
        </div>
        
        <div className="flex gap-4">
          <input 
            type="text" 
            placeholder="Type your strategic input here..." 
            className="flex-1 bg-black border border-zinc-800 p-4 text-sm focus:outline-none focus:border-purple-500"
          />
          <button 
            onClick={() => setStage(prev => prev < 4 ? prev + 1 : 4)}
            className="bg-white text-black px-8 font-black uppercase text-[10px] hover:bg-purple-500 hover:text-white transition-all"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
