// ==========================================
// Concept 10.6: Robots & Sitemaps
// Location: app/robots.ts & app/sitemap.ts
// ==========================================

import { MetadataRoute } from 'next';

// 1. ROBOTS.TXT (The Bouncer)
export function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin', // Hide admin from Google
    },
    sitemap: 'https://yourdomain.com/sitemap.xml',
  };
}

// 2. SITEMAP.XML (The Map)
export function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://yourdomain.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ];
}