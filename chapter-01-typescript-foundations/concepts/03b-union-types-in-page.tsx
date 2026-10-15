// Literal union — only these three statuses
type OrderStatus = 'pending' | 'shipped' | 'delivered';

interface Order {
    id: number;
    customer: string;
    status: OrderStatus
}

const orders: Order[] = [
    { id: 1, customer: 'Fatimah', status: 'pending' },
    { id: 2, customer: 'Ali', status: 'shipped' },
    { id: 3, customer: 'Hawwa', status: 'delivered' },
];

// Returns color based on status
function getStatusColor(status: OrderStatus): string {
    if (status === 'pending')
        return 'text-yellow-600';
    if (status === 'shipped')
        return 'text-blue-600';
    return'text-green-600';
}

export default function HomePage() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Orders</h1>

            <ul className="space-y-3">
                {orders.map((order) => (
                    <li key={order.id} className="borderp-3 rounded">
                        <p className="font-bold">
                            #{order.id} - {order.customer}
                        </p>
                        <p className={`text-sm ${getStatusColor(order.status)}`}>
                            Status: {order.status}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
