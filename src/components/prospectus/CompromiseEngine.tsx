'use client';

export default function CompromiseEngine({ conflict, impact }: any) {
  return (
    <div className="bg-zinc-950 border-2 border-orange-600 p-8 space-y-6">
      <div className="flex items-center gap-4">
        <div className="px-3 py-1 bg-orange-600 text-white font-black text-[10px] uppercase italic">Structural Warning</div>
        <h3 className="text-sm font-black uppercase italic tracking-tighter">Detrimental Mandate Conflict</h3>
      </div>

      <div className="bg-white/5 p-4 border-l-2 border-orange-600">
        <p className="text-[11px] text-zinc-400 uppercase font-black mb-1">The Conflict:</p>
        <p className="text-sm italic text-white leading-relaxed">{conflict}</p>
      </div>

      <div className="space-y-4">
        <p className="text-[10px] font-black uppercase text-zinc-500 tracking-widest">Suggested Strategic Compromises:</p>
        
        <div className="space-y-3">
          <div className="group border border-zinc-800 p-4 hover:border-white transition-all cursor-pointer">
            <p className="text-[11px] font-bold text-white uppercase italic mb-1">Option A: Phased Employment (36-Month Glide Path)</p>
            <p className="text-[10px] text-zinc-500 group-hover:text-zinc-300 italic">"Argue for Year 3 compliance to protect Year 1 cash flow. Improves DSCR by 0.4x."</p>
          </div>
          
          <div className="group border border-zinc-800 p-4 hover:border-white transition-all cursor-pointer">
            <p className="text-[11px] font-bold text-white uppercase italic mb-1">Option B: Capex Deferment</p>
            <p className="text-[10px] text-zinc-500 group-hover:text-zinc-300 italic">"Trade headcount for automation later. Reduces day-one loan requirement by 15%."</p>
          </div>
        </div>
      </div>

      <div className="pt-4">
        <button className="w-full bg-white text-black py-4 font-black uppercase text-xs tracking-widest hover:bg-zinc-200">
          Inject Compromise Strategy into Narrative
        </button>
      </div>
    </div>
  );
}
