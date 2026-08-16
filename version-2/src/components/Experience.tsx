import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, Layers, Award, ChevronRight, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [selectedExpId, setSelectedExpId] = useState<string>(EXPERIENCES[0].id);

  const selectedExp = EXPERIENCES.find((exp) => exp.id === selectedExpId) || EXPERIENCES[0];

  return (
    <section id="experience" className="py-20 bg-slate-950 text-slate-100 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950/60 border border-indigo-800/60 text-xs font-mono text-indigo-400 uppercase tracking-widest">
            Professional Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Professional Experience & Engineering Leadership
          </h2>
          <p className="text-slate-400 max-w-3xl text-base leading-relaxed">
            Technical leadership, architecture decisions, and delivery scope across banking, identity, and government engagements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 space-y-2">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 px-1">
              Select Position
            </div>
            {EXPERIENCES.map((exp) => {
              const isSelected = exp.id === selectedExpId;
              return (
                <button
                  key={exp.id}
                  onClick={() => setSelectedExpId(exp.id)}
                  id={`experience-tab-${exp.id}`}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between group ${
                    isSelected
                      ? 'bg-slate-900 border-blue-500/80 shadow-md shadow-blue-500/10'
                      : 'bg-slate-950/80 border-slate-800/80 hover:bg-slate-900/60 hover:border-slate-700'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-semibold ${isSelected ? 'text-blue-400' : 'text-slate-200 group-hover:text-white'}`}>
                        {exp.company}
                      </span>
                      {exp.isCurrent && (
                        <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-emerald-950 text-emerald-400 border border-emerald-800/80">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-slate-400 line-clamp-1">{exp.role}</div>
                    <div className="text-[11px] font-mono text-slate-500">{exp.duration}</div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-blue-400 translate-x-1' : 'text-slate-600'}`} />
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-8 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl">
            <div className="border-b border-slate-800/80 pb-6 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-blue-400" />
                    {selectedExp.role}
                  </h3>
                  <div className="text-lg font-medium text-blue-400 mt-1">
                    {selectedExp.company} {selectedExp.client ? `| Client: ${selectedExp.client}` : ''}
                  </div>
                </div>

                <div className="flex flex-col items-start sm:items-end text-xs font-mono text-slate-400 gap-1 bg-slate-950/80 px-3.5 py-2 rounded-lg border border-slate-800">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    {selectedExp.duration}
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    {selectedExp.location}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {selectedExp.environment.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-950 text-slate-300 border border-slate-800/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {selectedExp.architectureHighlights && selectedExp.architectureHighlights.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-blue-400" />
                  Architecture Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedExp.architectureHighlights.map((arch, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-slate-950/90 border border-slate-800 text-xs text-slate-200 flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{arch}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-emerald-400" />
                Technical Contributions
              </h4>
              <ul className="space-y-3 text-sm text-slate-300">
                {selectedExp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
