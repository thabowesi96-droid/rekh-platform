'use client';
import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';

const AGENTS = [
  { id: 'research', title: 'Market Analyst', specialty: 'Sector Gaps & Import Substitution', icon: '📊' },
  { id: 'finance', title: 'Financial Quant', specialty: 'DSCR & ROI Modeling', icon: '📈' },
  { id: 'ops', title: 'Logistics Lead', specialty: 'Supply Chain & Headcount', icon: '⚙️' },
  { id: 'compliance', title: 'Risk Auditor', specialty: 'BEE & Regulatory Stress-Test', icon: '🛡️' }
];

export default function SpecialistSwarm() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [funder, setFunder] = useState('NEF');
  const [guardianStatus, setGuardianStatus] = useState('Idle');
  const [verified, setVerified] = useState<string[]>([]);

  // Simulation of the Truth Guardian "scanning" the specialist's work
  useEffect(() => {
    setGuardianStatus('Zero-Trust Scan Active...');
    const timer = setTimeout(() => setGuardianStatus('Data Grounded & Verified'), 2000);
    return () => clearTimeout(timer);
  }, [activeIdx]);

  const toggleVerify = (id: string) => {
    setVerified(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="p-6 border-b border-zinc-900 flex justify-between items-center sticky top-0 bg-black/95 backdrop-blur-md z-50">
        <div>
          <h1 className="text-xl font-black italic uppercase tracking-tighter">Rekh Suite</h1>
          <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
            Targeting: <span className="text-white underline cursor-pointer" onClick={() => setFunder(funder === 'NEF' ? 'IDC' : 'NEF')}>{funder}</span>
          </p>
        </div>
        <Navigation />
      </header>

      <main className="p-8 max-w-5xl mx-auto w-full space-y-8">
        {/* Leadership Tier: Shadow Auditor & Truth Guardian Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-red-950/10 border border-red-900 p-4">
            <p className="text-[9px] uppercase font-black text-red-500 mb-1">Shadow Auditor (Mandate AI)</p>
            <p className="text-xs italic text-zinc-400">"Current Nuance: Enforcing {funder} sectoral transformation targets."</p>
          </div>
          <div className="bg-blue-950/10 border border-blue-900 p-4">
            <p className="text-[9px] uppercase font-black text-blue-500 mb-1">Truth Guardian (Quality AI)</p>
            <p className="text-xs italic text-zinc-400">"{guardianStatus}"</p>
          </div>
        </div>

        {/* Production Tier: Specialist Swarm */}
        <div className="space-y-4">
          {AGENTS.map((agent, idx) => (
            <div key={agent.id} className={`border transition-all ${activeIdx === idx ? 'border-zinc-500 bg-zinc-900/40' : 'border-zinc-800'}`}>
              <div className="p-6 flex justify-between items-center cursor-pointer" onClick={() => setActiveIdx(idx)}>
                <div className="flex items-center gap-6">
                  <span className="text-2xl">{agent.icon}</span>
                  <div>
                    <h3 className={`text-xl font-bold uppercase italic ${verified.includes(agent.id) ? 'text-green-500' : 'text-white'}`}>
                      {agent.title}
                    </h3>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">{agent.specialty}</p>
                  </div>
                </div>
                {verified.includes(agent.id) && <span className="text-green-500 font-black text-[10px] tracking-widest">VERIFIED</span>}
              </div>

              {activeIdx === idx && (
                <div className="p-8 border-t border-zinc-800 bg-black/50 space-y-6 animate-in slide-in-from-top-2">
                  <div className="bg-white/5 p-6 border-l-2 border-white">
                    <h4 className="text-[10px] uppercase font-black text-zinc-500 mb-4 tracking-[0.2em]">Live Section Synthesis</h4>
                    <p className="text-sm text-zinc-300 leading-relaxed italic">
                      The {agent.title} is currently synthesizing your Sandbox data with real-time {funder} nuances. 
                      Truth Guardian is monitoring for hallucinations.
                    </p>
                  </div>
                  
                  <div className="flex gap-4">
                    <button className="flex-1 bg-white text-black py-4 font-black uppercase text-xs tracking-widest">Refine with {agent.title}</button>
                    <button 
                      onClick={() => toggleVerify(agent.id)}
                      className="bg-zinc-800 px-8 py-4 font-black uppercase text-xs tracking-widest hover:bg-zinc-700"
                    >
                      {verified.includes(agent.id) ? 'Unlock' : 'Verify & Lock'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {verified.length === AGENTS.length && (
          <button 
            onClick={() => window.location.href='/models/new/assemble'}
            className="w-full bg-red-900 text-white p-8 font-black uppercase tracking-widest text-2xl hover:bg-red-700 animate-pulse transition-all mt-12"
          >
            Initiate Final Assembly
          </button>
        )}
      </main>
    </div>
  );
}
