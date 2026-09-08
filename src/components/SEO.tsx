// src/components/SEO.tsx
import React, { useEffect } from 'react';
import { companyDetails } from '../data/content';

interface SEOProps {
  title: string;
  description: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description }) => {
  useEffect(() => {
    document.title = `${title} | SV Construction & Interiors Karnataka`;
    const metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }
  }, [title, description]);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": companyDetails.name,
    "image": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80",
    "@id": "https://svconstruction.in",
    "url": "https://svconstruction.in",
    "telephone": companyDetails.phone,
    "email": companyDetails.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "NH 206, Sagar Road",
      "addressLocality": "Shimoga",
      "addressRegion": "KA",
      "postalCode": "577201",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 13.9299,
      "longitude": 75.5681
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "19:00"
    },
    "areaServed": companyDetails.serviceAreas.map(area => ({
      "@type": "City",
      "name": `${area}, Karnataka`
    }))
  };

  return (
    <script 
      type="application/ld+json" 
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};