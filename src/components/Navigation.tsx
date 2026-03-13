'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' });
    router.push('/login');
  };

  return (
    <div className="relative">
      {/* Three Lines Button */}
      <button onClick={() => setIsOpen(true)} className="space-y-1.5 p-2 hover:opacity-70 transition-opacity">
        <div className="w-6 h-0.5 bg-white"></div>
        <div className="w-6 h-0.5 bg-white"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </button>

      {/* Full Screen Overlay Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 text-4xl font-black uppercase tracking-tighter z-[100]">
          <button onClick={() => setIsOpen(false)} className="absolute top-10 right-10 text-sm tracking-widest font-normal opacity-50 hover:opacity-100">CLOSE [X]</button>
          
          <Link href="/landing" onClick={() => setIsOpen(false)} className="hover:italic hover:pl-4 transition-all">Home</Link>
          <Link href="/dashboard" onClick={() => setIsOpen(false)} className="hover:italic hover:pl-4 transition-all">Dashboard</Link>
          <Link href="/models/archive" onClick={() => setIsOpen(false)} className="hover:italic hover:pl-4 transition-all opacity-30 cursor-not-allowed">Archives</Link>
          
          <button onClick={handleLogout} className="text-red-600 pt-12 text-2xl hover:italic transition-all">Logout</button>
        </div>
      )}
    </div>
  );
}
