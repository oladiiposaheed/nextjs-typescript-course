'use client'

import { useSearchParams } from "next/navigation"
import Link from "next/link"

export default function UseSearchParamsDemo() {

    // 1. Grab the search parameters from the URL
    const searchParams = useSearchParams();

    // 2. Extract specific values (e.g., ?search=fatimah&class=SS3)
    const search = searchParams.get('search') || 'Nothing yet';
    const filterClass = searchParams.get('class') || 'No class selected';

    return (
        <div className="p-8 max-w-md">
            <h1 className="text-2xl font-bold mb-4">useSearchParams Demo</h1>

            <div className="p-4 bg-gray-100 rounded mb-6">
                <p className="text-sm text-gray-500">Current Search Term:</p>
                <p className="text-lg font-mono font-bold text-purple-600">{search}</p>

                <p className="text-sm text-gray-500 mt-4">Current Class Filter:</p>
                <p className="text-lg font-mono font-bold text-purple-600">{filterClass}</p>
            </div>

            {/* 3 create links with query parameters to test it */}
            <p className="mb-2 font-semibold">Try these links:</p>
            <div>
                <Link
                    href='/chapter-08-hooks/03-use-search-params?search=fatimah&class=SS3'
                    className="text-blue-600 underline mr-4"
                >
                    Search for Fatimah in S3
                </Link>
                <Link 
                    href="/chapter-08-hooks/03-use-search-params?search=david&class=SS1" 
                    className="text-blue-600 underline"
                >
                    Search for David in SS1
                </Link>
            </div>
        </div>
    )
}