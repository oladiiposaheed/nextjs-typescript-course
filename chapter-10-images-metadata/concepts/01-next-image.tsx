// ==========================================
// Concept 10.1: The Image Component
// ==========================================

import Image from 'next/image';

export default function ImageConcept() {
  return (
    <div>
      {/* 1. Local Image (from the public folder) */}
      <Image 
        src="/next.svg" 
        alt="Next.js Logo"
        width={200} 
        height={200}
      />

      {/* 2. External Image (Must be whitelisted in next.config.ts) */}
      <Image 
        src="https://randomuser.me/api/portraits/women/44.jpg" 
        alt="Random User"
        width={150} 
        height={150}
        className="rounded-full"
      />
    </div>
  );
}