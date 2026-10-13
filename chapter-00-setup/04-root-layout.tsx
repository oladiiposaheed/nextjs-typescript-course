// ==========================================
// Concept 4: Root Layout
// ==========================================
// app/layout.tsx wraps EVERY page in your app.
// Anything you put here shows on every page.
// ==========================================

import type { Metadata } from "next";
import './globals.css'

// Metadata — browser tab info + SEO
export const metadata: Metadata = {
    title: 'Dashly',
    description: 'Next.js + TypeScript Course',
};

// The root layout wraps every page
export default function RootLayout({ children }: LayoutProps<'/'>) {
    return (
        <html>
            <body lang="en">
                {/* children = whatever page is currently shown */}
                { children }
                <footer className="p-4 text-center text-gray-400 text-sm">
                    © 2026 Dashly
                </footer>
            </body>
        </html>
    );
}
