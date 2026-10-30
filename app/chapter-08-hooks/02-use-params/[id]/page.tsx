'use client';

import { useParams } from "next/navigation";
import Link from "next/link";

export default function UseParamsDemo() {

    // 1. Grab the dynamic ID from the URL
    const params = useParams();

    return (
        <div className="p-8 max-w-md">
            <h1 className="text-2xl font-bold mb-4">useParams Demo</h1>

            <div className="p-4 bg-gray-100 rounded mb-6">
                <p className="text-sm text-gray-500">The ID in your URL is:</p>
                {/* 2. Display the ID */}
                <p className="text-lg font-mono font-bold text-red-600">{params.id}</p>
            </div>

            {/* create links to test different IDs */}
            <p className="mb-2 font-semibold">Test different IDs:</p>
            <div >
                <div className="flex gap-4">
                    <Link
                        href="/chapter-08-hooks/02-use-params/1"
                        className="text-blue-600 underline"
                    >
                        User 1
                    </Link>
                    <Link href="/chapter-08-hooks/02-use-params/fatimah" className="text-blue-600 underline">
                        User Fatimah
                    </Link>
                    <Link href="/chapter-08-hooks/02-use-params/abc-123" className="text-blue-600 underline">
                        User ABC
                    </Link>
                </div>
            </div>
        </div>
    )
}