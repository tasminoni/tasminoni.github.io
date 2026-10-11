import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award } from 'lucide-react';

export default function CertificateModal({ image, title, isOpen, onClose }) {
  if (!isOpen || !image) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-void/90 backdrop-blur-md"
        />

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl max-h-[calc(100dvh-1rem)] bg-surface border border-white/20 shadow-2xl z-10 overflow-y-auto overscroll-contain min-w-0"
        >
          <div className="bg-surface/95 border-b border-white/10 px-4 sm:px-6 py-4 flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-2.5">
              <Award className="text-crimson" size={18} />
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-zinc-300 [overflow-wrap:anywhere]">
                VERIFIED CREDENTIAL // {title}
              </span>
            </div>
            <button
              onClick={onClose}
              className="w-11 h-11 inline-flex items-center justify-center border border-white/20 hover:border-crimson hover:text-crimson text-zinc-400 shrink-0"
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-2 sm:p-6 bg-void/60 flex items-center justify-center">
            <img
              src={image}
              alt={title}
              className="max-h-[75dvh] max-w-full w-auto h-auto object-contain border border-white/10"
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
