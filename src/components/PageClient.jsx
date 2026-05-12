'use client';

/**
 * PageClient — Client shell for the homepage
 *
 * Wraps the entire page in AnimatePresence so the Loader
 * can exit with a smooth fade transition into the content.
 *
 * Architecture:
 * ─────────────
 * • `loaded` state starts false — Loader renders on top
 * • Loader calls onComplete() after 2.2s → `loaded` = true
 * • AnimatePresence detects Loader unmount → plays exit animation
 * • Content beneath is always rendered (not conditionally) so:
 *   - Hero image starts loading immediately during preloader
 *   - No layout shift after loader exits
 *   - Content is hidden behind the loader, not absent
 *
 * The `initial={false}` on AnimatePresence prevents content
 * from playing entrance animations on first mount — only the
 * Loader gets its exit animation.
 */

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loader from '@/components/Loader';

export default function PageClient({ children }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* Loader exits via AnimatePresence when loaded = true */}
      <AnimatePresence mode="wait">
        {!loaded && (
          <Loader
            key="loader"
            onComplete={() => setLoaded(true)}
          />
        )}
      </AnimatePresence>

      {/*
        Content: always in the DOM so images preload during loader.
        `aria-hidden` while loader is visible for accessibility.
        Visibility hidden (not display:none) so layout is preserved.
      */}
      <div
        aria-hidden={!loaded}
        style={{
          visibility: loaded ? 'visible' : 'hidden',
          // Prevent any scroll/interaction during loader
          pointerEvents: loaded ? 'auto' : 'none',
        }}
      >
        {children}
      </div>
    </>
  );
}
