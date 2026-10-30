'use client';

import { useState } from "react";

export default function ClientNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex justify-between items-center bg-emerald-100 p-2 rounded mb-4">
            <h1 className="font-bold text-emerald-700">✅ Good Navbar (Client)</h1>

            <button
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? 'Close' : 'Open'} Menu
            </button>
        </div>
    );
}