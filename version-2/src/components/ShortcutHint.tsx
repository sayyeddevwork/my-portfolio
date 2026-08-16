import React, { useEffect, useRef, useState } from 'react';
import { Keyboard } from 'lucide-react';

const HINT_DURATION_MS = 5000;

export const ShortcutHint: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    const show = () => {
      setVisible(true);
      if (timer.current !== null) window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setVisible(false), HINT_DURATION_MS);
    };

    show();
    window.addEventListener('focus', show);
    return () => {
      window.removeEventListener('focus', show);
      if (timer.current !== null) window.clearTimeout(timer.current);
    };
  }, []);

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-4 left-4 z-40 flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 shadow-lg shadow-black/20 text-[11px] font-mono text-slate-300 transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <Keyboard className="w-3.5 h-3.5 text-blue-400 shrink-0" />
      <span>← / → navigate sections · Home / End jump to first / last</span>
    </div>
  );
};