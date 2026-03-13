'use client';
import { FinancialTable } from '@/components/prospectus/Visuals';

export default function ExecutiveSummary({ data }: any) {
  return (
    <div className="bg-white text-black p-[20mm] w-[210mm] h-[297mm] shadow-2xl mx-auto flex flex-col justify-between font-sans">
      <div>
        <div className="flex justify-between items-start border-b-8 border-black pb-6 mb-8">
          <div>
            <h1 className="text-6xl font-black italic tracking-tighter uppercase leading-none">REKH</h1>
            <p className="text-xl font-bold uppercase tracking-widest text-zinc-400">Executive Summary</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-black uppercase tracking-widest bg-black text-white px-2 py-1">Confidential</p>
            <p className="text-[9px] font-bold mt-2 text-zinc-500 uppercase italic">Project ID: {data.id}</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-12">
          <div className="col-span-2 space-y-6">
            <section>
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] mb-2 border-b border-zinc-200">The Business Case</h3>
              <p className="text-sm leading-relaxed italic">{data.narrative}</p>
            </section>
            
            <section>
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] mb-2 border-b border-zinc-200">Strategic Alignment</h3>
              <ul className="text-xs space-y-2 font-bold uppercase italic text-zinc-700">
                <li>• Mandate: {data.mandate}</li>
                <li>• Transformation: {data.beeLevel}</li>
                <li>• Jobs Created: {data.jobs}</li>
              </ul>
            </section>
          </div>

          <div className="col-span-1 bg-zinc-50 p-6 space-y-6">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-center border-b border-zinc-200 pb-2">Fiscal Pulse</h3>
            <div className="space-y-4">
               <div>
                 <p className="text-[8px] font-black text-zinc-400 uppercase">Total Funding</p>
                 <p className="text-xl font-black italic">R {data.funding}</p>
               </div>
               <div>
                 <p className="text-[8px] font-black text-zinc-400 uppercase">Equity (Skin)</p>
                 <p className="text-xl font-black italic">{data.equity}%</p>
               </div>
               <div>
                 <p className="text-[8px] font-black text-zinc-400 uppercase">IRR (5yr)</p>
                 <p className="text-xl font-black italic text-green-600">{data.irr}%</p>
               </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t border-zinc-200 pt-6 flex justify-between items-end">
        <div className="text-[9px] text-zinc-400 font-mono uppercase leading-tight">
          Generated via Rekh Sovereign Engine<br/>
          Secured with Audit Log Trace: {data.auditID}
        </div>
        <div className="text-right">
           <p className="text-[10px] font-black uppercase">Contact: {data.contact}</p>
        </div>
      </footer>
    </div>
  );
}
