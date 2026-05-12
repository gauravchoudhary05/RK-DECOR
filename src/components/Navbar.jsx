'use client';

/**
 * Navbar — Premium scroll-aware navigation
 *
 * Scroll behavior:
 * ────────────────
 * Scroll position is read as a continuous value and mapped through Framer
 * Motion's useTransform to interpolate every visual property smoothly:
 *
 *   • Background opacity   0 → 0.92  (over first 80px of scroll)
 *   • Backdrop blur        0 → 10px
 *   • Border opacity       0 → 0.05
 *   • Padding             28px → 16px  (subtle height shrink)
 *   • Logo size          1.15rem → 1.0rem
 *
 * Mobile menu:
 * ────────────
 * Rendered as a React Fragment sibling to <nav> — never inside the nav.
 * Uses AnimatePresence + fixed fullscreen overlay + right-side slide panel.
 * Body scroll is locked while the menu is open.
 */

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useSpring,
} from 'framer-motion';
import { useSmoothScroll } from '@/components/SmoothScroll';
import { useQuoteModal } from '@/components/QuoteModalContext';

const navLinks = [
  { name: 'Gallery',  href: '#gallery' },
  { name: 'Process',  href: '#process' },
  { name: 'About',    href: '#about' },
  { name: 'Contact',  href: '#contact' },
];

// Luxury cubic-bezier easing
const EASE = [0.22, 1, 0.36, 1];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const lenis = useSmoothScroll();
  const { openModal } = useQuoteModal();

  // ── Scroll progress ───────────────────────────────────────────────────
  const rawScroll = useMotionValue(0);
  const scrollY = useSpring(rawScroll, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  const INPUT = [0, 90];
  const bgOpacity     = useTransform(scrollY, INPUT, [0,    0.92]);
  const blurAmount    = useTransform(scrollY, INPUT, [0,    10  ]);
  const borderOpacity = useTransform(scrollY, INPUT, [0,    0.05]);
  const paddingY      = useTransform(scrollY, INPUT, [28,   16  ]);
  const logoSize      = useTransform(scrollY, INPUT, [1.15, 1.0 ]);

  const backdropFilter = useTransform(blurAmount, (v) => `blur(${v.toFixed(2)}px)`);
  const navBgColor     = useTransform(bgOpacity,     (v) => `rgba(11,11,12,${v.toFixed(3)})`);
  const navBorderColor = useTransform(borderOpacity, (v) => `rgba(255,255,255,${v.toFixed(3)})`);
  const navPaddingTop  = useTransform(paddingY,      (v) => `${v.toFixed(1)}px`);
  const navPaddingBot  = useTransform(paddingY,      (v) => `${v.toFixed(1)}px`);
  const logoFontSize   = useTransform(logoSize,      (v) => `${v.toFixed(3)}rem`);

  // ── Subscribe to scroll ───────────────────────────────────────────────
  useEffect(() => {
    const update = (y) => rawScroll.set(y);
    if (lenis) {
      lenis.on('scroll', ({ scroll }) => update(scroll));
      return () => lenis.off('scroll', update);
    } else {
      const onScroll = () => update(window.scrollY);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
    }
  }, [lenis, rawScroll]);

  // ── Lock body scroll when menu is open ───────────────────────────────
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* ════════════════════════════════════════════════════
          TOP NAV BAR — fixed, always visible
      ════════════════════════════════════════════════════ */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-[100]"
        style={{
          backgroundColor:      navBgColor,
          backdropFilter,
          WebkitBackdropFilter: backdropFilter,
          borderBottom:         '1px solid transparent',
          borderColor:          navBorderColor,
          paddingTop:           navPaddingTop,
          paddingBottom:        navPaddingBot,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-16 flex items-center justify-between">

          {/* ── Logo ── */}
          <Link href="/" className="group flex items-center" onClick={closeMenu}>
            <motion.span
              className="font-serif font-semibold text-white tracking-[0.12em] uppercase"
              style={{ fontSize: logoFontSize }}
            >
              RK <span className="text-[#c6a96b] font-light">Decor</span>
            </motion.span>
          </Link>

          {/* ── Desktop Nav Links ── */}
          <div className="hidden md:flex items-center gap-10 lg:gap-14">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-[10px] uppercase tracking-[0.25em] font-medium text-white/55 hover:text-[#c6a96b] transition-colors duration-500 group"
              >
                {link.name}
                <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-[#c6a96b]/70 transition-all duration-700 ease-out group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* ── Desktop CTA ── */}
          <div className="hidden md:flex items-center">
            <button
              onClick={openModal}
              className="px-7 py-2.5 border border-[#c6a96b]/60 text-[#c6a96b] text-[11px] uppercase tracking-[0.15em] font-medium hover:bg-[#c6a96b] hover:text-[#0b0b0c] hover:border-[#c6a96b] transition-all duration-500 ease-out hover:scale-[1.03] active:scale-95"
            >
              Get Quote
            </button>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden flex flex-col justify-center gap-[6px] p-2 z-[110] relative"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-[1px] bg-white/80 transition-all duration-500 origin-center ${
                menuOpen ? 'rotate-45 translate-y-[3.5px]' : ''
              }`}
            />
            <span
              className={`block w-6 h-[1px] bg-white/80 transition-all duration-500 ${
                menuOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block h-[1px] bg-white/80 transition-all duration-500 origin-center ${
                menuOpen ? '-rotate-45 -translate-y-[3.5px] w-6' : 'w-4 ml-auto'
              }`}
            />
          </button>
        </div>
      </motion.nav>

      {/* ════════════════════════════════════════════════════
          MOBILE MENU OVERLAY
          — rendered as a sibling, NEVER inside <nav>
          — fixed inset-0, z-[999], above everything
      ════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu-overlay"
            className="fixed inset-0 z-[999] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {/* ── Backdrop — click to close ── */}
            <motion.div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={closeMenu}
              aria-hidden="true"
            />

            {/* ── Slide Panel ── */}
            <motion.div
              className="absolute top-0 right-0 h-full bg-[#0b0b0c] border-l border-[#c6a96b]/20 flex flex-col"
              style={{ width: '82vw', maxWidth: '340px' }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.48, ease: EASE }}
            >
              {/* Subtle gold ambient glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse at 30% 60%, rgba(198,169,107,0.06) 0%, transparent 65%)',
                }}
              />

              {/* ── Panel Header: Logo + Close ── */}
              <div className="relative flex items-center justify-between px-8 pt-7 pb-6 border-b border-white/[0.06]">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="font-serif font-semibold text-white tracking-[0.12em] uppercase text-[1rem]"
                >
                  RK <span className="text-[#c6a96b] font-light">Decor</span>
                </Link>

                <button
                  onClick={closeMenu}
                  aria-label="Close menu"
                  className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-[#c6a96b] transition-colors duration-300"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <line x1="1" y1="1" x2="17" y2="17" />
                    <line x1="17" y1="1" x2="1" y2="17" />
                  </svg>
                </button>
              </div>

              {/* ── Navigation Links ── */}
              <nav className="relative flex-1 flex flex-col justify-center px-8 gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: 28, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 28, opacity: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: 0.08 + i * 0.06,
                      ease: EASE,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="group flex items-center gap-3 py-3.5 text-white/60 hover:text-[#c6a96b] transition-colors duration-400"
                    >
                      {/* Gold accent line */}
                      <span className="block w-5 h-[1px] bg-[#c6a96b]/30 group-hover:bg-[#c6a96b]/80 group-hover:w-7 transition-all duration-400" />
                      <span className="text-[11px] uppercase tracking-[0.22em] font-medium">
                        {link.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* ── Divider ── */}
              <div className="relative mx-8 h-[1px] bg-white/[0.06]" />

              {/* ── Panel Footer: CTA ── */}
              <div className="relative px-8 py-8">
                <motion.button
                  onClick={() => {
                    closeMenu();
                    openModal();
                  }}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 16, opacity: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: 0.08 + navLinks.length * 0.06 + 0.04,
                    ease: EASE,
                  }}
                  className="w-full py-3.5 border border-[#c6a96b]/50 text-[#c6a96b] text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-[#c6a96b] hover:text-[#0b0b0c] transition-all duration-500"
                >
                  Get Quote
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
