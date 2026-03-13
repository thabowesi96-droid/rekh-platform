'use client';

// Organogram (Company Hierarchy) Component
export const Organogram = ({ roles }: { roles: any[] }) => (
  <div className="py-12 flex flex-col items-center">
    <div className="border-2 border-black p-4 font-black uppercase text-sm italic">Board of Directors</div>
    <div className="w-0.5 h-8 bg-black"></div>
    <div className="border-2 border-black p-4 font-black uppercase text-sm italic bg-black text-white">Managing Director</div>
    <div className="w-0.5 h-8 bg-black"></div>
    <div className="flex gap-8 border-t-2 border-black pt-8">
      {roles.map((role, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="border border-black p-3 text-[10px] font-bold uppercase tracking-widest">{role}</div>
        </div>
      ))}
    </div>
  </div>
);

// Financial Performance Table
export const FinancialTable = ({ data }: { data: any }) => (
  <div className="w-full border-y-2 border-black my-8 overflow-hidden">
    <table className="w-full text-left">
      <thead className="bg-zinc-50 border-b border-zinc-200">
        <tr className="text-[10px] font-black uppercase tracking-widest italic">
          <th className="p-4">Fiscal Metric</th>
          <th className="p-4 text-right">Year 1</th>
          <th className="p-4 text-right">Year 2</th>
          <th className="p-4 text-right">Year 3</th>
        </tr>
      </thead>
      <tbody className="text-sm font-mono tracking-tighter">
        {data.map((row: any, i: number) => (
          <tr key={i} className="border-b border-zinc-100 last:border-0 hover:bg-zinc-50 transition-colors">
            <td className="p-4 font-bold text-zinc-900">{row.label}</td>
            <td className="p-4 text-right">R {row.y1}</td>
            <td className="p-4 text-right">R {row.y2}</td>
            <td className="p-4 text-right font-black">R {row.y3}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
