export default function ChaapterThreePage() {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold">Chapter 3</h1>
            <p className="text-gray-600">App Router & Routing</p>

            <ul>
                <a href="/chapter-03/products" className="text-blue-600">
                    → Products (dynamic routes)
                </a>
            </ul>
        </div>
    );
}