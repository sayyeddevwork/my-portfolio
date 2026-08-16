import React, { lazy, Suspense } from 'react';
import { FileText, ArrowRight, Github, Linkedin, Mail, Cpu, Server, Layers } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const HeroCanvas3D = lazy(() => import('./HeroCanvas3D').then((m) => ({ default: m.HeroCanvas3D })));

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section id="home" className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-slate-950 text-slate-100 border-b border-slate-900">
      {/* WebGL background mesh — lazy-loaded so it never blocks first paint */}
      <Suspense
        fallback={
          <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px]" />
        }
      >
        <HeroCanvas3D />
      </Suspense>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-3xl space-y-6">
          {/* Status & availability badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-200 font-medium">{PERSONAL_INFO.availability}</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">{PERSONAL_INFO.location}</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              SAYYED VALI
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-400 mt-2">
                Senior Full-Stack Engineer & Technical Lead
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl border-l-2 border-blue-500/80 pl-4 py-0.5">
              15+ years designing and operating full-stack systems: React and TypeScript frontends, Node.js services, Kafka event pipelines, and Azure-hosted microservices across banking, IAM, and government domains.
            </p>
            <p className="text-xs font-mono text-slate-500 max-w-2xl">
              Evidence: engineering project write-ups · interactive architecture model · resume
            </p>
          </div>

          {/* Technology badges */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300">
              <Cpu className="w-3.5 h-3.5 text-blue-400" /> React + TypeScript
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300">
              <Server className="w-3.5 h-3.5 text-indigo-400" /> Node.js + Express
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300">
              <Layers className="w-3.5 h-3.5 text-emerald-400" /> Cloud & Distributed Systems
            </span>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              id="hero-view-projects-btn"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-md shadow-blue-600/20 active:scale-95 cursor-pointer"
            >
              <span>VIEW PROJECTS</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              id="hero-download-resume-btn"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-100 border border-slate-800 hover:border-slate-700 font-semibold text-xs uppercase tracking-wider transition-all active:scale-95 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-blue-400" />
              <span>DOWNLOAD RESUME</span>
            </button>
          </div>

          {/* Direct contact channels */}
          <div className="pt-6 border-t border-slate-900 flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400">
            <span className="text-slate-500 uppercase tracking-wider">Direct Access:</span>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors"
              id="hero-linkedin-link"
            >
              <Linkedin className="w-4 h-4 text-blue-500" />
              <span>LinkedIn</span>
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              id="hero-github-link"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
              id="hero-email-link"
            >
              <Mail className="w-4 h-4 text-emerald-500" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-slate-900">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div className="text-xs font-bold font-mono text-blue-400 uppercase tracking-wider">FULL-STACK ENGINEERING</div>
            <div className="text-xs text-slate-300 mt-2 font-mono">React • Node.js • TypeScript</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div className="text-xs font-bold font-mono text-emerald-400 uppercase tracking-wider">SYSTEM ARCHITECTURE</div>
            <div className="text-xs text-slate-300 mt-2 font-mono">Microservices • APIs • Kafka</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div className="text-xs font-bold font-mono text-indigo-400 uppercase tracking-wider">CLOUD & INFRASTRUCTURE</div>
            <div className="text-xs text-slate-300 mt-2 font-mono">Azure • Kubernetes • Docker</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div className="text-xs font-bold font-mono text-cyan-400 uppercase tracking-wider">ENGINEERING QUALITY</div>
            <div className="text-xs text-slate-300 mt-2 font-mono">Testing • Observability • CI/CD</div>
          </div>
        </div>
      </div>
    </section>
  );
};
