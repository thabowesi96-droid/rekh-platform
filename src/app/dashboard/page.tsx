import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Activity, Plus, FileText, TrendingUp, AlertCircle, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-4xl font-headline font-bold mb-2">Executive Summary</h1>
          <p className="text-muted-foreground">Welcome back to Rekh. Your council of agents is ready for coordination.</p>
        </div>
        <Link href="/dashboard/generate">
          <Button className="bg-accent hover:bg-accent/90 gap-2 px-6 h-12">
            <Plus className="w-5 h-5" />
            New Strategic Plan
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard 
          title="Active Plans" 
          value="12" 
          change="+2 from last month" 
          icon={<FileText className="w-5 h-5 text-accent" />} 
        />
        <StatsCard 
          title="Risk Evaluations" 
          value="48" 
          change="3 critical flags identified" 
          icon={<AlertCircle className="w-5 h-5 text-amber-500" />} 
        />
        <StatsCard 
          title="Regulatory Audits" 
          value="156" 
          change="100% POPIA Compliance" 
          icon={<CheckCircle2 className="w-5 h-5 text-emerald-500" />} 
        />
        <StatsCard 
          title="Data Grounding" 
          value="98.2%" 
          change="SA Market Confidence" 
          icon={<TrendingUp className="w-5 h-5 text-blue-500" />} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 glass-panel">
          <CardHeader>
            <CardTitle className="font-headline font-bold flex items-center gap-2">
              <Activity className="w-5 h-5 text-accent" />
              Agent Activity Stream
            </CardTitle>
            <CardDescription>Live log of multi-agent orchestration events.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <ActivityItem 
                agent="Researcher" 
                action="Grounding complete" 
                detail="Industry trends for SA AgriTech updated via Google Search" 
                time="2 mins ago"
                status="success"
              />
              <ActivityItem 
                agent="Financial Analyst" 
                action="Tax Projection" 
                detail="Corporate tax & VAT (15%) logic applied to 'Project Helios'" 
                time="14 mins ago"
                status="success"
              />
              <ActivityItem 
                agent="Funder's Advocate" 
                action="Red Flag Alert" 
                detail="Gap identified in 'Market Penetration Strategy' for Project Z" 
                time="1 hour ago"
                status="warning"
              />
              <ActivityItem 
                agent="Architect" 
                action="Plan Compiled" 
                detail="Final document structure generated for 'Johannesburg Retail Hub'" 
                time="3 hours ago"
                status="success"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="glass-panel">
          <CardHeader>
            <CardTitle className="font-headline font-bold">Strategic Quick-Links</CardTitle>
            <CardDescription>Quick access to common actions.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <QuickLinkButton label="Generate SA Market Summary" />
            <QuickLinkButton label="Audit POPIA Compliance" />
            <QuickLinkButton label="Validate VAT Logic" />
            <QuickLinkButton label="Request Funder Risk Report" />
            <div className="pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground mb-4">Current Orchestration Node: africa-south1</p>
              <div className="p-4 rounded-lg bg-accent/5 border border-accent/10">
                <p className="text-sm font-medium text-accent">Optimization Active</p>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  Gemini 1.5 Pro is currently prioritizing high-fidelity SA regulatory sources for all active agents.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function StatsCard({ title, value, change, icon }: { title: string, value: string, change: string, icon: React.ReactNode }) {
  return (
    <Card className="glass-panel border-white/5">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 rounded-lg bg-background border border-border">{icon}</div>
        </div>
        <h3 className="text-sm font-medium text-muted-foreground mb-1">{title}</h3>
        <div className="text-3xl font-headline font-bold mb-1">{value}</div>
        <p className="text-xs text-accent font-medium">{change}</p>
      </CardContent>
    </Card>
  );
}

function ActivityItem({ agent, action, detail, time, status }: { agent: string, action: string, detail: string, time: string, status: 'success' | 'warning' | 'error' }) {
  const statusColor = status === 'success' ? 'bg-emerald-500' : status === 'warning' ? 'bg-amber-500' : 'bg-destructive';
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className={`w-3 h-3 rounded-full ${statusColor} shadow-[0_0_10px_rgba(0,0,0,0.3)]`}></div>
        <div className="w-[1px] h-full bg-border mt-2"></div>
      </div>
      <div className="flex-1 pb-6">
        <div className="flex justify-between items-start mb-1">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold">{agent} Agent</span>
            <span className="text-xs font-medium text-muted-foreground tracking-wider uppercase">{action}</span>
          </div>
          <span className="text-xs text-muted-foreground">{time}</span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{detail}</p>
      </div>
    </div>
  );
}

function QuickLinkButton({ label }: { label: string }) {
  return (
    <Button variant="outline" className="w-full justify-start text-sm hover:bg-accent/10 hover:border-accent/20 hover:text-accent transition-all">
      <ChevronRight className="w-4 h-4 mr-2" />
      {label}
    </Button>
  );
}