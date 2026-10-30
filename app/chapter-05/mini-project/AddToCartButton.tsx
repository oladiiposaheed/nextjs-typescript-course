'use client'; //  Client Component: button

import { useState } from 'react';

export default function AddToCartButton() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <button 
        onClick={() => setCartCount(cartCount + 1)}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add to Cart ({cartCount})
      </button>
  )
}