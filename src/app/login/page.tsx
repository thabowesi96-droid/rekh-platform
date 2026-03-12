import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Shield, BarChart3, Globe, PenTool, SearchCode, Gavel } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="border-b bg-card/30 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-headline font-bold text-xl">R</span>
            </div>
            <span className="font-headline font-bold text-xl tracking-tight">REKH</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="ghost" className="text-sm font-medium">Dashboard</Button>
            </Link>
            <Link href="/dashboard">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6">Enter Executive Suite</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(51,87,153,0.15),transparent_70%)]"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-8">
              <Shield className="w-4 h-4" />
              <span>Multi-Agent Orchestration Suite</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-headline font-bold mb-6 max-w-4xl mx-auto leading-tight">
              Professional Business <br /> Architecture, <span className="text-accent">Redefined.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Rekh coordinates a specialized team of AI agents to architect formal business plans, 
              grounded in current South African market data and regulatory intelligence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/dashboard">
                <Button size="lg" className="bg-primary text-lg px-8 py-6 h-auto">Start Your Next Venture</Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto">View Methodology</Button>
            </div>
          </div>
        </section>

        {/* Agents Grid */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-headline font-bold mb-4">The Rekh Council</h2>
              <p className="text-muted-foreground">Five specialized agents operating in perfect synchrony.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AgentCard 
                icon={<Globe className="w-6 h-6 text-accent" />}
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

      <footer className="border-t py-12 bg-card/30">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-accent rounded-sm flex items-center justify-center">
              <span className="text-white font-headline font-bold text-xs">R</span>
            </div>
            <span className="font-headline font-bold text-lg tracking-tight">REKH</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2024 Rekh AI Platform. Optimized for Africa-South1.</p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function AgentCard({ icon, name, role, description }: { icon: React.ReactNode, name: string, role: string, description: string }) {
  return (
    <div className="p-8 rounded-xl bg-card border border-border hover:border-accent/30 transition-all group">
      <div className="mb-4 p-3 rounded-lg bg-background w-fit group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="font-headline font-bold text-xl mb-1">{name}</h3>
      <div className="text-xs font-medium text-accent uppercase tracking-wider mb-4">{role}</div>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
}