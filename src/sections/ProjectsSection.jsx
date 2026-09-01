import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Server } from 'lucide-react';
import SectionTracker from '../components/SectionTracker';
import { projectsData } from '../data/portfolioData';

export default function ProjectsSection({ onSelectProject }) {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'ALL PROJECTS' },
    { id: 'web', label: 'WEB APPS & POS' },
    { id: 'game', label: 'GAMES & OPENGL' },
    { id: 'ml/ai', label: 'ML / AI MODELS' },
    { id: 'others', label: 'IOT & HARDWARE' }
  ];

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 sm:py-28 bg-void border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTracker
          index="05"
          total="08"
          tag="// MY WORK // FEATURED PROJECTS"
          title="FEATURED PROJECTS & SYSTEM ARCHITECTURES"
          subtitle="APPLICATIONS I'VE BUILT & CONTRIBUTED TO"
          description="A selection of full-stack web applications, retail POS systems, academic portals, and software engineering projects."
        />

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-6 border-b border-white/10">
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest mr-2 hidden sm:inline-block">
            FILTER BY CATEGORY:
          </span>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
                filter === cat.id
                  ? 'bg-crimson text-white font-bold shadow-[2px_2px_0px_#FFFFFF]'
                  : 'bg-surface border border-white/10 text-zinc-400 hover:text-white hover:border-white/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-surface border border-white/10 hover:border-crimson transition-all duration-300 flex flex-col justify-between group overflow-hidden hover:shadow-[6px_6px_0px_#F44849]"
              >
                <div>
                  {/* Project Image Banner or Visual Placeholder */}
                  {project.image ? (
                    <div className="relative aspect-video overflow-hidden bg-void/80 border-b border-white/10">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80" />
                      
                      {/* Top Overlay Badge */}
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="px-2.5 py-1 bg-void/90 border border-white/20 font-mono text-[10px] font-bold text-crimson uppercase tracking-wider">
                          {project.category.toUpperCase()}
                        </span>
                        {project.featured && (
                          <span className="px-2.5 py-1 bg-crimson text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                            PRODUCTION
                          </span>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="p-6 bg-void/50 border-b border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2 font-mono text-xs text-crimson font-bold">
                        <Server size={16} />
                        <span>[{project.category.toUpperCase()} PROJECT]</span>
                      </div>
                      <span className="font-mono text-[11px] text-zinc-500">
                        OPEN SOURCE // REPOSITORY
                      </span>
                    </div>
                  )}

                  {/* Project Card Content */}
                  <div className="p-6 sm:p-8 space-y-4">
                    <div>
                      <div className="font-mono text-xs text-zinc-400 uppercase tracking-wider mb-1">
                        {project.subtitle}
                      </div>
                      <h3 className="font-display text-xl sm:text-2xl font-extrabold text-paper uppercase tracking-tight group-hover:text-crimson transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    {/* Brief Problem / Solution */}
                    <p className="font-sans text-sm text-zinc-300 leading-relaxed line-clamp-3">
                      {project.solution}
                    </p>

                    {/* Tech Badges */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 bg-void border border-white/10 font-mono text-[11px] text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Card Actions */}
                <div className="p-6 sm:p-8 pt-0 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 mt-4">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-2 font-mono text-xs font-bold text-paper hover:text-crimson transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <span>VIEW DETAILS & ARCHITECTURE</span>
                    <ArrowRight size={14} className="text-crimson" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border border-white/15 hover:border-crimson hover:bg-crimson text-paper hover:text-white transition-all"
                        title="Open Live Project"
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border border-white/15 hover:border-white hover:bg-void text-paper hover:text-white transition-all"
                        title="View Source Code on GitHub"
                      >
                        <Github size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub Full Archive CTA */}
        <div className="mt-16 p-8 border border-white/10 bg-surface flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="font-mono text-xs text-crimson uppercase tracking-widest font-bold">
              // GITHUB REPOSITORIES
            </div>
            <div className="font-display text-xl sm:text-2xl font-black text-paper uppercase">
              CHECK OUT MY CODE REPOSITORIES ON GITHUB
            </div>
          </div>

          <a
            href="https://github.com/tasminoni"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/20 hover:border-crimson bg-void text-paper hover:text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-[3px_3px_0px_#F44849]"
          >
            <Github size={16} />
            <span>VISIT GITHUB PROFILE</span>
          </a>
        </div>
      </div>
    </section>
  );
}
