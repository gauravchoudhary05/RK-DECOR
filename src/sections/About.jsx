'use client';

import React from 'react';
import Image from 'next/image';
import FadeIn, { FadeInText, FadeInGroup } from '@/components/FadeIn';

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '500+', label: 'Projects Completed' },
  { value: '98%', label: 'Client Satisfaction' },
];

export default function About() {
  return (
    <section id="about" className="relative bg-[#0b0b0c] py-28 md:py-36 lg:py-44 overflow-hidden border-t border-white/[0.03]">
      {/* ── Atmospheric radial glow ── */}
      <div
        className="absolute right-[-10%] top-1/3 w-[700px] h-[700px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(198,169,107,0.045) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute left-[15%] bottom-[-10%] w-[500px] h-[500px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(198,169,107,0.03) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-[2] max-w-7xl mx-auto px-6 md:px-14 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* ════════════════════════════════
              LEFT — Image Composition
          ════════════════════════════════ */}
          <div className="lg:col-span-5 relative">
            {/* Primary image */}
            <FadeIn y={20} duration={1.4} delay={0.1} amount={0.15}>
              <div className="relative overflow-hidden group">
                <div className="aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    alt="Premium luxury interior design by RK Decor"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                  />
                  {/* Cinematic overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0c]/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-[#c6a96b]/[0.04] mix-blend-overlay pointer-events-none" />
                </div>
              </div>
            </FadeIn>

            {/* Secondary layered image — offset below-right */}
            <FadeIn y={30} duration={1.4} delay={0.35} amount={0.2} className="hidden md:block absolute -bottom-8 -right-4 md:-right-10 lg:-right-14 w-[55%] z-[5]">
              <div className="overflow-hidden shadow-2xl shadow-black/50 relative">
                <div className="aspect-[4/3] overflow-hidden group relative">
                  <Image
                    src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Detail of premium interior materials"
                    fill
                    sizes="(max-width: 768px) 0vw, 33vw"
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-black/30 pointer-events-none" />
                </div>
                {/* Gold accent border */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#c6a96b]/40 via-[#c6a96b]/10 to-transparent z-[6]" />
              </div>
            </FadeIn>

            {/* Gold accent line — vertical */}
            <FadeIn y={0} duration={1.2} delay={0.5} className="hidden lg:block absolute -left-6 top-12 w-[1px] h-24 bg-gradient-to-b from-[#c6a96b]/50 to-transparent" />
          </div>

          {/* ════════════════════════════════
              RIGHT — Content Block
          ════════════════════════════════ */}
          <div className="lg:col-span-7 flex flex-col gap-7 md:gap-8">
            <FadeIn y={14} duration={1.0} delay={0.1}>
              <p className="text-[#c6a96b] text-[10px] md:text-[10.5px] tracking-[0.3em] uppercase font-medium">
                About RK Decor
              </p>
            </FadeIn>

            <FadeInText delay={0.2} className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-serif font-bold text-white leading-[1.08] tracking-[-0.02em]">
              Crafting Spaces With{' '}
              <span className="text-[#c6a96b] font-light italic">Timeless Elegance</span>
            </FadeInText>

            <FadeIn y={16} duration={1.0} delay={0.35}>
              <p className="text-white/45 text-[0.875rem] md:text-[0.925rem] leading-[1.95] max-w-[32rem]">
                At RK Decor, we combine premium materials, refined craftsmanship, and
                modern interior aesthetics to create spaces that feel luxurious, functional,
                and deeply personal. From premium flooring solutions to bespoke wall and
                ceiling systems, every detail is designed to elevate everyday living.
              </p>
            </FadeIn>

            <FadeIn y={16} duration={1.0} delay={0.5}>
              <p className="text-white/30 text-[0.825rem] md:text-[0.875rem] leading-[1.85] italic max-w-[28rem]">
                Our philosophy is simple — exceptional interiors should feel effortless,
                warm, and enduring.
              </p>
            </FadeIn>

            {/* ── Stats Row ── */}
            <FadeInGroup stagger={0.15} initialDelay={0.65} className="flex flex-col sm:flex-row gap-6 sm:gap-0 mt-4 md:mt-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`flex-1 ${
                    index < stats.length - 1
                      ? 'sm:border-r sm:border-white/[0.06]'
                      : ''
                  } ${index > 0 ? 'sm:pl-8' : ''} ${index < stats.length - 1 ? 'sm:pr-8' : ''}`}
                >
                  <p className="text-[2rem] md:text-[2.4rem] font-serif font-bold text-white tracking-tight leading-none">
                    {stat.value}
                  </p>
                  <p className="text-white/35 text-[10px] md:text-[10.5px] tracking-[0.2em] uppercase mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </FadeInGroup>

            {/* ── CTA Button ── */}
            <FadeIn y={14} duration={1.0} delay={0.9} className="mt-4 md:mt-6">
              <button className="group relative px-9 py-4 border border-[#c6a96b]/40 text-white/65 text-[11px] uppercase tracking-[0.15em] font-medium overflow-hidden transition-all duration-500 hover:text-[#c6a96b] hover:border-[#c6a96b]/70 hover:translate-y-[-1px]">
                <span className="relative z-[1]">Discover Our Story</span>
                <span className="absolute inset-0 bg-[#c6a96b]/[0.06] transform scale-x-0 origin-left transition-transform duration-700 ease-out group-hover:scale-x-100" />
              </button>
            </FadeIn>

          </div>

        </div>
      </div>
    </section>
  );
}
