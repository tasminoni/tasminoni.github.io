import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, FileDown, Copy, Check, ArrowUp, Send } from 'lucide-react';
import SectionTracker from '../components/SectionTracker';
import ScrollReveal from '../components/ScrollReveal';
import { personalInfo } from '../data/portfolioData';

export default function ContactFooter() {
  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState({ name: '', email: '', subject: '', body: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(message.subject || `Portfolio enquiry from ${message.name}`);
    const body = encodeURIComponent(`From: ${message.name} <${message.email}>\n\n${message.body}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-20 sm:py-28 scene-section relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-crimson/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTracker
          index="09"
          total="09"
          tag="// GET IN TOUCH // CONTACT"
          title="LET'S CONNECT & TALK TECH."
          subtitle="COMMUNICATION CHANNELS"
          description="I'm always open to discussing software engineering, interesting tech projects, or potential job opportunities. Feel free to reach out!"
        />

        {/* Giant Hero CTA Card */}
        <div className="my-12 p-5 sm:p-14 bg-surface border border-white/15 relative overflow-hidden shadow-[4px_4px_0px_#F44849] sm:shadow-[8px_8px_0px_#F44849]">
          <div className="space-y-6 max-w-3xl min-w-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-void border border-white/10 font-mono text-xs text-crimson font-bold">
              <span className="w-2 h-2 bg-crimson rounded-full animate-ping" />
              <span>DIRECT INBOX</span>
            </div>

            <ScrollReveal as="h3" className="font-display text-[clamp(1.7rem,8vw,2.25rem)] sm:text-5xl md:text-6xl font-black uppercase text-paper tracking-tighter leading-none [overflow-wrap:anywhere]">
              HAVE AN OPPORTUNITY? <br />
              <span className="text-stroke-2 hover:text-paper transition-colors">
                LET'S TALK.
              </span>
            </ScrollReveal>

            <ScrollReveal as="p" delay={0.1} className="font-sans text-base sm:text-lg text-zinc-300">
              Whether you want to discuss a full-stack role, collaborate on an idea, or just say hi—my inbox is always open.
            </ScrollReveal>

            {/* Copy Email & Quick Actions */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-4 bg-crimson hover:bg-crimson-hover text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-[4px_4px_0px_#FFFFFF] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 min-w-0"
              >
                {copied ? (
                  <>
                    <Check size={16} className="text-white" />
                    <span className="sm:hidden">EMAIL COPIED</span>
                    <span className="hidden sm:inline">EMAIL COPIED TO CLIPBOARD!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    <span className="sm:hidden">COPY EMAIL</span>
                    <span className="hidden sm:inline">COPY EMAIL: {personalInfo.email}</span>
                  </>
                )}
              </button>

              <a
                href={personalInfo.socials.email}
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-4 border border-white/20 hover:border-white bg-void text-paper hover:text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors"
              >
                <Send size={16} className="text-crimson" />
                <span>SEND AN EMAIL</span>
              </a>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 my-14 items-start">
          <ScrollReveal>
            <div className="font-mono text-xs text-crimson tracking-widest mb-3">// START A CONVERSATION</div>
            <h3 className="font-display text-3xl sm:text-4xl font-black uppercase mb-4">TELL ME ABOUT YOUR PROJECT.</h3>
            <p className="text-zinc-400 leading-relaxed">Fill in the details and your email app will open with a message ready to send. You can also use the direct contact links below.</p>
          </ScrollReveal>
          <ScrollReveal as="form" onSubmit={handleSubmit} delay={0.12} className="about-glass p-4 sm:p-8 grid gap-5 min-w-0">
            {[
              { id: 'name', label: 'Your name', type: 'text', autoComplete: 'name' },
              { id: 'email', label: 'Email address', type: 'email', autoComplete: 'email' },
              { id: 'subject', label: 'Subject', type: 'text', autoComplete: 'off' },
            ].map((field) => (
              <div className="floating-field" key={field.id}>
                <input id={`contact-${field.id}`} type={field.type} autoComplete={field.autoComplete} value={message[field.id]} onChange={(event) => setMessage({ ...message, [field.id]: event.target.value })} placeholder=" " required={field.id !== 'subject'} />
                <label htmlFor={`contact-${field.id}`}>{field.label}</label>
              </div>
            ))}
            <div className="floating-field">
              <textarea id="contact-message" rows="5" value={message.body} onChange={(event) => setMessage({ ...message, body: event.target.value })} placeholder=" " required />
              <label htmlFor="contact-message">Your message</label>
            </div>
            <button type="submit" className="inline-flex justify-center items-center gap-2 px-6 py-4 bg-crimson hover:bg-crimson-hover text-white font-mono text-sm font-bold uppercase tracking-wider transition-colors"><Send size={16} /> OPEN EMAIL APP</button>
          </ScrollReveal>
        </div>

        {/* Contact Information Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          {/* Email Block */}
          <ScrollReveal className="p-4 sm:p-6 bg-surface border border-white/10 space-y-2 min-w-0">
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
          </ScrollReveal>

          {/* Phone Block */}
          <ScrollReveal delay={0.08} className="p-4 sm:p-6 bg-surface border border-white/10 space-y-2 min-w-0">
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
          </ScrollReveal>

          {/* Location Block */}
          <ScrollReveal delay={0.16} className="p-4 sm:p-6 bg-surface border border-white/10 space-y-2 min-w-0">
            <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 uppercase tracking-widest">
              <MapPin size={14} className="text-crimson" />
              <span>LOCATION</span>
            </div>
            <div className="font-mono text-sm font-bold text-paper">
              Kuril, Dhaka, Bangladesh
            </div>
            <div className="font-mono text-[11px] text-zinc-500">AVAILABLE ON-SITE & REMOTE</div>
          </ScrollReveal>
        </div>

        {/* Social Matrix & Resume Link */}
        <ScrollReveal className="mt-8 p-4 sm:p-6 bg-surface/50 border border-white/10 flex flex-wrap items-center justify-between gap-4 min-w-0">
          <div className="flex flex-wrap items-center gap-4 min-w-0">
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
        </ScrollReveal>

        {/* Sub-Footer Meta */}
        <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-center text-center font-mono text-xs text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} TASMIN AHMED ONI. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}
