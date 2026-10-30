import { resolve } from "path";

export default async function SlowComponent() {

    // Server paused for 3 seconds
    await new Promise((resolve) => setTimeout(resolve, 3000));

    return (
        <div className="p-4 bg-green-100 border border-green-400 rounded mt-4">
            <h2 className="font-bold text-green-800">🐢 Slow Data Loaded!</h2>
            <p className="text-green-700">This data took 3 seconds to arrive.</p>
        </div>
    );
}