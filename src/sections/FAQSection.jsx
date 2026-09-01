import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import SectionTracker from '../components/SectionTracker';
import { faqData } from '../data/portfolioData';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleQuestion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-void border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTracker
          index="07"
          total="08"
          tag="// FREQUENTLY ASKED QUESTIONS"
          title="FREQUENTLY ASKED QUESTIONS"
          subtitle="ABOUT MY BACKGROUND & WORK"
          description="Quick answers regarding my technical background, frameworks, experience, and educational journey."
        />

        <div className="space-y-4 max-w-4xl mx-auto">
          {faqData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`border transition-all duration-300 ${
                  isOpen
                    ? 'border-crimson bg-surface shadow-[4px_4px_0px_#F44849]'
                    : 'border-white/10 bg-surface/60 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleQuestion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm text-crimson font-bold">
                      [ Q{idx + 1 < 10 ? `0${idx + 1}` : idx + 1} ]
                    </span>
                    <h3 className="font-display text-base sm:text-lg font-bold text-paper uppercase tracking-tight">
                      {faq.question}
                    </h3>
                  </div>

                  <div className="p-1.5 border border-white/10 bg-void flex-shrink-0 text-zinc-300">
                    {isOpen ? <Minus size={16} className="text-crimson" /> : <Plus size={16} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 pt-1 text-sm sm:text-base font-sans text-zinc-300 leading-relaxed border-t border-white/5"
                    >
                      <div className="p-4 bg-void/50 border border-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
