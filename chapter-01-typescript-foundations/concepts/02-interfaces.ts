// ==========================================
// Concept 1.2: Interfaces & Type Aliases
// ==========================================
// Interfaces define the shape of objects.
// Use them to describe what data looks like.
// ==========================================

// ---- INTERFACE ----
// Defines the shape of a User object
interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

// Create a user that matches the shape
const user1: User = {
    id: 1,
    name: 'Fatimah',
    email: 'fatimah@example.com',
    isActive: true,
};

// ---- OPTIONAL PROPERTIES ----
interface Profile {
    name: string;
    bio?: string;
    avatar?: string;
}

const profile1: Profile = {
    name: 'Joe',
};

const profile2: Profile = {
    name: 'Hawwa',
    bio: 'Software developer',
    avatar: 'https://example.com/photo.jpg',
};

// ---- TYPE ALIAS ----
// Same as interface but uses "type" keyword
type Product = {
    id: number;
    title: string;
    price: number;
};

const product1: Product = {
    id: 101,
    title: 'Shirt',
    price: 1600,
};

// ---- ARRAY OF INTERFACES ----
const users: User[] = [user1];

// ---- FUNCTION USING INTERFACE ----
function greetUser(user: User): string {
    return `Hello, ${user.name}!`;
}

console.log(user1);
console.log(profile1);
console.log(profile2);
console.log(product1);
console.log(greetUser(user1));