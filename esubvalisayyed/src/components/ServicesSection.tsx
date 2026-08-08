import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Check, ChevronDown, Layers, Sparkles } from 'lucide-react';
import { SERVICES_DATA } from '../data';
import { Service } from '../types';

interface ServicesSectionProps {
  onContactClick: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onContactClick }) => {
  const [activeServiceId, setActiveServiceId] = useState<string>('s1');

  const activeService = SERVICES_DATA.find((s) => s.id === activeServiceId) || SERVICES_DATA[0];

  return (
    <section id="services" className="py-24 md:py-32 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0C3C48] border border-white/10 text-[#9FB4BE] text-sm font-medium uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#2A7187]" />
            <span>My Services</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-space font-bold text-[#F4F1EA]">
            What I Provide
          </h2>
        </motion.div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Large Image Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#18475D] group min-h-[380px] lg:min-h-[480px] flex flex-col justify-end p-8"
          >
            {/* Grayscale-tinted Developer Workspace Photo */}
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop"
              alt="Developer workspace"
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E3A4C] via-[#0E3A4C]/60 to-transparent z-10" />

            <div className="relative z-20">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0C3C48]/90 text-[#F4F1EA] text-xs font-mono border border-white/10 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#2A7187]" />
                Selected Capability
              </span>

              <h3 className="text-2xl font-bold font-space text-[#F4F1EA] mb-2">
                {activeService.title}
              </h3>

              <p className="text-sm text-[#9FB4BE] leading-relaxed mb-6">
                {activeService.description}
              </p>

              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#2A7187] hover:bg-[#35839C] text-[#F4F1EA] text-sm font-semibold transition-all shadow-md cursor-pointer"
              >
                Hire Me
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Numbered Accordion Rows (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {SERVICES_DATA.map((service: Service, index: number) => {
              const isOpen = activeServiceId === service.id;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer ${
                    isOpen
                      ? 'bg-[#18475D] border-[#2A7187] shadow-xl shadow-black/30'
                      : 'bg-[#18475D]/40 border-white/10 hover:border-white/20 hover:bg-[#18475D]/60'
                  }`}
                >
                  <div className="p-6 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <span className="font-space font-bold text-2xl text-[#2A7187]">
                        {service.number}
                      </span>
                      <h3 className="font-space font-bold text-lg sm:text-xl text-[#F4F1EA]">
                        {service.title}
                      </h3>
                    </div>

                    <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#9FB4BE] transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#2A7187] text-[#F4F1EA]' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6 pt-2 border-t border-white/10"
                      >
                        <p className="text-sm text-[#9FB4BE] leading-relaxed mb-6">
                          {service.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                          {service.features.map((feat) => (
                            <div key={feat} className="flex items-center gap-2 text-xs text-[#F4F1EA]">
                              <div className="w-4 h-4 rounded-full bg-[#0C3C48] flex items-center justify-center text-[#2A7187] shrink-0">
                                <Check className="w-2.5 h-2.5" />
                              </div>
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onContactClick();
                          }}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-[#2A7187] hover:text-[#35839C] group cursor-pointer"
                        >
                          <span>Hire Me</span>
                          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
