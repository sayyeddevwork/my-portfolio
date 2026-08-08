import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export const FloatingCards: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-20 overflow-visible">
      {/* Card 1: Lower-Left, -8deg base tilt */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: -8 }}
        animate={{
          opacity: 1,
          y: [-8, 8, -8],
          rotate: [-10, -6, -10],
        }}
        transition={{
          opacity: { duration: 0.8, delay: 0.3 },
          y: {
            duration: 5.2,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          rotate: {
            duration: 6.4,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
        className="absolute left-0 sm:-left-4 bottom-8 sm:bottom-12 w-[190px] sm:w-[210px] bg-[#18475D]/95 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-4 shadow-2xl shadow-black/50 pointer-events-auto transition-transform hover:scale-105"
      >
        <div className="flex items-center gap-1 text-[#2A7187] mb-2">
          <Quote className="w-3.5 h-3.5 fill-current opacity-80" />
        </div>
        <p className="text-[#F4F1EA] text-xs sm:text-sm font-medium italic leading-snug">
          “Collaborating with Sayyed was smooth and efficient!”
        </p>
        <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2">
          <span className="text-[#6E8792] text-xs font-semibold tracking-wide">
            — Sophia.m
          </span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#0C3C48] text-[#9FB4BE] font-mono">
            Verified
          </span>
        </div>
      </motion.div>

      {/* Card 2: Lower-Right, +8deg base tilt */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: 8 }}
        animate={{
          opacity: 1,
          y: [8, -8, 8],
          rotate: [6, 10, 6],
        }}
        transition={{
          opacity: { duration: 0.8, delay: 0.5 },
          y: {
            duration: 4.8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.5, // 1.5s offset so they never move in sync
          },
          rotate: {
            duration: 5.8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.5,
          },
        }}
        className="absolute right-0 sm:-right-4 top-10 sm:top-14 w-[190px] sm:w-[210px] bg-[#18475D]/95 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-4 shadow-2xl shadow-black/50 pointer-events-auto transition-transform hover:scale-105"
      >
        <div className="flex items-center gap-1 text-[#35839C] mb-2">
          <Quote className="w-3.5 h-3.5 fill-current opacity-80" />
        </div>
        <p className="text-[#F4F1EA] text-xs sm:text-sm font-medium italic leading-snug">
          “Delivered scalable architecture and clean UI ahead of schedule.”
        </p>
        <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2">
          <span className="text-[#6E8792] text-xs font-semibold tracking-wide">
            — Marcus Vance
          </span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#0C3C48] text-[#9FB4BE] font-mono">
            CTO
          </span>
        </div>
      </motion.div>
    </div>
  );
};
