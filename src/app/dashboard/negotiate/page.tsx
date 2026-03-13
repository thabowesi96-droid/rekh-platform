'use client';
import { useState } from 'react';
import Navigation from '@/components/Navigation';

export default function FeedbackSandbox() {
  const [feedback, setFeedback] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="p-6 border-b border-zinc-900 flex justify-between items-center bg-black/90 backdrop-blur-md sticky top-0 z-50">
        <h1 className="text-xl font-black italic uppercase tracking-tighter">Negotiation Lab</h1>
        <Navigation />
      </header>

      <main className="p-8 max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">Funder Query Input</h2>
          </div>
          <p className="text-sm text-zinc-400 italic">"Paste the specific conditions or queries received from the funder (NEF/IDC) below."</p>
          <textarea 
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="w-full h-48 bg-zinc-900 border border-zinc-800 p-6 text-sm font-light leading-relaxed focus:border-blue-500 outline-none transition-all"
            placeholder="e.g. 'We require 15% equity instead of 10% and a minimum of 8 permanent jobs...'"
          />
        </div>

        <button 
          onClick={() => setIsProcessing(true)}
          className="w-full bg-white text-black py-6 font-black uppercase tracking-widest text-xs hover:bg-blue-500 hover:text-white transition-all"
        >
          {isProcessing ? 'Swarm Re-Calculating Model...' : 'Simulate Funder Conditions'}
        </button>

        {isProcessing && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <div className="p-6 border border-zinc-800 bg-zinc-950 space-y-4">
              <h3 className="text-[10px] font-black uppercase text-blue-500">Truth Guardian Synthesis</h3>
              <p className="text-sm text-white italic leading-relaxed">
                "Accepted. Increasing equity to 15% creates a funding gap of R 500k. I am instructing the Financial Quant to test 'Option B: Capex Deferment' to absorb this shift without killing Year 1 ROI."
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               <button className="border border-zinc-800 p-4 text-[10px] font-black uppercase tracking-widest hover:border-white">View New Projections</button>
               <button className="border border-zinc-800 p-4 text-[10px] font-black uppercase tracking-widest hover:border-white">Draft Response Letter</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
