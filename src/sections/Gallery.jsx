'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import FadeIn, { FadeInText } from '@/components/FadeIn';

// ─── Luxury easing ─────────────────────────────────────────────────────────
const EASE = [0.22, 1, 0.36, 1];

// ─── Projects data ──────────────────────────────────────────────────────────
const projects = [
  {
    id: 1,
    title: 'The Sovereign Residence',
    location: 'Mumbai, South',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop',
    aspect: 'tall',
  },
  {
    id: 2,
    title: 'Aura Executive Suite',
    location: 'Delhi, Central',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop',
    aspect: 'wide',
  },
  {
    id: 3,
    title: 'Lumina Penthouse',
    location: 'Bangalore',
    category: 'Luxury Living',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop',
    aspect: 'square',
  },
];

// ─── Gallery image card — cinematic treatment ───────────────────────────────
/**
 * Each card has 4 overlay layers:
 * 1. Base gradient   — permanent, preserves contrast
 * 2. Edge vignette   — cinematic corner darkening
 * 3. Warm tint       — subtle gold atmospheric warmth
 * 4. Hover deep      — deepens gracefully on interaction
 *
 * Image: starts scale(1.06), settles to 1 on load reveal.
 *        Hover raises to scale(1.04) — restrained depth cue.
 */
function GalleryCard({ project, delay, className = '' }) {
  return (
    <motion.div
      className={`group relative overflow-hidden cursor-pointer ${className}`}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1.2, delay, ease: EASE }}
    >
      {/* ── Image: cinematic settle + restrained hover scale ── */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.07 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: EASE }}
        whileHover={{ scale: 1.042 }}
        style={{
          transitionProperty: 'scale',
          transitionDuration: '1100ms',
          transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)',
        }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </motion.div>

      {/* ── Layer 1: Permanent base — preserves shadow depth ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(4,4,5,0.88) 0%, rgba(4,4,5,0.28) 42%, rgba(4,4,5,0.08) 70%, transparent 100%)',
        }}
      />

      {/* ── Layer 2: Cinematic edge vignette ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 48%, rgba(0,0,0,0.42) 100%)',
        }}
      />

      {/* ── Layer 3: Warm gold atmospheric tint ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07] mix-blend-overlay"
        style={{
          background: 'radial-gradient(ellipse at 25% 70%, #c6a96b 0%, transparent 60%)',
        }}
      />

      {/* ── Layer 4: Hover deep atmosphere — appears on hover ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(4,4,5,0.6) 0%, rgba(4,4,5,0.1) 50%, transparent 80%)',
        }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.85, ease: 'easeOut' }}
      />

      {/* ── Card label — lifts + reveals on hover ── */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 p-7 md:p-10 z-10 flex flex-col gap-2"
        initial={{ y: 0 }}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.65, ease: EASE }}
      >
        {/* Category chip — always visible */}
        <span className="text-[#c6a96b] text-[9px] tracking-[0.28em] uppercase font-medium">
          {project.category}
        </span>

        {/* Project title */}
        <h3 className="text-white font-serif leading-tight drop-shadow-sm text-[1.2rem] md:text-[1.5rem]">
          {project.title}
        </h3>

        {/* Location — slides up from hidden on hover */}
        <div className="overflow-hidden">
          <motion.p
            className="text-white/55 text-[0.78rem] tracking-wide"
            initial={{ y: '110%', opacity: 0 }}
            whileHover={{ y: '0%', opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.05, ease: EASE }}
          >
            {project.location}
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Gallery Section ────────────────────────────────────────────────────────
export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-[#0b0b0c] py-28 md:py-36 lg:py-44 overflow-hidden border-t border-white/[0.03]">

      {/* Atmospheric radial glow */}
      <div
        className="absolute right-[-10%] top-[20%] w-[800px] h-[800px] pointer-events-none z-0 -translate-y-1/2"
        style={{ background: 'radial-gradient(circle, rgba(198,169,107,0.025) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative z-[2] max-w-[90rem] mx-auto px-6 md:px-14 lg:px-20">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 lg:mb-28">
          <div className="flex flex-col gap-5 max-w-2xl">
            <FadeIn y={14} duration={1.0} delay={0.1} amount={0.2}>
              <p className="text-[#c6a96b] text-[10px] md:text-[10.5px] tracking-[0.3em] uppercase font-medium">
                Project Showcase
              </p>
            </FadeIn>

            <FadeInText
              as="h2"
              delay={0.28}
              className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-serif font-bold text-white leading-[1.1] tracking-[-0.02em]"
            >
              Spaces Designed To{' '}
              <span className="text-[#c6a96b] font-light italic">Inspire.</span>
            </FadeInText>

            <FadeIn y={16} duration={1.0} delay={0.46} amount={0.2}>
              <p className="text-white/45 text-[0.875rem] md:text-[0.95rem] leading-[1.9] max-w-[32rem] mt-1">
                A curated collection of premium interiors, elegant surfaces, and refined
                craftsmanship across luxury residential and commercial spaces.
              </p>
            </FadeIn>
          </div>

          {/* Desktop CTA */}
          <FadeIn y={12} duration={0.9} delay={0.5} amount={0.2} className="hidden md:block pb-2">
            <button className="group flex items-center gap-4 text-white/80 hover:text-[#c6a96b] transition-colors duration-500 pb-2 border-b border-white/20 hover:border-[#c6a96b]">
              <span className="text-[11px] tracking-[0.15em] uppercase font-medium">View Full Portfolio</span>
              <svg
                width="18" height="18" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transform group-hover:translate-x-2 transition-transform duration-500"
              >
                <path d="M5 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </FadeIn>
        </div>

        {/* ── Editorial Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Left: Featured tall image */}
          <GalleryCard
            project={projects[0]}
            delay={0.18}
            className="lg:col-span-5 h-[60vh] md:h-[70vh] lg:h-[85vh]"
          />

          {/* Right: Staggered stack */}
          <div className="lg:col-span-7 flex flex-col gap-8 lg:gap-16 pt-0 lg:pt-24">

            <GalleryCard
              project={projects[1]}
              delay={0.34}
              className="h-[40vh] md:h-[45vh] lg:h-[40vh] w-full lg:w-[90%] ml-auto"
            />

            <GalleryCard
              project={projects[2]}
              delay={0.5}
              className="h-[40vh] md:h-[45vh] lg:h-[45vh] w-full lg:w-[75%] lg:ml-12"
            />

          </div>
        </div>

        {/* Mobile CTA */}
        <FadeIn y={12} duration={0.9} delay={0.3} amount={0.15} className="mt-16 block md:hidden">
          <button className="w-full group flex items-center justify-center gap-4 text-white hover:text-[#c6a96b] transition-colors duration-500 py-4 border border-white/10 hover:border-[#c6a96b]">
            <span className="text-[11px] tracking-[0.15em] uppercase font-medium">View Full Portfolio</span>
          </button>
        </FadeIn>

      </div>
    </section>
  );
}
