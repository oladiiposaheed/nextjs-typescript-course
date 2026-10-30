export default async function LiveQuoteConcept() {
    
    // Fetching a random quote API
    const response = await fetch('https://dummyjson.com/quotes/random', {
        cache: 'no-store'
    });

    const data = await response.json();

    return (
    <div className="p-4 border rounded">
      <p className="italic">"{data.quote}"</p>
      <p className="text-sm font-bold mt-2">- {data.author}</p>
    </div>
    );
}