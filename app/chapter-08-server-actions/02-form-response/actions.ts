'use server';

//import { resolve } from "path";

export async function submitName(prevState: any, formData: FormData) {

    const name = formData.get('username');

    if (!name) {
        return {
            message: 'Please enter a name.'
        };
    }

    // Simulate a database delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
        message: `Hello ${name} Your form was received`
    }
}