'use client';

import { useState } from 'react';

export default function ApiTestPage() {
  const [result, setResult] = useState<any>(null);

  // This function runs when you click "Submit"
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Get the data from the form
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
    };

    // Send a POST request to our API
    const response = await fetch('/chapter-07/api/students', {
      method: 'POST',    // sending new data to api
      headers: { 'Content-Type': 'application/json' },   // data is json format
      body: JSON.stringify(data),  // convert it into a string (JSON) first and get js objects
    });

    const json = await response.json();   // Get the data back from the API
    setResult(json);    //  update and save it to React state
  };

  return (
    <div className='p-8 max-w-md'>
      <h1 className='text-xl font-bold mb-4'>Test POST Request</h1>
      
      <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
        <input name='name' placeholder='Name' className='border p-2 rounded' required />
        <input name='email' placeholder='Email' className='border p-2 rounded' required />
        <button type='submit' className='bg-blue-600 text-white p-2 rounded'>
          Submit
        </button>
      </form>

      {result && (
        <div className='mt-4 p-4 border rounded bg-gray-50'>
          <p className='font-bold text-green-600'>API Response:</p>
          <pre className='text-sm mt-2'>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}