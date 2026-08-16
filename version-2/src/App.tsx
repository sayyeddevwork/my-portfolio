import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { ArchitectureVisualization } from './components/ArchitectureVisualization';
import { EngineeringPrinciples } from './components/EngineeringPrinciples';
import { EngineeringNotes } from './components/EngineeringNotes';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ShortcutHint } from './components/ShortcutHint';
import { ErrorBoundary, SectionErrorFallback } from './components/ErrorBoundary';
import { useSectionShortcuts } from './hooks/useSectionShortcuts';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);

  useSectionShortcuts();

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-600 selection:text-white antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-blue-600 focus:text-white focus:text-xs focus:font-semibold"
        >
          Skip to main content
        </a>

        <Navbar onOpenResume={() => setResumeModalOpen(true)} />

        <main id="main-content">
          <ErrorBoundary fallback={<SectionErrorFallback label="Hero" />}>
            <Hero onOpenResume={() => setResumeModalOpen(true)} />
          </ErrorBoundary>
          <About />
          <ErrorBoundary fallback={<SectionErrorFallback label="Experience" />}>
            <Experience />
          </ErrorBoundary>
          <ErrorBoundary fallback={<SectionErrorFallback label="Projects" />}>
            <Projects />
          </ErrorBoundary>
          <ErrorBoundary fallback={<SectionErrorFallback label="Architecture" />}>
            <ArchitectureVisualization />
          </ErrorBoundary>
          <ErrorBoundary fallback={<SectionErrorFallback label="Engineering Principles" />}>
            <EngineeringPrinciples />
          </ErrorBoundary>
          <ErrorBoundary fallback={<SectionErrorFallback label="Engineering Notes" />}>
            <EngineeringNotes />
          </ErrorBoundary>
          <ErrorBoundary fallback={<SectionErrorFallback label="Skills" />}>
            <Skills />
          </ErrorBoundary>
          <Contact />
        </main>

        <Footer />

        <ShortcutHint />

        <ResumeModal
          isOpen={resumeModalOpen}
          onClose={() => setResumeModalOpen(false)}
        />
      </div>
    </ErrorBoundary>
  );
}