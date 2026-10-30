'use client';

import { useActionState } from "react";
import { validateName } from "./actions";


export default function ValidationPage() {

    // Connects our form to the backend Server Action
    const [state, formAction, isPending] = useActionState(validateName, null);

    return (
        <div className="p-8 max-w-md">
            <h1 className="text-2xl font-bold mb-4">Server-Side Validation</h1>

            <form action={formAction} className="flex flex-col gap-4">
                <input 
                    type="text" 
                    name="username"
                    placeholder="Enter your name (min 3 letters)"
                    className="border p-2 rounded"    
                />
                <button
                    type="submit"
                    disabled={isPending}
                    className="bg-blue-600 text-white p-2 rounded disabled:opacity-50"
                >
                    {isPending ? 'Checking...' : 'Validate'}
                </button>
            </form>

            {/* Show the error in RED */}
            {state?.error && (
                <p className="mt-4 p-3 bg-red-100 text-red-700 rounded border border-red-300">
                    {state.error}
                </p>
            )}

            {/* Show the success in GREEN */}
            {state?.message && (
                <p className="mt-4 p-3 bg-green-100 text-green-700 rounded border border-green-300">
                    {state.message}
                </p>
            )}
        </div>
    );
}


// Hook: useActionState(ServerAction, InitialState)
// 1. state: Catches the return value from the server
// 2. formAction: Replaces our Server Action in the <form> tag
// 3. isPending: Automatically turns true while the server is working