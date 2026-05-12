'use client';

import React from 'react';
import Image from 'next/image';
import FadeIn from '@/components/FadeIn';
import { useQuoteModal } from '@/components/QuoteModalContext';

export default function Hero() {
  const { openModal } = useQuoteModal();
  return (
    <>
      <style>{`
        /* ─── Cinematic image zoom ─── */
        @keyframes slowZoom {
          from { transform: scale(1.08) translateZ(0); }
          to   { transform: scale(1.00) translateZ(0); }
        }

        /* ─── Content entrance animations ─── */
        @keyframes riseIn {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0);    }
        }

        /* ─── Gold shimmer sweep ─── */
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center;  }
        }



        .hero-image {
          animation: slowZoom 3.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          will-change: transform;
        }

        /* .hero-tagline / .hero-heading / .hero-body / .hero-cta
           entrance animations now handled by Framer Motion FadeIn */

        /* Gold shimmer on the italic word */
        .gold-shimmer {
          background: linear-gradient(
            105deg,
            #c6a96b 0%,
            #e8d5a3 40%,
            #c6a96b 50%,
            #a8894d 60%,
            #c6a96b 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          animation: shimmer 6s linear 2s infinite;
          will-change: background-position;
        }



        /* Primary CTA hover glow */
        .cta-primary {
          position: relative;
          transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1),
                      filter 0.5s ease,
                      box-shadow 0.5s ease;
        }
        .cta-primary::after {
          content: '';
          position: absolute;
          inset: 0;
          box-shadow: 0 0 0 0 rgba(198,169,107,0);
          transition: box-shadow 0.5s ease;
          pointer-events: none;
        }
        .cta-primary:hover {
          transform: translateY(-2px) scale(1.015);
          filter: brightness(1.08);
        }
        .cta-primary:hover::after {
          box-shadow: 0 8px 32px rgba(198,169,107,0.22);
        }

        /* Secondary CTA border animation */
        .cta-secondary {
          position: relative;
          overflow: hidden;
          transition: color 0.5s ease, background-color 0.5s ease, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .cta-secondary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(198,169,107,0.07);
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .cta-secondary:hover::before {
          transform: scaleX(1);
        }
        .cta-secondary:hover {
          color: #c6a96b;
          transform: translateY(-1px);
          border-color: rgba(198,169,107,0.8);
        }
      `}</style>

      <section id="home" className="relative min-h-screen bg-[#0b0b0c] flex flex-col md:flex-row items-center overflow-hidden">


        {/* ── Cinematic vignette ── */}
        <div
          className="absolute inset-0 z-[3] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 45%, rgba(0,0,0,0.6) 100%)',
          }}
          aria-hidden="true"
        />

        {/* ── Gold atmospheric glow behind content ── */}
        <div
          className="absolute left-[-5%] top-1/2 -translate-y-1/2 w-[600px] h-[800px] pointer-events-none z-[1]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(198,169,107,0.07) 0%, transparent 68%)',
          }}
          aria-hidden="true"
        />

        {/* ════════════════════════════════
            Content Column
        ════════════════════════════════ */}
        <div className="w-full md:w-1/2 lg:w-[58%] relative z-[10] px-6 md:px-14 lg:px-20 pt-28 pb-16 md:pt-0 md:pb-0 md:min-h-screen flex flex-col justify-center text-center md:text-left order-1">
          <div className="max-w-[30rem] md:max-w-[33rem] mx-auto md:mx-0 flex flex-col gap-5 md:gap-7">

            {/* Tagline — first to reveal */}
            <FadeIn y={16} duration={1.1} delay={0.2} once amount={0.05}>
              <p className="text-[#c6a96b] text-[10px] md:text-[10.5px] tracking-[0.3em] uppercase font-medium">
                Premium Interior Solutions
              </p>
            </FadeIn>

            {/* Main Heading — weighted, slower */}
            <FadeIn y={24} duration={1.3} delay={0.5} blur blurAmount={5} once amount={0.05}>
              <h1 className="text-4xl sm:text-5xl md:text-[3.6rem] lg:text-[4.4rem] font-serif font-bold text-white leading-[1.05] tracking-[-0.025em]">
                Transform Your Space Into{' '}
                <span className="gold-shimmer font-light italic">Luxury</span>
              </h1>
            </FadeIn>

            {/* Body — delicate, restrained */}
            <FadeIn y={18} duration={1.2} delay={0.8} once amount={0.05}>
              <p className="text-white/40 text-[0.875rem] sm:text-[0.925rem] md:text-[0.95rem] leading-[1.9] max-w-[27rem] mx-auto md:mx-0">
                Elevate your environment with premium flooring, wall panels, and
                bespoke decor solutions crafted for discerning spaces.
              </p>
            </FadeIn>

            {/* CTAs — last to arrive, calm */}
            <FadeIn y={14} duration={1.1} delay={1.1} once amount={0.05}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-3 w-full">
                <button onClick={openModal} className="cta-primary w-full sm:w-auto bg-[#c6a96b] text-[#0b0b0c] px-9 py-4 font-medium tracking-[0.15em] uppercase text-[11px]">
                  Get Free Quote
                </button>
                <button className="cta-secondary w-full sm:w-auto border border-[#c6a96b]/40 text-white/60 bg-transparent px-9 py-4 font-medium tracking-[0.15em] uppercase text-[11px]">
                  Call Now
                </button>
              </div>
            </FadeIn>

          </div>
        </div>

        {/* ════════════════════════════════
            Image Column
        ════════════════════════════════ */}
        <div className="w-full md:w-1/2 lg:w-[42%] h-[55vh] min-h-[400px] md:max-h-none md:h-screen relative order-2 overflow-hidden">

          {/* Reduced overlay — reveals image richness */}
          <div className="absolute inset-0 bg-black/40 z-[4] pointer-events-none" />

          {/* Warm cinematic tint */}
          <div className="absolute inset-0 bg-[#c6a96b]/6 mix-blend-overlay z-[5] pointer-events-none" />

          {/* Desktop: left-edge blend */}
          <div
            className="hidden md:block absolute inset-0 z-[6] pointer-events-none"
            style={{
              background: 'linear-gradient(to right, #0b0b0c 0%, rgba(11,11,12,0.55) 28%, transparent 65%)',
            }}
          />

          {/* Mobile: top-edge blend */}
          <div
            className="md:hidden absolute inset-0 z-[6] pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, #0b0b0c 0%, rgba(11,11,12,0.4) 38%, transparent 78%)',
            }}
          />

          {/* Mobile: bottom fade to next section */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0b0b0c] to-transparent z-[6] pointer-events-none md:hidden" />

          {/* Cinematic slow-zoom image */}
          <Image
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Cinematic Luxury Interior"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="hero-image object-cover object-center"
          />
        </div>

      </section>
    </>
  );
}