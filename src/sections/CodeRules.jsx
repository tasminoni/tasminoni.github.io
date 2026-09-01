import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import SectionTracker from '../components/SectionTracker';
import { codeRules } from '../data/portfolioData';

export default function CodeRules() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleRule = (idx) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="principles" className="py-20 sm:py-28 bg-void border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTracker
          index="04"
          total="08"
          tag="// CODING PRINCIPLES // MANIFESTO"
          title="MY CODING PRINCIPLES & STANDARDS"
          subtitle="CORE ENGINEERING VALUES"
          description="The personal principles and architectural standards I adhere to whenever I design systems, build APIs, or write user interfaces."
        />

        {/* Manifesto Rules List */}
        <div className="space-y-4">
          {codeRules.map((rule, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <motion.div
                key={rule.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`border transition-all duration-300 ${
                  isExpanded
                    ? 'border-crimson bg-surface shadow-[4px_4px_0px_#F44849]'
                    : 'border-white/10 bg-surface/60 hover:border-white/30 hover:bg-surface'
                }`}
              >
                {/* Rule Item Header Bar */}
                <button
                  onClick={() => toggleRule(idx)}
                  className="w-full p-6 sm:p-7 flex items-center justify-between gap-4 text-left transition-colors"
                >
                  <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                    <span className="font-mono text-xl sm:text-2xl font-black text-crimson">
                      RULE {rule.number}
                    </span>
                    <div>
                      <h3 className="font-display text-lg sm:text-2xl font-extrabold text-paper uppercase tracking-tight">
                        {rule.rule}
                      </h3>
                      <div className="font-sans text-xs sm:text-sm text-zinc-400 mt-0.5">
                        {rule.summary}
                      </div>
                    </div>
                  </div>

                  <div className="p-2 border border-white/10 bg-void flex-shrink-0 text-zinc-300">
                    {isExpanded ? <Minus size={16} className="text-crimson" /> : <Plus size={16} />}
                  </div>
                </button>

                {/* Expanded Detailed Rationale */}
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 sm:px-7 pb-6 pt-2 border-t border-white/10"
                  >
                    <div className="p-4 bg-void/60 border border-white/5 font-sans text-sm sm:text-base text-zinc-300 leading-relaxed">
                      <div className="font-mono text-[11px] text-crimson uppercase tracking-widest font-bold mb-1">
                        // MY PERSPECTIVE
                      </div>
                      {rule.description}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Editorial Quote Banner */}
        <div className="mt-12 p-6 sm:p-8 bg-surface border border-white/10 text-center space-y-2">
          <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
            // DEVELOPER COMMITMENT
          </div>
          <p className="font-display text-lg sm:text-2xl font-black text-paper uppercase max-w-3xl mx-auto">
            "WRITE CLEAN CODE TODAY THAT YOUR TEAM WILL APPRECIATE TOMORROW."
          </p>
        </div>
      </div>
    </section>
  );
}
