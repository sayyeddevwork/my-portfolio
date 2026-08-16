import React from 'react';
import { FileText } from 'lucide-react';
import { ENGINEERING_NOTES_TOPICS } from '../data/portfolioData';

export const EngineeringNotes: React.FC = () => {
  return (
    <section id="engineering-notes" className="py-20 bg-slate-950 text-slate-100 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400 uppercase tracking-widest">
            Technical Writing
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Engineering Notes
          </h2>
          <p className="text-slate-400 max-w-3xl text-base leading-relaxed">
            No published articles yet. Long-form engineering notes are planned on the following topics.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {ENGINEERING_NOTES_TOPICS.map((topic) => (
            <span
              key={topic}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300"
            >
              <FileText className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              {topic}
              <span className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-700 text-[10px] text-slate-500 uppercase tracking-wider">
                Planned
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};