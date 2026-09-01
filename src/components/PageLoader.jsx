import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('SYSTEM BOOT INITIALIZED...');

  const statusLogs = [
    'LOADING CORE MODULES...',
    'MOUNTING COMPONENT TREE...',
    'PARSING STACK ARTIFACTS...',
    'CONFIGURING ARCHITECTURE MATRIX...',
    'SYSTEM READY // INITIALIZING VIEW'
  ];

  useEffect(() => {
    // Prevent body scroll during load
    document.body.style.overflow = 'hidden';

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            document.body.style.overflow = 'auto';
            if (onLoadingComplete) onLoadingComplete();
          }, 300);
          return 100;
        }

        // Random step increment for realistic terminal boot feel
        const diff = Math.floor(Math.random() * 18) + 6;
        const next = Math.min(prev + diff, 100);

        // Update status text based on progress
        if (next < 25) setStatusText(statusLogs[0]);
        else if (next < 50) setStatusText(statusLogs[1]);
        else if (next < 75) setStatusText(statusLogs[2]);
        else if (next < 95) setStatusText(statusLogs[3]);
        else setStatusText(statusLogs[4]);

        return next;
      });
    }, 70);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -40, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[100] bg-void flex flex-col justify-between p-6 sm:p-12 overflow-hidden select-none"
    >
      {/* Background Subtle Grid & Crimson Radial Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-crimson/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Top Meta Bar */}
      <div className="flex items-center justify-between font-mono text-xs text-zinc-500 relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-crimson animate-pulse" />
          <span className="text-paper font-bold tracking-widest">BOOT // PROTOCOL</span>
        </div>
        {/* <div className="tracking-widest text-zinc-400">
          v2.0.0 [REACT + TAILWIND]
        </div> */}
      </div>

      {/* Center Main Loader Block */}
      <div className="max-w-xl mx-auto w-full space-y-6 relative z-10 my-auto">
        {/* Brand Name */}
        <div className="space-y-2">
          {/* <div className="font-mono text-xs sm:text-sm text-crimson font-bold tracking-widest uppercase">
            // TASMIN AHMED ONI
          </div> */}
          <div className="font-display text-2xl sm:text-4xl font-black text-paper tracking-wider">
            Loading...
          </div>
        </div>

        {/* Progress Counter & Terminal Status */}
        <div className="space-y-2 pt-2">
          <div className="flex items-end justify-between font-mono">
            <span className="text-xs text-zinc-400 font-medium">
              › {statusText}
            </span>
            <span className="text-2xl sm:text-3xl font-black text-crimson">
              {progress < 10 ? `00${progress}` : progress < 100 ? `0${progress}` : progress}%
            </span>
          </div>

          {/* Brutalist Progress Bar */}
          <div className="w-full h-2 bg-surface border border-white/20 relative overflow-hidden p-0.5">
            <motion.div
              className="h-full bg-crimson shadow-[0_0_12px_#F44849]"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>
        </div>

        {/* Binary / Hex Tech Ticker */}
        {/* <div className="flex items-center justify-between font-mono text-[10px] text-zinc-600 tracking-wider">
          <span>0x7F // FULL_STACK</span>
          <span>NEST • NODE • REACT • FLUTTER</span>
          <span>[SYSTEM_OK]</span>
        </div> */}
      </div>

      {/* Bottom Status Tracker */}
      {/* <div className="flex items-center justify-between font-mono text-xs text-zinc-500 relative z-10 border-t border-white/10 pt-4">
        <div className="text-[11px] text-zinc-400">
          BRAC UNIVERSITY CSE • UNITED GROUP (OSL)
        </div>
      </div> */}
      <div className="flex items-center gap-1.5 text-[11px] text-emerald-400">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
        <span>INITIALIZING</span>
      </div>
    </motion.div>
  );
}
