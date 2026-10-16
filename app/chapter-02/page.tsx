'use client';

import { useState } from 'react';

export default function ValidationPage() {

  // formData: what the user types in each field
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  // State: error messages
  const [errors, setErrors] = useState({
    name: '',
    email: '',
  });

  // submitted: whether the form was just submitted successfully
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Update the correct field in formData, clear that field's error
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  // Validates required fields; returns true if all fields pass
  const validate = () => {
    const newErrors = { name: '', email: '' };

    if (formData.name.trim() === '') {
      newErrors.name = 'Name is required';
    }

    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required';
    }

    setErrors(newErrors);

    // Return true if no errors
    return newErrors.name === '' && newErrors.email === '';
  };

  // Handles form submission upon successful validation
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();          // Stop browser from reloading page
    
    if (validate()) {
      // Success!
      setSubmitted(true);

      // Clear form
      setFormData({ name: '', email: '' });

      // Hide success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Validation</h1>

      {submitted && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
          ✅ Form submitted successfully!
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Name field */}
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

        {/* Email field */}
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