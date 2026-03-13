'use client';

const ALTERNATIVES = [
  { 
    original: 'Tier 1 European CNC Suite', 
    price: 4500000, 
    alternative: 'Emerging Market Precision Suite (ISO Certified)', 
    altPrice: 3100000, 
    saving: 1400000,
    impact: 'Increased maintenance frequency (+5% p.a.)'
  },
  { 
    original: 'Custom ERP Software System', 
    price: 800000, 
    alternative: 'Open-Source Enterprise Stack (Localized)', 
    altPrice: 250000, 
    saving: 550000,
    impact: 'Requires internal dev support'
  }
];

export default function ValueEngine() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">Value Engineering Proposals</h3>
        <span className="text-[8px] bg-blue-900/30 text-blue-400 px-2 py-1 font-bold">OPTIMIZATION MODE</span>
      </div>

      <div className="space-y-4">
        {ALTERNATIVES.map((item, i) => (
          <div key={i} className="border-l-2 border-zinc-800 pl-4 py-2 hover:border-blue-500 transition-all group">
            <div className="flex justify-between items-start mb-2">
              <p className="text-[10px] text-zinc-500 uppercase font-bold line-through">{item.original}</p>
              <p className="text-green-500 font-black text-xs italic">Save R {item.saving.toLocaleString()}</p>
            </div>
            <p className="text-sm font-bold text-white uppercase italic">{item.alternative}</p>
            <p className="text-[9px] text-zinc-600 mt-2 uppercase tracking-widest font-bold italic">
              Operational Trade-off: {item.impact}
            </p>
            <button className="mt-4 text-[9px] font-black uppercase text-blue-500 hover:text-white underline decoration-blue-900 underline-offset-4">
              Apply Swap to Financials
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
