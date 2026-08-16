import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code2, Server, ShieldCheck, Cloud, Database, Cpu, CheckCircle2 } from 'lucide-react';

export const Skills: React.FC = () => {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Cpu className="w-5 h-5 text-blue-400" />;
      case 1:
        return <Code2 className="w-5 h-5 text-indigo-400" />;
      case 2:
        return <Server className="w-5 h-5 text-cyan-400" />;
      case 3:
        return <ShieldCheck className="w-5 h-5 text-indigo-400" />;
      case 4:
        return <Cloud className="w-5 h-5 text-cyan-400" />;
      case 5:
        return <Database className="w-5 h-5 text-purple-400" />;
      case 6:
        return <Cpu className="w-5 h-5 text-blue-400" />;
      default:
        return <Code2 className="w-5 h-5 text-slate-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-900/60 border-t border-slate-800/80 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/60 border border-emerald-800/60 text-xs font-mono text-emerald-400 uppercase tracking-widest">
            Technical Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Skills & Technologies
          </h2>
          <p className="text-slate-400 max-w-3xl text-base leading-relaxed">
            Technology competencies based on hands-on delivery experience in banking, enterprise identity, and cloud orchestration. Highlighted items are core skills used across recent roles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, catIdx) => (
            <div
              key={cat.title}
              className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between space-y-4 shadow-sm"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                    {getCategoryIcon(catIdx)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">{cat.title}</h3>
                    <p className="text-xs text-slate-400 line-clamp-1">{cat.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium font-mono border transition-colors ${
                        skill.highlight
                          ? 'bg-blue-950/60 text-blue-300 border-blue-800/80 font-semibold'
                          : 'bg-slate-900/80 text-slate-300 border-slate-800'
                      }`}
                    >
                      {skill.highlight && <CheckCircle2 className="w-3 h-3 text-blue-400 shrink-0" />}
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
