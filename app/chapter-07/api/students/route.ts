import { NextResponse } from "next/server";

// This runs when the frontend sends a POST request
export async function POST(request: Request) {

    // 1. Read the data sent from the frontend
    const body = await request.json();

    // 2. A simple validation check
    if (!body.name || !body.email) {
        return NextResponse.json(
            { error: 'Name and email are required' },
            { status: 400 } // 400 means "Bad Request"
        );
    }

    // 3. Simulate saving to a database
    const newStudent = {
        id: Math.floor(Math.random() * 1000),
        name: body.name,
        email: body.email,
    };

    // 4. Send the new student back to the frontend
    return NextResponse.json(
        newStudent,
        { status: 201 }   // 201 means "Created"
    )
}