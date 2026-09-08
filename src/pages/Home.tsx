// src/pages/Home.tsx
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SEO } from "../components/SEO";
import {
  companyDetails,
  translations,
  coreHighlights,
  allServices,
} from "../data/content";
import type { Language } from "../types";

interface HomeProps {
  lang: Language;
}

export const Home: React.FC<HomeProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <div>
      <SEO
        title="Top Civil Contractors & Builders in Shimoga & Karnataka"
        description="SV Construction & Interiors offers reliable residential, commercial, industrial civil contracting, and turnkey interior design across Karnataka."
      />

      {/* Hero Section */}
      <section className="relative bg-brand-navy py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=2000&q=80"
            alt="Construction site operations in Karnataka"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-brand-amber/20 border border-brand-amber text-brand-amber font-semibold text-xs tracking-wider rounded-full mb-4">
              GOVERNMENT REGISTERED & LICENSED CONTRACTORS
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              {t.tagline}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed">
              {t.subtagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-brand-amber hover:bg-brand-amberHover text-brand-navy font-bold px-8 py-3.5 rounded-lg shadow-lg transition"
              >
                {t.getQuote}
              </Link>
              <Link
                to="/projects"
                className="bg-slate-800 hover:bg-slate-700 text-white font-semibold px-8 py-3.5 rounded-lg border border-slate-700 transition flex items-center gap-2"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-900 border-y border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-brand-amber">
              {companyDetails.yearsExperience}
            </div>
            <div className="text-sm text-slate-400 mt-1">
              Years of Excellence
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-brand-amber">
              {companyDetails.completedProjects}
            </div>
            <div className="text-sm text-slate-400 mt-1">
              Completed Projects
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-brand-amber">
              {companyDetails.activeSites}
            </div>
            <div className="text-sm text-slate-400 mt-1">Active Sites</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-brand-amber">
              100%
            </div>
            <div className="text-sm text-slate-400 mt-1">
              Quality Guaranteed
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-brand-amber tracking-widest uppercase">
              Why Choose SV Construction
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-brand-navy sm:text-4xl">
              Building with Integrity & Precision
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreHighlights.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-brand-lightGrey rounded-xl border border-slate-200 hover:shadow-lg transition"
              >
                <item.icon className="w-10 h-10 text-brand-amber mb-4" />
                <h3 className="text-lg font-bold text-brand-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-brand-concrete">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-xs font-bold text-brand-amber tracking-widest uppercase">
                Our Capabilities
              </h2>
              <p className="mt-2 text-3xl font-extrabold text-brand-navy">
                Core Engineering & Design Services
              </p>
            </div>
            <Link
              to="/services"
              className="mt-4 md:mt-0 text-brand-navy font-bold hover:text-brand-amber inline-flex items-center gap-1 transition"
            >
              All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {allServices.slice(0, 3).map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center text-brand-amber mb-6">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-3">
                    {service.title}
                  </h3>
                  <p className="text-brand-concrete text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                <Link
                  to="/services"
                  className="mt-6 text-sm font-semibold text-brand-amber hover:underline inline-flex items-center gap-1"
                >
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
