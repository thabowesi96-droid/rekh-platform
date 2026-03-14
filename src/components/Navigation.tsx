'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { name: 'Overview', href: '/dashboard' },
    { name: 'New Strategy', href: '/dashboard/new' },
    { name: 'Strategic Archive', href: '/dashboard/archive' },
    { name: 'Regulatory Logs', href: '/dashboard/logs' },
    { name: 'Risk Reports', href: '/dashboard/risk' },
  ];

  return (
    <nav className="flex-1 px-4 space-y-1 mt-8">
      {links.map((link) => (
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
  );
}
