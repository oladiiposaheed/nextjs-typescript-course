import { NextResponse } from "next/server";

// The first argument is 'request' (the data from the client).
// The second argument is 'context' (the URL parameters).

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }  // Next.js 15+ treats params as a Promise
) {
    // Await the params to get the ID from the URL
    const { id } = await params;

    return NextResponse.json({
        message: `You requested user ID: ${id}`,
        userId: id,
    });
}