// Concept 4.8: Error States

'use client'
import { useEffect } from "react"

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.log(error);
    }, [error]);

    return (
        <div className='p-8 flex flex-col justify-center items-center gap-4 text-center'>
            <h2 className='text-2xl font-bold text-red-600'>Something went wrong!</h2>
            <p className='text-gray-500 text-sm'>
                We couldn't load this page. The server might be down.
            </p>

            {/* The reset button tries to re-render the page */}
            <button
                onClick={() => reset()}
                className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition'
            >
                Try again
            </button>
        </div>
    )
}