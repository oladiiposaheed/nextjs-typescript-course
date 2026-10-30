'use client';

import { useRouter } from 'next/navigation';

export default function UseRouterDemo() {
  // 1. Grab the remote control
  const router = useRouter();

  return (
    <div className="p-8 max-w-md">
      <h1 className="text-2xl font-bold mb-4">useRouter Demo</h1>
      
      <p className="mb-6 text-gray-600">
        Click the buttons below to navigate without using a `Link` tag.
      </p>

      <div className="flex flex-col gap-4">
        {/* 2. Push to a new page */}
        <button 
          onClick={() => router.push('/chapter-08-hooks/01-use-pathname')}
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Go to Pathname Page (router.push)
        </button>

        {/* 3. Go back one page */}
        <button 
          onClick={() => router.back()}
          className="bg-gray-600 text-white p-2 rounded hover:bg-gray-700"
        >
          Go Back (router.back)
        </button>
      </div>
    </div>
  );
}