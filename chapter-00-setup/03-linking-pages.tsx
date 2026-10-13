// ==========================================
// Concept 3: Linking Pages
// ==========================================
// Use Next.js <Link> to navigate between pages.
// <Link> is faster than <a> because it doesn't reload the page.
// ==========================================

import Link from "next/link";

export default function HomePage() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">
                Home Page
            </h1>

            {/* Navigation links */}
            <nav className="flex gap-4">
                <Link href='/' className="text-blue-600">
                    Home
                </Link>
                <Link href='/about' className="text-blue-600">
                    About
                </Link>
                <Link href='/contact' className="text-blue-600">
                    Contact
                </Link>
            </nav>

            <h1 className="text-3xl font-bold">
                Home Page
            </h1>
        </div>
    );
}