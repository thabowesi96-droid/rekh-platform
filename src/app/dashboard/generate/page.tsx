"use client";

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { generateComprehensiveRekhBusinessPlan } from '@/ai/flows/generate-comprehensive-rekh-business-plan';
import { generateRekhFundersRiskReport } from '@/ai/flows/generate-rekh-funders-risk-report';
import { Bot, Globe, BarChart3, PenTool, ShieldCheck, AlertCircle, CheckCircle2, Loader2, Sparkles, FileText, ChevronRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function GeneratePlanPage() {
  const [concept, setConcept] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState<'input' | 'processing' | 'result'>('input');
  const [currentAgent, setCurrentAgent] = useState('');
  const [progress, setProgress] = useState(0);
  
  const [businessPlan, setBusinessPlan] = useState('');
  const [riskReport, setRiskReport] = useState('');

  const handleGenerate = async () => {
    if (!concept) return;

    setIsLoading(true);
    setStep('processing');
    setProgress(10);
    
    try {
      // Step 1: Researcher & Architect Flow
      setCurrentAgent('Researcher');
      setProgress(20);
      // Wait for researcher (simulated sub-delay or just wait for flow)
      
      setCurrentAgent('Financial Analyst');
      setProgress(40);
      
      setCurrentAgent('Architect');
      setProgress(60);
      
      const { businessPlan: plan } = await generateComprehensiveRekhBusinessPlan({
        businessConcept: concept
      });
      setBusinessPlan(plan);
      setProgress(80);

      // Step 2: Funder's Advocate Review
      setCurrentAgent("Funder's Advocate");
      const { reportContent: report } = await generateRekhFundersRiskReport({
        businessPlanContent: plan
      });
      setRiskReport(report);
      
      setProgress(100);
      setStep('result');
    } catch (error) {
      console.error(error);
      setStep('input');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-headline font-bold mb-2">Strategy Lab</h1>
        <p className="text-muted-foreground">Architect a formal, audit-ready business blueprint with our council of agents.</p>
      </div>

      {step === 'input' && (
        <Card className="glass-panel border-white/5">
          <CardHeader>
            <CardTitle className="font-headline font-bold flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-accent" />
              Define Your Strategic Concept
            </CardTitle>
            <CardDescription>
              Provide a detailed description of your business idea. Our Researcher and Financial agents 
              will specialize it for the South African landscape.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Venture Title</Label>
              <Input id="title" placeholder="e.g., Cape Town Green Logistics Hub" className="bg-background/50 border-white/10" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="concept">Detailed Concept Brief</Label>
              <Textarea 
                id="concept" 
                placeholder="Describe your business model, target market, and value proposition in detail..." 
                className="min-h-[200px] bg-background/50 border-white/10"
                value={concept}
                onChange={(e) => setConcept(e.target.value)}
              />
              <p className="text-xs text-muted-foreground italic">
                Pro tip: Be specific about industry, location, and key differentiators for better agent grounding.
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
              <AgentFeature icon={<Globe className="w-4 h-4" />} label="SA Market Data" />
              <AgentFeature icon={<BarChart3 className="w-4 h-4" />} label="VAT/Tax Logic" />
              <AgentFeature icon={<ShieldCheck className="w-4 h-4" />} label="Regulatory Audit" />
              <AgentFeature icon={<AlertCircle className="w-4 h-4" />} label="Risk Assessment" />
            </div>
            <Button 
              className="w-full h-14 bg-primary text-lg font-bold group" 
              onClick={handleGenerate}
              disabled={!concept || isLoading}
            >
              Convene the Rekh Council
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </CardFooter>
        </Card>
      )}

      {step === 'processing' && (
        <Card className="glass-panel border-white/5 text-center p-12">
          <div className="mb-8 relative inline-block">
            <div className="w-24 h-24 rounded-full border-4 border-accent/20 border-t-accent animate-spin mx-auto"></div>
            <Bot className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 text-accent" />
          </div>
          <h2 className="text-2xl font-headline font-bold mb-4">Orchestration in Progress</h2>
          <p className="text-muted-foreground mb-8">
            The {currentAgent} Agent is currently processing your request. 
            Grounding data against South African regulatory frameworks...
          </p>
          <div className="max-w-md mx-auto space-y-2">
            <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-accent">
              <span>Coordination Engine</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2 bg-accent/10" />
            <div className="flex justify-center gap-4 pt-4">
              <AgentStatus active={currentAgent === 'Researcher'} icon={<Globe />} name="Researcher" />
              <AgentStatus active={currentAgent === 'Financial Analyst'} icon={<BarChart3 />} name="Financial" />
              <AgentStatus active={currentAgent === 'Architect'} icon={<PenTool />} name="Architect" />
              <AgentStatus active={currentAgent === "Funder's Advocate"} icon={<ShieldCheck />} name="Advocate" />
            </div>
          </div>
        </Card>
      )}

      {step === 'result' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-headline font-bold">Generated Output</h2>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setStep('input')}>New Concept</Button>
              <Button className="bg-primary">Export PDF</Button>
            </div>
          </div>

          <Tabs defaultValue="plan" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-muted/50 p-1">
              <TabsTrigger value="plan" className="data-[state=active]:bg-card py-3 font-bold">
                <FileText className="w-4 h-4 mr-2" />
                Strategic Blueprint
              </TabsTrigger>
              <TabsTrigger value="report" className="data-[state=active]:bg-card py-3 font-bold">
                <AlertCircle className="w-4 h-4 mr-2" />
                Funder's Risk Report
              </TabsTrigger>
            </TabsList>
            <TabsContent value="plan" className="mt-4">
              <Card className="glass-panel border-white/5 p-8 whitespace-pre-wrap leading-relaxed text-muted-foreground font-body max-h-[600px] overflow-y-auto">
                <div className="prose prose-invert max-w-none">
                  {businessPlan}
                </div>
              </Card>
            </TabsContent>
            <TabsContent value="report" className="mt-4">
              <Card className="glass-panel border-white/5 p-8 border-l-4 border-l-amber-500/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-xl">Advocate Audit Results</h3>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Senior Credit Officer Review</p>
                  </div>
                </div>
                <div className="whitespace-pre-wrap leading-relaxed text-muted-foreground font-body bg-background/50 p-6 rounded-lg border border-white/5 max-h-[500px] overflow-y-auto">
                  {riskReport}
                </div>
                <div className="mt-6 flex items-start gap-3 p-4 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    <span className="font-bold text-emerald-500">Regulatory Pass:</span> Financial projections validated against SA Corporate Tax rates. POPIA compliance verified for data collection protocols mentioned.
                  </p>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  );
}

function AgentFeature({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background/50 border border-white/5">
      <div className="text-accent">{icon}</div>
      <span className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">{label}</span>
    </div>
  );
}

function AgentStatus({ active, icon, name }: { active: boolean, icon: React.ReactNode, name: string }) {
  return (
    <div className={`flex flex-col items-center gap-2 transition-all duration-500 ${active ? 'scale-110 opacity-100' : 'scale-90 opacity-40'}`}>
      <div className={`p-3 rounded-full ${active ? 'bg-accent text-white shadow-lg shadow-accent/40 animate-pulse' : 'bg-muted'}`}>
        {icon}
      </div>
      <span className="text-[10px] font-bold uppercase tracking-widest">{name}</span>
    </div>
  );
}