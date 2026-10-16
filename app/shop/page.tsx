import Link from "next/link";

export default function ShopPage() {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Shop</h1>
            <p className="mb-4">Welcome to the shop. Pick a category:</p>

            <ul className="space-y-2">
                <li>
                    <Link href='/shop/books' className="text-blue-600">
                        📚 Books
                    </Link>
                </li>
                <li>
                    <Link href='/shop/electronics' className="text-blue-600">
                        📱 Electronics
                    </Link>
                </li>
            </ul>
        </div>
    );
}