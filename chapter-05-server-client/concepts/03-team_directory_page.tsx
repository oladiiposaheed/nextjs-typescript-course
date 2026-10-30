// Server Component

import { use } from "react";
import ClientUserCard from "./ClientUserCard";

export default function TeamDirectoryPage() {
    const users = [
        {
            id: 1, 
            name: 'Fatimah Ibrahim', 
            role: 'Admin', 
            avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
        },
        { 
            id: 2, 
            name: 'David Smith', 
            role: 'User', 
            avatar: 'https://randomuser.me/api/portraits/men/32.jpg' 
        },
        { 
            id: 3, 
            name: 'Zainab Bello', 
            role: 'User', 
            avatar: 'https://randomuser.me/api/portraits/women/68.jpg' 
        },
    ];

    return (
        <div className="min-h-screen bg-zinc-950 p-8">
             <div className="max-w-5xl mx-auto">
                {/* Page Header */}
                <div>
                    <h1 className='text-3xl font-bold text-white'>Team Directory</h1>
                    <p className='text-zinc-400 mt-2'>
                        This page is a Server Component. It passed static data to interactive Client Components below.
                    </p>
                </div>

                {/* Grid of Client Components */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {users.map((user) => (
                        <ClientUserCard 
                            key={user.id}
                            name={user.name}
                            role={user.role}
                            avatar={user.avatar}
                        />
                    ))}
                </div>
             </div>
        </div>
    );

}