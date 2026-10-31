// ==========================================
// Concept 9.4: Reusable Badge
// ==========================================

import { ReactNode } from 'react';

export default function Badge({ children, color = 'blue' }: { children: ReactNode; color?: 'green' | 'red' | 'yellow' | 'blue' }) {
  const colors = {
    green: 'bg-green-100 text-green-700',
    red: 'bg-red-100 text-red-700',
    yellow: 'bg-yellow-100 text-yellow-700',
    blue: 'bg-blue-100 text-blue-700',
  };

  return (
    <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${colors[color]}`}>
      {children}
    </span>
  );
}