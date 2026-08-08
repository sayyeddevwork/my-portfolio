import React from 'react';
import { SEO } from './components/SEO';
import { LoadingScreen } from './components/LoadingScreen';
import { FallingStars } from './components/FallingStars';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AboutSection } from './components/AboutSection';
import { TechStackSection } from './components/TechStackSection';
import { ServicesSection } from './components/ServicesSection';
import { EducationSection } from './components/EducationSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingUtilities } from './components/FloatingUtilities';

export default function App() {
  const handleScrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0E3A4C] text-[#9FB4BE] relative font-inter overflow-x-hidden">
      {/* Global Page Transition & Loading Screen */}
      <LoadingScreen />

      {/* Dynamic Meta & SEO Head configuration */}
      <SEO />

      {/* Global Background: Continuous Slow-Falling Star Particles */}
      <FallingStars />

      {/* Sticky Glassmorphism Navbar */}
      <Navbar onContactClick={handleScrollToContact} />

      {/* Main Sections */}
      <main className="relative z-10">
        <HeroSection onContactClick={handleScrollToContact} />
        <ProjectsSection />
        <AboutSection />
        <TechStackSection />
        <ServicesSection onContactClick={handleScrollToContact} />
        <EducationSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Utilities (Scroll-To-Top & Theme Palette Picker) */}
      <FloatingUtilities />
    </div>
  );
}
