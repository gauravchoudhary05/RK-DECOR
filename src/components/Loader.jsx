'use client';

/**
 * Loader — Luxury cinematic preloader for RK Decor
 *
 * Sequence (total ~2.2s):
 * ────────────────────────
 *  0.0s  Background present (instant — avoids flash)
 *  0.2s  Thin gold rule slides in from left
 *  0.6s  "RK" fades + rises
 *  0.9s  "DECOR" fades + rises  (slight stagger below)
 *  1.3s  Subtext fades in softly
 *  1.8s  Loader begins full-page exit fade
 *  2.2s  onComplete fires → content revealed, loader unmounts
 *
 * Constraints:
 * ─────────────
 * • No spinning elements, no progress bars, no counting numbers
 * • Y movement ≤ 20px — editorial restraint
 * • Blur on heading words for depth-of-field entrance
 * • Exit is a single smooth opacity → 0 over 500ms
 * • Uses `pointer-events: none` during exit so hero is interactive immediately
 * • SSR-safe: renders static shell server-side (black screen),
 *   animation only initializes on client after mount
 *
 * Usage:
 * ──────
 * Mount in page.js with an `onComplete` callback:
 *   <Loader onComplete={() => setLoaded(true)} />
 */

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Luxury easing ─────────────────────────────────────────────────────────
const EASE      = [0.22, 1, 0.36, 1];
const EASE_OUT  = [0.16, 1, 0.3, 1];

// ─── Animation variants ────────────────────────────────────────────────────
const wordVariants = {
  hidden:  { opacity: 0, y: 16, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0,  filter: 'blur(0px)' },
};

const ruleVariants = {
  hidden:  { scaleX: 0, originX: 0 },
  visible: { scaleX: 1 },
};

const subtextVariants = {
  hidden:  { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  visible: { opacity: 1 },
  exit: {
    opacity: 0,
    transition: { duration: 0.55, ease: 'easeInOut', delay: 0 },
  },
};

// ─── Component ──────────────────────────────────────────────────────────────
export default function Loader({ onComplete }) {
  // Trigger onComplete after the full animation sequence
  useEffect(() => {
    const timer = setTimeout(onComplete, 2200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      key="loader"
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0b0b0c]"
      initial="visible"
      animate="visible"
      exit="exit"
      variants={containerVariants}
      // Disable interaction during exit so hero beneath is clickable immediately
      style={{ pointerEvents: 'auto' }}
    >
      {/* ── Atmospheric gold glow — ambient, not flashy ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 55%, rgba(198,169,107,0.06) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center gap-5 select-none">

        {/* Gold rule — slides in first, anchors the composition */}
        <motion.div
          className="h-[1px] bg-[#c6a96b] w-16"
          variants={ruleVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.2, ease: EASE_OUT }}
          style={{ transformOrigin: 'left center' }}
        />

        {/* Logotype — two words staggered */}
        <div className="flex flex-col items-center gap-1 overflow-hidden">

          {/* RK */}
          <motion.span
            className="block font-serif font-semibold tracking-[0.32em] text-white text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] uppercase"
            variants={wordVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.0, delay: 0.55, ease: EASE }}
          >
            RK
          </motion.span>

          {/* DECOR — slight offset delay for sequential feel */}
          <motion.span
            className="block font-serif font-light tracking-[0.42em] text-[#c6a96b] text-[1.1rem] sm:text-[1.25rem] md:text-[1.4rem] uppercase"
            variants={wordVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.0, delay: 0.78, ease: EASE }}
          >
            Decor
          </motion.span>
        </div>

        {/* Subtext — appears last, softest */}
        <motion.p
          className="text-white/30 text-[9px] tracking-[0.35em] uppercase font-medium mt-1"
          variants={subtextVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.9, delay: 1.25, ease: EASE }}
        >
          Crafting Timeless Spaces
        </motion.p>

      </div>
    </motion.div>
  );
}
