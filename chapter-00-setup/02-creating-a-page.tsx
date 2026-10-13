// Concept 2: Creating a Page

// A page = a file named page.tsx inside any folder in app/

// This component will be shown at the URL that matches its folder
export default function ContactPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">
                Contact Page
            </h1>

            <p className="text-gray-600">
                This page lives at /contact
            </p>
        </div>
    );
}