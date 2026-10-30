'use client';

import { useActionState } from 'react';
import { validateForm } from './actions';

export default function MultipleFieldsPage() {
  const [state, formAction, isPending] = useActionState(validateForm, null);

  return (
    <div className="p-8 max-w-md">
      <h1 className="text-2xl font-bold mb-4">Multiple Fields</h1>
      
      <form action={formAction} className="flex flex-col gap-4">
        
        {/* Name Input */}
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input type="text" name="name" className="border p-2 rounded w-full" />
          {state?.errors?.name && (
            <p className="text-red-500 text-sm mt-1">{state.errors.name[0]}</p>
          )}
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input type="email" name="email" className="border p-2 rounded w-full" />
          {state?.errors?.email && (
            <p className="text-red-500 text-sm mt-1">{state.errors.email[0]}</p>
          )}
        </div>

        {/* 👈 NEW: Age Input */}
        <div>
          <label className="block text-sm font-medium mb-1">Age</label>
          <input type="number" name="age" className="border p-2 rounded w-full" />
          {state?.errors?.age && (
            <p className="text-red-500 text-sm mt-1">{state.errors.age[0]}</p>
          )}
        </div>

        <button 
          type="submit" 
          disabled={isPending}
          className="bg-blue-600 text-white p-2 rounded disabled:opacity-50 mt-2"
        >
          {isPending ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      {state?.message && (
        <p className="mt-4 p-3 bg-green-100 text-green-700 rounded">
          {state.message}
        </p>
      )}
    </div>
  );
}