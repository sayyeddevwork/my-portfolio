import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ScrollProgress } from './ScrollProgress';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'experience', 'projects', 'architecture', 'skills', 'contact'];
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
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <ScrollProgress />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1"
            id="brand-logo-link"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center font-mono font-bold text-white text-lg shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              SV
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-slate-100 tracking-tight text-base sm:text-lg leading-tight group-hover:text-blue-400 transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-xs text-slate-400 font-mono tracking-wide hidden sm:block">
                Senior Full-Stack Engineer & Tech Lead
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-sm">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  id={`nav-link-${sectionId}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle />

            <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 bg-emerald-950/40 border border-emerald-800/60 rounded-full text-xs text-emerald-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{PERSONAL_INFO.availability}</span>
            </div>

            <button
              onClick={onOpenResume}
              id="header-resume-button"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-medium transition-all hover:border-slate-600 shadow-sm active:scale-95 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>Resume</span>
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />

            <button
              onClick={onOpenResume}
              id="mobile-header-resume-button"
              className="p-2 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 text-xs"
              aria-label="View Resume"
            >
              <FileText className="w-4 h-4 text-blue-400" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-button"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              className="p-2 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden mt-3 p-4 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl space-y-2 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm text-slate-200 hover:bg-slate-800 hover:text-blue-400 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 px-3">
              <span className="flex items-center gap-1.5 text-emerald-400 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {PERSONAL_INFO.location}
              </span>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="text-blue-400 font-semibold flex items-center gap-1"
              >
                Open Resume <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
