// ==========================================
// User Directory — Main Page
// ==========================================
// Features:
//   - Display users
//   - Add user
//   - Remove user
//   - Search by name
//   - Stats (total, active, inactive)
// ==========================================

'use client'
import { useState } from "react";
import { User } from "./types";
import UserList from "./UserList";
import UserStats from "./UserStats";

export default function UserDirectoryPage() {

    // State: array of users
    const [users, setUsers] = useState<User[]>([
        { id: 1, name: 'Fatimah', email: 'fatimah@example.com', role: 'admin', isActive: true },
        { id: 2, name: 'Ali', email: 'ali@example.com', role: 'user', isActive: false },
        { id: 3, name: 'Hawwa', email: 'hawwa@example.com', role: 'guest', isActive: true },
    ]);

    // State: Text in the name, email and search inputs 
    const [newName, setNewName] = useState<string>('');
    const [newEmail, setNewEmail] = useState<string>('')
    const [searchTerm, setSearchTerm] = useState<string>('')

    // Function to add a new user
    const addUser = () => {
        // If field is empty
        if(newName.trim() === '' || newEmail.trim() === '')
            return;

        // Create a new user object
        const newUser: User = {
            id: users.length + 1,
            name: newName,
            email: newEmail,
            role: 'user',      // Default role
            isActive: true     // New users start active
        };

        // Add to the array (immutable)
        setUsers([...users, newUser]);

        // Clear the inputs
        setNewName('');
        setNewEmail('');
    };

    // Function to remove a user by ID
    const removeUser = (id: number) => {
        setUsers(users.filter((u) => u.id !== id))
    };

    // Calculate stats (based on ALL users, not filtered)
    const total = users.length;
    const activeCount = users.filter((u) => u.isActive).length;
    const inactiveCount = total - activeCount;

    // Filter users based on search
    const filteredUsers = users.filter((u) =>
        u.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">User Directory</h1>

            {/* Stats row */}
            <div>
                <UserStats label="Total" value={total} />
                <UserStats label="Active" value={activeCount} />
                <UserStats label="Inactive" value={inactiveCount} />
            </div>

            {/* Search input */}
            <div className="mb-4">
                <input 
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by name..."
                    className="border p-2 rounded w-full"
                />
            </div>

            {/* Add user inputs */}
            <div className="flex gap-2 mb-6">
                <input 
                    type="text" 
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="Name"
                    className="border p-2 rounded"    
                />
                <input 
                    type="text" 
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    placeholder="Email"
                    className="border p-2 rounded"    
                />
                <button 
                    onClick={addUser}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Add User
                </button>
            </div>

            {/* Pass the users array to UserList: Users list */}
            {/* <UserList users={users} onRemove={removeUser} /> */}
            
            {/* Users list (filtered) */}
            <UserList users={filteredUsers} onRemove={removeUser} />
        </div>
    );
}