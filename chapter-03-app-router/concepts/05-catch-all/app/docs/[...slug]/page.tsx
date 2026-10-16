export default async function DocsPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

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