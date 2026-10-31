// ==========================================
// Concept 9.3: Reusable Card Container
// ==========================================

import { ReactNode } from 'react';

export default function Card({ children, title }: { children: ReactNode; title?: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
      {title && <h2 className="text-lg font-bold mb-2">{title}</h2>}
      {children}
    </div>
  );
}