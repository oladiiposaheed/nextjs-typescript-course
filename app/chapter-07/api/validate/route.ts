import { error } from "console";
import { NextResponse } from "next/server";
import z, { email } from "zod";

// 1. Define the rules
const StudentSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email format'),
    age: z.number().min(10, 'Must be at least 10 years old.')
});

export async function POST(request: Request) {

    // 2. Get the data from the user
    const body = await request.json()

    // 3. Check the data against the rules
    const result = StudentSchema.safeParse(body);

    // 4. If it fails, kick them out
    if (!result.success) {
        return NextResponse.json(
            { errors: result.error.issues },  // Send back exactly what was wrong
            { status: 400 }
        );
    }

    // 5. If it passes, let them in!
    return NextResponse.json({
        message: 'Data is valid',
        data: result.data
    })
}
