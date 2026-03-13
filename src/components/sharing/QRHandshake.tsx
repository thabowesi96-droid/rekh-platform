'use client';
import { useState } from 'react';

export default function QRHandshake({ projectId, pin }: { projectId: string, pin: string }) {
  const [showQR, setShowQR] = useState(false);
  const portalUrl = `https://rekh-platform.web.app/view/${projectId}`;
  
  // Generating a standard Google Chart API QR for speed (No extra npm packages needed)
  const qrSource = `https://chart.googleapis.com/chart?cht=qr&chl=${encodeURIComponent(portalUrl)}&chs=300x300&choe=UTF-8&chld=L|2`;

  return (
    <div className="flex flex-col items-center space-y-6">
      {!showQR ? (
        <button 
          onClick={() => setShowQR(true)}
          className="w-full bg-white text-black py-6 font-black uppercase tracking-widest text-xs hover:bg-zinc-200"
        >
          Generate In-Person Handshake
        </button>
      ) : (
        <div className="bg-white p-6 animate-in zoom-in duration-500 flex flex-col items-center">
          <p className="text-[10px] font-black uppercase tracking-widest text-black mb-4">Scan to Access Data Room</p>
          <img src={qrSource} alt="Secure QR Access" className="w-64 h-64 border-4 border-black" />
          <div className="mt-6 text-center space-y-1">
            <p className="text-[10px] text-zinc-500 uppercase font-bold">Verbal PIN Required:</p>
            <p className="text-3xl font-black italic tracking-widest text-black">{pin}</p>
          </div>
          <button 
            onClick={() => setShowQR(false)}
            className="mt-6 text-[9px] font-black uppercase text-zinc-400 hover:text-black"
          >
            Close Handshake
          </button>
        </div>
      )}
    </div>
  );
}
