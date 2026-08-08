import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, Palette, Check, Sun, Moon } from 'lucide-react';

export const FloatingUtilities: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [activeAccent, setActiveAccent] = useState('#2A7187');
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    return (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const accentOptions = [
    { name: 'Default Teal', hex: '#2A7187', hover: '#35839C' },
    { name: 'Emerald Cyber', hex: '#10B981', hover: '#059669' },
    { name: 'Cyan Neon', hex: '#06B6D4', hover: '#0891B2' },
    { name: 'Amber Gold', hex: '#F59E0B', hover: '#D97706' },
    { name: 'Violet Indigo', hex: '#6366F1', hover: '#4F46E5' },
  ];

  const handleSelectAccent = (hex: string) => {
    setActiveAccent(hex);
    document.documentElement.style.setProperty('--accent-teal', hex);
    setPaletteOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      
      {/* Accent Color Picker Drawer */}
      <AnimatePresence>
        {paletteOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="bg-[#18475D] border border-white/15 rounded-2xl p-3 shadow-2xl flex flex-col gap-2 min-w-[170px]"
          >
            <span className="text-[10px] uppercase tracking-wider font-mono text-[#7C97A3] px-2 pt-1 font-semibold">
              Accent Color Token
            </span>
            {accentOptions.map((opt) => (
              <button
                key={opt.hex}
                onClick={() => handleSelectAccent(opt.hex)}
                className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium text-[#F4F1EA] hover:bg-[#11475D] transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#18475D] focus-visible:outline-none"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-3.5 h-3.5 rounded-full border border-white/20"
                    style={{ backgroundColor: opt.hex }}
                  />
                  <span>{opt.name}</span>
                </div>
                {activeAccent === opt.hex && <Check className="w-3.5 h-3.5 text-[#F4F1EA]" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Buttons */}
      <div className="flex flex-col gap-3">
        {/* Light / Dark Mode Toggle Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleTheme}
          className="w-12 h-12 rounded-full bg-[#18475D] border border-white/15 text-[#F4F1EA] shadow-xl hover:bg-[#2A7187] transition-all duration-200 flex items-center justify-center cursor-pointer focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E3A4C] focus-visible:outline-none"
          title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          aria-label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5 text-amber-300" />
          ) : (
            <Moon className="w-5 h-5 text-sky-200" />
          )}
        </motion.button>

        <AnimatePresence>
          {showScrollTop && (
            <>
              {/* Color Picker Toggle Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setPaletteOpen(!paletteOpen)}
                className="w-12 h-12 rounded-full bg-[#18475D] border border-white/15 text-[#F4F1EA] shadow-xl hover:bg-[#2A7187] transition-all duration-200 flex items-center justify-center cursor-pointer focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E3A4C] focus-visible:outline-none"
                title="Theme Color Picker"
                aria-label="Theme Color Picker"
                aria-expanded={paletteOpen}
              >
                <Palette className="w-5 h-5 text-[#35839C] hover:text-[#F4F1EA]" />
              </motion.button>

              {/* Scroll-To-Top Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToTop}
                className="w-12 h-12 rounded-full bg-[#18475D] border border-white/15 text-[#F4F1EA] shadow-xl hover:bg-[#2A7187] transition-all duration-200 flex items-center justify-center cursor-pointer focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E3A4C] focus-visible:outline-none"
                title="Scroll to top"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            </>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
};

