// src/pages/Contact.tsx
import React, { useState, type ChangeEvent, type FormEvent } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { SEO } from "../components/SEO";
import { companyDetails } from "../data/content";
import type { QuoteFormData } from "../types";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: "",
    phone: "",
    email: "",
    location: "",
    projectType: "Residential Construction",
    message: "",
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="py-16 bg-brand-lightGrey">
      <SEO
        title="Contact Us & Request a Quote"
        description="Get in touch with SV Construction & Interiors for civil contracting, construction cost estimates, and interior design quotes in Karnataka."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy">
            Get in Touch
          </h1>
          <p className="mt-3 text-brand-concrete">
            Have a project in mind? Reach out to our technical team for
            consultations and estimates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="bg-brand-navy text-white p-8 rounded-2xl shadow-lg space-y-8">
            <div>
              <h2 className="text-xl font-bold mb-2">Office Information</h2>
              <p className="text-slate-300 text-sm">
                Visit our headquarters or call us directly during business
                hours.
              </p>
            </div>

            <div className="space-y-6 text-sm">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-brand-amber shrink-0" />
                <div>
                  <strong className="block text-white">Head Office:</strong>
                  <span className="text-slate-300">
                    {companyDetails.address}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-brand-amber shrink-0" />
                <div>
                  <strong className="block text-white">Phone Support:</strong>
                  <a
                    href={`tel:${companyDetails.phone}`}
                    className="text-slate-300 hover:text-brand-amber"
                  >
                    {companyDetails.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-brand-amber shrink-0" />
                <div>
                  <strong className="block text-white">Email Address:</strong>
                  <a
                    href={`mailto:${companyDetails.email}`}
                    className="text-slate-300 hover:text-brand-amber"
                  >
                    {companyDetails.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-slate-200">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto" />
                <h3 className="text-2xl font-bold text-brand-navy">
                  Quote Request Received
                </h3>
                <p className="text-brand-concrete max-w-md mx-auto">
                  Thank you! Our structural engineers will review your
                  requirements and call you back within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-brand-navy text-white rounded-lg font-semibold"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-bold text-brand-navy mb-4">
                  Request a Proposal
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                      Your Name *
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-amber focus:outline-none"
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                      Phone Number *
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-amber focus:outline-none"
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                      Email Address
                    </label>
                    <input
                      name="email"
                      type="email"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-amber focus:outline-none"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                      Site Location *
                    </label>
                    <input
                      name="location"
                      type="text"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-amber focus:outline-none"
                      placeholder="e.g. Shimoga, Hubballi"
                      value={formData.location}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-amber focus:outline-none bg-white"
                    value={formData.projectType}
                    onChange={handleInputChange}
                  >
                    <option>
                      Residential Construction (Turnkey / Labour Contract)
                    </option>
                    <option>Commercial Building Construction</option>
                    <option>Interior Design & Renovation</option>
                    <option>Industrial Warehouse / PEB Sheds</option>
                    <option>Government / KPWD Contracting</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                    Project Details / Scope
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-amber focus:outline-none"
                    placeholder="Provide site dimensions (e.g. 30x40, 40x60), timeline, or specific requirements..."
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-navy hover:bg-slate-800 text-white font-bold py-3.5 rounded-lg transition flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-brand-amber" /> Submit Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
