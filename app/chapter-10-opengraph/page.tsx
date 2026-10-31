import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Amazing Tech Blog',
    description: 'Learn Next.js and build amazing projects.',

    // The Open Graph Object
    openGraph: {
        title: 'Amazing Tech Blog',
        description: 'Join thousands of developers learning Next.js!',
        url: 'https://mywebsite.com', 
        siteName: 'Amazing Tech Blog',
        images: [
            {
                url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&h=630&auto=format&fit=crop',
                width: 1200,
                height: 630,
                alt: 'A laptop with code on the screen',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
};

export default function OpenGraphPage() {
    return (
        <div className="p-8 max-w-md">
            <h1 className="text-2xl font-bold mb-4">Open Graph Demo</h1>
            <p className="text-gray-600">
                Right-click and view page source. Search for "og:" to see the tags!
            </p>
        </div>
    );
}