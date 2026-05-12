'use client';

import React, { useState } from 'react';
import FadeIn, { FadeInText, FadeInGroup } from '@/components/FadeIn';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We understand your vision, space, and aesthetic goals.',
  },
  {
    number: '02',
    title: 'Material Selection',
    description: 'Carefully curated premium finishes and luxury surfaces.',
  },
  {
    number: '03',
    title: 'Precision Installation',
    description: 'Executed by experienced professionals with exceptional attention to detail.',
  },
  {
    number: '04',
    title: 'Final Styling',
    description: 'The finishing touches that transform spaces into experiences.',
  },
];

export default function Process() {
  const [hoveredStep, setHoveredStep] = useState(null);

  return (
    <section id="process" className="relative bg-[#0b0b0c] py-28 md:py-36 lg:py-44 overflow-hidden border-t border-white/[0.03]">
      {/* ── Atmospheric radial glow ── */}
      <div
        className="absolute left-[-10%] top-1/2 w-[700px] h-[700px] pointer-events-none z-0 transform -translate-y-1/2"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(198,169,107,0.03) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-[2] max-w-7xl mx-auto px-6 md:px-14 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* ════════════════════════════════
              LEFT — Header & Intro
          ════════════════════════════════ */}
          <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8 lg:sticky lg:top-32 h-fit">
            <FadeIn y={14} duration={1.0} delay={0.1}>
              <p className="text-[#c6a96b] text-[10px] md:text-[10.5px] tracking-[0.3em] uppercase font-medium">
                Our Process
              </p>
            </FadeIn>

            <FadeInText delay={0.25} className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-serif font-bold text-white leading-[1.1] tracking-[-0.02em]">
              Designed With <span className="text-[#c6a96b] font-light italic">Precision.</span><br />
              Built With <span className="text-[#c6a96b] font-light italic">Excellence.</span>
            </FadeInText>

            <FadeIn y={16} duration={1.0} delay={0.4}>
              <p className="text-white/45 text-[0.875rem] md:text-[0.925rem] leading-[1.95] max-w-[28rem]">
                We combine premium materials, expert craftsmanship, and thoughtful execution to create interiors that feel timeless, elegant, and deeply refined.
              </p>
            </FadeIn>
          </div>

          {/* ════════════════════════════════
              RIGHT — Process Steps
          ════════════════════════════════ */}
          <div className="lg:col-span-7 relative">
            {/* Vertical connecting line for desktop */}
            <motion.div 
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.6, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="hidden md:block absolute left-0 top-6 bottom-6 w-[1px] bg-white/[0.04] origin-top" 
            />
            
            <FadeInGroup stagger={0.15} initialDelay={0.5} className="flex flex-col gap-12 md:gap-16">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="relative group md:pl-16"
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  {/* Active line indicator */}
                  <div 
                    className={`hidden md:block absolute left-0 top-0 bottom-[-4rem] w-[2px] bg-[#c6a96b] transition-all duration-700 ease-out origin-top ${
                      hoveredStep === index ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
                    }`}
                  />
                  
                  <div className="flex flex-col md:flex-row gap-4 md:gap-10">
                    {/* Number */}
                    <div className="flex-shrink-0">
                      <span className={`font-serif text-[3rem] md:text-[4rem] leading-none transition-colors duration-500 ${
                        hoveredStep === index ? 'text-[#c6a96b]' : 'text-white/10'
                      }`}>
                        {step.number}
                      </span>
                    </div>
                    
                    {/* Content */}
                    <div className="flex flex-col gap-3 pt-2 md:pt-4">
                      <div className="flex items-center gap-4">
                        <h3 className={`text-[1.25rem] md:text-[1.5rem] font-serif transition-colors duration-500 ${
                          hoveredStep === index ? 'text-white' : 'text-white/80'
                        }`}>
                          {step.title}
                        </h3>
                        {/* Horizontal line for mobile separator */}
                        <div className="h-[1px] flex-grow bg-white/[0.04] md:hidden" />
                      </div>
                      <p className="text-white/40 text-[0.875rem] leading-[1.8] max-w-[24rem]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </FadeInGroup>
          </div>

        </div>
      </div>
    </section>
  );
}
