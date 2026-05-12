'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import FadeIn, { FadeInText } from '@/components/FadeIn';

// ─── Luxury easing ────────────────────────────────────────────────────────────
const EASE = [0.22, 1, 0.36, 1];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, delay, ease: EASE },
  }),
};

// ─── Product data ─────────────────────────────────────────────────────────────
const products = [
  {
    id: 1,
    title: 'Engineering Wood Flooring',
    image:
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    title: 'Laminated Flooring',
    image:
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'SPC/LVT Flooring',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Charcoal Wall Panels',
    image:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 5,
    title: 'Soffit Ceiling Panels',
    image:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
];

// ─── Reusable ProductCard ─────────────────────────────────────────────────────
function ProductCard({ product, delay, className = '' }) {
  return (
    <motion.div
      className={`group relative overflow-hidden cursor-pointer ${className}`}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={cardVariants}
    >
      {/* ── Image: slight zoom-in on load, gentle scale on hover ── */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.0, ease: EASE }}
        whileHover={{ scale: 1.045 }}
        // Override with inline so whileHover doesn't fight the entrance transition
        style={{ transitionProperty: 'scale', transitionDuration: '1000ms', transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)' }}
      >
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </motion.div>

      {/* ── Layer 1: Permanent base shadow — preserves image contrast ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(5,5,6,0.82) 0%, rgba(5,5,6,0.22) 45%, transparent 78%)',
        }}
      />

      {/* ── Layer 2: Vignette — cinematic edge darkening ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.38) 100%)',
        }}
      />

      {/* ── Layer 3: Warm gold tint (restrained) — interior warmth ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-overlay"
        style={{ background: 'radial-gradient(ellipse at 30% 60%, #c6a96b, transparent 65%)' }}
      />

      {/* ── Layer 4: Hover atmosphere — deepens on interaction ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(5,5,6,0.55) 0%, transparent 55%)' }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />

      {/* ── Card label — lifts gently on hover ── */}
      <motion.div
        className="absolute bottom-7 left-6 md:bottom-10 md:left-9 right-6 z-10"
        initial={{ y: 0 }}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.65, ease: EASE }}
      >
        <h3 className="text-[1.1rem] md:text-[1.35rem] font-serif text-white leading-snug drop-shadow-sm">
          {product.title}
        </h3>

        {/* Masked slide-up link text */}
        <div className="overflow-hidden mt-2">
          <motion.p
            className="text-[#c6a96b] text-[9.5px] tracking-[0.24em] uppercase"
            initial={{ y: '110%', opacity: 0 }}
            whileHover={{ y: '0%', opacity: 1 }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            Explore Collection
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function Collection() {
  return (
    <section id="products" className="bg-[#0b0b0c] py-28 md:py-36 lg:py-44">
      <div className="max-w-7xl mx-auto px-6 md:px-14 lg:px-20">

        {/* Section Header */}
        <div className="flex flex-col gap-4 mb-16 md:mb-20">
          <FadeIn y={14} duration={1.0} delay={0.1} amount={0.2}>
            <p className="text-[#c6a96b] text-[10px] md:text-[10.5px] tracking-[0.3em] uppercase font-medium">
              Our Collection
            </p>
          </FadeIn>
          <FadeInText
            as="h2"
            delay={0.28}
            className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-serif font-bold text-white leading-[1.1] tracking-[-0.02em]"
          >
            Premium Decor Solutions
          </FadeInText>
        </div>

        {/* Grid */}
        <div className="flex flex-col gap-6 md:gap-8">

          {/* Row 1: Large left + 2 stacked right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <ProductCard product={products[0]} delay={0.15} className="w-full h-[60vh] md:h-[80vh]" />
            <div className="grid grid-rows-2 gap-6 md:gap-8 h-[90vh] md:h-[80vh]">
              {products.slice(1, 3).map((product, i) => (
                <ProductCard key={product.id} product={product} delay={0.3 + i * 0.18} className="w-full h-full" />
              ))}
            </div>
          </div>

          {/* Row 2: 60/40 split */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            <ProductCard product={products[3]} delay={0.2} className="md:col-span-7 w-full h-[50vh] md:h-[55vh]" />
            <ProductCard product={products[4]} delay={0.38} className="md:col-span-5 w-full h-[50vh] md:h-[55vh]" />
          </div>

        </div>
      </div>
    </section>
  );
}
