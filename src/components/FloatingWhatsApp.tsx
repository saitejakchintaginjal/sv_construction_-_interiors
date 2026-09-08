// src/components/FloatingWhatsApp.tsx
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { companyDetails } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = `https://wa.me/${companyDetails.whatsapp}?text=${encodeURIComponent(
    "Hello SV Construction, I would like to enquire about a construction/interior project in Karnataka."
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 bg-emerald-600 hover:bg-emerald-700 text-white p-3.5 rounded-full shadow-2xl flex items-center gap-2 group transition-all duration-300 hover:scale-105"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out text-sm font-semibold pr-1">
        WhatsApp Us
      </span>
    </a>
  );
};