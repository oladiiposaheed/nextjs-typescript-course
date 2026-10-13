import Link from 'next/link';

export default function HomePage() {
    return (
        <div className='p-8'>
            <h1 className="text-3xl font-bold mb-4">
                Home Page
            </h1>
            <p className="text-gray-600 mb-6">
                Welcome to Dashly — Next.js + TypeScript Course
            </p>

            <h2 className="text-xl font-bold mb-2">Posts:</h2>
            <ul>
                <li>
                    <Link href='/post/1' className='text-blue-600'>Read Post 1</Link>
                </li>
                <li>
                    <Link href='/post/2' className='text-blue-600'>Read Post 2</Link>
                </li>
                <li>
                    <Link href='/post/3' className='text-blue-600'>Read Post 3</Link>
                </li>
            </ul>
        </div>
    );
}