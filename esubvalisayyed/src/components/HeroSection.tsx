import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Mail, Sparkles, CheckCircle2, ShieldCheck, Zap, Code2, Cpu, Globe, Terminal, RefreshCw, BarChart3, TestTube, Layers } from 'lucide-react';
import { Hero3DVisual } from './Hero3DVisual';
import { FloatingCards } from './FloatingCards';
import { SKILL_MARQUEE_ITEMS } from '../data';

interface HeroSectionProps {
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick }) => {
  const getSkillIcon = (skill: string) => {
    switch (skill) {
      case 'Stripe Pay': return <ShieldCheck className="w-3.5 h-3.5 text-[var(--accent-teal-hover)]" />;
      case 'React Native': return <Code2 className="w-3.5 h-3.5 text-[#61DAFB]" />;
      case 'PWA Support': return <Globe className="w-3.5 h-3.5 text-[var(--accent-cyan)]" />;
      case 'API Connect': return <Cpu className="w-3.5 h-3.5 text-[#A8B9C0]" />;
      case 'Analytics': return <BarChart3 className="w-3.5 h-3.5 text-[#FFCA28]" />;
      case 'Bug Tracking': return <Zap className="w-3.5 h-3.5 text-[#FF9900]" />;
      case 'Perf Audit': return <RefreshCw className="w-3.5 h-3.5 text-[#339933]" />;
      case 'Unit Testing': return <TestTube className="w-3.5 h-3.5 text-[#C21325]" />;
      case 'E2E Testing': return <CheckCircle2 className="w-3.5 h-3.5 text-[#4169E1]" />;
      case 'Code Linting': return <Terminal className="w-3.5 h-3.5 text-[#E10098]" />;
      case 'Responsive Design': return <Layers className="w-3.5 h-3.5 text-[var(--accent-teal)]" />;
      default: return <Sparkles className="w-3.5 h-3.5 text-[var(--accent-teal)]" />;
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[var(--bg-badge-pill)] border border-white/10 text-[var(--text-body)] text-sm font-medium tracking-wide uppercase shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              <span>Senior Full Stack Engineer & Technical Lead</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-space font-bold leading-[1.1] tracking-tight text-left mb-6">
              <span className="text-[var(--text-heading-light)]">Sayyed</span>{' '}
              <span className="text-[var(--text-heading-muted)]">Vali</span>
              <a
                href="#about"
                id="hero-inline-arrow-btn"
                className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-[var(--bg-card)] border border-white/15 text-[var(--text-heading-light)] hover:bg-[var(--accent-teal)] hover:scale-110 transition-all duration-300 ml-3 align-middle shadow-lg focus-visible:ring-2 focus-visible:ring-[var(--accent-cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)] focus-visible:outline-none"
                aria-label="About Sayyed Vali"
              >
                <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </h1>

            <p className="text-base md:text-lg text-[var(--text-body)] leading-relaxed max-w-lg mb-8">
              Hands-on Technical Lead building enterprise Banking, Identity (CIAM), and Microservice systems with React.js, Node.js, Kafka, Azure AKS, and modern GenAI / Agentic AI patterns.
            </p>

            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                id="hero-cta-view-work"
                className="rounded-full bg-[var(--accent-teal)] hover:bg-[var(--accent-teal-hover)] text-[var(--text-heading-light)] font-semibold text-base px-7 py-3.5 transition-all duration-200 shadow-lg shadow-black/30 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-[var(--accent-cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)] focus-visible:outline-none"
              >
                View My Work
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                id="hero-cta-get-in-touch"
                onClick={onContactClick}
                className="rounded-full bg-transparent hover:bg-[var(--bg-card)]/60 border border-white/15 text-[var(--text-body)] hover:text-[var(--text-heading-light)] font-medium text-base px-7 py-3.5 transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-[var(--accent-cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)] focus-visible:outline-none"
              >
                <Mail className="w-4 h-4 text-[var(--accent-teal)]" />
                Get In Touch
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="relative flex items-center justify-center w-full min-h-[380px] sm:min-h-[440px] lg:min-h-[500px]"
          >
            <div className="absolute w-[300px] h-[300px] rounded-full bg-[var(--accent-teal)]/20 blur-3xl pointer-events-none -z-10" />
            
            <Hero3DVisual />

            <FloatingCards />
          </motion.div>

        </div>

        <div className="mt-16 lg:mt-24 w-full overflow-hidden border-y border-white/10 py-4 bg-[var(--bg-badge-pill)]/40 backdrop-blur-sm rounded-2xl relative">
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[var(--bg-primary)] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[var(--bg-primary)] to-transparent z-10 pointer-events-none" />
          
          <div className="animate-marquee flex items-center gap-6 whitespace-nowrap">
            {[...SKILL_MARQUEE_ITEMS, ...SKILL_MARQUEE_ITEMS].map((item, idx) => (
              <div
                key={`${item}-${idx}`}
                className="inline-flex items-center gap-2.5 rounded-full bg-[var(--bg-badge-pill)] border border-white/10 px-4 py-2 text-sm text-[var(--text-body)] font-medium transition-colors hover:border-[var(--accent-teal)] hover:text-[var(--text-heading-light)] cursor-default shadow-sm"
              >
                {getSkillIcon(item)}
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
