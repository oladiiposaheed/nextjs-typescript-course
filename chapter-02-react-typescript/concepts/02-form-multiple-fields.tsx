'use client';

import { useState } from 'react';

export default function MultipleFieldsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Multiple Fields</h1>

      <form>
        <div className="mb-3">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="border p-2 rounded"
          />
        </div>

        <div className="mb-3">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="border p-2 rounded"
          />
        </div>

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>

      <pre className="mt-4 p-3 bg-gray-100 rounded">
        {JSON.stringify(formData, null, 2)}
      </pre>
    </div>
  );
}