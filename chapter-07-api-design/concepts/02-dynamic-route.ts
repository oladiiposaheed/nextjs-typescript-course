// ==========================================
// Concept 7.2: Dynamic Route Handlers
// Location: app/api/users/[id]/route.ts
// ==========================================

import { NextResponse } from 'next/server';

// THE RULE:
// To read the dynamic part of the URL (like the '5' in /users/5),
// you use the second argument 'context' and destructure 'params'.
// In modern Next.js, 'params' is a Promise, so you must await it.

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  return NextResponse.json({
    message: `You requested user ID: ${id}`,
    userId: id,
  });
}