'use client';

import { useState } from 'react';

export default function FormBasicsPage() {
  const [name, setName] = useState<string>('');

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Form Basics</h1>

      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="border p-2 rounded"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded ml-2">
          Submit
        </button>
      </form>

      <p className="mt-4">You typed: {name}</p>
    </div>
  );
}