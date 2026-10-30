'use server';

import { z } from 'zod';

export async function validateForm(prevState: any, formData: FormData) {
  // 1. Get all the raw data
  const rawData = {
    name: formData.get('name'),
    email: formData.get('email'),
    age: formData.get('age'), // This is a string (e.g., "15")
  };

  // 2. Define the schema
  const FormSchema = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters'),
    email: z.string().email('Please enter a valid email address'),
    age: z.coerce.number().min(10, 'You must be at least 10 years old'),
  });

  // 3. Validate
  const result = FormSchema.safeParse(rawData);

  if (!result.success) {
    return { 
      errors: result.error.flatten().fieldErrors 
    };
  }

  // 4. Success
  return { message: `Form submitted successfully! Welcome, ${result.data.name}.` };
}


// Use z.coerce.number() to force the string into a number