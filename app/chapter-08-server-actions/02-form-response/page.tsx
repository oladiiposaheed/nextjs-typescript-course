'use client';

import { useActionState } from "react";
import { submitName } from "./actions";

export default function FormResponsePage() {

    // 1. Set up the hook: [state, formAction, isPending]
    const [state, formAction, isPending] = useActionState(submitName, null);

    return (
        <div className="p-8 max-w-md">
            <h1 className="text-2xl font-bold mb-4">Form Response</h1>

            <form action={formAction} className="flex flex-col gap-4">
                <input 
                    type="text" 
                    name="username"
                    placeholder="Enter your name"
                    className="border p-2 rounded"
                    required
                />
                <button
                    type="submit"
                    disabled={isPending}  // Automatically disables button while loading
                    className="bg-blue-600 text-white p-2 rounded disabled:opacity-50"
                >
                    {isPending ? 'Submitting...' : 'Submit'}
                </button>

                {/* 2. Display the message from the server */}
                {state?.message && (
                    <p className="mt-4 p-3 bg-green-100 text-green-700 rounded">
                        {state.message}
                    </p>
                )}
            </form>
        </div>
    )
}