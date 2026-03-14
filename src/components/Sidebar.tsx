'use client';
import { logout } from '@/app/actions/auth';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <aside className="w-64 min-h-screen bg-black border-r border-zinc-900 flex flex-col font-mono">
      <div className="p-8 border-b border-zinc-900/50">
        <button 
          onClick={() => router.push('/dashboard')}
          className="text-white font-black italic uppercase text-2xl tracking-tighter hover:text-purple-500 transition-colors"
        >
          REKH
        </button>
      </div>
      
      <nav className="flex-1 px-4 py-6 space-y-2">
        {[
          { name: 'Dashboard Home', href: '/dashboard' },
          { name: 'Synthesis Engine', href: '/dashboard/plans' },
        ].map((link) => (
          <Link 
            key={link.name} 
            href={link.href} 
            className={`block p-4 text-[10px] uppercase font-black tracking-widest border ${
              pathname === link.href ? 'text-white bg-zinc-900 border-zinc-800' : 'text-zinc-500 border-transparent hover:border-zinc-800'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-zinc-900">
        <button 
          onClick={async () => {
            console.log("Kill Session Triggered");
            await logout();
          }}
          className="w-full text-left p-4 text-[10px] uppercase font-black text-red-500 border border-red-500/10 hover:bg-red-500/20 hover:border-red-500/40 transition-all"
        >
          [!] TERMINATE SESSION
        </button>
      </div>
    </aside>
  );
}
