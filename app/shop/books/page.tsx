import Link from "next/link";

export default function BooksPage() {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">📚 Books</h1>
            <p>Browse our book collection.</p>

            <Link href='/shop' className="text-blue-600 mt-4 inline-block">
                ← Back to Shop
            </Link>
        </div>
    );
}