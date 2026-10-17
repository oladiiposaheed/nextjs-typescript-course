// Async because we must await params
export default async function DocsPage({
  params,
}: {
  // Type: Promise that contains { slug: string[] }  
  params: Promise<{ slug: string[] }>;
}) {
  
  // Await → get the real object, then extract slug array  
  const { slug } = await params;

  // slug is now: ['react', 'hooks'] (for /docs/react/hooks)
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Docs Page</h1>
      <p className="mb-2">You visited:</p>
      <p className="text-gray-600">/docs/{slug.join('/')}</p>

      <p className="mt-4 mb-2">Segments:</p>
      <ul className="list-disc pl-6 text-gray-600">
        {slug.map((segment, index) => (
          <li key={index}>{segment}</li>
        ))}
      </ul>
    </div>
  );
}