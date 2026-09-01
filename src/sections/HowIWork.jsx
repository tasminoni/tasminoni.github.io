import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Cpu, Gauge, Rocket, ArrowRight } from 'lucide-react';
import SectionTracker from '../components/SectionTracker';
import { sprintPhases } from '../data/portfolioData';

export default function HowIWork() {
  const getPhaseIcon = (phase) => {
    switch (phase) {
      case "01": return <Compass className="text-crimson" size={26} />;
      case "02": return <Cpu className="text-crimson" size={26} />;
      case "03": return <Gauge className="text-crimson" size={26} />;
      case "04": return <Rocket className="text-crimson" size={26} />;
      default: return <Compass className="text-crimson" size={26} />;
    }
  };

  return (
    <section id="workflow" className="py-20 sm:py-28 bg-void border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTracker
          index="03"
          total="08"
          tag="// DEVELOPMENT WORKFLOW"
          title="HOW I SOLVE PROBLEMS & WRITE CODE"
          subtitle="4-PHASE ENGINEERING LIFECYCLE"
          description="My structured methodology for turning complex software requirements into clean, well-architected, and fully tested applications."
        />

        {/* 4-Phase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {sprintPhases.map((phase, idx) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 bg-surface border border-white/10 hover:border-crimson transition-all duration-300 relative group flex flex-col justify-between hover:shadow-[4px_4px_0px_#F44849]"
            >
              <div>
                {/* Header Tag + Big Phase Number */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-2 border border-white/10 bg-void group-hover:border-crimson transition-colors">
                      {getPhaseIcon(phase.phase)}
                    </div>
                    <span className="font-mono text-xs text-crimson font-bold uppercase tracking-wider">
                      {phase.badge}
                    </span>
                  </div>
                  <span className="font-display text-4xl sm:text-5xl font-black text-white/20 group-hover:text-crimson/50 transition-colors">
                    {phase.phase}
                  </span>
                </div>

                {/* Phase Title & Subtitle */}
                <div className="space-y-1 mb-4">
                  <div className="font-mono text-xs text-zinc-400">
                    {phase.subtitle}
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-extrabold text-paper uppercase tracking-tight group-hover:text-white transition-colors">
                    {phase.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="font-sans text-sm text-zinc-300 leading-relaxed mb-6">
                  {phase.description}
                </p>

                {/* Key Execution Actions */}
                <div className="space-y-2.5 pt-4 border-t border-white/10">
                  <div className="font-mono text-[11px] text-zinc-500 uppercase tracking-widest">
                    // CORE EXECUTION STEPS
                  </div>
                  {phase.keyActions.map((action, actionIdx) => (
                    <div key={actionIdx} className="flex items-start gap-2.5 text-xs font-mono text-zinc-300">
                      <span className="text-crimson font-bold">›</span>
                      <span>{action}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Footer Status */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[11px] text-zinc-500">
                <span>PHASE {phase.phase} OF 04</span>
                <span className="text-emerald-400">STRUCTURED APPROACH</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Workflow Philosophy Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 p-6 sm:p-8 bg-surface/50 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-1 text-center md:text-left">
            <div className="font-mono text-xs text-crimson font-bold uppercase tracking-widest">
              // ENGINEERING STANDARD
            </div>
            <div className="font-display text-xl sm:text-2xl font-black text-paper uppercase">
              WRITE CODE THAT IS ROBUST, READABLE, AND BUILT TO SCALE.
            </div>
          </div>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-crimson hover:bg-crimson-hover text-white font-mono text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap shadow-[3px_3px_0px_#FFFFFF]"
          >
            <span>VIEW MY PROJECTS</span>
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
