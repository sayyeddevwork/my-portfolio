import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('projects');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['projects', 'about', 'tech', 'services', 'education', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', id: 'projects', href: '#projects' },
    { name: 'About', id: 'about', href: '#about' },
    { name: 'Tech', id: 'tech', href: '#tech' },
    { name: 'Services', id: 'services', href: '#services' },
    { name: 'Education', id: 'education', href: '#education' },
    { name: 'Testimonials', id: 'testimonials', href: '#testimonials' },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8 pointer-events-none">
      <div className="max-w-6xl mx-auto bg-[#184F64]/90 backdrop-blur-md border border-white/15 rounded-full px-5 md:px-7 py-2.5 md:py-3 flex items-center justify-between shadow-2xl shadow-black/40 pointer-events-auto">
        
        {/* Left: Brand Logo */}
        <a
          href="#"
          id="nav-logo"
          className="flex items-center gap-2.5 group rounded-full px-1.5 py-1 focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#184F64] focus-visible:outline-none"
          aria-label="Sayyed Vali Portfolio Home"
        >
          <div className="w-7 h-7 rounded-full border-2 border-white/80 flex items-center justify-center text-white font-bold text-xs tracking-tighter group-hover:bg-white group-hover:text-[#184F64] transition-all shadow-sm">
            S
          </div>
          <span className="font-space font-semibold text-white text-base md:text-lg tracking-tight group-hover:text-[#F4F1EA] transition-colors">
            Sayyed Vali
          </span>
        </a>

        {/* Right: Desktop Links matching screenshot */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                id={`nav-link-${link.id}`}
                className={`transition-colors relative py-1 px-2 rounded-md text-white hover:text-white/90 focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#184F64] focus-visible:outline-none ${
                  isActive ? 'font-semibold' : 'text-white/80 font-normal'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-white rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}

          {/* 'Get In Touch' as link in navbar list */}
          <button
            id="nav-cta-get-in-touch"
            onClick={onContactClick}
            className={`transition-colors relative py-1 px-3 rounded-full text-white hover:text-white/90 font-medium cursor-pointer focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#184F64] focus-visible:outline-none ${
              activeSection === 'contact' ? 'font-semibold bg-white/10' : 'text-white/90 hover:bg-white/5'
            }`}
          >
            Get In Touch
            {activeSection === 'contact' && (
              <motion.div
                layoutId="activeNavIndicator"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-white rounded-full"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          id="nav-mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 active:scale-95 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#184F64] focus-visible:outline-none"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          <motion.div
            initial={false}
            animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </motion.div>
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -12, scaleY: 0.95 }}
            animate={{ opacity: 1, height: 'auto', y: 0, scaleY: 1 }}
            exit={{ opacity: 0, height: 0, y: -12, scaleY: 0.95 }}
            transition={{
              height: { type: 'spring', stiffness: 320, damping: 28 },
              opacity: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
              y: { type: 'spring', stiffness: 320, damping: 28 },
              scaleY: { duration: 0.2 }
            }}
            style={{ transformOrigin: 'top center' }}
            className="lg:hidden mt-2 max-w-6xl mx-auto bg-[#184F64]/98 border border-white/15 rounded-3xl backdrop-blur-xl overflow-hidden p-6 shadow-2xl shadow-black/60 pointer-events-auto"
          >
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.04, delayChildren: 0.05 } },
                closed: { transition: { staggerChildren: 0.02, staggerDirection: -1 } }
              }}
              className="flex flex-col gap-1"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  variants={{
                    open: { opacity: 1, y: 0, x: 0 },
                    closed: { opacity: 0, y: -8, x: -6 }
                  }}
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  className="text-base font-medium text-white/90 hover:text-white py-2.5 px-3 rounded-xl hover:bg-white/10 border-b border-white/10 last:border-none flex items-center justify-between transition-colors group focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#184F64] focus-visible:outline-none"
                >
                  <span>{link.name}</span>
                  <span className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all text-xs">→</span>
                </motion.a>
              ))}
              <motion.div
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: -8 }
                }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className="pt-2"
              >
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onContactClick();
                  }}
                  className="w-full rounded-full bg-white text-[#184F64] font-semibold py-3 text-center transition-all hover:bg-[#F4F1EA] hover:shadow-lg active:scale-[0.98] shadow-md text-sm cursor-pointer focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#184F64] focus-visible:outline-none"
                >
                  Get In Touch
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

