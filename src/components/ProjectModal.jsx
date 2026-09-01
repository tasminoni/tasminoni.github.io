import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Layers, CheckCircle2, Zap, Server, ShieldCheck } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-void/90 backdrop-blur-md"
          />

          {/* Modal Dialog Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-surface border border-white/20 shadow-2xl overflow-y-auto z-10 text-paper"
          >
            {/* Modal Header Bar */}
            <div className="sticky top-0 z-20 bg-surface/95 backdrop-blur-md border-b border-white/10 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-crimson" />
                <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                  PROJECT DETAILS // [{project.category.toUpperCase()}]
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 border border-white/20 hover:border-crimson hover:text-crimson text-zinc-400 transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-8">
              {/* Title & Subtitle */}
              <div>
                <div className="font-mono text-xs text-crimson uppercase tracking-wider mb-1">
                  {project.subtitle}
                </div>
                <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-paper uppercase tracking-tight">
                  {project.title}
                </h2>
              </div>

              {/* Project Image Banner if available */}
              {project.image ? (
                <div className="relative border border-white/15 overflow-hidden bg-void/60 aspect-video group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent" />
                </div>
              ) : (
                <div className="p-8 border border-dashed border-white/20 bg-void/40 flex flex-col items-center justify-center text-center space-y-3">
                  <Server size={36} className="text-crimson animate-pulse" />
                  <div className="font-mono text-sm text-zinc-300">
                    PROJECT CODEBASE & SYSTEM ARCHITECTURE
                  </div>
                  <p className="font-mono text-xs text-zinc-500 max-w-md">
                    Backend logic, database schema, and controllers.
                  </p>
                </div>
              )}

              {/* Tech Stack Badges */}
              <div className="space-y-2">
                <div className="font-mono text-xs text-zinc-400 uppercase tracking-widest">
                  // TECHNOLOGIES USED
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-void border border-white/15 font-mono text-xs text-zinc-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Problem vs Solution Matrix */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
                <div className="p-5 border border-white/10 bg-void/50 space-y-2">
                  <div className="flex items-center gap-2 font-mono text-xs text-rose-400 font-bold uppercase tracking-wider">
                    <Zap size={14} />
                    <span>01. THE PROBLEM</span>
                  </div>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="p-5 border border-white/10 bg-void/50 space-y-2">
                  <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 font-bold uppercase tracking-wider">
                    <CheckCircle2 size={14} />
                    <span>02. THE SOLUTION</span>
                  </div>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Architectural Highlights */}
              {project.architecture && (
                <div className="space-y-3 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 uppercase tracking-widest">
                    <Layers size={14} className="text-crimson" />
                    <span>TECHNICAL HIGHLIGHTS & ARCHITECTURE</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.architecture.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 border border-white/5 bg-void/30 text-xs font-mono text-zinc-300"
                      >
                        <span className="text-crimson font-bold">›</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Impact / Performance Metric */}
              {project.metrics && (
                <div className="p-4 border border-crimson/30 bg-crimson/5 flex items-center gap-3">
                  <ShieldCheck size={20} className="text-crimson flex-shrink-0" />
                  <div className="font-mono text-xs text-zinc-200">
                    <span className="text-crimson font-bold">KEY HIGHLIGHT: </span>
                    {project.metrics}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-crimson hover:bg-crimson-hover text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-[3px_3px_0px_rgba(255,255,255,0.2)]"
                    >
                      <span>VIEW LIVE DEMO</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 hover:border-white bg-void text-paper hover:text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      <Github size={14} />
                      <span>VIEW ON GITHUB</span>
                    </a>
                  )}
                </div>

                <button
                  onClick={onClose}
                  className="px-4 py-2 border border-white/10 hover:border-white/30 text-zinc-400 font-mono text-xs tracking-wider uppercase transition-colors"
                >
                  CLOSE
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
