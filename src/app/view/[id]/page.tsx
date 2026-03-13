'use client';
import { useState } from 'react';

export default function Gatekeeper({ params }: { params: { id: string } }) {
  const [pin, setPin] = useState(['', '', '', '', '']);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState(false);

  const handleInput = (val: string, index: number) => {
    if (isNaN(Number(val))) return;
    const newPin = [...pin];
    newPin[index] = val;
    setPin(newPin);

    // Auto-focus next input
    if (val !== '' && index < 4) {
      const nextInput = document.getElementById(`pin-${index + 1}`);
      nextInput?.focus();
    }
  };

  const verifyPin = () => {
    const enteredPin = pin.join('');
    // In production, this verifies against the DB
    if (enteredPin === '88291') { // Mock PIN for testing
      setIsUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setPin(['', '', '', '', '']);
      document.getElementById('pin-0')?.focus();
    }
  };

  if (isUnlocked) {
    return (
      <div className="min-h-screen bg-black text-white p-12 flex flex-col items-center animate-in fade-in duration-1000">
        <div className="max-w-4xl w-full space-y-8">
          <header className="flex justify-between items-center border-b border-zinc-900 pb-6">
            <h1 className="text-xl font-black italic uppercase tracking-tighter">Rekh Sovereign Portal</h1>
            <button className="bg-red-900 text-white px-4 py-2 text-[10px] font-black uppercase">Download PDF</button>
          </header>
          <div className="bg-white text-black p-16 aspect-[1/1.414] shadow-2xl overflow-y-auto">
             <h2 className="text-5xl font-black italic uppercase mb-8">Business Prospectus</h2>
             <p className="text-zinc-400 font-mono text-[10px] mb-12 tracking-[0.3em]">REF: {params.id}</p>
             <div className="space-y-4">
                <div className="h-4 bg-zinc-100 w-full"></div>
                <div className="h-4 bg-zinc-100 w-5/6"></div>
                <div className="h-4 bg-zinc-200 w-4/6"></div>
             </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-sm w-full space-y-12 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-black italic uppercase tracking-tighter">Secure Entry</h1>
          <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em]">
            Authorized Personnel Only • Document {params.id}
          </p>
        </div>

        <div className="space-y-8">
          <div className="flex justify-between gap-2">
            {pin.map((digit, i) => (
              <input
                key={i}
                id={`pin-${i}`}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleInput(e.target.value, i)}
                className={`w-12 h-16 bg-zinc-900 border ${error ? 'border-red-600' : 'border-zinc-800'} text-center text-2xl font-black focus:outline-none focus:border-white transition-all`}
              />
            ))}
          </div>
          
          {error && <p className="text-red-600 text-[10px] font-black uppercase tracking-widest animate-pulse">Invalid Access PIN</p>}

          <button 
            onClick={verifyPin}
            className="w-full bg-white text-black py-4 font-black uppercase text-xs tracking-widest hover:bg-zinc-200 transition-all"
          >
            Unlock Prospectus
          </button>
        </div>

        <p className="text-[9px] text-zinc-600 uppercase tracking-widest leading-loose">
          By entering this portal, you agree to the non-disclosure terms associated with this strategic asset.
        </p>
      </div>
    </div>
  );
}
