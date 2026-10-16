import Link from 'next/link';

export default function ElectronicsPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">📱 Electronics</h1>
      <p>Browse our electronics collection.</p>
      <Link href="/shop" className="text-blue-600 mt-4 inline-block">
        ← Back to Shop
      </Link>
    </div>
  );
}