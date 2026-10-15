// ==========================================
// Fetch 10 Users from an API
// ==========================================

// Define the shape of a user

interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
}

// Fetch all users
async function fetchUsers(): Promise<User[]> {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        // Check if response is OK (status 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.log('❌ Failed to fetch users');
        console.log('Response:', error instanceof Error ? error.message : 'Unknown');
        return []   // Return empty array instead of crashing
    }
}

// Main function — the entry point
async function main() {
    const users = await fetchUsers();

    console.log(`Total user: ${users.length}`);
    console.log('-------------------');

    for (const user of users) {
        console.log(`ID: ${user.id}`);
        console.log(`Name: ${user.name}`);
        console.log(`Email: ${user.email}`);
        console.log(`Phone: ${user.phone}`);
        console.log(`Website: ${user.website}`);
        console.log('-------------------');
    }
}

// Run it
main();