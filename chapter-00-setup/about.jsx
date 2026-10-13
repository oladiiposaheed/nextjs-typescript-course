import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="p-8">
      <nav className="flex gap-4 mb-8">
        <Link href="/" className="text-blue-600">Home</Link>
        <Link href="/about" className="text-blue-600">About</Link>
        <Link href="/contact" className="text-blue-600">Contact</Link>
      </nav>

      <h1 className="text-3xl font-bold mb-4">About Page</h1>
      <p className="text-gray-600">This page lives at /about</p>
    </div>
  );
}