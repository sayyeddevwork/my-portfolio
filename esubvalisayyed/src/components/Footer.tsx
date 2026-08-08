import React from 'react';
import { ArrowUpRight, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#11475D] border-t border-white/10 pt-16 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a href="#" className="flex items-center gap-3 mb-4 group rounded-lg p-1 focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#11475D] focus-visible:outline-none" aria-label="Sayyed Vali Home">
              <div className="w-10 h-10 rounded-full bg-[#0C3C48] border border-white/15 flex items-center justify-center text-[#F4F1EA] font-bold text-[#2A7187]">
                SV
              </div>
              <span className="font-space font-bold text-xl text-[#F4F1EA]">
                Sayyed Vali
              </span>
            </a>

            <p className="text-sm text-[#9FB4BE] max-w-sm leading-relaxed mb-6">
              Senior Full Stack Engineer & Technical Lead portfolio featuring enterprise microservices, CIAM identity systems, and GenAI integrations.
            </p>

            <div className="text-xs text-[#6E8792] font-mono">
              Designed & Built for Sayyed Vali © {new Date().getFullYear()}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase text-[#7C97A3] tracking-widest mb-4">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-[#9FB4BE]">
              <li><a href="#projects" className="hover:text-[#F4F1EA] transition-colors focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#11475D] focus-visible:outline-none rounded-sm px-1">Projects</a></li>
              <li><a href="#about" className="hover:text-[#F4F1EA] transition-colors focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#11475D] focus-visible:outline-none rounded-sm px-1">About Me</a></li>
              <li><a href="#tech" className="hover:text-[#F4F1EA] transition-colors focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#11475D] focus-visible:outline-none rounded-sm px-1">Tech Stack</a></li>
              <li><a href="#services" className="hover:text-[#F4F1EA] transition-colors focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#11475D] focus-visible:outline-none rounded-sm px-1">Services</a></li>
              <li><a href="#education" className="hover:text-[#F4F1EA] transition-colors focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#11475D] focus-visible:outline-none rounded-sm px-1">Education & Certs</a></li>
              <li><a href="#testimonials" className="hover:text-[#F4F1EA] transition-colors focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#11475D] focus-visible:outline-none rounded-sm px-1">Testimonials</a></li>
            </ul>
          </div>

          {/* Capabilities */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase text-[#7C97A3] tracking-widest mb-4">
              Core Focus
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-[#9FB4BE]">
              <li>• Microservices & Event-Driven Architecture (Kafka)</li>
              <li>• Enterprise Banking & Financial Systems</li>
              <li>• Identity, Security & CIAM (OAuth 2.0, Okta, Azure AD)</li>
              <li>• Cloud Infrastructure (Azure AKS, APIM, GCP)</li>
              <li>• GenAI, LLMs & Agentic AI Workflows (MCP Protocol)</li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6E8792] gap-4">
          <p className="flex items-center gap-1">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-red-400 fill-current" />
            <span>for developers & innovators worldwide.</span>
          </p>

          <p className="font-mono">
            Sayyed Vali Portfolio System v2.4
          </p>
        </div>

      </div>
    </footer>
  );
};
