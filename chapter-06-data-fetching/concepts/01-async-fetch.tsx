// ==========================================
// Concept 6.1: Async Server Components
// ==========================================

// 🧠 THE RULE:
// Server Components can be marked with 'async'. 
// You can use 'await' directly inside the component body.
// There is no need for useState or useEffect to fetch data.

// 🛠️ PATTERN:
// 1. Make the component 'async'
// 2. Fetch the data using 'await fetch(...)'
// 3. Render the data directly

export default async function AsyncFetchData() {
    // 1. Fetch data on the server
    const response = await fetch(''https://jsonplaceholder.typicode.com/users/1');

    // 2. Convert to JSON
    const user = await response.json();

    // 3. Render the result
    return (
        <div className="p-4 border rounded">
            <h1 className="text-xl font-bold">{user.name}</h1>
            <p>Email: {user.email}</p>
        </div>
    )

}