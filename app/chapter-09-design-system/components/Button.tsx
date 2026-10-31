'use client';

import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger';
}

export default function Button({
    children,
    variant = 'primary',  // Default to primary if none is provided
    className = '',
    ...props    // Grabs any other props like onClick, type, etc
}: ButtonProps) {

    // 2. The base styles (the "body")
    const baseStyles = 'px-4 py-2 rounded-lg font-medium transition-colors focus:outline-none';

    // 3. The styles for each outfit
    const variants = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
        danger: 'bg-red-600 text-white hover:bg-red-700',
    };

    // 4. Combine the body + the outfit
    const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

    return (
        <button className={combinedStyles} {...props}>
            {children}
        </button>
    );
}