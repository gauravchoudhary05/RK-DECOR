'use client';

import { createContext, useContext, useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';

// ─── Context ────────────────────────────────────────────────────
const SmoothScrollContext = createContext(null);

/**
 * Access the Lenis instance from any child component.
 * Returns `null` until Lenis has initialised.
 *
 * @example
 * const lenis = useSmoothScroll();
 * lenis?.scrollTo('#section', { duration: 1.6 });
 */
export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}

// ─── Provider ───────────────────────────────────────────────────
/**
 * SmoothScroll — global Lenis wrapper for Next.js App Router.
 *
 * Mount once in layout.js; every page transition is handled
 * automatically because children are swapped by the router
 * while this provider stays mounted.
 *
 * Scroll feel: cinematic · premium · restrained
 * – lerp 0.08  → silky deceleration without lag
 * – duration 1.4 → extended glide that feels intentional
 * – wheelMultiplier 0.9 → slightly dampened for luxury restraint
 * – smoothTouch false → never hijacks native mobile scrolling
 */
export default function SmoothScroll({ children }) {
  const [lenis, setLenis] = useState(null);
  const rafHandle = useRef(null);

  useEffect(() => {
    // ── Respect user motion preferences ──────────────────────
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) return;           // skip entirely — native scroll

    // ── Initialise Lenis ─────────────────────────────────────
    const instance = new Lenis({
      lerp: 0.08,                         // smooth but never floaty
      duration: 1.4,                      // cinematic glide length
      smoothWheel: true,                  // enable wheel smoothing
      wheelMultiplier: 0.9,               // restrained wheel speed
      smoothTouch: false,                 // native touch on mobile
      touchMultiplier: 1.5,               // natural touch momentum
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      autoRaf: false,                     // we drive the loop ourselves
    });

    setLenis(instance);

    // ── RAF loop ─────────────────────────────────────────────
    function raf(time) {
      instance.raf(time);
      rafHandle.current = requestAnimationFrame(raf);
    }
    rafHandle.current = requestAnimationFrame(raf);

    // ── Cleanup ──────────────────────────────────────────────
    return () => {
      if (rafHandle.current !== null) {
        cancelAnimationFrame(rafHandle.current);
        rafHandle.current = null;
      }
      instance.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={lenis}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
