import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, FileDown, Copy, Check, ArrowUp, Send } from 'lucide-react';
import SectionTracker from '../components/SectionTracker';
import { personalInfo } from '../data/portfolioData';

export default function ContactFooter() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-20 sm:py-28 bg-void relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-crimson/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTracker
          index="08"
          total="08"
          tag="// GET IN TOUCH // CONTACT"
          title="LET'S CONNECT & TALK TECH."
          subtitle="COMMUNICATION CHANNELS"
          description="I'm always open to discussing software engineering, interesting tech projects, or potential job opportunities. Feel free to reach out!"
        />

        {/* Giant Hero CTA Card */}
        <div className="my-12 p-8 sm:p-14 bg-surface border border-white/15 relative overflow-hidden shadow-[8px_8px_0px_#F44849]">
          <div className="space-y-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-void border border-white/10 font-mono text-xs text-crimson font-bold">
              <span className="w-2 h-2 bg-crimson rounded-full animate-ping" />
              <span>DIRECT INBOX</span>
            </div>

            <h3 className="font-display text-3xl sm:text-5xl md:text-6xl font-black uppercase text-paper tracking-tighter leading-none">
              HAVE AN OPPORTUNITY? <br />
              <span className="text-stroke-2 hover:text-paper transition-colors">
                LET'S TALK.
              </span>
            </h3>

            <p className="font-sans text-base sm:text-lg text-zinc-300">
              Whether you want to discuss a full-stack role, collaborate on an idea, or just say hi—my inbox is always open.
            </p>

            {/* Copy Email & Quick Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-6 py-4 bg-crimson hover:bg-crimson-hover text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-[4px_4px_0px_#FFFFFF] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
              >
                {copied ? (
                  <>
                    <Check size={16} className="text-white" />
                    <span>EMAIL COPIED TO CLIPBOARD!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    <span>COPY EMAIL: {personalInfo.email}</span>
                  </>
                )}
              </button>

              <a
                href={personalInfo.socials.email}
                className="inline-flex items-center gap-2 px-6 py-4 border border-white/20 hover:border-white bg-void text-paper hover:text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors"
              >
                <Send size={16} className="text-crimson" />
                <span>SEND AN EMAIL</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Information Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          {/* Email Block */}
          <div className="p-6 bg-surface border border-white/10 space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 uppercase tracking-widest">
              <Mail size={14} className="text-crimson" />
              <span>EMAIL</span>
            </div>
            <a
              href={`mailto:${personalInfo.email}`}
              className="font-mono text-sm font-bold text-paper hover:text-crimson transition-colors block break-all"
            >
              {personalInfo.email}
            </a>
            <div className="font-mono text-[11px] text-zinc-500">PRIMARY CONTACT CHANNEL</div>
          </div>

          {/* Phone Block */}
          <div className="p-6 bg-surface border border-white/10 space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 uppercase tracking-widest">
              <Phone size={14} className="text-crimson" />
              <span>PHONE / WHATSAPP</span>
            </div>
            <a
              href={`tel:${personalInfo.phone}`}
              className="font-mono text-sm font-bold text-paper hover:text-crimson transition-colors block"
            >
              {personalInfo.phone}
            </a>
            <div className="font-mono text-[11px] text-zinc-500">CALL & WHATSAPP</div>
          </div>

          {/* Location Block */}
          <div className="p-6 bg-surface border border-white/10 space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 uppercase tracking-widest">
              <MapPin size={14} className="text-crimson" />
              <span>LOCATION</span>
            </div>
            <div className="font-mono text-sm font-bold text-paper">
              Kuril, Dhaka, Bangladesh
            </div>
            <div className="font-mono text-[11px] text-zinc-500">AVAILABLE ON-SITE & REMOTE</div>
          </div>
        </div>

        {/* Social Matrix & Resume Link */}
        <div className="mt-8 p-6 bg-surface/50 border border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
              PROFILES & RESUME:
            </span>
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-paper hover:text-crimson transition-colors"
            >
              <Github size={15} />
              <span>GITHUB</span>
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-paper hover:text-crimson transition-colors"
            >
              <Linkedin size={15} />
              <span>LINKEDIN</span>
            </a>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-crimson hover:underline"
            >
              <FileDown size={15} />
              <span>DOWNLOAD RESUME (PDF)</span>
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-white/20 hover:border-crimson bg-void text-zinc-400 hover:text-white font-mono text-xs uppercase tracking-wider transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={14} />
          </button>
        </div>

        {/* Sub-Footer Meta */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} TASMIN AHMED ONI. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-2">
            <span>BUILT WITH REACT, TAILWIND CSS & FRAMER MOTION</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
