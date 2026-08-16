import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ShieldCheck, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-10 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-mono font-bold text-white text-sm">
              SV
            </div>
            <div>
              <div className="text-slate-200 font-semibold">{PERSONAL_INFO.name}</div>
              <div className="text-[11px] text-slate-500 font-mono">Senior Full-Stack Engineer & Technical Lead</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-slate-400 font-mono">
            <a href="#about" className="hover:text-slate-200 transition-colors">About</a>
            <a href="#experience" className="hover:text-slate-200 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-slate-200 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-slate-200 transition-colors">Skills</a>
          </div>

          <button
            onClick={scrollToTop}
            id="footer-scroll-top-btn"
            className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="pt-6 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved. Built with React 19, TypeScript, Three.js & Tailwind CSS.
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>Engineering portfolio • Updated 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
