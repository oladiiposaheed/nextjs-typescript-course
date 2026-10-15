// ==========================================
// Concept: Async in a Next.js Page
// ==========================================

interface User {
    id: number;
    name: string;
    email: string;
}

// Fetch one user from the API
async function getUser(): Promise<User> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = await response.json();
    return data;
}

// The page itself is async!
export default async function HomePage() {

    // Wait for the user data(object)
    const user = await getUser();

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">User Profile</h1>

            <div className="border p-4 rounded">
                <p className="font-bold">{user.name}</p>
                <p className="text-gray-600">{user.email}</p>
            </div>
        </div>
    );
}