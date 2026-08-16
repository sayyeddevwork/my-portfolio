import React, { useEffect, useState } from 'react';

export const ScrollProgress: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    let rafId: number | null = null;

    const updateProgress = () => {
      rafId = null;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      const current = scrollable > 0 ? window.scrollY / scrollable : 0;
      setProgress(Math.min(1, Math.max(0, current)));
    };

    const handleScroll = () => {
      if (rafId === null) {
        rafId = requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress * 100)}
      className="absolute top-0 left-0 right-0 h-[2.5px] z-10"
    >
      <div
        aria-hidden="true"
        className="h-full bg-gradient-to-r from-blue-500 to-emerald-400 shadow-[0_0_10px_rgba(59,130,246,0.45)]"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
};