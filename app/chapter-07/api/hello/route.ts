import { NextResponse } from "next/server";

// GET Request Handler
// This runs when someone visits the URL in their browser

export async function GET() {
    
    return NextResponse.json({
        message: 'Hello from the Next.js API!',
        status: 'success',
        timestamp: new Date().toISOString(),
    });
}