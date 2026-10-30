// ==========================================
// Concept 4.2: Nested Layouts
// Location: app/dashboard/layout.tsx
// ==========================================

import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='p-4 border'>
      <nav className='flex gap-4 mb-6 p-2 bg-gray-100 rounded'>
        <Link href='/dashboard' className='text-blue-600 font-bold'>
          Dashboard Home
        </Link>
        <Link href='/dashboard/settings' className='text-blue-600 font-bold'>
          Settings
        </Link>
      </nav>

      <div className='p-4 border border-dashed border-gray-400'>
        {children}
      </div>
    </div>
  );
}