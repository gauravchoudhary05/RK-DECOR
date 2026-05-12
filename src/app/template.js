'use client';

/**
 * template.js — App Router Page Transition Layer
 *
 * Why template.js, not layout.js:
 * ────────────────────────────────
 * layout.js persists across navigations — its component instance stays
 * mounted, so Framer Motion never sees a mount/unmount event and cannot
 * run transition animations between routes.
 *
 * template.js re-mounts on every route change by design. This gives
 * Framer Motion a genuine mount event to animate from, making it the
 * only correct slot for page-level transitions in App Router.
 *
 * Scroll Reset:
 * ─────────────
 * Because Lenis intercepts native scrolling, window.scrollTo(0,0) has
 * no effect on navigation. ScrollReset reads the Lenis instance from
 * context and calls lenis.scrollTo(0, { immediate: true }) on mount
 * — before the page transition animation begins. This ensures every
 * new page starts at the top without a visible scroll jump.
 *
 * Animation:
 * ──────────
 * Enter: opacity 0 → 1  +  y 14px → 0   (750ms, luxury ease)
 * Restrained values: 14px Y, no scale, no blur, no slide-from-side.
 * Easing: [0.22, 1, 0.36, 1] — decelerates elegantly into rest.
 *
 * Performance:
 * ────────────
 * Only opacity + transform animated — both GPU-composited.
 */

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSmoothScroll } from '@/components/SmoothScroll';

// ─── Scroll Reset ───────────────────────────────────────────────────────────
/**
 * Resets scroll to top on every page navigation.
 * Must be a child component (not inline) so it can call useSmoothScroll()
 * after the SmoothScroll provider in layout.js has mounted.
 */
function ScrollReset() {
  const lenis = useSmoothScroll();

  useEffect(() => {
    if (lenis) {
      // Immediate: no animation — instant jump before page transition starts
      lenis.scrollTo(0, { immediate: true });
    } else {
      // Fallback if Lenis hasn't initialised yet
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [lenis]);

  return null; // Renders nothing — side-effect only
}

// ─── Transition config ──────────────────────────────────────────────────────
const EASE = [0.22, 1, 0.36, 1];

const pageVariants = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: EASE,
      // Brief delay so any previous page cleanup completes
      delay: 0.05,
    },
  },
};

// ─── Template ───────────────────────────────────────────────────────────────
export default function Template({ children }) {
  return (
    <>
      {/* Scroll to top before new page content animates in */}
      <ScrollReset />

      <motion.div
        variants={pageVariants}
        initial="hidden"
        animate="visible"
      >
        {children}
      </motion.div>
    </>
  );
}
