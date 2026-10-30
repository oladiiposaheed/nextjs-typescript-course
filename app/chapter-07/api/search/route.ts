import { NextResponse } from "next/server";

export async function GET(request: Request) {
    // 1. Turn the request URL into a readable object
    const { searchParams } = new URL(request.url);

    // 2. Extract the word after '?query='
    const searchWord = searchParams.get('query');
    const limit = searchParams.get('limit') || '10';

     // 3. Send it back as JSON
    return NextResponse.json({ searchWord, limit });
}