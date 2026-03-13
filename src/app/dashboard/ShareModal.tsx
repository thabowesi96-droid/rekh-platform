'use client';
import { useState } from 'react';

export default function ShareModal({ projectId, onClose }: { projectId: string, onClose: () => void }) {
  const [pin] = useState(Math.floor(10000 + Math.random() * 90000));
  const shareUrl = `https://rekh-platform.web.app/view/${projectId}`;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard');
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] flex items-center justify-center p-6">
      <div className="bg-zinc-950 border border-zinc-800 p-8 max-w-md w-full space-y-8 animate-in zoom-in duration-300">
        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-black italic uppercase italic">Secure Share</h2>
          <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Project: {projectId}</p>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-[10px] uppercase font-black text-zinc-500">Secure Access Link</p>
            <div className="bg-black border border-zinc-800 p-3 flex justify-between items-center">
              <code className="text-[10px] text-zinc-400 truncate mr-2">{shareUrl}</code>
              <button onClick={() => copyToClipboard(shareUrl)} className="text-[10px] font-black uppercase text-white hover:text-red-500">Copy</button>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-[10px] uppercase font-black text-zinc-500">5-Digit Access PIN</p>
            <div className="bg-zinc-900 p-4 text-center border-l-4 border-red-600">
              <p className="text-4xl font-black tracking-[0.5em] italic">{pin}</p>
            </div>
            <p className="text-[9px] text-zinc-500 italic">Send this PIN to the funder via a separate channel (WhatsApp/SMS).</p>
          </div>
        </div>

        <div className="pt-4 flex gap-4">
          <button 
            onClick={() => copyToClipboard(`Link: ${shareUrl}\nAccess PIN: ${pin}`)}
            className="flex-1 bg-white text-black py-4 text-[10px] font-black uppercase tracking-widest hover:bg-zinc-200"
          >
            Copy Full Invite
          </button>
          <button onClick={onClose} className="bg-zinc-900 text-zinc-500 px-6 py-4 text-[10px] font-black uppercase tracking-widest border border-zinc-800">Close</button>
        </div>
      </div>
    </div>
  );
}
