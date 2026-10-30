// ==========================================
// Concept 4.5: Active Navigation Links
// Location: app/dashboard/layout.tsx
// ==========================================

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className='flex gap-4 p-4'>
      <Link 
        href='/dashboard' 
        className={pathname === '/dashboard' ? 'text-green-600 font-bold' : 'text-gray-500'}
      >
        Dashboard
      </Link>

      <Link 
        href='/dashboard/settings' 
        className={pathname === '/dashboard/settings' ? 'text-green-600 font-bold' : 'text-gray-500'}
      >
        Settings
      </Link>
    </nav>
  );
}