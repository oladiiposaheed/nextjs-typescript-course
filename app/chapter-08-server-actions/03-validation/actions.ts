'use server';

import { z } from "zod";

export async function validateName(prevState: any, formData: FormData) {

    // 1. Get the raw data
    const rawName = formData.get('username');

    // 2. Define the Zod schema
    const NameSchema = z.string().min(3, 'Name must be at least 3 characters long');

    // 3. Validate it
    const result = NameSchema.safeParse(rawName);

    if (!result.success) {
        // 4. Return the specific error message to the UI
        return { error: result.error.issues[0].message };
    }

    // 5. Success!
    return {
        message: `Success! ${result.data} is a valid name.`
    }
}