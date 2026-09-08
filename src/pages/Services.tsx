// src/pages/Services.tsx
import React from 'react';
import { SEO } from '../components/SEO';
import { allServices } from '../data/content';

export const Services: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <SEO 
        title="Construction & Interior Services in Karnataka" 
        description="Comprehensive civil contracting, architectural planning, residential construction, PEB sheds, and turnkey interior design." 
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy">Engineering & Construction Services</h1>
          <p className="mt-3 text-brand-concrete">Delivering dependable civil infrastructure with high-grade materials and certified workmanship.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((svc) => (
            <div key={svc.id} className="p-8 bg-brand-lightGrey border border-slate-200 rounded-xl hover:border-brand-amber transition group">
              <svc.icon className="w-10 h-10 text-brand-amber mb-5 group-hover:scale-110 transition-transform" />
              <h2 className="text-xl font-bold text-brand-navy mb-3">{svc.title}</h2>
              <p className="text-sm text-brand-concrete leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};