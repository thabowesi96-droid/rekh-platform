'use client';
import { useState } from 'react';
import Navigation from '@/components/Navigation';

export default function SubmissionBridge() {
  const [target, setTarget] = useState('IDC');
  
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="p-6 border-b border-zinc-900 flex justify-between items-center">
        <h1 className="text-xl font-black italic uppercase tracking-tighter">Submission Bridge</h1>
        <Navigation />
      </header>

      <main className="p-8 max-w-6xl mx-auto space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Target Selection & Input */}
          <div className="space-y-6 border border-zinc-900 p-8 bg-zinc-950/50">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">Destination Context</h2>
            <select 
              onChange={(e) => setTarget(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 p-4 text-[10px] font-black uppercase tracking-widest outline-none focus:border-white transition-all"
            >
              <option value="IDC">IDC Portal (Direct Mapping)</option>
              <option value="NEF">NEF Application (Document Morph)</option>
              <option value="SEFA">SEFA Small Biz (Asset Map)</option>
              <option value="CUSTOM">Upload Screenshot/PDF for OCR</option>
            </select>
            
            <div className="border-2 border-dashed border-zinc-800 h-48 flex flex-col items-center justify-center space-y-4">
               <span className="text-[10px] text-zinc-600 uppercase font-black">Drop Funder PDF or Portal Screenshot</span>
               <button className="text-[9px] bg-zinc-900 text-zinc-400 px-4 py-2 border border-zinc-800 hover:text-white transition-colors">CHOOSE FILE</button>
            </div>
          </div>

          {/* Morphed Output */}
          <div className="bg-zinc-950 p-8 border border-zinc-900 shadow-2xl">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500 mb-8 underline underline-offset-8">Generated Bridge Data</h2>
            <div className="space-y-4">
              <div className="p-4 bg-black border border-zinc-800 flex justify-between items-center group hover:border-zinc-500 transition-all cursor-pointer">
                <div className="space-y-1">
                  <p className="text-[8px] text-zinc-500 uppercase font-bold">Project Title</p>
                  <p className="text-xs font-mono">SOVEREIGN FOOTWEAR ALPHA</p>
                </div>
                <button className="text-[8px] bg-white text-black px-3 py-1 font-black uppercase opacity-0 group-hover:opacity-100 transition-opacity">COPY</button>
              </div>
              
              <div className="p-4 bg-black border border-zinc-800 flex justify-between items-center group hover:border-zinc-500 transition-all cursor-pointer">
                <div className="space-y-1">
                  <p className="text-[8px] text-zinc-500 uppercase font-bold">Job Count (Mandate)</p>
                  <p className="text-xs font-mono text-green-500">8 FULL-TIME EMPLOYEES</p>
                </div>
                <button className="text-[8px] bg-white text-black px-3 py-1 font-black uppercase opacity-0 group-hover:opacity-100 transition-opacity">COPY</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
