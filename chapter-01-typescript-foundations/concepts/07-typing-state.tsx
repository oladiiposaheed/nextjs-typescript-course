'use client';
import { useState } from "react";

function CounterPage() {

    // useState<number> = state must be a number
    const [count, setCount] = useState<number>(0);

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Counter</h1>
            <p className="text-4xl font-bold mb-4">{count}</p>

            <button
                onClick={() => setCount(count + 1)}
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                + Increase
            </button>
        </div>
    );
}

function NameInput() {
    // State holds a string
    const [name, setName] = useState<string>('');

    return (
        <div>
            <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="border p-2 rounded"    
            />
            <p className="mt-2">Hello, {name || 'stranger'}!</p>
        </div>
    );
}

function ToggleBox() {
    // State holds true or false
    const [isVisible, setIsVisible] = useState<boolean>(false);

    return (
        <div className="mt-6">
            <button
                onClick={() => setIsVisible(!isVisible)}
                className="bg-purple-600 text-white px-4 py-2 rounded"
            >
                {isVisible ? 'Hide' : 'Show'} Message
            </button>

            {/* Only show when isVisible is true */}
            {isVisible && (
                <p className="mt-3 p-3 border rounded">
                    🎉 You found the hidden message!
                </p>
            )}
        </div>
    )
}

export default function HomePage() {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Typing State</h1>
            <CounterPage />
            <NameInput />
            <ToggleBox />
        </div>
    );
}