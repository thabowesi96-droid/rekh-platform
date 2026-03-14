'use client';
import { logout } from '@/app/actions/auth';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-black border-r border-zinc-900 flex flex-col font-mono">
      <div className="p-8">
        <h2 className="text-white font-black italic uppercase tracking-tighter text-xl">REKH</h2>
      </div>
      
      <nav className="flex-1 px-4 space-y-2">
        <Link href="/dashboard" className="block p-3 text-[10px] uppercase font-bold text-zinc-500 hover:text-white transition-colors border border-transparent hover:border-zinc-800">Overview</Link>
        <Link href="/dashboard/submit" className="block p-3 text-[10px] uppercase font-bold text-zinc-500 hover:text-white transition-colors border border-transparent hover:border-zinc-800">Submission Bridge</Link>
      </nav>

      <div className="p-4 border-t border-zinc-900">
        <button 
          onClick={async () => await logout()}
          className="w-full text-left p-4 text-[10px] uppercase font-black text-red-500 hover:bg-red-500/10 transition-all border border-red-500/20"
        >
          [!] TERMINATE SESSION
        </button>
      </div>
    </aside>
  );
}
