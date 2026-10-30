// The Form (Client)

import submitData from "./actions";

export default function RedirectFormPage() {
    return (
        <div className="p-8 max-w-md">
            <h1 className="text-2xl font-bold mb-4">Submit and Redirect</h1>

            {/* Pass the server action directly */}
            <form action={submitData} className="flex flex-col gap-4">
                <input 
                    type="text" 
                    name="name"
                    placeholder="Enter your name"
                    className="border p-2 rounded"
                    required    
                />
                <button 
                    type="submit" 
                    className="bg-blue-600 text-white p-2 rounded"
                >
                Submit
                </button>
            </form>
        </div>
    );
}