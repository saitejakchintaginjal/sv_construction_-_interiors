// src/types/index.ts
import type { ElementType } from 'react';

export type LucideIcon = ElementType;

export type Language = 'en' | 'kn';

export type ProjectCategory = 'All' | 'Residential' | 'Commercial' | 'Interior' | 'Industrial';

export interface CompanyDetails {
  name: string;
  phone: string;
  email: string;
  whatsapp: string;
  address: string;
  serviceAreas: string[];
  yearsExperience: string;
  completedProjects: string;
  activeSites: string;
}

export interface TranslationStrings {
  home: string;
  about: string;
  services: string;
  projects: string;
  contact: string;
  getQuote: string;
  callUs: string;
  tagline: string;
  subtagline: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  icon: LucideIcon;
  desc: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  category: Exclude<ProjectCategory, 'All'>;
  location: string;
  area: string;
  duration: string;
  image: string;
}

export interface QuoteFormData {
  name: string;
  phone: string;
  email: string;
  location: string;
  projectType: string;
  message: string;
}