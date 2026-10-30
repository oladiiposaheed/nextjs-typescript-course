'use client';
import { useSearchParams, useRouter } from "next/navigation";


import { teamMembers } from "./data";

export default function TeamDirectory() {

    const searchParams = useSearchParams();
    const searchTerm = searchParams.get('search') || '';

    const router = useRouter();

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        // If there is text, update the URL with ?search=...
        if (value) {
            router.replace(`?search=${value}`);
        } else {
            // If the input is empty, reset the URL
            router.replace('/chapter-08-hooks/mini-project');
        }
    }

    // 1. Filter the list based on the search term
    const filteredMembers = teamMembers.filter((member) =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-8 max-w-4xl mx-auto">
            <div className="mb-8">

                {/* 1. Header Section */}
                <h1 className="text-3xl font-bold text-gray-800">Team Directory</h1>

                <p className="text-red-500 font-bols">
                     Current search from URL: {searchTerm || 'Nothing yet'}
                </p>
                <p className="text-gray-500 mt-1">Find and filter your team members.</p>
            </div>

            {/* Search Bar */}
            <input 
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Type to search..."
                className="w-full p-3 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:border-blue-500"
            />

            {/* Grid of Team Members */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {filteredMembers.length === 0 && (
                    <p className="text-gray-500">No team members found.</p>
                )}
                
                {filteredMembers.map((member) => (
                    <div
                        key={member.id}
                        className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                    >
                        {/* Initials Avatar */}
                        <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl mb-4">
                        {member.name.charAt(0)}
                        </div>

                        <h2 className="text-lg font-bold text-gray-800">{member.name}</h2>
                        <p className="text-sm text-gray-500 mb-2">{member.role}</p>

                        <span className="inline-block px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full">
                            {member.team}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}