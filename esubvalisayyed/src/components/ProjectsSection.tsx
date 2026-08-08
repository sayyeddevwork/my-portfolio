import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Github, ExternalLink, Sparkles } from 'lucide-react';
import { PROJECTS_DATA } from '../data';
import { Project } from '../types';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Full Stack', 'Mobile/PWA', 'AI/SaaS'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 md:py-32 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0C3C48] border border-white/10 text-[#9FB4BE] text-sm font-medium uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#2A7187]" />
            <span>Projects</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-space font-bold text-[#F4F1EA] max-w-2xl leading-tight">
            Where Creativity Meets Meaningful Results
          </h2>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-3 mb-12 flex-wrap" role="tablist" aria-label="Project categories">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`project-tab-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              role="tab"
              aria-selected={selectedCategory === cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E3A4C] focus-visible:outline-none ${
                selectedCategory === cat
                  ? 'bg-[#2A7187] text-[#F4F1EA] shadow-md shadow-black/20 font-semibold'
                  : 'bg-[#18475D]/60 hover:bg-[#18475D] text-[#9FB4BE] hover:text-[#F4F1EA] border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: Project, index: number) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-[#18475D] rounded-2xl border border-white/10 overflow-hidden shadow-xl shadow-black/30 hover:-translate-y-2 hover:border-[#2A7187] hover:shadow-2xl hover:shadow-[#2A7187]/10 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Thumbnail */}
                <div>
                  <div className="relative aspect-video w-full overflow-hidden bg-[#0E3A4C]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#18475D] via-transparent to-transparent opacity-60" />
                    
                    {/* Category Badge */}
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0C3C48]/90 backdrop-blur-md text-[#F4F1EA] text-xs font-mono border border-white/10">
                      {project.category}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-space text-[#F4F1EA] group-hover:text-[#35839C] transition-colors mb-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-[#9FB4BE] line-clamp-2 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-[#0C3C48] text-[#9FB4BE] text-xs font-medium border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="px-6 pb-6 pt-2 border-t border-white/5 flex items-center justify-between mt-auto">
                  <span className="text-xs text-[#6E8792] font-mono flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#2A7187]" />
                    Featured Work
                  </span>

                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-full bg-[#0C3C48] flex items-center justify-center text-[#9FB4BE] hover:text-[#F4F1EA] hover:bg-[#2A7187] transition-all focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#18475D] focus-visible:outline-none"
                        aria-label={`View ${project.title} source code on Github`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-full bg-[#2A7187] flex items-center justify-center text-[#F4F1EA] hover:bg-[#35839C] transition-all focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#18475D] focus-visible:outline-none"
                        aria-label={`Open live demo for ${project.title}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
