'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import GetQuoteModal from './GetQuoteModal';

const QuoteModalContext = createContext();

export function QuoteModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // Allow ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <QuoteModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <GetQuoteModal isOpen={isOpen} onClose={closeModal} />
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  const context = useContext(QuoteModalContext);
  if (context === undefined) {
    throw new Error('useQuoteModal must be used within a QuoteModalProvider');
  }
  return context;
}
