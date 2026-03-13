'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'New Model', href: '/models/new' },
    { label: 'Document Vault', href: '/vault' },
    { label: 'Sent Links', href: '/dashboard?tab=tracking' },
    { label: 'Profile', href: '/profile' },
  ];

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 space-y-1 group z-50 relative"
      >
        <div className="w-6 h-0.5 bg-white transition-all group-hover:bg-red-500"></div>
        <div className="w-6 h-0.5 bg-white transition-all group-hover:bg-red-500"></div>
        <div className="w-6 h-0.5 bg-white transition-all group-hover:bg-red-500"></div>
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="fixed top-0 right-0 h-full w-64 bg-zinc-950 border-l border-zinc-900 z-50 p-8 flex flex-col space-y-8 animate-in slide-in-from-right duration-300">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Rekh Terminal</h2>
            <nav className="flex flex-col space-y-6">
              {menuItems.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-bold uppercase italic tracking-tighter hover:text-red-500 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </>
      )}
    </div>
  );
}
