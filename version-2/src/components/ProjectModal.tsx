import React, { useRef, useState } from 'react';
import { X, ExternalLink, Github, Code2, Server, Database, ShieldCheck, Check, Copy, Terminal, CheckCircle2, Lock } from 'lucide-react';
import { ProjectItem } from '../types';
import { useModalA11y } from '../hooks/useModalA11y';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [copiedCode, setCopiedCode] = useState<boolean>(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  useModalA11y(project !== null, onClose, dialogRef);

  if (!project) return null;

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        tabIndex={-1}
        className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-y-auto text-slate-100 p-6 sm:p-8 space-y-8"
      >
        {/* Close */}
        <button
          onClick={onClose}
          id="close-project-modal-btn"
          className="absolute top-6 right-6 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-3 pr-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/80 border border-blue-800/80 text-xs font-mono text-blue-400">
              {project.category.toUpperCase()} • TECHNICAL WRITE-UP
            </span>
            {project.projectOrigin && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300">
                {project.projectOrigin}
              </span>
            )}
          </div>
          <h2 id="project-modal-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {project.title}
          </h2>
          <p className="text-base text-slate-300 font-medium">{project.subtitle}</p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="modal-github-link"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code</span>
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="modal-demo-link"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors shadow-md shadow-blue-600/20"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Launch Live System</span>
              </a>
            )}
            {!project.githubUrl && !project.demoUrl && (
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs font-mono text-slate-400">
                <Lock className="w-3.5 h-3.5 text-slate-500" />
                {project.sourceNote ?? 'Professional Experience — Confidential'}
              </span>
            )}
          </div>
        </div>

        {/* Tech stack */}
        <div className="space-y-2 pt-2 border-t border-slate-800/80">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Technologies Used</div>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-950 border border-slate-800 text-blue-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <h3 className="text-sm font-mono uppercase tracking-wider text-amber-400 flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              Problem Statement
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.detailedWriteup.problemStatement}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <h3 className="text-sm font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Architectural Solution
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.detailedWriteup.solutionOverview}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400">
            System Topology Breakdown
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
            {project.architecture.frontend && (
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1">
                <span className="text-slate-400 font-mono flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-blue-400" /> Frontend Layer
                </span>
                <span className="text-slate-200 font-medium block">{project.architecture.frontend}</span>
              </div>
            )}
            {project.architecture.backend && (
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1">
                <span className="text-slate-400 font-mono flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5 text-indigo-400" /> Backend Engine
                </span>
                <span className="text-slate-200 font-medium block">{project.architecture.backend}</span>
              </div>
            )}
            {project.architecture.database && (
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1">
                <span className="text-slate-400 font-mono flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-emerald-400" /> Database & Storage
                </span>
                <span className="text-slate-200 font-medium block">{project.architecture.database}</span>
              </div>
            )}
            {project.architecture.security && (
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1">
                <span className="text-slate-400 font-mono flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> Security Controls
                </span>
                <span className="text-slate-200 font-medium block">{project.architecture.security}</span>
              </div>
            )}
          </div>
        </div>

        {/* Key decisions */}
        <div className="space-y-4">
          <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400">
            Key Technical Decisions & Trade-offs
          </h3>
          <div className="space-y-3">
            {project.detailedWriteup.engineeringDecisions.map((decision, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1">
                <h4 className="text-sm font-bold text-blue-400">{decision.title}</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{decision.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Code snippet */}
        {project.detailedWriteup.codeSnippet && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-1">
              <span>{project.detailedWriteup.codeSnippet.title}</span>
              <button
                onClick={() => handleCopy(project.detailedWriteup.codeSnippet!.code)}
                className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                {copiedCode ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Code</span>
                  </>
                )}
              </button>
            </div>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed shadow-inner">
              <pre>{project.detailedWriteup.codeSnippet.code}</pre>
            </div>
          </div>
        )}

        {/* Outcomes */}
        <div className="space-y-3 pt-2 border-t border-slate-800/80">
          <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400">
            Production Outcomes
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
            {project.detailedWriteup.outcomes.map((outcome, idx) => (
              <li key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
