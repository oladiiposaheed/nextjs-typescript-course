import Link from "next/link";

export default function SuccessPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-green-600 mb-4">Success! 🎉</h1>
            <p className="text-gray-600 mb-6">Your form was submitted and saved to the database.</p>

            <Link
                href="/chapter-08-server-actions/06-redirect-revalidate"
                className="text-blue-600 underline"
            >
                Go back to the form
            </Link>
        </div>
    )
}