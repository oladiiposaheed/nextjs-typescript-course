import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Home</h1>
      <Link href="/shop" className="text-blue-600">
        Go to Shop →
      </Link>
    </div>
  );
}