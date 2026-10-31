import { ReactNode } from "react";


interface CardProps {
    children: ReactNode;
    title?: string;
}

export default function Card({ children, title }: CardProps) {
    
    return (
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">

            {/* Show the title if one is provided */}
            {title && (
                <h2 className="text-lg font-bold text-gray-800 mb-2">{title}</h2>
            )}

            {/* Render whatever is inside the Card */}
            {children}
        </div>
    );
}