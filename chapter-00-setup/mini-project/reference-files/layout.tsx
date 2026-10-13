// ==========================================
// ROOT LAYOUT — Wraps every page
// Live location: app/layout.tsx
// ==========================================

import type { Metadata } from "next";
import Link from "next/link";
import './globals.css';

// Browser tab title + SEO description
export const metadat: Metadata = {
    title: 'My Site',
    description: 'Mini project for chapter 0',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
    return (
        <html lang="en">
            <body>
                {/* Navigation — shows on every page */}
                <nav className="p-4 border-b flex gap-4">
                    <Link href='/'>Home</Link>
                    <Link href='/about'>About</Link>
                    <Link href='/contact'>Contact</Link>
                </nav>

                {/* Page content — changes per route */}
                { children }

                {/* Footer — shows on every page */}
                <footer className="p-4 text-center text-gray-400 text-sm">
                    © 2026 My Site
                </footer>
            </body>
        </html>
    );
}