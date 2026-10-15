'use client'

import { useState } from "react"

export default function ArrayStatePage() {
    // State holds an array of strings
    const [names, setNames] = useState<string[]>(['Fatimah', 'Blessing']);
    
    // State holds what the user types
    const [input, setInput] = useState<string>('');

    // Add Function 
    const addName = () => {
        if (input.trim() === '') 
            return;            // Skip if empty
        setNames([...names, input]);    // Add to array
        setInput('');     // Clear input
    };

    // Remove function
    const removeName = (index: number) => {
        //setNames(names.filter((_, i) => i !== index))
        setNames(names.filter((name, i) => {
            console.log(`Position ${i}: ${name}`);
            return i !== index;
        }));
    };

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Names</h1>
            <p>Total: {names.length}</p>

            {/* Input + Button in a row */}
            <div className="flex gap-2 mb-4">
                <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter your name"
                className="border p-2 rounded mb-4"    
                />

                <button
                    onClick={addName}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Add
                </button>
            </div>
            
            {/* Show what user is typing */}
            <p className="mb-4 text-gray-600">Typing: {input}</p>

            {/* List of names
            <ul className="list-disc pl-6">
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul> */}

            {/* Add the Remove Button */}
            <ul className="space-y-2">
                {names.map((name, index) => (
                    <li key={name} className="flex justify-between border p-2 rounded">
                        <span>{name}</span>
                        <button
                            onClick={() => removeName(index)}
                            className="text-red-600"
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}