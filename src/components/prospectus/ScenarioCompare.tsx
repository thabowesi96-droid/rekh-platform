'use client';

export default function ScenarioCompare({ original, negotiated }: any) {
  const metrics = [
    { label: 'Total Project Cost', key: 'tpc', prefix: 'R ' },
    { label: 'Equity Contribution', key: 'equity', suffix: '%' },
    { label: 'Full-Time Employees', key: 'jobs' },
    { label: 'Net Margin (Y1)', key: 'margin', suffix: '%' },
    { label: 'DSCR (Average)', key: 'dscr', suffix: 'x' }
  ];

  return (
    <div className="w-full bg-zinc-950 border border-zinc-900 p-8 space-y-8">
      <div className="flex justify-between items-end border-b border-zinc-900 pb-4">
        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Scenario Sensitivity Analysis</h3>
        <p className="text-[10px] text-zinc-600 font-mono italic">COMPARE_ID: REKH-SYNC-045</p>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="text-[10px] font-black uppercase text-zinc-700 mt-1">Metric</div>
        <div className="text-[10px] font-black uppercase text-zinc-500">Original Model</div>
        <div className="text-[10px] font-black uppercase text-white border-l border-zinc-800 pl-4">Negotiated Model</div>
      </div>

      <div className="space-y-4">
        {metrics.map((m) => {
          const isNegative = negotiated[m.key] < original[m.key] && m.key !== 'tpc';
          return (
            <div key={m.key} className="grid grid-cols-3 gap-8 py-3 border-b border-zinc-900 last:border-0 group">
              <span className="text-xs font-bold text-zinc-500 uppercase">{m.label}</span>
              <span className="text-sm font-mono text-zinc-400">
                {m.prefix}{original[m.key].toLocaleString()}{m.suffix}
              </span>
              <div className="border-l border-zinc-800 pl-4 flex items-center gap-2">
                <span className={`text-sm font-black font-mono ${isNegative ? 'text-red-500' : 'text-green-500'}`}>
                  {m.prefix}{negotiated[m.key].toLocaleString()}{m.suffix}
                </span>
                {isNegative && <span className="text-[8px] bg-red-900/20 text-red-500 px-1 font-bold">▼</span>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
