'use client';
import { InputHTMLAttributes } from "react";

// 1. Define the props our custom input accepts
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    
    // Optional label text and error
    label?: string;  
    error?: string;  
}

export default function Input({
    label,
    error,
    className = '',
    ...props
}: InputProps) {

    return (
        <div className="flex flex-col gap-1 w-full">

            {/* 2. Show the label if we provided one */}
            {label && (
                <label className="text-sm font-medium text-gray-700">
                    {label}
                </label>
            )}

            {/* 3. The actual input box */}
            <input 
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                    error
                        ? 'border-red-500 focus:ring-red-200'
                        : 'border-gray-300 focus:ring-blue-200'
                } ${className}`}
                {...props}
            />

            {/* 4. Show the error message if we provided one */}
            {error && (
                <p className="text-red-500 text-xs mt-1">{error}</p>
            )}
        </div>
    )
}