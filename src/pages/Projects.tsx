// src/pages/Projects.tsx
import React, { useState } from "react";
import { MapPin, Calendar, Layers } from "lucide-react";
import { SEO } from "../components/SEO";
import { projectList } from "../data/projects";
import type { ProjectCategory } from "../types";

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<ProjectCategory>("All");

  const categories: ProjectCategory[] = [
    "All",
    "Residential",
    "Commercial",
    "Interior",
    "Industrial",
  ];

  const filtered =
    filter === "All"
      ? projectList
      : projectList.filter((p) => p.category === filter);

  return (
    <div className="py-12 bg-brand-lightGrey min-h-screen">
      <SEO
        title="Completed Projects Portfolio"
        description="Explore our residential homes, commercial complexes, warehouse sheds, and interior fit-outs executed in Shimoga, Hubballi, and Bengaluru."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy">
            Our Construction & Interior Portfolio
          </h1>
          <p className="mt-3 text-brand-concrete">
            Browse through our delivered structural contracting and
            architectural design works across Karnataka.
          </p>
        </div>

        {/* Filter Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition ${
                filter === cat
                  ? "bg-brand-navy text-white shadow"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 group"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={proj.image}
                  alt={`${proj.title} in ${proj.location}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-brand-navy/80 backdrop-blur-md text-brand-amber font-semibold text-xs px-3 py-1 rounded">
                  {proj.category}
                </span>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-brand-navy">
                  {proj.title}
                </h2>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-brand-concrete">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-brand-amber" />{" "}
                    {proj.location}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-brand-amber" /> {proj.area}
                  </div>
                  <div className="flex items-center gap-1.5 col-span-2">
                    <Calendar className="w-4 h-4 text-brand-amber" /> Duration:{" "}
                    {proj.duration}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
