'use client';

export default function QuotaMonitor() {
  const quotas = [
    { label: 'Reasoning (Flash 3)', used: 426, total: 1000, unit: 'calls', color: 'bg-blue-500' },
    { label: 'Visuals (Banana 2)', used: 12, total: 100, unit: 'imgs', color: 'bg-purple-500' },
    { label: 'Video (Veo)', used: 1, total: 5, unit: 'gen', color: 'bg-red-500' }
  ];

  return (
    <div className="bg-zinc-950 border border-zinc-900 p-6 space-y-6">
      <div className="flex justify-between items-center border-b border-zinc-900 pb-4">
        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Resource Quota</h3>
        <span className="text-[8px] font-bold text-green-500 uppercase tracking-widest animate-pulse">System Online</span>
      </div>

      <div className="space-y-6">
        {quotas.map((q) => {
          const percent = (q.used / q.total) * 100;
          return (
            <div key={q.label} className="space-y-2">
              <div className="flex justify-between items-end">
                <p className="text-[9px] font-black uppercase text-white tracking-widest">{q.label}</p>
                <p className="text-[9px] font-mono text-zinc-500">{q.used} / {q.total} {q.unit}</p>
              </div>
              <div className="w-full h-1 bg-zinc-900 overflow-hidden">
                <div 
                  className={`h-full ${q.color} transition-all duration-1000`} 
                  style={{ width: `${percent}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-[8px] text-zinc-600 italic uppercase leading-tight">
        *Quotas reset at 00:00 SAST. Usage monitored via Paid Tier API.
      </p>
    </div>
  );
}
