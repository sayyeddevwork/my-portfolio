import React from 'react';
import { Code2, Bot, Server, CheckCircle2, Terminal, Activity, Cloud, Users, Lock, TestTube } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const engineeringPillars = [
    {
      icon: <Server className="w-4 h-4 text-blue-400" />,
      title: "1. Architecture",
      description: "Layered microservices and domain isolation. Decouple client-facing APIs from heavy backend processing using strict contract governance and event streams."
    },
    {
      icon: <Activity className="w-4 h-4 text-cyan-400" />,
      title: "2. Performance",
      description: "Event-loop and async I/O patterns, query indexing, and client bundle splitting to keep initial load fast."
    },
    {
      icon: <Terminal className="w-4 h-4 text-emerald-400" />,
      title: "3. Reliability",
      description: "SIGTERM graceful termination engines, HTTP connection draining timeouts, circuit breakers, and Kafka dead-letter queue (DLQ) retry handlers."
    },
    {
      icon: <TestTube className="w-4 h-4 text-blue-400" />,
      title: "4. Testing",
      description: "Automated test coverage strategies using Jest for unit/integration logic and Playwright for real browser end-to-end user workflows in CI/CD pipelines."
    },
    {
      icon: <Activity className="w-4 h-4 text-cyan-400" />,
      title: "5. Observability",
      description: "Correlation ID request tracking with Pino structured JSON logging, Dynatrace APM trace profiling, and Kubernetes `/healthz` (liveness) & `/readyz` (readiness) probes."
    },
    {
      icon: <Lock className="w-4 h-4 text-indigo-400" />,
      title: "6. Security",
      description: "OAuth 2.0 PKCE grant flow, Okta SSO, Azure AD enterprise integration, fine-grained RBAC policies, and Azure APIM gateway token validation."
    },
    {
      icon: <Cloud className="w-4 h-4 text-cyan-400" />,
      title: "7. Cloud & Infrastructure",
      description: "Containerized deployment via Docker multi-stage builds on Azure Kubernetes Service (AKS) with automated releases through Azure DevOps and Jenkins."
    },
    {
      icon: <Users className="w-4 h-4 text-indigo-400" />,
      title: "8. Technical Leadership",
      description: "Code review standards, architectural decision records (ADRs), mentoring, and leading teams of 6–8 engineers."
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-900/60 border-t border-slate-800/80 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-800/60 text-xs font-mono text-blue-400 uppercase tracking-widest">
            Profile & Approach
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Engineering Leadership & Technical Depth
          </h2>
          <p className="text-slate-400 max-w-3xl text-base leading-relaxed">
            Hands-on Technical Lead and Senior Software Engineer. Design, architecture, and production delivery across banking, identity management, and government sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-6 text-slate-300 leading-relaxed text-sm">
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4 shadow-sm">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Code2 className="w-5 h-5 text-blue-400" />
                Production Ownership & Systems Experience
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                15+ years building full-stack systems (Aug 2010 – present). Experience designing decoupled microservices with <strong className="text-slate-100">Node.js, Express, TypeScript, and React</strong>, backed by message streaming with <strong className="text-slate-100">Apache Kafka</strong> and automated test coverage.
              </p>
              <p className="text-xs text-slate-300 leading-relaxed">
                Customer Identity & Access Management (<strong className="text-slate-100">CIAM</strong>) delivery experience implementing <strong className="text-slate-100">OAuth 2.0, JWT, Azure AD, Okta SSO</strong>, and fine-grained <strong className="text-slate-100">RBAC</strong> policies across API gateways (<strong className="text-slate-100">Azure APIM</strong>).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4 shadow-sm">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Bot className="w-5 h-5 text-emerald-400" />
                AI-Assisted Engineering Practices
              </h3>
              <ul className="space-y-2 text-xs pt-1">
                <li className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-200 block text-[11px]">AI-Assisted Coding & Code Review</strong>
                    <span className="text-[11px] text-slate-400">GitHub Copilot-assisted review and delivery workflows.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center justify-between">
              <span>Engineering Approach & Production Mindset</span>
              <span className="text-blue-400 text-[11px]">8 Core Discipline Pillars</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {engineeringPillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 hover:border-slate-700 transition-colors flex flex-col justify-between space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800">
                      {pillar.icon}
                    </div>
                    <h4 className="text-xs font-bold text-slate-100 font-mono">{pillar.title}</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
