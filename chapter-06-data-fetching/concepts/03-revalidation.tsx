export default async function LiveQuoteConcept() {
    
    // Fetching a random quote API
    const response = await fetch('https://dummyjson.com/quotes/random', {
        next: { revalidate: 60 }
    });

    const data = await response.json();

    return (
        <div className="p-4 border rounded">
        <p className="italic">"{data.quote}"</p>
        </div>
  );
}