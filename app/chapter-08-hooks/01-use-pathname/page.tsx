'use client';

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function UsePathnameDemo() {

    // 1. Grab the current URL path
    const pathname = usePathname();

    return (
        <div className="p-8 max-w-md">
            <h1 className="text-2xl font-bold mb-4">usePathname Demo</h1>

            <div className="p-4 bg-gray-100 rounded mb-6">

                <p className="text-sm text-gray-500">The current URL path is:</p>
                <p className="text-lg font-mono font-bold text-blue-600">{pathname}</p>
            </div>

            {/* mini Navbar to test pathname */}
            <div className="flex gap-4 border-b pb-4">
                <Link
                    href='/chapter-08-hooks/01-use-pathname'
                    className={pathname ==='/chapter-08-hooks/01-use-pathname'
                        ? 'text-green-600 font-bold underline' : 'text-gray-500'
                    }
                >
                    Home
                </Link>
                <Link
                    href='/chapter-08-hooks/01-use-pathname/settings'
                    className={
                        pathname === '/chapter-08-hooks/01-use-pathname/settings'
                        ? 'text-green-600 font-bold underline' : 'text-gray-500'
                    }
                >
                    Settings
                </Link>
            </div>
        </div>
    );
}