export default async function BookPage({
    params
}: PageProps<'/book/[id]'>) {
    const { id } = await params;

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">
                Book Page
            </h1>
            <p className="text-gray-600">
                Showing book with ID: {id}
            </p>
        </div>
    );
}