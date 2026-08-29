// 07-use-case-search.ts
// Real-life: Search function with overloading

// Define what a user looks like
interface SearchUser {
    id: number;
    name: string;
    email: string;
}

// Overload 1: Search by ID (number) returns ONE user
function findUser(searchById: number): SearchUser | undefined;

// Overload 2: Search by name (string) returns MANY users
function findUser(searchByName: string): SearchUser[];

// Implementation: actual logic
function findUser(search: string | number): SearchUser | SearchUser[] | undefined {
    
    // Sample database of users
    const users: SearchUser[] = [
        { id: 1, name: 'Saheed', email: 'saheed@example.com' },
        { id: 2, name: 'Hawwa', email: 'hawwa@example.com' },
        { id: 3, name: 'Fatimah', email: 'fatimah@example.com' }
    ];

    // Check if search is a number (means search by ID)
    if (typeof search === 'number') {
        // Find user with first matching ID
        return users.find(u => u.id == search)
    }

    // If search is a string (search by name)
    // Return all users whose name includes the search text
    return users.filter(u => u.name.includes(search));
}

// Test 1: Search by ID
const userById = findUser(2); // Returns ONE user or undefined
if (userById) {
    console.log('Found by ID: ' + userById.name)
}

// Test 2: Search by name
const usersByName = findUser('a');  // returns ARRAY of users
console.log('Found by name: ' + usersByName.map(u => u.name).join(', '));