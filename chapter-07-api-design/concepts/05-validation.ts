// ==========================================
// Concept 7.5: Data Validation with Zod
// ==========================================

import { NextResponse } from 'next/server';
import { z } from 'zod';

// THE RULE:
// Never trust incoming data. Use Zod to define the exact shape 
// and rules of the data before saving it to the database.

const StudentSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email format'),
  age: z.number().min(10, 'Must be at least 10 years old'),
});

export async function POST(request: Request) {
  const body = await request.json();

  // safeParse checks the data without throwing a red crash screen
  const result = StudentSchema.safeParse(body);

  if (!result.success) {
    // 400 Bad Request with detailed errors
    return NextResponse.json(
      { errors: result.error.issues }, 
      { status: 400 }
    );
  }

  // 200 OK with the clean data
  return NextResponse.json({ 
    message: 'Data is valid', 
    data: result.data 
  });
}