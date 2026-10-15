// ==========================================
// Concept 1.6 (d): The children Prop
// ==========================================
// children = whatever is between <Card> and </Card>
// ==========================================

import { ReactNode } from "react";

interface CardProps {
    title: string;
    children: ReactNode;        // "anything React can render"
}

function Card({ title, children }: CardProps) {
    return (
        <div className="border p-4 rounded mb-4">
            <h2 className="font-bold text-lg mb-2">{title}</h2>
            {/* Renders whatever was passed inside */}
            <div>{children}</div>
        </div>
    );
}

export default function HomePage() {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Children Prop Demo</h1>

            <Card title="Card 1">
                <p>This is the children of Card 1.</p>
            </Card>

            <Card>
                <p>This paragraph is the children.</p>
                <button className="bg-blue-600 text-white px-3 py-1 rounded mt-2">
                    Click Me
                </button>
            </Card>

            <Card title="Card 3">
                <ul className="list-disc pl-6">
                    <li>Item 1</li>
                    <li>Item 2</li>
                </ul>
            </Card>
        </div>
    );
}