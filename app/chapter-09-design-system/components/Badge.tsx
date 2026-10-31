import { ReactNode } from "react";

interface BadgeProps {
    children: ReactNode;
    color?: 'green' | 'red' | 'yellow' | 'blue';
}

export default function Badge({ children, color = 'blue' }: BadgeProps) {

    // 1. The color options object
    const colors = {
        green: 'bg-green-100 text-green-700',
        red: 'bg-red-100 text-red-700',
        yellow: 'bg-yellow-100 text-yellow-700',
        blue: 'bg-blue-100 text-blue-700',
    };

    return (
        // 2. The pill shape + the chosen color
        <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${colors[color]}`}>
            {children}
        </span>
    );
}