import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Terminal, FileDown, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import MarqueeText from '../components/MarqueeText';

export default function HeroSection() {
  const [typingIndex, setTypingIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = [
    "FULL-STACK SOFTWARE ENGINEER",
    "BACKEND DEVELOPER",
    "FLUTTER DEVELOPER",
    "COMPUTER SCIENCE GRADUATE"
  ];

  useEffect(() => {
    const current = titles[typingIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(current.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setTypingIndex((prev) => (prev + 1) % titles.length);
        }
      }, 40);
    } else {
      timer = setTimeout(() => {
        setText(current.substring(0, text.length + 1));
        if (text.length === current.length) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      }, 70);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, typingIndex]);

  return (
    <section id="hero" className="relative pt-24 sm:pt-32 pb-16 overflow-hidden bg-void border-b border-white/10">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-crimson/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header Meta Tracker [ 01 / 08 ] */}
        <div className="flex items-center justify-between font-mono text-xs sm:text-sm text-zinc-400 pb-4 mb-8 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="text-crimson font-bold">[ 01 / 08 ]</span>
            <span className="text-zinc-600">/</span>
            <span className="text-zinc-300 font-mono tracking-widest">// PROFILE // PERSONAL PORTFOLIO</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-zinc-300 font-mono text-xs hidden sm:inline-block">OPEN TO OPPORTUNITIES</span>
          </div>
        </div>

        {/* Hero Main Headline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            {/* Top Identity Block with Round Profile Avatar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6"
            >
              {/* Round Avatar - Crisp, Clear & Prominent */}
              <div className="relative group shrink-0 w-max">
                <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-[3px] border-crimson p-1 bg-surface shadow-[0_0_25px_rgba(244,72,73,0.35)] group-hover:shadow-[0_0_40px_rgba(244,72,73,0.6)] transition-all duration-300">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src={personalInfo.profileImg}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover object-[center_18%] scale-135 rounded-full transition-transform duration-500 group-hover:scale-145"
                    />
                  </div>
                </div>
                {/* Active Status Pulse Dot */}
                <span
                  className="absolute bottom-1.5 right-1.5 w-5 h-5 rounded-full bg-emerald-500 border-[3px] border-void animate-pulse"
                  title="Available for Opportunities"
                />
              </div>

              {/* Status & Intro Details */}
              <div className="space-y-2 font-mono">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-surface border border-white/15 text-xs text-zinc-200 rounded-full shadow-md">
                  <span className="w-2 h-2 bg-crimson rounded-full animate-pulse shrink-0" />
                  <span className="text-xs font-semibold">SOFTWARE ENGINEER • UNITED GROUP (OSL)</span>
                </div>
                <div className="text-xs text-zinc-400 pl-1">
                  <span className="text-crimson font-bold">// BRAC UNIVERSITY CSE</span> • DHAKA, BANGLADESH
                </div>
                <div className="text-[11px] text-zinc-500 pl-1">
                  FULL-STACK DEVELOPMENT • BACKEND ARCHITECTURE
                </div>
              </div>
            </motion.div>

            {/* Massive Typography Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-1"
            >
              <div className="font-mono text-xs sm:text-sm text-crimson tracking-widest font-bold">
                // HI, I AM
              </div>
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-paper tracking-tighter leading-[0.95]">
                TASMIN <br />
                <span className="text-stroke-2 hover:text-paper transition-colors duration-300">
                  AHMED ONI
                </span>
              </h1>
            </motion.div>

            {/* Dynamic Typing Subtitle */}
            <div className="h-9 sm:h-10 flex items-center font-mono text-base sm:text-xl md:text-2xl text-zinc-200">
              <span className="text-crimson mr-2 font-bold">›</span>
              <span className="font-semibold">{text}</span>
              <span className="w-2 h-5 bg-crimson ml-1 animate-pulse" />
            </div>

            {/* Concise Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-sans text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed"
            >
              Junior Software Engineer at <strong className="text-paper">United Group (Orange Solutions Ltd.)</strong> and Computer Science graduate from <strong className="text-paper">Brac University (CGPA 3.62)</strong>. I build reliable web applications, responsive interfaces, and scalable backend services.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-crimson hover:bg-crimson-hover text-white font-mono text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 shadow-[4px_4px_0px_#FFFFFF] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
              >
                <span>VIEW MY WORK</span>
                <ArrowRight size={16} />
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 border border-white/20 hover:border-crimson bg-surface text-paper hover:text-white font-mono text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 hover:shadow-[3px_3px_0px_#F44849]"
              >
                <FileDown size={16} className="text-crimson" />
                <span>DOWNLOAD RESUME</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 border border-white/10 hover:border-white/30 text-zinc-400 hover:text-paper font-mono text-xs sm:text-sm tracking-wider uppercase transition-colors"
              >
                <span>GET IN TOUCH</span>
                <ArrowDownRight size={16} />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Interactive Terminal Preview & Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4 space-y-4"
          >
            {/* Terminal Window Card */}
            <div className="border border-white/15 bg-surface shadow-2xl overflow-hidden hover:border-crimson/50 transition-colors">
              {/* Window Controls & Small Avatar */}
              <div className="bg-void px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full overflow-hidden border border-crimson/70 shrink-0">
                    <img
                      src={personalInfo.profileImg}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-zinc-300 font-bold">
                    <Terminal size={12} className="text-crimson" />
                    <span>developer.ts</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
              </div>

              {/* Code Snippet */}
              <div className="p-5 font-mono text-xs leading-relaxed text-zinc-300 bg-surface/90 space-y-1">
                <div className="text-zinc-500">// Personal Developer Profile</div>
                <div>
                  <span className="text-crimson font-bold">const</span>{' '}
                  <span className="text-paper font-bold">oni</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">name:</span>{' '}
                  <span className="text-emerald-400">"Tasmin Ahmed Oni"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">role:</span>{' '}
                  <span className="text-emerald-400">"Junior Software Engineer"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">company:</span>{' '}
                  <span className="text-emerald-400">"United Group (OSL)"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">cgpa:</span>{' '}
                  <span className="text-amber-400 font-bold">3.62</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">skills:</span> [
                  <span className="text-sky-300">"Flutter"</span>,{' '}
                  <span className="text-sky-300">"Nest.js"</span>,{' '}
                  <span className="text-sky-300">"Angular"</span>
                  ],
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">passionate:</span>{' '}
                  <span className="text-emerald-400">true</span>
                </div>
                <div>&#125;;</div>
                <div className="pt-2 text-zinc-500">// Output greeting</div>
                <div className="text-zinc-300">
                  <span className="text-crimson font-bold">console.log</span>("Let's build something great!");
                </div>
              </div>
            </div>

            {/* Quick Metrics Matrix */}
            <div className="grid grid-cols-2 gap-3">
              {personalInfo.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 border border-white/10 bg-surface/50 space-y-1 hover:border-crimson/50 transition-colors"
                >
                  <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                    {stat.label}
                  </div>
                  <div className="font-display text-xl sm:text-2xl font-extrabold text-paper">
                    {stat.value}
                  </div>
                  <div className="font-mono text-[10px] text-crimson font-semibold">
                    {stat.detail}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Infinite Velocity Marquee Banner */}
      <div className="mt-16 sm:mt-20">
        <MarqueeText
          items={[
            "FULL-STACK SOFTWARE ENGINEER",
            "NEST.JS & NODE.JS BACKEND",
            "MODERN REACT & ANGULAR APPS",
            "MONGODB & MYSQL DATABASES",
            "RESTFUL APIS & MVC PATTERNS",
            "BRAC UNIVERSITY CSE GRADUATE",
            "CLEAN CODE & CONTINUOUS LEARNING"
          ]}
          speed="normal"
          className="bg-surface/50 border-white/15"
        />
      </div>
    </section>
  );
}
