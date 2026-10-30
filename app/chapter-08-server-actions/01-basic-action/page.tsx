// Server Component

export default function BasicActionPage() {

    // 1. Define the Server Action
    async function submitName(formData: FormData) {
        'use server';

        // 2. Extract the input from the form
        const name = formData.get('username')

        // 3. Print it to the server terminal
        console.log('Received from form:', name);
    }

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold">Basic Server Action</h1>
        
            {/* function directly into the 'action' attribute */}
            <form action={submitName} className="flex flex-col gap-4">
                <input 
                    type="text" 
                    name="username"    // must match formData.get('username')
                    placeholder="Enter your name"
                    className="border p-2 rounded"
                    required
                />
                <button 
                    type="submit" 
                    className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                    >
                    Submit to Server
                </button>
            </form>
        </div>
    )
}