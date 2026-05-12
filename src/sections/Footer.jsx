'use client';

import React from 'react';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Products', href: '#' },
  { name: 'Gallery', href: '#' },
  { name: 'Blog', href: '#' },
  { name: 'Contact', href: '#' },
];

const serviceLinks = [
  { name: 'Wood Flooring', href: '#' },
  { name: 'SPC Flooring', href: '#' },
  { name: 'Wall Panels', href: '#' },
  { name: 'Soffit Panels', href: '#' },
  { name: 'Wallpapers', href: '#' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0b0b0c] pt-24 pb-8 border-t border-white/[0.04] overflow-hidden">


      <div className="relative z-[2] max-w-[85rem] mx-auto px-6 md:px-14 lg:px-20">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-12 mb-20">
          
          {/* Brand & Description (Left) */}
          <div className="lg:col-span-4 flex flex-col gap-6 lg:pr-10">
            <h3 className="font-serif text-[1.5rem] md:text-[1.75rem] tracking-wider text-white">
              RK DECOR
            </h3>
            <p className="text-white/40 text-[0.9rem] leading-[1.8] max-w-sm">
              Premium interior and exterior decor solutions crafted with timeless elegance and refined execution.
            </p>
          </div>

          {/* Links (Middle) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8 md:gap-16">
            <div className="flex flex-col gap-6">
              <span className="text-[#c6a96b] text-[10px] tracking-[0.2em] uppercase font-semibold">Navigation</span>
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-white/60 text-[0.875rem] hover:text-[#c6a96b] transition-colors duration-300 relative group inline-block"
                    >
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#c6a96b] transition-all duration-300 group-hover:w-full opacity-50" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col gap-6">
              <span className="text-[#c6a96b] text-[10px] tracking-[0.2em] uppercase font-semibold">Services</span>
              <ul className="flex flex-col gap-4">
                {serviceLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-white/60 text-[0.875rem] hover:text-[#c6a96b] transition-colors duration-300 relative group inline-block"
                    >
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#c6a96b] transition-all duration-300 group-hover:w-full opacity-50" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Information (Right) */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <span className="text-[#c6a96b] text-[10px] tracking-[0.2em] uppercase font-semibold">Contact</span>
              <div className="flex flex-col gap-2">
                <a href="tel:+919911460844" className="text-white/60 text-[0.9rem] tracking-wider hover:text-[#c6a96b] transition-colors duration-300 font-light">
                  +91-9911460844
                </a>
                <a href="tel:+919990390600" className="text-white/60 text-[0.9rem] tracking-wider hover:text-[#c6a96b] transition-colors duration-300 font-light">
                  +91-9990390600
                </a>
                <a href="mailto:info@rkdecor.in" className="text-white/60 text-[0.9rem] tracking-wide hover:text-[#c6a96b] transition-colors duration-300 font-light mt-2">
                  info@rkdecor.in
                </a>
              </div>
            </div>
            
            <div className="flex flex-col gap-4 mt-2">
              <span className="text-[#c6a96b] text-[10px] tracking-[0.2em] uppercase font-semibold">Location</span>
              <p className="text-white/40 text-[0.875rem] leading-[1.8] font-light max-w-[14rem]">
                55/12, Block A, DLF Phase 1,
                <br />Gurugram, Haryana 122002
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/[0.04] gap-4">
          <p className="text-white/30 text-[0.75rem] tracking-[0.05em]">
            &copy; 2026 RK Decor. All rights reserved.
          </p>
          <p className="text-white/30 text-[0.75rem] tracking-[0.05em] italic font-serif">
            Designed with timeless aesthetics.
          </p>
        </div>

      </div>
    </footer>
  );
}
