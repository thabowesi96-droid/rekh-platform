'use client';

const LOG_ENTRIES = [
  { id: 1, timestamp: '2026-03-14 01:05', agent: 'QUANT', action: 'METRIC_SHIFT', detail: 'Equity increased 10% -> 15% to satisfy IDC mandate.' },
  { id: 2, timestamp: '2026-03-14 01:08', agent: 'LOGISTICS', action: 'VALUE_ENGINEER', detail: 'Capex reduced by R1.4M through Tier-2 brand swap.' }
];

export default function AuditLog() {
  return (
    <div className="bg-zinc-950 border border-zinc-900 p-8 space-y-6">
      <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">Transaction Audit</h3>
      <div className="space-y-4">
        {LOG_ENTRIES.map((entry) => (
          <div key={entry.id} className="border-l border-zinc-800 pl-4">
            <p className="text-[9px] font-mono text-zinc-600">{entry.timestamp}</p>
            <p className="text-xs text-zinc-400 italic">{entry.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
