// ==========================================
// Concept 5: Dynamic Routes
// ==========================================
// A folder name in square brackets [id] means "any value"
// The value can be read inside the page
// ==========================================

// In Next.js 16, params come as a Promise

export default async function BookPage({
    params
}: PageProps<'/book/[id]'>) {
    // Must await params in Next.js 16
    const { id } = await params;

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Book Page</h1>
            <p className="text-gray-600">Showing book with ID: {id}</p>
        </div>
    );
}