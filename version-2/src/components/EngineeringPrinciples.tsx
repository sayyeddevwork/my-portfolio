import React from 'react';
import { ShieldCheck, GitBranch, Lock, Activity, TestTube, RefreshCw, Layers, ArrowLeftRight } from 'lucide-react';
import { ENGINEERING_PRINCIPLES } from '../data/portfolioData';

const PRINCIPLE_ICONS = [Layers, GitBranch, Lock, Activity, TestTube, RefreshCw, ShieldCheck, ArrowLeftRight];

export const EngineeringPrinciples: React.FC = () => {
  return (
    <section id="principles" className="py-20 bg-slate-900/40 border-t border-slate-800/80 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400 uppercase tracking-widest">
            Engineering Discipline
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Engineering Principles
          </h2>
          <p className="text-slate-400 max-w-3xl text-base leading-relaxed">
            Working principles applied when designing, building, and operating distributed systems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ENGINEERING_PRINCIPLES.map((principle, idx) => {
            const Icon = PRINCIPLE_ICONS[idx % PRINCIPLE_ICONS.length];
            return (
              <div
                key={principle.title}
                className="p-5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-colors space-y-3"
              >
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 w-fit">
                  <Icon className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">{principle.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mt-1.5">{principle.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};