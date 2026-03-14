'use client';
import { logout } from '@/app/actions/auth';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-black border-r border-zinc-900 flex flex-col font-mono">
      <div className="p-8">
        <h2 className="text-white font-black italic uppercase tracking-tighter text-xl">REKH</h2>
      </div>
      
      <nav className="flex-1 px-4 space-y-2">
        {[
          { name: 'Overview', href: '/dashboard' },
          { name: 'Business Plan', href: '/dashboard/plans' },
          { name: 'Risk Reports', href: '/dashboard/risk' }
        ].map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`block p-3 text-[10px] uppercase font-bold transition-all border ${
              pathname === link.href 
                ? 'text-white border-zinc-800 bg-zinc-900' 
                : 'text-zinc-500 border-transparent hover:text-white hover:border-zinc-800'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-zinc-900">
        <button 
          onClick={async () => {
            console.log("Terminating Session...");
            await logout();
          }}
          className="w-full text-left p-4 text-[10px] uppercase font-black text-red-500 hover:bg-red-500/10 transition-all border border-red-500/20"
        >
          [!] TERMINATE SESSION
        </button>
      </div>
    </aside>
  );
}
