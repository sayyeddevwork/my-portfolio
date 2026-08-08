import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Code, Cpu, Layers, Palette, Box, Database, Share2, Container, 
  CreditCard, Flame, Zap, Terminal, CheckCircle, Cloud, Server, Atom
} from 'lucide-react';
import { TECH_STACK } from '../data';
import { TechItem } from '../types';

export const TechStackSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Backend', 'Cloud', 'Language'];

  const getTechIcon = (iconName: string) => {
    switch (iconName) {
      case 'Atom': return <Atom className="w-6 h-6" />;
      case 'Code': return <Code className="w-6 h-6" />;
      case 'Server': return <Server className="w-6 h-6" />;
      case 'Layers': return <Layers className="w-6 h-6" />;
      case 'Cpu': return <Cpu className="w-6 h-6" />;
      case 'Palette': return <Palette className="w-6 h-6" />;
      case 'Box': return <Box className="w-6 h-6" />;
      case 'Database': return <Database className="w-6 h-6" />;
      case 'Share2': return <Share2 className="w-6 h-6" />;
      case 'Container': return <Container className="w-6 h-6" />;
      case 'CreditCard': return <CreditCard className="w-6 h-6" />;
      case 'Flame': return <Flame className="w-6 h-6" />;
      case 'Zap': return <Zap className="w-6 h-6" />;
      case 'Terminal': return <Terminal className="w-6 h-6" />;
      case 'CheckCircle': return <CheckCircle className="w-6 h-6" />;
      case 'Cloud': return <Cloud className="w-6 h-6" />;
      default: return <Code className="w-6 h-6" />;
    }
  };

  const filteredTech = activeCategory === 'All'
    ? TECH_STACK
    : TECH_STACK.filter((t) => t.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="tech" className="py-24 md:py-32 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--bg-badge-pill)] border border-white/10 text-[var(--text-body)] text-sm font-medium uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-teal)]" />
            <span>Tech Stack</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-space font-bold text-[var(--text-heading-light)] mb-4">
            Tools & Technologies
          </h2>

          <p className="text-base text-[var(--text-body)] max-w-xl">
            A battle-tested stack of modern frameworks, languages, cloud databases, and development toolchains engineered for high speed and precision.
          </p>
        </motion.div>

        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap" role="tablist" aria-label="Technology stack categories">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-[var(--accent-cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)] focus-visible:outline-none ${
                activeCategory === cat
                  ? 'bg-[var(--accent-teal)] text-[var(--text-heading-light)] font-semibold shadow-md shadow-black/20'
                  : 'bg-[var(--bg-card)]/40 text-[var(--text-body)] hover:text-[var(--text-heading-light)] hover:bg-[var(--bg-card)] border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 sm:gap-6">
          {filteredTech.map((item: TechItem, index: number) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 15, scale: 0.85 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.35, delay: index * 0.03, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-[var(--bg-card)] hover:bg-[var(--accent-teal)]/20 border border-white/10 hover:border-[var(--accent-teal)] rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-lg hover:-translate-y-1.5 transition-all duration-300 cursor-default"
            >
              <div 
                className="w-12 h-12 rounded-xl bg-[var(--bg-badge-pill)] border border-white/10 flex items-center justify-center mb-2 group-hover:scale-110 group-hover:border-[var(--accent-teal)] transition-all"
                style={{ color: item.color || 'var(--text-heading-light)' }}
              >
                {getTechIcon(item.iconName)}
              </div>

              <span className="text-xs font-semibold text-[var(--text-heading-light)] font-space line-clamp-1 group-hover:text-[var(--accent-teal-hover)] transition-colors">
                {item.name}
              </span>

              <span className="text-[10px] text-[var(--text-muted)] font-mono mt-0.5 line-clamp-1">
                {item.category}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
