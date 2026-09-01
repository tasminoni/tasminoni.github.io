import React from 'react';
import { motion } from 'framer-motion';

export default function SectionTracker({
  index = "01",
  total = "08",
  tag = "// SECTION",
  title = "SECTION TITLE",
  subtitle = "",
  description = ""
}) {
  return (
    <div className="w-full mb-12 sm:mb-16">
      {/* Top Meta Line: [ 01 / 08 ] + Tag */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs sm:text-sm tracking-widest text-zinc-400 pb-3 border-b border-white/10"
      >
        <div className="flex items-center gap-2">
          <span className="text-crimson font-bold">[ {index} / {total} ]</span>
          <span className="text-zinc-600">/</span>
          <span className="text-zinc-300 uppercase tracking-widest font-mono">{tag}</span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-zinc-500 font-mono">
          <span className="w-1.5 h-1.5 bg-crimson rounded-full" />
          <span>PRODUCTION-READY</span>
        </div>
      </motion.div>

      {/* Main Big Section Headline */}
      <div className="pt-6 sm:pt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-8"
        >
          {subtitle && (
            <div className="font-mono text-xs text-crimson font-semibold tracking-wider uppercase mb-2">
              {subtitle}
            </div>
          )}
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-paper uppercase leading-[1.05]">
            {title}
          </h2>
        </motion.div>

        {description && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 lg:pt-2"
          >
            <p className="font-sans text-sm sm:text-base text-zinc-400 leading-relaxed">
              {description}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
