// ==========================================
// Concept 10.4: Dynamic Metadata
// Location: app/blog/[id]/page.tsx
// ==========================================

import { Metadata } from 'next';

// 1. Create the generateMetadata function
export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const { id } = await params;
  
  // Imagine fetching the title from a database here
  const postTitle = id === '1' ? 'Learning Next.js' : 'Why I love Tailwind';

  return {
    title: `${postTitle} | My Blog`,
    description: `Read our article about ${postTitle}.`,
  };
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <div>Blog Post {id}</div>;
}