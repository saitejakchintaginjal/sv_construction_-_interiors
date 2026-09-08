// src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { HardHat, Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import { companyDetails } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-white">
            <HardHat className="w-7 h-7 text-brand-amber" />
            <span className="font-bold text-lg">SV CONSTRUCTION</span>
          </div>
          <p className="text-sm text-slate-400">
            Trusted civil contractors and interior specialists providing turnkey construction services across Shimoga, Hubballi, Bengaluru, and all of Karnataka.
          </p>
          <div className="flex items-center gap-2 text-xs text-brand-amber">
            <CheckCircle2 className="w-4 h-4" /> KPWD Licensed & ISO Certified
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-base tracking-wider uppercase">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-brand-amber transition">About Us</Link></li>
            <li><Link to="/services" className="hover:text-brand-amber transition">Civil & Interior Services</Link></li>
            <li><Link to="/projects" className="hover:text-brand-amber transition">Project Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-brand-amber transition">Get a Quote</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-base tracking-wider uppercase">Service Areas (KA)</h4>
          <ul className="space-y-1 text-sm text-slate-400">
            {companyDetails.serviceAreas.map((area) => (
              <li key={area}>• Construction in {area}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-base tracking-wider uppercase">Contact Details</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-brand-amber shrink-0 mt-0.5" />
              <span>{companyDetails.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-brand-amber shrink-0" />
              <a href={`tel:${companyDetails.phone}`} className="hover:text-brand-amber transition">{companyDetails.phone}</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-brand-amber shrink-0" />
              <a href={`mailto:${companyDetails.email}`} className="hover:text-brand-amber transition">{companyDetails.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12 pt-6 border-t border-slate-800 text-xs text-center text-slate-500">
        <p>© {new Date().getFullYear()} SV Construction & Interiors. All rights reserved. Registered under Karnataka GST & RERA Compliance.</p>
      </div>
    </footer>
  );
};