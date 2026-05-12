'use client';

import React from 'react';
import FadeIn, { FadeInText, FadeInGroup } from '@/components/FadeIn';

const testimonials = [
  {
    id: 1,
    quote: "RK Decor transformed our home into a sophisticated and elegant space beyond our expectations.",
    author: "Nadeem Hussain",
    isFeatured: true,
  },
  {
    id: 2,
    quote: "Their attention to detail and premium finish quality truly stands out.",
    author: "Danish Cord",
    isFeatured: false,
  },
  {
    id: 3,
    quote: "Professional execution, refined aesthetics, and exceptional service from start to finish.",
    author: "Iqbal Hussain",
    isFeatured: false,
  },
  {
    id: 4,
    quote: "Every detail felt intentional and beautifully crafted.",
    author: "Menuka Ghimire",
    isFeatured: false,
  }
];

export default function Testimonials() {
  const featured = testimonials.find(t => t.isFeatured);
  const standard = testimonials.filter(t => !t.isFeatured);

  return (
    <section className="relative bg-[#0b0b0c] py-28 md:py-36 lg:py-44 overflow-hidden border-t border-white/[0.03]">
      {/* Atmospheric radial glow */}
      <div
        className="absolute left-[10%] bottom-[10%] w-[600px] h-[600px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(198,169,107,0.03) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-[2] max-w-[85rem] mx-auto px-6 md:px-14 lg:px-20">
        
        {/* Section Header */}
        <div className="flex flex-col gap-6 mb-16 lg:mb-24 max-w-2xl">
          <FadeIn y={14} duration={1.0} delay={0.1}>
            <p className="text-[#c6a96b] text-[10px] md:text-[10.5px] tracking-[0.3em] uppercase font-medium">
              Client Experiences
            </p>
          </FadeIn>
          
          <FadeInText delay={0.25} className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-serif font-bold text-white leading-[1.1] tracking-[-0.02em]">
            What Our Clients Say
          </FadeInText>
          
          <FadeIn y={16} duration={1.0} delay={0.4}>
            <p className="text-white/45 text-[0.875rem] md:text-[0.95rem] leading-[1.9] max-w-[28rem]">
              Our clients value thoughtful craftsmanship, premium execution, and timeless interior experiences.
            </p>
          </FadeIn>
        </div>

        {/* Testimonials Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left: Featured Testimonial */}
          {featured && (
            <div className="lg:col-span-6 flex flex-col justify-center relative">
              <FadeIn y={20} duration={1.2} delay={0.4} className="relative z-10 pr-0 lg:pr-8">
                {/* Large decorative quote mark */}
                <span className="absolute -top-12 -left-2 md:-left-10 text-[8rem] md:text-[12rem] font-serif text-white/[0.02] leading-none pointer-events-none select-none">
                  &ldquo;
                </span>
                <blockquote className="text-[1.5rem] md:text-[2.2rem] lg:text-[2.5rem] font-serif leading-[1.4] text-white/90 font-light mb-10 md:mb-14 tracking-[-0.01em]">
                  &ldquo;{featured.quote}&rdquo;
                </blockquote>
                
                <div className="flex items-center gap-6">
                  <div className="w-12 h-[1px] bg-[#c6a96b]" />
                  <p className="text-[#c6a96b] text-[0.85rem] md:text-[0.9rem] tracking-[0.1em] uppercase font-medium">
                    — {featured.author}
                  </p>
                </div>
              </FadeIn>
            </div>
          )}

          {/* Right: Stacked Standard Testimonials */}
          <div className="lg:col-span-6 flex flex-col pt-4 lg:pt-0">
            <FadeInGroup stagger={0.15} initialDelay={0.55}>
              {standard.map((t, index) => (
                <div 
                  key={t.id}
                  className="group flex flex-col gap-6 py-8 md:py-10 border-t border-white/[0.04] first:border-t-0 lg:first:border-t"
                >
                  <blockquote className="text-[1.1rem] md:text-[1.25rem] font-serif text-white/60 leading-[1.6] group-hover:text-white transition-colors duration-500 ease-out transform group-hover:translate-x-2">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <p className="text-white/30 text-[0.75rem] md:text-[0.8rem] tracking-[0.1em] uppercase transition-colors duration-500 group-hover:text-[#c6a96b] transform group-hover:translate-x-2">
                    — {t.author}
                  </p>
                </div>
              ))}
            </FadeInGroup>
          </div>

        </div>
      </div>
    </section>
  );
}
