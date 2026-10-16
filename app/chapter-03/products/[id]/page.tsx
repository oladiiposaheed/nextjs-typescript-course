// Detail page — URL: /chapter-03/products/[id]

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">You visited product: {id}</h1>
    </div>
  );
}