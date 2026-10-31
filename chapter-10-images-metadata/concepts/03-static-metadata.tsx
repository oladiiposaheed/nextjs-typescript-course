// ==========================================
// Concept 10.3: Static Metadata
// Location: app/any-page/page.tsx
// ==========================================

import type { Metadata } from 'next';

// 1. Export the metadata object
export const metadata: Metadata = {
  title: 'My Awesome SEO Page',
  description: 'Learn how to master Next.js Metadata for better Google rankings.',
};

export default function Page() {
  return <div>Page Content</div>;
}