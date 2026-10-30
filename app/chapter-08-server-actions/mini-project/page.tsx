'use client';

import { useActionState } from 'react';
import { sendMessage } from './actions';

export default function ContactFormPage() {
  // Connect to the server action
  const [state, formAction, isPending] = useActionState(sendMessage, null);

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-2">Contact Us</h1>
      <p className="text-gray-500 mb-6">Send us a message and we will get back to you.</p>
      
      <form action={formAction} className="flex flex-col gap-4">
        
        {/* Name Field */}
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input 
            type="text" 
            name="name" 
            className="border p-2 rounded w-full"
          />
          {state?.errors?.name && (
            <p className="text-red-500 text-sm mt-1">{state.errors.name[0]}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input 
            type="email" 
            name="email" 
            className="border p-2 rounded w-full"
          />
          {state?.errors?.email && (
            <p className="text-red-500 text-sm mt-1">{state.errors.email[0]}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea 
            name="message" 
            rows={4}
            className="border p-2 rounded w-full"
          />
          {state?.errors?.message && (
            <p className="text-red-500 text-sm mt-1">{state.errors.message[0]}</p>
          )}
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          disabled={isPending}
          className="bg-blue-600 text-white p-2 rounded disabled:opacity-50 mt-2"
        >
          {isPending ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}