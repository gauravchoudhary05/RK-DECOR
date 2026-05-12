'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PROJECT_TYPES = [
  'Laminated Flooring',
  'SPC/LVT Flooring',
  'Wall Panels',
  'Soffit Panels',
  'Wallpapers',
  'Full Interior Solution',
];

export default function GetQuoteModal({ isOpen, onClose }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      // Reset form state on close after animation finishes
      setTimeout(() => {
        setIsSuccess(false);
        setIsSubmitting(false);
      }, 500);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[210] pointer-events-none flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.4, sm: { duration: 0.6 }, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-[420px] sm:max-w-[560px] max-h-[90vh] overflow-y-auto pointer-events-auto relative bg-[#0b0b0c]/95 border border-white/5 backdrop-blur-xl shadow-2xl rounded-md sm:rounded-none"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-5 right-5 sm:top-6 sm:right-6 p-2 text-white/40 hover:text-white transition-colors z-20"
                aria-label="Close modal"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              {/* Gold atmospheric glow inside modal */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[200px] pointer-events-none z-0"
                style={{
                  background:
                    'radial-gradient(ellipse at top, rgba(198,169,107,0.1) 0%, transparent 70%)',
                }}
              />

              <div className="relative z-10 p-6 sm:p-10 md:p-12">
                <AnimatePresence mode="wait">
                  {!isSuccess ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="mb-6 sm:mb-10 text-center sm:text-left">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.1] tracking-tight">
                          Request a <span className="text-[#c6a96b] italic font-light">Quote</span>
                        </h2>
                        <p className="mt-3 text-white/40 text-[0.85rem] sm:text-[0.9375rem] leading-relaxed max-w-[95%] mx-auto sm:mx-0">
                          Provide your details below and our team will prepare a custom consultation for your space.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                          {/* Full Name */}
                          <div className="flex flex-col gap-1.5 sm:gap-2">
                            <label htmlFor="name" className="text-[9px] sm:text-[10px] uppercase tracking-[0.1em] sm:tracking-[0.15em] text-white/50 font-medium ml-1">
                              Full Name
                            </label>
                            <input
                              required
                              type="text"
                              id="name"
                              className="w-full bg-white/5 border border-white/10 text-white text-sm px-4 py-3 sm:py-3.5 focus:outline-none focus:border-[#c6a96b]/60 transition-colors placeholder:text-white/20 rounded-sm sm:rounded-none"
                              placeholder="John Doe"
                            />
                          </div>

                          {/* Phone Number */}
                          <div className="flex flex-col gap-1.5 sm:gap-2">
                            <label htmlFor="phone" className="text-[9px] sm:text-[10px] uppercase tracking-[0.1em] sm:tracking-[0.15em] text-white/50 font-medium ml-1">
                              Phone Number
                            </label>
                            <input
                              required
                              type="tel"
                              id="phone"
                              className="w-full bg-white/5 border border-white/10 text-white text-sm px-4 py-3 sm:py-3.5 focus:outline-none focus:border-[#c6a96b]/60 transition-colors placeholder:text-white/20 rounded-sm sm:rounded-none"
                              placeholder="+91 98765 43210"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                          {/* Email */}
                          <div className="flex flex-col gap-1.5 sm:gap-2">
                            <label htmlFor="email" className="text-[9px] sm:text-[10px] uppercase tracking-[0.1em] sm:tracking-[0.15em] text-white/50 font-medium ml-1">
                              Email Address
                            </label>
                            <input
                              required
                              type="email"
                              id="email"
                              className="w-full bg-white/5 border border-white/10 text-white text-sm px-4 py-3 sm:py-3.5 focus:outline-none focus:border-[#c6a96b]/60 transition-colors placeholder:text-white/20 rounded-sm sm:rounded-none"
                              placeholder="john@example.com"
                            />
                          </div>

                          {/* City */}
                          <div className="flex flex-col gap-1.5 sm:gap-2">
                            <label htmlFor="city" className="text-[9px] sm:text-[10px] uppercase tracking-[0.1em] sm:tracking-[0.15em] text-white/50 font-medium ml-1">
                              City
                            </label>
                            <input
                              required
                              type="text"
                              id="city"
                              className="w-full bg-white/5 border border-white/10 text-white text-sm px-4 py-3 sm:py-3.5 focus:outline-none focus:border-[#c6a96b]/60 transition-colors placeholder:text-white/20 rounded-sm sm:rounded-none"
                              placeholder="Gurugram"
                            />
                          </div>
                        </div>

                        {/* Project Type */}
                        <div className="flex flex-col gap-1.5 sm:gap-2">
                          <label htmlFor="projectType" className="text-[9px] sm:text-[10px] uppercase tracking-[0.1em] sm:tracking-[0.15em] text-white/50 font-medium ml-1">
                            Project Type
                          </label>
                          <div className="relative">
                            <select
                              required
                              id="projectType"
                              className="w-full appearance-none bg-white/5 border border-white/10 text-white text-sm px-4 py-3 sm:py-3.5 focus:outline-none focus:border-[#c6a96b]/60 transition-colors cursor-pointer rounded-sm sm:rounded-none"
                              defaultValue=""
                            >
                              <option value="" disabled className="bg-[#0b0b0c] text-white/40">Select a service</option>
                              {PROJECT_TYPES.map((type) => (
                                <option key={type} value={type} className="bg-[#0b0b0c] text-white">{type}</option>
                              ))}
                            </select>
                            {/* Custom Select Arrow */}
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M6 9l6 6 6-6" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        {/* Message */}
                        <div className="flex flex-col gap-1.5 sm:gap-2">
                          <label htmlFor="message" className="text-[9px] sm:text-[10px] uppercase tracking-[0.1em] sm:tracking-[0.15em] text-white/50 font-medium ml-1">
                            Additional Details
                          </label>
                          <textarea
                            id="message"
                            rows={3}
                            className="w-full bg-white/5 border border-white/10 text-white text-sm px-4 py-3 sm:py-3.5 focus:outline-none focus:border-[#c6a96b]/60 transition-colors placeholder:text-white/20 resize-none rounded-sm sm:rounded-none"
                            placeholder="Tell us about your space..."
                          />
                        </div>

                        {/* Submit Button */}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="group relative w-full bg-[#c6a96b] text-[#0b0b0c] py-3.5 sm:py-4 mt-2 sm:mt-4 font-medium tracking-[0.15em] uppercase text-[10px] sm:text-[11px] overflow-hidden transition-transform duration-500 ease-out hover:scale-[1.01] active:scale-[0.99] disabled:opacity-80 disabled:cursor-not-allowed rounded-sm sm:rounded-none"
                        >
                          <span className={`relative z-10 flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-0' : 'opacity-100'}`}>
                            Request Consultation
                          </span>
                          
                          {/* Loading Spinner */}
                          {isSubmitting && (
                            <div className="absolute inset-0 z-20 flex items-center justify-center">
                              <svg className="animate-spin h-5 w-5 text-[#0b0b0c]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                            </div>
                          )}
                          
                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out pointer-events-none" />
                        </button>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="flex flex-col items-center justify-center text-center py-12"
                    >
                      <div className="w-16 h-16 rounded-full border border-[#c6a96b]/30 flex items-center justify-center mb-6 text-[#c6a96b]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-serif font-light text-white mb-3">
                        Thank You
                      </h3>
                      <p className="text-white/40 text-[0.9375rem] leading-relaxed max-w-[80%] mx-auto">
                        Your request has been received. Our team will contact you shortly to discuss your project.
                      </p>
                      <button
                        onClick={onClose}
                        className="mt-8 border border-white/10 text-white/60 hover:text-white hover:border-white/30 px-8 py-3 text-[11px] uppercase tracking-[0.15em] font-medium transition-all duration-300"
                      >
                        Close
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
