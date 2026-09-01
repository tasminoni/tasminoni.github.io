import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, ExternalLink, Calendar, MapPin } from 'lucide-react';
import SectionTracker from '../components/SectionTracker';
import { experienceData, educationData } from '../data/portfolioData';

export default function ExperienceMatrix({ onOpenCertificate }) {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-void border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTracker
          index="06"
          total="08"
          tag="// TRACK RECORD // CAREER & EDUCATION"
          title="EXPERIENCE TIMELINE & ACADEMIC PEDIGREE"
          subtitle="COMMERCIAL PRACTICE & ENGINEERING FOUNDATION"
          description="Proven track record in fast-paced software engineering roles, enterprise units, and top-tier academic performance."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Commercial Experience */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-3 pb-3 border-b border-white/10">
              <Briefcase className="text-crimson" size={20} />
              <h3 className="font-display text-xl font-extrabold text-paper uppercase tracking-tight">
                COMMERCIAL SOFTWARE ENGINEERING ROLES
              </h3>
            </div>

            <div className="space-y-6">
              {experienceData.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-6 sm:p-7 bg-surface border border-white/10 hover:border-crimson transition-all duration-300 relative group hover:shadow-[4px_4px_0px_#F44849]"
                >
                  {/* Top Meta Line */}
                  <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-zinc-400 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-crimson font-bold">[{exp.type}]</span>
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 text-zinc-500">
                      <MapPin size={12} />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Role Title & Company */}
                  <div className="mb-3">
                    <h4 className="font-display text-lg sm:text-xl font-extrabold text-paper uppercase tracking-tight group-hover:text-crimson transition-colors">
                      {exp.role}
                    </h4>
                    <div className="font-mono text-xs font-bold text-zinc-300 uppercase">
                      {exp.company}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-sm text-zinc-300 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10">
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 bg-void border border-white/10 font-mono text-[10px] text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {exp.certImage && (
                      <button
                        onClick={() => onOpenCertificate(exp.certImage, exp.company)}
                        className="inline-flex items-center gap-1.5 font-mono text-xs text-crimson hover:underline font-bold"
                      >
                        <Award size={14} />
                        <span>VIEW CERTIFICATE</span>
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Academic Pedigree */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3 pb-3 border-b border-white/10">
              <GraduationCap className="text-crimson" size={20} />
              <h3 className="font-display text-xl font-extrabold text-paper uppercase tracking-tight">
                ACADEMIC CREDENTIALS
              </h3>
            </div>

            <div className="space-y-6">
              {educationData.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-6 bg-surface border border-white/10 hover:border-crimson transition-all duration-300 relative group"
                >
                  <div className="flex items-center justify-between font-mono text-xs text-zinc-400 mb-2">
                    <span>{edu.duration}</span>
                    <span className="text-amber-400 font-bold bg-amber-400/10 px-2 py-0.5 border border-amber-400/30">
                      {edu.cgpa}
                    </span>
                  </div>

                  <h4 className="font-display text-base sm:text-lg font-extrabold text-paper uppercase tracking-tight group-hover:text-crimson transition-colors mb-1">
                    {edu.degree}
                  </h4>
                  <div className="font-mono text-xs text-zinc-300 font-bold uppercase mb-3">
                    {edu.institution}
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed mb-3">
                    {edu.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                    {edu.highlights.map((h, hIdx) => (
                      <span
                        key={hIdx}
                        className="px-2 py-0.5 bg-void border border-white/10 font-mono text-[10px] text-zinc-300"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
