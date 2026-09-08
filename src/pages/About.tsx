// src/pages/About.tsx
import React from "react";
import { CheckCircle2, Award, Users, Shield } from "lucide-react";
import { SEO } from "../components/SEO";
import { companyDetails } from "../data/content";

export const About: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <SEO
        title="About SV Construction & Interiors"
        description="Learn about our 6+ years history, licensed civil engineers, and core values of transparency and on-time delivery across Karnataka."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold text-brand-amber uppercase tracking-wider">
              About Our Company
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mt-2 mb-6">
              6+ Years of Delivering Engineering Excellence in Karnataka
            </h1>
            <p className="text-brand-concrete leading-relaxed mb-4">
              Established with a focus on uncompromised structural stability and
              transparent pricing, {companyDetails.name} has grown into one of
              Central Karnataka's dependable construction and turnkey interior
              firms.
            </p>
            <p className="text-brand-concrete leading-relaxed mb-6">
              From our roots in Shimoga, we actively build residential homes,
              commercial complexes, and industrial sheds across Hubballi,
              Bengaluru, and nearby districts.
            </p>

            <div className="grid grid-cols-2 gap-4 text-sm font-semibold text-brand-navy">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-amber" /> Certified
                Civil Engineers
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-amber" />{" "}
                Transparent BOQ Quotes
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-amber" /> KPWD Class
                Licensed
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-amber" /> On-Time
                Guarantee
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
              alt="Engineers inspecting site"
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
            />
          </div>
        </div>

        <div className="border-t border-slate-200 pt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <Award className="w-12 h-12 text-brand-amber mx-auto mb-4" />
            <h3 className="text-xl font-bold text-brand-navy mb-2">
              Uncompromising Quality
            </h3>
            <p className="text-sm text-brand-concrete">
              We test raw materials like aggregates, steel, and concrete
              mixtures for every slab casting.
            </p>
          </div>
          <div className="p-6">
            <Shield className="w-12 h-12 text-brand-amber mx-auto mb-4" />
            <h3 className="text-xl font-bold text-brand-navy mb-2">
              No Hidden Costs
            </h3>
            <p className="text-sm text-brand-concrete">
              Detailed stage-wise Bill of Quantities (BOQ) with clearly listed
              material specifications.
            </p>
          </div>
          <div className="p-6">
            <Users className="w-12 h-12 text-brand-amber mx-auto mb-4" />
            <h3 className="text-xl font-bold text-brand-navy mb-2">
              Skilled Workforce
            </h3>
            <p className="text-sm text-brand-concrete">
              Dedicated site supervisors, licensed architects, and experienced
              masons managing each site.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
