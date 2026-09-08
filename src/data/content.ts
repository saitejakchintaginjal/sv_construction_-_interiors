// src/data/content.ts

import type {
  CompanyDetails,
  Language,
  ServiceItem,
  TranslationStrings,
} from "../types";
import {
  Home,
  Building2,
  Paintbrush,
  Factory,
  FileCheck2,
  Hammer,
  Award,
  Clock,
  ShieldCheck,
} from "lucide-react";

export const companyDetails: CompanyDetails = {
  name: "SV Construction & Interiors",
  phone: "+91 9986680832",
  email: "contact@svconstruction267@gmail.com",
  whatsapp: "919986680832",
  address:
    "Kadam nivasa, behind Laxmi rice mill, Alkola, Shivamogga, Karnataka 577204",
  serviceAreas: [
    "Shimoga",
    "Hubballi",
    "Dharwad",
    "Bengaluru",
    "Chitradurga",
    "Davangere",
  ],
  yearsExperience: "6+",
  completedProjects: "10+",
  activeSites: "5+",
};

export const translations: Record<Language, TranslationStrings> = {
  en: {
    home: "Home",
    about: "About Us",
    services: "Services",
    projects: "Projects",
    contact: "Contact",
    getQuote: "Get a Free Quote",
    callUs: "Call Expert",
    tagline: "Quality Construction, On-Time Delivery",
    subtagline:
      "Civil contractors, residential builders & modern interior designers serving Shimoga, Hubballi, Bengaluru & across Karnataka.",
  },
  kn: {
    home: "ಮುಖಪುಟ",
    about: "ನಮ್ಮ ಬಗ್ಗೆ",
    services: "ಸೇವೆಗಳು",
    projects: "ಯೋಜನೆಗಳು",
    contact: "ಸಂಪರ್ಕಿಸಿ",
    getQuote: "ಉಚಿತ ಅಂದಾಜು ಪಡೆಯಿರಿ",
    callUs: "ಕರೆ ಮಾಡಿ",
    tagline: "ಗುಣಮಟ್ಟದ ನಿರ್ಮಾಣ, ಸಮಯಕ್ಕೆ ಸರಿಯಾದ ವಿತರಣೆ",
    subtagline:
      "ಶಿವಮೊಗ್ಗ, ಹುಬ್ಬಳ್ಳಿ, ಬೆಂಗಳೂರು ಮತ್ತು ಕರ್ನಾಟಕದಾದ್ಯಂತ ನಾಗರಿಕ ಗುತ್ತಿಗೆದಾರರು ಮತ್ತು ಒಳಾಂಗಣ ವಿನ್ಯಾಸಕರು.",
  },
};

export const coreHighlights = [
  {
    icon: Award,
    title: "6+ Years Experience",
    desc: "Proven track record delivering projects on schedule across Karnataka.",
  },
  {
    icon: Clock,
    title: "On-Time Completion",
    desc: "Strict milestone-based tracking avoiding budget and timeline overruns.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Materials",
    desc: "Only certified standard steel (TMT 550D), standard cement, and branded fittings.",
  },
  {
    icon: Hammer,
    title: "Turnkey Contracts",
    desc: "End-to-end plan approval, structural engineering, civil work & interiors.",
  },
];

export const allServices: ServiceItem[] = [
  {
    id: "residential",
    title: "Residential House Construction",
    icon: Home,
    desc: "Turnkey residential homes, budget to luxury villas, duplex builds with strict adherence to vastu, structural safety, and timeline precision.",
  },
  {
    id: "commercial",
    title: "Commercial & Office Spaces",
    icon: Building2,
    desc: "Multi-storey commercial complexes, corporate offices, and retail showrooms built with premium elevation and robust concrete structures.",
  },
  {
    id: "interiors",
    title: "Turnkey Interior Design",
    icon: Paintbrush,
    desc: "Custom modular kitchens, wardrobe designs, veneer panelling, false ceiling execution, and customized furniture for residential & commercial.",
  },
  {
    id: "industrial",
    title: "Industrial PEB & Sheds",
    icon: Factory,
    desc: "Pre-Engineered Building (PEB) solutions, factory setup structures, roofing, and heavy-duty industrial flooring.",
  },
  {
    id: "renovation",
    title: "Building Renovation & Remodeling",
    icon: Hammer,
    desc: "Structural strengthening, floor additions, waterproofing solutions, and modern exterior facade updates.",
  },
  {
    id: "contracting",
    title: "Plan Approval & Civil Contracting",
    icon: FileCheck2,
    desc: "City corporation plan estimation, KPWD compliant contracting, structural drawings, and soil testing.",
  },
];
