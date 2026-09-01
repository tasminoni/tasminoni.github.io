import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, ShoppingCart, Terminal, Shield } from 'lucide-react';
import SectionTracker from '../components/SectionTracker';
import MarqueeText from '../components/MarqueeText';
import { technicalExpertise, skillsData } from '../data/portfolioData';

export default function TechServices() {
  const [activeTab, setActiveTab] = useState(0);

  const getDomainIcon = (index) => {
    switch (index) {
      case 0: return <Code className="text-crimson" size={24} />;
      case 1: return <Server className="text-crimson" size={24} />;
      case 2: return <Database className="text-crimson" size={24} />;
      case 3: return <ShoppingCart className="text-crimson" size={24} />;
      case 4: return <Terminal className="text-crimson" size={24} />;
      case 5: return <Shield className="text-crimson" size={24} />;
      default: return <Code className="text-crimson" size={24} />;
    }
  };

  return (
    <section id="expertise" className="py-20 sm:py-28 bg-void border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTracker
          index="02"
          total="08"
          tag="// TECHNICAL EXPERTISE & ARSENAL"
          title="CORE EXPERTISE & TECH STACK"
          subtitle="WHAT I BUILD & SPECIALIZE IN"
          description="My core technical competencies across full-stack web development, backend engineering, databases, and modern software tools."
        />

        {/* 6 Grid Domain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {technicalExpertise.map((domain, idx) => (
            <motion.div
              key={domain.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-6 sm:p-8 bg-surface border border-white/10 hover:border-crimson transition-all duration-300 group flex flex-col justify-between hover:shadow-[4px_4px_0px_#F44849]"
            >
              <div className="space-y-4">
                {/* Number & Icon */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-zinc-500 font-bold tracking-widest group-hover:text-crimson transition-colors">
                    // DOMAIN {domain.number}
                  </span>
                  <div className="p-2 border border-white/10 bg-void group-hover:border-crimson transition-colors">
                    {getDomainIcon(idx)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-extrabold text-paper uppercase tracking-tight group-hover:text-white transition-colors">
                  {domain.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm text-zinc-400 leading-relaxed">
                  {domain.description}
                </p>

                {/* Focus Areas Checklist */}
                <div className="pt-4 border-t border-white/10 space-y-2">
                  <div className="font-mono text-[11px] text-zinc-500 uppercase tracking-widest">
                    // KEY FOCUS AREAS
                  </div>
                  {domain.focusAreas.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                      <span className="text-crimson font-bold">›</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies List */}
              <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap gap-1.5">
                {domain.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 bg-void border border-white/10 font-mono text-[10px] text-zinc-400 group-hover:border-white/20 group-hover:text-zinc-200 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Deep Tech Arsenal Section Header */}
        <div className="pt-12 border-t border-white/10 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="font-mono text-xs text-crimson uppercase tracking-widest font-bold">
                // COMPREHENSIVE SKILLS MATRIX
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-paper uppercase tracking-tight">
                PROGRAMMING LANGUAGES & TOOLING
              </h3>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {skillsData.categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-all ${
                    activeTab === idx
                      ? 'bg-crimson text-white font-bold shadow-[2px_2px_0px_#FFFFFF]'
                      : 'bg-surface border border-white/15 text-zinc-400 hover:text-paper hover:border-white/30'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Selected Skill Category Matrix */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {skillsData.categories[activeTab].skills.map((skill, idx) => (
            <div
              key={idx}
              className="p-4 bg-surface border border-white/10 hover:border-crimson group flex items-center justify-between transition-all hover:translate-x-1"
            >
              <span className="font-mono text-sm font-semibold text-paper group-hover:text-crimson transition-colors">
                {skill}
              </span>
              <span className="font-mono text-[10px] text-zinc-500 group-hover:text-zinc-300">
                // 0{idx + 1}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Reverse Marquee Ticker */}
      <div className="mt-20">
        <MarqueeText
          items={skillsData.ticker}
          speed="fast"
          reverse={true}
          outline={true}
          className="bg-void border-white/10"
        />
      </div>
    </section>
  );
}
