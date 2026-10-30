import { redirect } from "next/navigation";

export default function RedirectDemon() {

    // 1. This is a Server Action. It runs on the server.
    async function handleRedirect() {
        'use server';

        console.log('Server action running... Redirecting now!');

        // 2. The automatic train track
        redirect('/chapter-08-hooks/01-use-pathname');
    }

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">redirect() Demo</h1>
      
            <p className="mb-6 text-gray-600">
                Clicking this button submits a form to the server. The server will immediately redirect you.
            </p>

            {/* 3. We use a form to trigger the server action */}
            <form action={handleRedirect}>
                <button
                    type="submit"
                    className="bg-red-600 text-white p-2 rounded hover:bg-red-700"
                >
                    Redirect me to Pathname
                </button>
            </form>
        </div>
    )
}