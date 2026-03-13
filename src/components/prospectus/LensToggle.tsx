'use client';
import { useState } from 'react';

export default function LensToggle({ onLensChange }: { onLensChange: (lens: string) => void }) {
  const [activeLens, setActiveLens] = useState('DEVELOPMENTAL');

  const lenses = [
    { id: 'DEVELOPMENTAL', label: 'Impact Lens', sub: 'Jobs & BEE Focus' },
    { id: 'FINANCIAL', label: 'Credit Lens', sub: 'DSCR & Risk Focus' },
    { id: 'GROWTH', label: 'Investor Lens', sub: 'ROI & Scale Focus' }
  ];

  const handleSelect = (id: string) => {
    setActiveLens(id);
    onLensChange(id);
  };

  return (
    <div className="flex bg-zinc-900 border border-zinc-800 p-1 gap-1">
      {lenses.map((lens) => (
        <button
          key={lens.id}
          onClick={() => handleSelect(lens.id)}
          className={`flex-1 flex flex-col items-start p-3 transition-all ${
            activeLens === lens.id ? 'bg-white text-black' : 'hover:bg-zinc-800 text-zinc-500'
          }`}
        >
          <span className="text-[9px] font-black uppercase tracking-widest">{lens.label}</span>
          <span className={`text-[8px] font-bold uppercase italic ${
            activeLens === lens.id ? 'text-zinc-500' : 'text-zinc-700'
          }`}>
            {lens.sub}
          </span>
        </button>
      ))}
    </div>
  );
}
