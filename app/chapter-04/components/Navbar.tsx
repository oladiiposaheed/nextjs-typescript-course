// ==========================================
// Concept 4.6: Shared UI Components
// Location: app/components/Navbar.tsx
// ==========================================

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// 1. Extract the Navbar into its own component
export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className='flex gap-4 mb-6 p-2 bg-gray-100 rounded'>
            <Link
                href='/chapter-04/dashboard'
                className={
                    pathname === '/chapter-04/dashboard'
                        ? 'text-green-600 font-bold border-b-2 border-green-600'
                        : 'text-blue-600'
                }
            >
                Dashboard Home
            </Link>

            <Link
                href='/chapter-04/dashboard/settings'
                className={
                pathname === '/chapter-04/dashboard/settings'
                    ? 'text-green-600 font-bold border-b-2 border-green-600'
                    : 'text-blue-600'
                }
            >
                Settings
            </Link>
        </nav>
    )
}