'use client';

const INTERACTIONS = [
  { 
    id: 101, 
    date: '2026-03-14 09:30', 
    funder: 'NEF', 
    contact: 'Lerato M.', 
    topic: 'Initial Site Visit Feedback',
    type: 'MEETING',
    detail: 'Funder impressed with facility but raised concerns about Year 1 cash reserves.',
    linkedChange: 'REKH-SHIFT-042' // Link to a model pivot
  },
  { 
    id: 102, 
    date: '2026-03-14 14:00', 
    funder: 'NEF', 
    contact: 'Sipho K.', 
    topic: 'BEE Certificate Verification',
    type: 'EMAIL',
    detail: 'Requested clarification on Level 1 Affidavit expiry date.',
    linkedChange: null
  }
];

export default function DealCRM() {
  return (
    <div className="bg-zinc-950 border border-zinc-900 p-8 space-y-8">
      <div className="flex justify-between items-center border-b border-zinc-900 pb-4">
        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500">Interaction & Stakeholder Log</h3>
        <button className="text-[9px] bg-white text-black px-3 py-1 font-black uppercase">+ Log Interaction</button>
      </div>

      <div className="space-y-6">
        {INTERACTIONS.map((log) => (
          <div key={log.id} className="border border-zinc-900 p-5 hover:bg-zinc-900/50 transition-all space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[10px] font-mono text-zinc-600">{log.date}</p>
                <h4 className="text-sm font-black uppercase italic italic text-white">{log.topic}</h4>
              </div>
              <span className="text-[8px] border border-zinc-700 px-2 py-1 text-zinc-500 font-bold uppercase tracking-widest">
                {log.type}
              </span>
            </div>

            <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest">
              <span className="text-zinc-500">Funder: <span className="text-zinc-300">{log.funder}</span></span>
              <span className="text-zinc-500">Lead: <span className="text-zinc-300">{log.contact}</span></span>
            </div>

            <p className="text-xs text-zinc-400 italic font-light leading-relaxed border-l border-zinc-800 pl-4">
              "{log.detail}"
            </p>

            {log.linkedChange && (
              <div className="pt-2">
                <span className="text-[9px] bg-blue-900/20 text-blue-400 px-2 py-1 font-black uppercase">
                  Linked to Model Change: {log.linkedChange}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
