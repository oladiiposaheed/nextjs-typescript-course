interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
}

function List<T>({ items, renderItem }: ListProps<T>) {
    return (
        <ul className="space-y-2">
            {items.map((item, index) => (
                <li key={index} className="border p-2 rounded">
                    {renderItem(item)}
                </li>
            ))}
        </ul>
    );
}

export default function HomePage() {
    const users = ['Fatimah', 'Ali', 'Hawwa'];
    const numbers = [1, 2, 3, 4];

    return (
        <div className="p-8 space-y-8">
            <div>
                <h2 className="text-xl font-bold mb-3">Users</h2>
                <List 
                    items={users} 
                    renderItem={(user) => <span>{user}</span>} />
            </div>

            <div>
                <h2 className="text-xl font-bold mb-3">Numbers</h2>
                <List 
                    items={numbers}
                    renderItem={(num) => <span>Number: {num}</span>}
                />
            </div>
        </div>
    );
}