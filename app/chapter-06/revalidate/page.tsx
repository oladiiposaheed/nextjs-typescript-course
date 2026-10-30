// Server Component

export default async function RevalidatePage() {
  // 1. Fetch with a 10-second revalidation (so you can test it easily)
  const response = await fetch('https://dummyjson.com/quotes/random', {
    next: { revalidate: 10 } // Cache for 10 seconds
  });
  const data = await response.json();

  const serverTime = new Date().toLocaleTimeString();

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Revalidation (10s Cache)</h1>
      
      <div className="p-6 bg-zinc-900 text-white rounded-xl shadow-lg">
        <p className="text-xl italic mb-4">"{data.quote}"</p>
        <p className="text-emerald-400 font-bold text-right">— {data.author}</p>
        
        <div className="mt-6 pt-4 border-t border-zinc-700 text-sm text-zinc-400">
          Server fetched this at: <span className="text-white font-mono">{serverTime}</span>
        </div>
      </div>
      
      <p className="mt-4 text-gray-500 text-sm">
        Refresh the page 5 times. The quote will stay the same. Wait 10 seconds, refresh again, and it will change!
      </p>
    </div>
  );
}