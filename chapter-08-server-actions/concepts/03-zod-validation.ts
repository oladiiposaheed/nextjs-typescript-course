// ==========================================
// Concept 8.3: Zod Validation & Redirects
// ==========================================

'use server';
import { z } from 'zod';
import { redirect } from 'next/navigation';

export async function validateForm(prevState: any, formData: FormData) {
  const rawData = {
    name: formData.get('name'),
    age: formData.get('age'),
  };

  const Schema = z.object({
    name: z.string().min(3, 'Too short'),
    age: z.coerce.number().min(10, 'Must be 10+'), // Converts string to number
  });

  const result = Schema.safeParse(rawData);

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }

  // Redirect after success
  redirect('/success');
}