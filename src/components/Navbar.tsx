// src/components/Navbar.tsx
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HardHat, Menu, X, PhoneCall, Globe } from "lucide-react";
import { companyDetails, translations } from "../data/content";
import type { Language } from "../types";

interface NavbarProps {
  lang: Language;
  setLang: React.Dispatch<React.SetStateAction<Language>>;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const t = translations[lang];

  const navLinks = [
    { name: t.home, path: "/" },
    { name: t.about, path: "/about" },
    { name: t.services, path: "/services" },
    { name: t.projects, path: "/projects" },
    { name: t.contact, path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-brand-navy shadow-md text-white">
      {/* Top Banner */}
      <div className="bg-slate-900 border-b border-slate-800 px-4 py-1.5 text-xs text-slate-300 hidden md:flex justify-between items-center max-w-7xl mx-auto">
        <span>📍 Serving Shimoga, Hubballi, Bengaluru & Karnataka</span>
        <div className="flex items-center gap-4">
          <a
            href={`tel:${companyDetails.phone}`}
            className="hover:text-brand-amber flex items-center gap-1 transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5 text-brand-amber" />{" "}
            {companyDetails.phone}
          </a>
          <button
            onClick={() => setLang((prev) => (prev === "en" ? "kn" : "en"))}
            className="flex items-center gap-1 hover:text-brand-amber font-semibold text-brand-amber transition-colors"
          >
            <Globe className="w-3.5 h-3.5" />{" "}
            {lang === "en" ? "ಕನ್ನಡ" : "English"}
          </button>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="p-2 bg-brand-amber text-brand-navy rounded-lg group-hover:scale-105 transition-transform">
              <HardHat className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight block text-white">
                SV CONSTRUCTION
              </span>
              <span className="text-xs text-brand-amber tracking-widest uppercase block">
                & Interiors
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8 font-medium">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `transition hover:text-brand-amber ${
                    isActive
                      ? "text-brand-amber border-b-2 border-brand-amber pb-1"
                      : "text-slate-200"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="bg-brand-amber hover:bg-brand-amberHover text-brand-navy font-bold px-5 py-2.5 rounded-lg shadow transition transform hover:-translate-y-0.5"
            >
              {t.getQuote}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setLang((prev) => (prev === "en" ? "kn" : "en"))}
              className="text-xs text-brand-amber font-bold border border-brand-amber px-2 py-1 rounded"
            >
              {lang === "en" ? "KN" : "EN"}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800"
              aria-label="Toggle navigation"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-brand-navyLight border-t border-slate-700 px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-brand-amber hover:bg-slate-800"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-brand-amber text-brand-navy font-bold px-4 py-3 rounded-md"
          >
            {t.getQuote}
          </Link>
        </div>
      )}
    </header>
  );
};
