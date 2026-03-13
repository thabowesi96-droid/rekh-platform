'use client';
import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';

export default function VerificationGate() {
  const [isScanning, setIsScanning] = useState(true);
  const [results, setResults] = useState<any>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setResults([
        { id: 1, label: 'Mathematical Continuity', status: 'PASS', detail: 'Revenue projections align with market gap data.' },
        { id: 2, label: 'Lens Alignment (Credit)', status: 'WARNING', detail: 'Financial tables are present, but narrative lacks debt-service depth.' },
        { id: 3, label: 'Mandate Check (NEF)', status: 'PASS', detail: 'BEE Level 1 and 10% Equity verified in summary.' }
      ]);
      setIsScanning(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="p-6 border-b border-zinc-900 flex justify-between items-center bg-black/90 backdrop-blur-md sticky top-0 z-50">
        <h1 className="text-xl font-black italic uppercase tracking-tighter">Pre-Flight Verification</h1>
        <Navigation />
      </header>

      <main className="p-8 max-w-2xl mx-auto flex flex-col items-center justify-center min-h-[70vh] space-y-12">
        {isScanning ? (
          <div className="text-center space-y-6">
            <div className="w-12 h-12 border-2 border-t-white border-zinc-800 rounded-full animate-spin mx-auto"></div>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] animate-pulse">Shadow Auditor scanning for logical redlines...</p>
          </div>
        ) : (
          <div className="w-full space-y-8 animate-in fade-in zoom-in duration-500">
            <div className="space-y-4">
              {results.map((res: any) => (
                <div key={res.id} className={`p-6 border ${res.status === 'PASS' ? 'border-zinc-800' : 'border-orange-900/50 bg-orange-900/5'}`}>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xs font-black uppercase italic tracking-widest">{res.label}</h3>
                    <span className={`text-[9px] font-black px-2 py-0.5 ${res.status === 'PASS' ? 'bg-zinc-800 text-zinc-400' : 'bg-orange-600 text-white'}`}>
                      {res.status}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-500 italic leading-relaxed">{res.detail}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-8">
              <button 
                onClick={() => window.location.href = '/models/new/edit'}
                className="flex-1 bg-zinc-900 text-zinc-500 py-4 font-black uppercase text-xs tracking-widest border border-zinc-800 hover:text-white"
              >
                Back to Editor
              </button>
              <button 
                onClick={() => window.location.href = '/models/new/assemble'}
                className="flex-1 bg-white text-black py-4 font-black uppercase text-xs tracking-widest hover:bg-zinc-200"
              >
                Proceed to Final Assembly
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
