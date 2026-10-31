// ==========================================
// Concept 10.5: Open Graph (Social Sharing)
// ==========================================

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Amazing Tech Blog',
  description: 'Learn Next.js and build amazing projects.',
  
  //  The Open Graph tags
  openGraph: {
    title: 'Amazing Tech Blog', 
    description: 'Join thousands of developers learning Next.js!',
    url: 'https://mywebsite.com', 
    siteName: 'Amazing Tech Blog',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
        width: 1200,
        height: 630,
        alt: 'A laptop with code',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function Page() {
  return <div>Open Graph Demo</div>;
}