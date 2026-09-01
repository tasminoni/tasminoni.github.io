import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award } from 'lucide-react';

export default function CertificateModal({ image, title, isOpen, onClose }) {
  if (!isOpen || !image) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
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
          className="relative w-full max-w-3xl bg-surface border border-white/20 shadow-2xl z-10 overflow-hidden"
        >
          <div className="bg-surface/95 border-b border-white/10 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Award className="text-crimson" size={18} />
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-300">
                VERIFIED CREDENTIAL // {title}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1 border border-white/20 hover:border-crimson hover:text-crimson text-zinc-400"
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-4 sm:p-6 bg-void/60 flex items-center justify-center">
            <img
              src={image}
              alt={title}
              className="max-h-[75vh] w-auto object-contain border border-white/10"
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
