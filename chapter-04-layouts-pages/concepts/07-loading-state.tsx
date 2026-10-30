export default function Loading() {
    return (
        <div className="p-8 flex flex-col justify-center items-center gap-3">
            {/* The spinning circle */}
            <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            
            {/* The text below it */}
            <p className="text-gray-500 text-sm font-bold">Loading data...</p>
        </div>
    )
}