'use client';

export default function HeadcountPivot({ current, required, margin }: any) {
  const gap = required - current;
  const salaryEstimate = 15000; // Mock average SA SMME salary
  const totalImpact = gap * salaryEstimate;
  const newMargin = margin - ((totalImpact / 1000000) * 100); // Mock impact logic

  return (
    <div className="bg-zinc-900 border border-zinc-800 p-6 space-y-6 animate-in slide-in-from-right">
      <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
        <h3 className="text-[10px] font-black uppercase tracking-widest text-orange-500">Employment Compliance Alert</h3>
        <span className="text-[8px] bg-red-900/20 text-red-500 px-2 py-1 font-bold">MARGIN AT RISK</span>
      </div>

      <div className="space-y-4">
        <p className="text-xs italic text-zinc-400 leading-relaxed">
          "Adding {gap} required employees increases Opex by <span className="text-white">R {totalImpact.toLocaleString()} p/m</span>. This reduces your Net Margin from <span className="text-white">{margin}%</span> to <span className="text-red-500">{newMargin.toFixed(1)}%</span>."
        </p>

        <div className="space-y-2">
          <p className="text-[9px] font-black uppercase text-zinc-500">Smart Pivot Suggestions:</p>
          <div className="grid grid-cols-1 gap-2">
            <div className="p-3 bg-black border border-zinc-800 hover:border-blue-500 cursor-pointer group">
              <p className="text-[11px] font-bold text-white uppercase italic">Pivot to Sales-Hybrid Roles</p>
              <p className="text-[9px] text-zinc-500 group-hover:text-zinc-300">Target +5% Revenue growth to offset salary impact.</p>
            </div>
            <div className="p-3 bg-black border border-zinc-800 hover:border-blue-500 cursor-pointer group">
              <p className="text-[11px] font-bold text-white uppercase italic">Utilization of SETA Grants</p>
              <p className="text-[9px] text-zinc-500 group-hover:text-zinc-300">Recover 40% of salary costs through training levies.</p>
            </div>
          </div>
        </div>
      </div>

      <button className="w-full bg-orange-600 text-white py-4 font-black uppercase text-xs tracking-widest hover:bg-orange-500 transition-all">
        Recalculate & Sync Organogram
      </button>
    </div>
  );
}
