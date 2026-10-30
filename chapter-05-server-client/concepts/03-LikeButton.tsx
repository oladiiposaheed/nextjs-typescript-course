'use client';

import { useState } from "react";

export default function LikeButton() {
    const [likes, setLikes] = useState(0);

    return (
        <button
            onClick={() => setLikes(likes + 1)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-4"
        >
            ❤️ Like ({likes})
        </button>
    );
}


// Server Component

// Create the static page that uses the button

import LikeButton from "./03-LikeButton";

export default function BlogButtonPage() {
    return (
        <div className="p-8 max-w-xl">
            <h1 className="text-2xl font-bold">My First Blog Post</h1>
            <p className="mt-4 text-gray-600">
                This text is rendered on the server for SEO and performance. 
                But the button below is a Client Component that handles state.
            </p>
            {/* import and use the Client Component */}
            <LikeButton />
        </div>
    )
}