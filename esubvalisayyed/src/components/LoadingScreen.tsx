import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const LoadingScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for window load or minimum pleasant delay for smooth initial transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 750);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0E3A4C] text-[#F4F1EA] select-none"
        >
          {/* Subtle Star / Ambient Background Glow */}
          <div className="absolute w-72 h-72 bg-[#2A7187]/20 rounded-full blur-3xl pointer-events-none animate-pulse" />

          {/* Logo Emblem */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="relative flex items-center justify-center mb-6"
          >
            <div className="w-16 h-16 rounded-full border-2 border-[#2A7187] bg-[#0C3C48] shadow-2xl shadow-[#2A7187]/40 flex items-center justify-center font-space font-bold text-xl text-[#F4F1EA] tracking-tighter">
              SV
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
              className="absolute -inset-2 rounded-full border-t-2 border-[#38BDF8] border-r-transparent border-b-transparent border-l-transparent pointer-events-none"
            />
          </motion.div>

          {/* Typography */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="text-center"
          >
            <h1 className="font-space font-bold text-lg text-[#F4F1EA] tracking-wide mb-1">
              Sayyed Vali
            </h1>
            <p className="text-xs text-[#9FB4BE] font-mono tracking-wider uppercase">
              Senior Full-Stack Engineer
            </p>
          </motion.div>

          {/* Progress Indicator */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className="h-0.5 bg-[#38BDF8] rounded-full mt-6 shadow-sm shadow-[#38BDF8]/50"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
