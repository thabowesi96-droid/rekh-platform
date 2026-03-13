'use client';

export default function QuickView({ onOpen }: { onOpen: () => void }) {
  return (
    <button 
      onClick={onOpen}
      className="flex items-center gap-2 group border border-zinc-800 px-4 py-2 hover:border-white transition-all"
    >
      <div className="w-2 h-2 bg-green-500 rounded-full group-hover:animate-ping"></div>
      <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 group-hover:text-white">
        Quick View Summary
      </span>
    </button>
  );
}
