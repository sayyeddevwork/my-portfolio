import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, Calendar, ExternalLink } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data';
import { Certification } from '../types';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 md:py-32 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0C3C48] border border-white/10 text-[#9FB4BE] text-sm font-medium uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#2A7187]" />
            <span>Learning Journey</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-space font-bold text-[#F4F1EA] mb-4">
            Certifications & Degrees
          </h2>

          <p className="text-base text-[#9FB4BE] max-w-xl">
            Formal education and industry-certified technical accreditations demonstrating commitment to continuous learning and technical mastery.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CERTIFICATIONS_DATA.map((item: Certification, index: number) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#18475D] rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-[#2A7187] shadow-xl shadow-black/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#0C3C48] border border-white/10 flex items-center justify-center text-[#2A7187] group-hover:scale-110 transition-transform">
                    {index === 0 ? <GraduationCap className="w-6 h-6" /> : <Award className="w-6 h-6" />}
                  </div>

                  <span className="px-3 py-1 rounded-full bg-[#0C3C48] text-[#35839C] text-xs font-mono font-semibold border border-white/10">
                    {item.badgeText}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-space text-[#F4F1EA] group-hover:text-[#35839C] transition-colors mb-2">
                  {item.degree}
                </h3>

                <p className="text-sm font-medium text-[#7C97A3] mb-4">
                  {item.institution}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#6E8792]">
                <div className="flex items-center gap-1.5 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-[#2A7187]" />
                  <span>{item.year}</span>
                </div>

                <span className="inline-flex items-center gap-1 hover:text-[#F4F1EA] transition-colors cursor-pointer">
                  <span>Verify</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
