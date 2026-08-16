import React, { useEffect, useRef, useState } from 'react';
import { X, Printer, Check, Copy, Briefcase, GraduationCap, Mail, MapPin, Phone } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES } from '../data/portfolioData';
import { useModalA11y } from '../hooks/useModalA11y';
import { maskPhone } from '../utils/privacy';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  useModalA11y(isOpen, onClose, dialogRef);

  useEffect(() => {
    if (!isOpen) return;
    document.body.classList.add('resume-print-open');
    return () => document.body.classList.remove('resume-print-open');
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="resume-print-overlay fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-modal-title"
        tabIndex={-1}
        className="relative w-full max-w-4xl max-h-[92vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-y-auto text-slate-100 p-6 sm:p-10 space-y-8"
      >
        <div className="resume-print-hide flex items-center justify-between border-b border-slate-800 pb-4 sticky top-0 bg-slate-900 z-10">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded bg-blue-950 text-blue-400 border border-blue-800 text-xs font-mono">
              OFFICIAL CURRICULUM VITAE
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors cursor-pointer"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Body */}
        <div className="bg-slate-950 border border-slate-800 p-6 sm:p-8 rounded-2xl space-y-8 text-slate-200 font-sans leading-relaxed print:bg-white print:text-black print:p-0 print:border-none">
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 space-y-3">
            <h1 id="resume-modal-title" className="text-3xl font-extrabold text-white tracking-tight">{PERSONAL_INFO.name}</h1>
            <p className="text-lg font-semibold text-blue-400">{PERSONAL_INFO.title}</p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-500" /> {PERSONAL_INFO.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-slate-500" /> {maskPhone(PERSONAL_INFO.phone)}
              </span>
              <span>•</span>
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1 hover:text-blue-400 cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 text-slate-500" /> {PERSONAL_INFO.email}
                {copied && <span className="text-emerald-400 font-bold ml-1">(Copied)</span>}
              </button>
            </div>

            <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-400 pt-1">
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                LinkedIn
              </a>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                GitHub
              </a>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400 border-b border-slate-800/80 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400 border-b border-slate-800/80 pb-1 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-blue-400" /> Professional Experience
            </h2>

            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base font-bold text-white">{exp.role}</h3>
                      <p className="text-xs font-medium text-blue-400">
                        {exp.company} {exp.client ? `| Client: ${exp.client}` : ''}
                      </p>
                    </div>
                    <div className="text-xs font-mono text-slate-400 text-right">
                      <div>{exp.duration}</div>
                      <div>{exp.location}</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 text-[11px] font-mono text-slate-400 pt-1">
                    <span className="text-slate-500">Tech:</span>
                    <span>{exp.environment.join(' • ')}</span>
                  </div>

                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 pl-1">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="leading-relaxed">
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400 border-b border-slate-800/80 pb-1 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-emerald-400" /> Education
            </h2>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <strong className="text-slate-100">Master of Engineering (Computer Science Engineering)</strong> – Nagarjuna University
              </li>
              <li>
                <strong className="text-slate-100">Bachelor of Engineering (Electrical & Electronics Engineering)</strong> – JNTU University
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
