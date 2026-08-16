import React, { useState } from 'react';
import { ArrowRight, ExternalLink, Github, Server, Database } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'microservices', label: 'Microservices & Event Mesh' },
    { id: 'iam-security', label: 'IAM & Security' },
    { id: 'cloud-devops', label: 'Cloud & Portal Systems' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-slate-900/40 border-t border-slate-800/80 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-800/60 text-xs font-mono text-blue-400 uppercase tracking-widest">
            Production Software & Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Selected Projects & Technical Write-ups
          </h2>
          <p className="text-slate-400 max-w-3xl text-base leading-relaxed">
            Microservice platforms, security gateways, and cloud architectures from professional delivery and independent engineering. Select any project for a technical breakdown.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 border-b border-slate-800/80 pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              id={`project-filter-${cat.id}`}
              className={`px-4 py-2 rounded-xl text-xs font-medium font-mono transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'bg-slate-950 text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-950 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 transition-all hover:shadow-xl hover:shadow-blue-500/5 group"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-blue-950/80 text-blue-400 border border-blue-800/80 text-[11px] font-mono uppercase tracking-wider">
                      {project.category.replace('-', ' ')}
                    </span>
                    {project.projectOrigin && (
                      <span className="px-2.5 py-1 rounded-md bg-slate-900 text-slate-400 border border-slate-800 text-[11px] font-mono">
                        {project.projectOrigin}
                      </span>
                    )}
                  </div>
                  {!project.githubUrl && !project.demoUrl && (
                    <span className="px-2.5 py-1 rounded-md bg-slate-950 text-slate-500 border border-slate-800 text-[11px] font-mono">
                      {project.sourceNote ?? 'Confidential — No Public Source'}
                    </span>
                  )}
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium">{project.subtitle}</p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.summary}
                </p>

                <div className="grid grid-cols-2 gap-2 text-xs pt-2">
                  {project.architecture.backend && (
                    <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800/80 text-slate-300 flex items-center gap-1.5 font-mono text-[11px]">
                      <Server className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span className="truncate">{project.architecture.backend}</span>
                    </div>
                  )}
                  {project.architecture.database && (
                    <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800/80 text-slate-300 flex items-center gap-1.5 font-mono text-[11px]">
                      <Database className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">{project.architecture.database}</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 text-[11px] font-mono rounded bg-slate-900 text-slate-400 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-900 flex items-center justify-between gap-4">
                <button
                  onClick={() => setSelectedProject(project)}
                  id={`project-details-btn-${project.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors group/btn cursor-pointer"
                >
                  <span>Read Engineering Write-up</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-3 text-slate-400">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                      title="GitHub Source"
                      aria-label={`${project.title} GitHub source`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 transition-colors"
                      title="Live Demo"
                      aria-label={`${project.title} live demo`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
