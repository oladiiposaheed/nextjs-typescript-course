// Concept 5.1: Server vs Client Components

import { useState } from "react";

export default function MyComponent() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>I am a Server Component</h1>
            <p>I am rendered on the server. I cannot use state or onClick.</p>
        </div>
    )
}