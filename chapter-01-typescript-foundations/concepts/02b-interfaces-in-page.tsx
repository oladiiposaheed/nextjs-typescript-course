import { use } from "react";

// Define the shape of a user
interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

// Sample users
const users: User[] = [
  { id: 1, name: 'Fatimah', email: 'fatimah@example.com', isActive: true },
  { id: 2, name: 'Mercy', email: 'mercy@example.com', isActive: false },
  { id: 3, name: 'Hawwa', email: 'hawwa@example.com', isActive: true },
];

export default function HomePage() {

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Users</h1>

            <ul className="space-y-3">
                {users.map((user) => (
                    <li key={user.id} className="border p-3 rounded">
                        <p className="font-bold">{user.name}</p>
                        <p className="text-sm text-gray-600">{user.email}</p>
                        <p className="text-sm">
                            Status: {user.isActive ? '🟢 Active' : '🔴 Inactive'}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}