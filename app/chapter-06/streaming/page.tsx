import { Suspense } from "react";
import SlowComponent from "./SlowComponent";

export default function StreamingPage() {
    return (
        <div className="p-8 max-w-xl mx-auto">
            <h1 className='text-2xl font-bold mb-4'>Streaming & Suspense</h1>

            {/* This fast section loads instantly */}
            <div className="p-4 bg-blue-100 border border-blue-400 rounded mb-6">
                <h2 className='font-bold text-blue-800'>⚡ Fast Data Loaded!</h2>
                <p className='text-blue-700'>This part arrived immediately.</p>
            </div>

            {/* This slow section is wrapped in Suspense */}
            <Suspense
                fallback={
                    <div className="p-4 bg-gray-100 border border-gray-400 rounded animate-pulse">
                        <h2 className='font-bold text-gray-500'>Loading slow data...</h2>
                    </div>
                }
            >
                <SlowComponent />
            </Suspense>
        </div>
    )
}