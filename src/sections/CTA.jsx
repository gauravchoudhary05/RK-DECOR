'use client';

import React from 'react';
import FadeIn, { FadeInText, FadeInGroup } from '@/components/FadeIn';
import { useQuoteModal } from '@/components/QuoteModalContext';

export default function CTA() {
  const { openModal } = useQuoteModal();
  return (
    <section id="contact" className="relative bg-[#0b0b0c] py-28 md:py-36 lg:py-44 overflow-hidden border-t border-white/[0.03]">
      {/* Cinematic Atmospheric Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <style>{`
          @keyframes ctaGlowPulse {
            0%   { opacity: 0.4; transform: scale(0.95); }
            50%  { opacity: 0.7; transform: scale(1.05); }
            100% { opacity: 0.4; transform: scale(0.95); }
          }
        `}</style>
        <div 
          className="w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(198,169,107,0.05) 0%, transparent 60%)',
            animation: 'ctaGlowPulse 8s ease-in-out infinite'
          }}
        />
      </div>

      <div className="relative z-[2] max-w-5xl mx-auto px-6 md:px-14 lg:px-20 text-center flex flex-col items-center">
        
        {/* Eyebrow */}
        <FadeIn y={14} duration={1.0} delay={0.1}>
          <p className="text-[#c6a96b] text-[10px] md:text-[10.5px] tracking-[0.3em] uppercase font-medium mb-8">
            Start Your Project
          </p>
        </FadeIn>

        {/* Main Heading */}
        <FadeInText delay={0.25} className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-serif font-bold text-white leading-[1.1] tracking-[-0.02em] mb-8 max-w-4xl">
          Transform Your Space With <span className="text-[#c6a96b] font-light italic">Timeless Luxury.</span>
        </FadeInText>

        {/* Paragraph */}
        <FadeIn y={16} duration={1.0} delay={0.4}>
          <p className="text-white/50 text-[1rem] md:text-[1.1rem] leading-[1.8] max-w-[36rem] mb-14 md:mb-20">
            From premium flooring to bespoke interior surfaces, we create refined environments designed to elevate everyday living.
          </p>
        </FadeIn>

        {/* Buttons Row */}
        <FadeInGroup stagger={0.15} initialDelay={0.55} className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 w-full md:w-auto mb-16 md:mb-24">
          
          {/* Primary Gold Button */}
          <button onClick={openModal} className="group relative w-full md:w-auto overflow-hidden bg-[#c6a96b] text-[#0b0b0c] px-9 py-4 font-medium text-[11px] tracking-[0.15em] uppercase transition-transform duration-500 hover:scale-[1.02]">
            <div className="absolute inset-0 bg-white/20 transform -translate-x-full skew-x-12 group-hover:animate-[shimmer_1.5s_infinite]" />
            <style>{`
              @keyframes shimmer {
                100% { transform: translateX(200%) skew-x-12; }
              }
            `}</style>
            <span className="relative z-10">Get Free Quote</span>
          </button>

          {/* Secondary Outline Button (Call Now) */}
          <button className="w-full md:w-auto px-9 py-4 font-medium text-[11px] tracking-[0.15em] uppercase text-white/80 border border-white/20 hover:border-[#c6a96b] hover:text-[#c6a96b] transition-all duration-500 bg-transparent hover:bg-[#c6a96b]/[0.02]">
            Call Now
          </button>

          {/* WhatsApp Muted Luxury Button */}
          <button className="w-full md:w-auto px-9 py-4 font-medium text-[11px] tracking-[0.15em] uppercase text-white/60 border border-transparent hover:text-white transition-all duration-500 flex items-center justify-center gap-3 bg-white/[0.03] hover:bg-white/[0.06]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="opacity-70 group-hover:opacity-100 transition-opacity">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.662-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            WhatsApp
          </button>
        </FadeInGroup>

        {/* Contact Information Footer */}
        <FadeIn y={10} duration={1.0} delay={0.8} className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 pt-10 border-t border-white/[0.04] w-full max-w-3xl">
          <div className="flex flex-col items-center gap-1 group">
            <span className="text-white/30 text-[0.65rem] tracking-[0.2em] uppercase mb-1">Call Us</span>
            <a href="tel:+919911460844" className="text-white/70 hover:text-[#c6a96b] text-[0.9rem] tracking-widest transition-colors">+91 99114 60844</a>
            <a href="tel:+919990390600" className="text-white/70 hover:text-[#c6a96b] text-[0.9rem] tracking-widest transition-colors">+91 99903 90600</a>
          </div>
          
          <div className="hidden md:block w-[1px] h-12 bg-white/[0.04]" />
          
          <div className="flex flex-col items-center gap-1 group">
            <span className="text-white/30 text-[0.65rem] tracking-[0.2em] uppercase mb-1">Email Us</span>
            <a href="mailto:info@rkdecor.in" className="text-white/70 hover:text-[#c6a96b] text-[0.9rem] tracking-widest transition-colors">info@rkdecor.in</a>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
