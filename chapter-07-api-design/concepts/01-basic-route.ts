// ==========================================
// Concept 7.1: The Basic Route Handler
// ==========================================

import { NextResponse } from 'next/server';

// THE RULE:
// A route.ts file exports functions named after HTTP methods (GET, POST, PUT, DELETE).
// Instead of returning JSX (HTML), it returns JSON data using NextResponse.

export async function GET() {
  return NextResponse.json({
    message: 'Hello from the Next.js API!',
    status: 'success',
    timestamp: new Date().toISOString(),
  });
}