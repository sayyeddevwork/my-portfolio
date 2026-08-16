import React, { useState } from 'react';
import { Network, Server, Database, ShieldCheck, Cpu, Layers, Activity, Terminal } from 'lucide-react';
import { SYSTEM_ARCHITECTURE_NODES, ARCHITECTURE_FLOWS, ARCHITECTURE_KEY_DECISIONS } from '../data/portfolioData';
import { ArchitectureNode } from '../types';

export const ArchitectureVisualization: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>(SYSTEM_ARCHITECTURE_NODES[0].id);

  const selectedNode = SYSTEM_ARCHITECTURE_NODES.find((n) => n.id === selectedNodeId) || SYSTEM_ARCHITECTURE_NODES[0];

  const getCategoryIcon = (category: ArchitectureNode['category']) => {
    switch (category) {
      case 'frontend':
        return <Cpu className="w-4 h-4 text-blue-400" />;
      case 'gateway':
        return <ShieldCheck className="w-4 h-4 text-cyan-400" />;
      case 'identity':
        return <ShieldCheck className="w-4 h-4 text-indigo-400" />;
      case 'service':
        return <Server className="w-4 h-4 text-blue-400" />;
      case 'eventbus':
        return <Network className="w-4 h-4 text-purple-400" />;
      case 'database':
        return <Database className="w-4 h-4 text-emerald-400" />;
      default:
        return <Layers className="w-4 h-4 text-slate-400" />;
    }
  };

  return (
    <section id="architecture" className="py-20 bg-slate-950 text-slate-100 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-950/60 border border-purple-800/60 text-xs font-mono text-purple-400 uppercase tracking-widest">
            Reference Architecture Model
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            System Topology & Data Flow
          </h2>
          <p className="text-slate-400 max-w-3xl text-base leading-relaxed">
            How requests flow through the API gateway, identity layer, Node.js services, Kafka, data stores, and observability — and the reasoning behind each hop.
          </p>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center justify-between">
            <span>Reference Data Flow Topology (Click node to inspect)</span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <Activity className="w-3.5 h-3.5" /> Interactive Model
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {SYSTEM_ARCHITECTURE_NODES.map((node, index) => {
              const isSelected = node.id === selectedNodeId;
              return (
                <div key={node.id} className="relative flex flex-col items-center">
                  <button
                    onClick={() => setSelectedNodeId(node.id)}
                    id={`arch-node-btn-${node.id}`}
                    className={`w-full p-4 rounded-xl border text-left transition-all cursor-pointer space-y-2 h-full flex flex-col justify-between ${
                      isSelected
                        ? 'bg-slate-950 border-blue-500 shadow-md shadow-blue-500/10'
                        : 'bg-slate-950/60 border-slate-800 hover:bg-slate-950 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800">
                        {getCategoryIcon(node.category)}
                      </div>
                      <span className="text-[10px] font-mono text-slate-500">0{index + 1}</span>
                    </div>

                    <div>
                      <div className="text-xs font-bold text-white leading-snug">{node.label}</div>
                      <div className="text-[11px] text-slate-400 font-mono mt-1 line-clamp-1">{node.tech}</div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Data Flow & Communication Between Layers
            </h3>
            <div className="space-y-2">
              {ARCHITECTURE_FLOWS.map((flow, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 p-3 rounded-lg bg-slate-950 border border-slate-800/80 text-xs"
                >
                  <span className="font-mono font-semibold text-slate-200">{flow.from}</span>
                  <span className="text-slate-500 font-mono">→</span>
                  <span className="font-mono font-semibold text-blue-300">{flow.to}</span>
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400 font-mono text-[11px]">
                    {flow.mechanism}
                  </span>
                  <span className="text-slate-500 sm:ml-auto">{flow.note}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                  {getCategoryIcon(selectedNode.category)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{selectedNode.label}</h3>
                  <p className="text-xs text-blue-400 font-mono">{selectedNode.tech}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">
                  Layer: {selectedNode.category.toUpperCase()}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {selectedNode.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800/80 space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-blue-400" /> Protocols & Formats
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedNode.protocols.map((proto, idx) => (
                    <span key={idx} className="px-2.5 py-1 text-xs font-mono rounded bg-slate-950 text-slate-300 border border-slate-800">
                      {proto}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800/80 space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Security Controls
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedNode.securityControls.map((sec, idx) => (
                    <span key={idx} className="px-2.5 py-1 text-xs font-mono rounded bg-slate-950 text-emerald-300 border border-slate-800">
                      {sec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Key Architecture Decisions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {ARCHITECTURE_KEY_DECISIONS.map((decision, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1.5"
                >
                  <h4 className="text-xs font-bold text-slate-100">{decision.question}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{decision.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
