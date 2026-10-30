// ==========================================
// Concept 5.4: Composition (The Children Trick)
// ==========================================

// 🧠 THE RULE:
// A Client Component CANNOT import a Server Component directly.
// If it does, the Server Component becomes a Client Component.
//
// ✅ THE FIX:
// Pass the Server Component as a {children} prop from a 
// higher-level Server Component.

// ------------------------------------------
// 1. THE CLIENT WRAPPER (app/chapter-05/ClientWrapper.tsx)
// ------------------------------------------

'use client';

export function ClientWrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className="p-4 border-2 border-blue-500 rounded-lg mb-4">
            <h2 className="text-blue-600 font-bold mb-2">🔵 I am a Client Component</h2>

            <button
                onClick={() => alert('Client interactivity!')}
                className="bg-blue-600 text-white px-3 py-1 rounded text-sm mb-4"
            >
                Click Me
            </button>

            {/* This is the trick! We don't know what 'children' is, but can be render here without importing it */}
            <div className="bg-white p-4 rounded border">
                {children}
            </div>
        </div>
    );
}


// ------------------------------------------
// 2. THE SERVER CHILDREN (app/chapter-05/ServerData.tsx)
// ------------------------------------------
// 🟢 No 'use client' here! This stays on the server.
export function ServerData() {
  return (
    <div>
      <h3 className="text-green-600 font-bold">🟢 I am a Server Component</h3>
      <p>I fetched this data securely from the server.</p>
    </div>
  );
}