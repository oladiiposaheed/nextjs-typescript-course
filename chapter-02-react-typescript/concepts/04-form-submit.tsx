'use client';

import { useState } from 'react';

export default function FormSubmitPage() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validate = () => {
    const newErrors = { name: '', email: '' };

    if (formData.name.trim() === '') {
      newErrors.name = 'Name is required';
    }
    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required';
    }

    setErrors(newErrors);
    return newErrors.name === '' && newErrors.email === '';
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate()) {
      setSubmitted(true);
      setFormData({ name: '', email: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Form Submit</h1>

      {submitted && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
          ✅ Form submitted successfully!
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="border p-2 rounded"
          />
          {errors.name && (
            <p className="text-red-600 text-sm mt-1">{errors.name}</p>
          )}
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
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}