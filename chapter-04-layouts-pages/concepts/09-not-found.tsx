// ==========================================
// Concept 4.9: Not Found (404) Pages

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='p-8 flex flex-col justify-center items-center gap-4 text-center'>
      <h2 className='text-4xl font-bold text-gray-800'>404</h2>
      <p className='text-gray-500 text-sm'>
        Sorry, we couldn't find the page you're looking for.
      </p>
      
      <Link 
        href='/chapter-04/dashboard' 
        className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition'
      >
        Go back to Dashboard
      </Link>
    </div>
  );
}