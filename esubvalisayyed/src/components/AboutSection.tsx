import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Download, Award, Briefcase, CheckCircle2, Clock } from 'lucide-react';
import { TIMELINE_DATA } from '../data';
import sayyedProfileImg from '../assets/images/sayyed_profile_1786154002467.jpg';

// Calculate estimated read time for About section content (~200 words/min)
const aboutTextContent = `
Senior Full Stack Engineer & Tech Lead. Lead Software Engineer with extensive hands-on experience designing, building, and supporting enterprise-scale applications across Banking, Identity & Access Management (CIAM), Government, and Global Non-Profit domains. Expert in React.js, Node.js, TypeScript, Microservices, Azure AKS, Kafka, OAuth 2.0, and AI/GenAI integrations.
` + TIMELINE_DATA.map(t => `${t.role} ${t.company} ${t.description || ''}`).join(' ');

const totalWords = aboutTextContent.trim().split(/\s+/).filter(Boolean).length;
const readTimeMinutes = Math.max(1, Math.ceil(totalWords / 200));

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Eyebrow & Read Time Pill */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0C3C48] border border-white/10 text-[#9FB4BE] text-sm font-medium uppercase tracking-wider"
          >
            <span className="w-2 h-2 rounded-full bg-[#2A7187]" />
            <span>About Me</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#18475D]/80 border border-white/10 text-[#9FB4BE] text-xs font-mono font-medium shadow-sm hover:border-[#2A7187] transition-colors"
            title="Estimated reading time (~200 words/min)"
          >
            <Clock className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>~{readTimeMinutes} min read</span>
          </motion.div>
        </div>

        {/* Top Grid: Left Bio vs Right Profile Graphic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <h2 className="text-4xl md:text-5xl font-space font-bold text-[#F4F1EA] mb-6 leading-tight">
              Senior Full Stack <span className="text-[#35839C]">Engineer</span> & Tech Lead
            </h2>

            <p className="text-base md:text-lg text-[#9FB4BE] leading-relaxed mb-8">
              Lead Software Engineer with extensive hands-on experience designing, building, and supporting enterprise-scale applications across Banking, Identity & Access Management (CIAM), Government, and Global Non-Profit domains. Expert in React.js, Node.js, TypeScript, Microservices, Azure AKS, Kafka, OAuth 2.0, and AI/GenAI integrations.
            </p>

            {/* 3-Column Stat Row */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-6 w-full py-6 border-y border-white/10 mb-8"
            >
              <motion.div variants={cardVariants}>
                <div className="text-3xl sm:text-4xl font-space font-bold text-[#2A7187]">15+</div>
                <div className="text-xs sm:text-sm text-[#6E8792] font-medium mt-1">Years Experience</div>
              </motion.div>
              <motion.div variants={cardVariants}>
                <div className="text-3xl sm:text-4xl font-space font-bold text-[#2A7187]">20+</div>
                <div className="text-xs sm:text-sm text-[#6E8792] font-medium mt-1">Microservices Architected</div>
              </motion.div>
              <motion.div variants={cardVariants}>
                <div className="text-3xl sm:text-4xl font-space font-bold text-[#2A7187]">~90%</div>
                <div className="text-xs sm:text-sm text-[#6E8792] font-medium mt-1">Test Coverage Achieved</div>
              </motion.div>
            </motion.div>

            {/* Open to Opportunities Pill + Download Resume CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0C3C48] border border-white/10 text-[#9FB4BE] text-sm font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                <span>Hyderabad, India · Open to Senior / Lead Roles</span>
              </div>

              <a
                href="#contact"
                id="about-download-resume-btn"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Sayyed Vali Resume: Sayyed.vali@gmail.com | +91-9966562620. Downloading Sayyed_Vali_Senior_FullStack_TechLead_Resume.pdf');
                }}
                className="rounded-full bg-transparent hover:bg-[#18475D] border border-white/15 text-[#9FB4BE] hover:text-[#F4F1EA] font-medium text-sm px-6 py-2.5 transition-all duration-200 flex items-center gap-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E3A4C] focus-visible:outline-none"
              >
                <Download className="w-4 h-4 text-[#2A7187]" />
                Download Sayyed's Resume
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Circular Profile + Overlapping Experience Badge (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex items-center justify-center relative py-6"
          >
            {/* Main Circular Profile Photo */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-[#18475D] shadow-2xl shadow-black/50 z-10 group">
              <img
                src={sayyedProfileImg}
                alt="Sayyed Vali Profile"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E3A4C] via-transparent to-transparent opacity-30" />
            </div>

            {/* Overlapping Teal Badge */}
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute -bottom-2 -right-2 sm:bottom-2 sm:right-2 w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-[#11475D]/95 border-2 border-[#2A7187] p-2 flex items-center justify-center shadow-2xl z-20 backdrop-blur-md"
            >
              <div className="w-full h-full rounded-full border border-dashed border-[#35839C]/60 flex flex-col items-center justify-center text-center p-2">
                <Award className="w-6 h-6 text-[#35839C] mb-1" />
                <span className="text-base sm:text-lg font-space font-bold text-[#F4F1EA] leading-none">
                  15+ Years
                </span>
                <span className="text-[10px] text-[#9FB4BE] uppercase tracking-wider font-mono mt-1">
                  Industry Exp.
                </span>
              </div>
            </motion.div>
          </motion.div>

        </div>

        {/* Bottom Timeline: 4-Column Horizontal Layout */}
        <div className="mt-20 lg:mt-28">
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold font-space text-[#F4F1EA] mb-8 flex items-center gap-2"
          >
            <Briefcase className="w-5 h-5 text-[#2A7187]" />
            Career Journey & Impact
          </motion.h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative"
          >
            {TIMELINE_DATA.map((item, index) => (
              <motion.div
                key={item.role}
                variants={cardVariants}
                className="bg-[#18475D]/80 rounded-2xl p-6 border border-white/10 hover:border-[#2A7187] transition-all relative flex flex-col justify-between shadow-lg"
              >
                <div>
                  <span className="inline-block text-xs font-mono text-[#35839C] font-semibold bg-[#0C3C48] px-3 py-1 rounded-full mb-3">
                    {item.period}
                  </span>
                  <h4 className="text-base font-bold font-space text-[#F4F1EA] leading-snug mb-1">
                    {item.role}
                  </h4>
                  <p className="text-xs font-medium text-[#7C97A3] mb-3">
                    {item.company} · {item.type}
                  </p>
                  {item.description && (
                    <p className="text-xs text-[#9FB4BE] leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] text-[#6E8792] uppercase font-mono">Milestone 0{index + 1}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2A7187]" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};
