// Concept 6.4: Streaming & Suspense

import { resolve } from "path";
import { Suspense } from "react";

// THE RULE:
// Wrap slow components in <Suspense>.
// The 'fallback' prop shows a loading state while the slow component fetches data.

// ==========================================
// Concept 6.4: Streaming & Suspense
// ==========================================


// 1. The Slow Component (Simulates a slow database)
async function SlowComponent() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <div className="p-4 bg-green-100 rounded">Slow Data Loaded</div>;
}

// 2. The Main Page
export default function StreamingConcept() {
  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-4">Streaming</h1>
      
      {/* Fast part loads instantly */}
      <div className="p-4 bg-blue-100 rounded mb-4">
        Fast Data Loaded
      </div>

      {/* Slow part is wrapped in Suspense */}
      <Suspense fallback={<div className="p-4 bg-gray-100 rounded">Loading slow data...</div>}>
        <SlowComponent />
      </Suspense>
    </div>
  );
}