// Concept 4.4: The Metadata API

import type { Metadata } from "next";


// 1. Export the metadata object. 
// Next.js reads this automatically and puts it in the <head> tag.
export const metadata: Metadata = {
    title: 'Dashboard Home | My App',
    description: 'View your dashboard statistics and manage your account.',
};

// 2. The Page Component
export default function DashboardHome() {
    return (
        <div>
            <h1 className="text-xl font-bold">Dashboard Home Page</h1>
            <p>Welcome to the Chapter 4 Dashboard.</p>
        </div>
    )
}
