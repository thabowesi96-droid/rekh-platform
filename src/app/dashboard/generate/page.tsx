'use client';
import { useState } from 'react';

export default function StrategyLab() {
  const [brief, setBrief] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [output, setOutput] = useState('');

  const handleSynthesize = async () => {
    if (!brief) return;
    setIsProcessing(true);
    
    // Logic to detect if the user is providing a province
    const isProvince = brief.toLowerCase().includes('province') || brief.length < 20;

    setTimeout(() => {
      if (isProvince) {
        setOutput(`[COUNCIL SECURED: REGULATORY ALIGNMENT]\n\nLocation: ${brief}\n\n1. Water Rights: Initializing Borehole Permit logic.\n2. Environmental: Mapping Waste Management for 1k/day Abattoir.\n3. Energy: Biogas-to-Heat conversion ratio locked.\n\n[ACTION]: Synthesis Complete. Check "Overview" for your preliminary 5-year Cash Flow.`);
      } else {
        setOutput(`[COUNCIL ACKNOWLEDGEMENT]\n\nDirective: Broiler Farm Synthesis.\n\n[ACTION REQUIRED]: Please confirm the Province for specific regulatory grounding.`);
      }
      setIsProcessing(false);
    }, 1500); // Reduced wait time to 1.5s
  };

  return (
    <div className="p-8 font-mono text-white max-w-4xl mx-auto">
      <h1 className="text-4xl font-black uppercase italic mb-8">Strategy Lab</h1>
      <div className="space-y-6 bg-zinc-950 border border-zinc-900 p-8">
        <textarea 
          value={brief}
          onChange={(e) => setBrief(e.target.value)}
          placeholder="Enter Province or further directives..."
          className="w-full bg-black border border-zinc-800 p-4 outline-none focus:border-purple-500 text-sm min-h-[150px]"
        />
        <button 
          onClick={handleSynthesize}
          className="w-full bg-white text-black font-black p-4 uppercase hover:bg-purple-500 hover:text-white transition-all"
        >
          {isProcessing ? 'SYNTHESIZING...' : 'EXECUTE DIRECTIVE'}
        </button>
        {output && (
          <div className="mt-4 p-4 border border-purple-500/50 text-purple-400 text-xs whitespace-pre-wrap">
            {output}
          </div>
        )}
      </div>
    </div>
  );
}
