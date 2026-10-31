import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*', // Applies to all search engines
      allow: '/',     // Allow the whole site
      disallow: '/admin', // But block the admin page
    },
    // Tell Google where to find your sitemap
    sitemap: 'https://yourdomain.com/sitemap.xml',
  };
}