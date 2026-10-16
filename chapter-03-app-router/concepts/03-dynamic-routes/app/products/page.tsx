// List page — URL: /chapter-03/products

import Link from 'next/link';

const products = [
  { id: 1, name: 'Laptop' },
  { id: 2, name: 'Phone' },
  { id: 3, name: 'Tablet' },
];

export default function ProductsPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Products</h1>

      <ul className="space-y-2">
        {products.map((product) => (
          <li key={product.id}>
            <Link
              href={`/chapter-03/products/${product.id}`}
              className="text-blue-600"
            >
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}