import { Metadata } from "next";

// 1. Define the metadata
export const metadata: Metadata = {
    title: 'My Awesome SEO Page',
    description: 'Learn how to master Next.js Metadata for better Google rankings.',
};

// 2. The Page Component
export default function MetadataPage() {
    return (
        <div className="p-8 max-w-md">
            <h1 className="text-2xl font-bold mb-4">Metadata Demo</h1>
        <p className="text-gray-600">
            Look at the browser tab above, and view the page source to see the magic!
        </p>
        </div>
    );
}