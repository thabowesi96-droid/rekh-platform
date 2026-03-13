// v2.0'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Shield, BarChart3, Globe, PenTool, SearchCode, Gavel } from 'lucide-react';
import { auth, provider } from '../../lib/firebase';
import { signInWithRedirect } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await signInWithRedirect(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="border-b border-slate-800 bg-slate-900/30 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <span className="font-bold text-xl tracking-tight">REKH</span>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={handleLogin}
              className="text-sm font-medium hover:bg-slate-800"
            >
              Dashboard
            </Button>
            <Button 
              onClick={handleLogin} 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-all"
            >
              Enter Suite
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(51,87,153,0.15),transparent_70%)]"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
              <Shield className="w-4 h-4" />
              <span>Multi-Agent Orchestration Suite</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
              Professional Business <br /> Architecture, <span className="text-blue-500">Redefined.</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
              Rekh coordinates a specialized team of AI agents to architect formal business plans, 
              grounded in current South African market data and regulatory intelligence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                onClick={handleLogin}
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 h-auto transition-transform hover:scale-105"
              >
                Start Your Next Venture
              </Button>
              <Button size="lg" variant="outline" className="border-slate-700 text-lg px-8 py-6 h-auto hover:bg-slate-800">
                View Methodology
              </Button>
            </div>
          </div>
        </section>

        {/* Agents Grid */}
        <section className="py-24 bg-slate-900/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">The Rekh Council</h2>
              <p className="text-slate-400">Five specialized agents operating in perfect synchrony.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AgentCard 
                icon={<Globe className="w-6 h-6 text-blue-400" />}
                name="Researcher"
                role="Market Intelligence"
                description="Leverages Google Search Grounding for real-time South African market data and industry trends."
              />
              <AgentCard 
                icon={<BarChart3 className="w-6 h-6 text-blue-400" />}
                name="Financial Analyst"
                role="Strategic Forecasting"
                description="Calculates 5-year projections including SA VAT (15%) and corporate tax calculations."
              />
              <AgentCard 
                icon={<PenTool className="w-6 h-6 text-purple-400" />}
                name="Architect"
                role="Document Synthesis"
                description="Compiles insights from all agents into formal, comprehensive business blueprints."
              />
              <AgentCard 
                icon={<Gavel className="w-6 h-6 text-emerald-400" />}
                name="Regulatory Specialist"
                role="Compliance Auditor"
                description="Prioritizes .gov.za, JSE, and Gazettes for labor, OHS, and POPIA compliance."
              />
              <AgentCard 
                icon={<SearchCode className="w-6 h-6 text-amber-400" />}
                name="Funder's Advocate"
                role="Risk Management"
                description="Senior credit officer simulation. Intercepts drafts to identify red flags before publication."
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 py-12 bg-slate-950">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-xs">R</span>
            </div>
            <span className="font-bold text-lg tracking-tight">REKH</span>
          </div>
          <p className="text-sm text-slate-500">© 2026 Rekh AI Platform. Optimized for Africa-South1.</p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function AgentCard({ icon, name, role, description }: { icon: React.ReactNode, name: string, role: string, description: string }) {
  return (
    <div className="p-8 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/30 transition-all group">
      <div className="mb-4 p-3 rounded-lg bg-slate-950 w-fit group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="font-bold text-xl mb-1">{name}</h3>
      <div className="text-xs font-medium text-blue-500 uppercase tracking-wider mb-4">{role}</div>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
