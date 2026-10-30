'use server';

import { z } from 'zod';
import { redirect } from 'next/navigation';

export async function sendMessage(prevState: any, formData: FormData) {
  // 1. Get the raw data from the form
  const rawData = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  };

  // 2. Define the rules 
  const ContactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    message: z.string().min(10, 'Message must be at least 10 characters long'),
  });

  // 3. Validate/check the data
  const result = ContactSchema.safeParse(rawData);

  // 4. If validation fails, return the errors to the UI
  if (!result.success) {
    return { 
      errors: result.error.flatten().fieldErrors 
    };
  }

  // 5. Simulate saving to a database (1 second delay)
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log('Message saved for:', result.data.name);

  // 6. Success! Redirect to the success page
  redirect('/chapter-08-server-actions/mini-project/success');
}