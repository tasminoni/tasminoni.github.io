import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, FileDown } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll detection for navbar borders
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'EXPERTISE', href: '#expertise', index: '02' },
    { name: 'WORKFLOW', href: '#workflow', index: '03' },
    { name: 'PRINCIPLES', href: '#principles', index: '04' },
    { name: 'PROJECTS', href: '#projects', index: '05' },
    { name: 'EXPERIENCE', href: '#experience', index: '06' },
    { name: 'FAQ', href: '#faq', index: '07' },
    { name: 'CONTACT', href: '#contact', index: '08' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-void/90 backdrop-blur-md border-b border-white/10 py-2.5 sm:py-3 shadow-2xl'
            : 'bg-void/70 backdrop-blur-sm border-b border-white/5 py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 w-full">
          {/* Brand / Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group font-mono text-sm tracking-tight shrink-0"
          >
            <div className="w-2.5 h-2.5 bg-crimson group-hover:scale-125 transition-transform shrink-0" />
            <span className="font-display font-black text-paper tracking-wider group-hover:text-crimson transition-colors whitespace-nowrap text-sm sm:text-base">
              TASMIN AHMED ONI
            </span>
          </a>

          {/* Desktop Nav Links (lg screen and above) */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.slice(0, 5).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-mono text-xs tracking-wider text-zinc-400 hover:text-white hover:text-crimson transition-colors flex items-center gap-1.5 group whitespace-nowrap py-1"
              >
                <span className="text-zinc-600 text-[10px] group-hover:text-crimson transition-colors">
                  {link.index}
                </span>
                <span>{link.name}</span>
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Resume Button */}
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 border border-white/20 hover:border-crimson bg-surface text-paper hover:text-white font-mono text-xs font-medium tracking-wider transition-all duration-200 hover:shadow-[2px_2px_0px_#F44849] shrink-0 whitespace-nowrap"
            >
              <FileDown size={14} className="text-crimson shrink-0" />
              <span>RESUME</span>
            </a>

            {/* Quick Contact CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 bg-crimson hover:bg-crimson-hover text-white font-mono text-xs font-bold tracking-wider transition-all duration-200 shadow-[2px_2px_0px_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 shrink-0 whitespace-nowrap"
            >
              <span>CONTACT</span>
              <ArrowUpRight size={14} className="shrink-0" />
            </a>

            {/* Mobile / Tablet Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 border border-white/20 text-paper hover:text-crimson hover:border-crimson transition-colors shrink-0"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[55px] sm:top-[60px] z-40 bg-void/98 backdrop-blur-xl border-b border-white/10 lg:hidden p-6 flex flex-col justify-between overflow-y-auto"
          >
            <div className="max-w-7xl mx-auto w-full flex flex-col justify-between h-full">
              <div className="space-y-6 pt-2">
                <div className="font-mono text-xs text-crimson uppercase tracking-widest border-b border-white/10 pb-2 flex items-center justify-between">
                  <span>// PORTFOLIO DIRECTORY</span>
                  <span className="text-zinc-500 font-mono text-[10px]">7 SECTIONS</span>
                </div>
                <div className="flex flex-col space-y-3">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between py-2 border-b border-white/5 font-display text-xl sm:text-2xl font-bold text-paper hover:text-crimson transition-colors"
                    >
                      <span>{link.name}</span>
                      <span className="font-mono text-xs sm:text-sm text-zinc-500">[{link.index}]</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between font-mono text-xs text-zinc-400 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    <span>DHAKA, BANGLADESH</span>
                  </div>
                  <span className="text-crimson font-medium">SOFTWARE ENGINEER @ UNITED GROUP</span>
                </div>
                <div className="font-mono text-[11px] text-zinc-500">
                  BRAC UNIVERSITY CSE • CGPA 3.62
                </div>
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 border border-white/20 flex items-center justify-center gap-2 font-mono text-sm font-bold text-white bg-surface hover:bg-crimson transition-colors"
                >
                  <FileDown size={16} />
                  <span>DOWNLOAD RESUME (PDF)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


