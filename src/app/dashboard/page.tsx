'use client';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import DealCRM from '@/components/dashboard/DealCRM';
import AuditLog from '@/components/dashboard/AuditLog';

export default function OwnerDashboard() {
  const [activeTab, setActiveTab] = useState('portfolio'); // portfolio | feed

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="p-6 border-b border-zinc-900 flex justify-between items-center sticky top-0 bg-black/90 backdrop-blur-md z-50">
        <div>
          <h1 className="text-xl font-black italic uppercase tracking-tighter">Command Center</h1>
          <nav className="flex gap-6 mt-2">
            <button 
              onClick={() => setActiveTab('portfolio')}
              className={`text-[9px] font-black uppercase tracking-widest ${activeTab === 'portfolio' ? 'text-white underline' : 'text-zinc-500'}`}
            >
              Models
            </button>
            <button 
              onClick={() => setActiveTab('feed')}
              className={`text-[9px] font-black uppercase tracking-widest ${activeTab === 'feed' ? 'text-white underline' : 'text-zinc-500'}`}
            >
              Deal Feed
            </button>
          </nav>
        </div>
        <Navigation />
      </header>

      <main className="p-8 max-w-6xl mx-auto w-full">
        {activeTab === 'portfolio' ? (
          <div className="space-y-8 animate-in fade-in duration-500">
            {/* ... Existing Project List Logic ... */}
            <p className="text-zinc-500 text-xs italic">Select a model to view specific project analytics.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in slide-in-from-right duration-500">
            <div className="lg:col-span-2">
              <DealCRM />
            </div>
            <div className="lg:col-span-1">
              <AuditLog />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
