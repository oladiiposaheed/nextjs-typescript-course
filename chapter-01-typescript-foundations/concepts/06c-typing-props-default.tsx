// ==========================================
// Concept 1.6 (c): Default Props
// ==========================================
// Give a prop a default value using "=" in the destructure.
// ==========================================

interface CardProps {
  title: string;
  subtitle?: string;         // Optional
  count?: number;            // Optional (has default)
}

function Card({
  title,
  subtitle = 'No subtitle',  // Default value
  count = 0,                 // Default value
}: CardProps) {
  return (
    <div className="border p-3 rounded mb-3">
      <p className="font-bold">{title}</p>
      <p className="text-sm text-gray-600">{subtitle}</p>
      <p className="text-sm">Count: {count}</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Cards</h1>

      {/* All props provided */}
      <Card title="Users" subtitle="All active users" count={25} />

      {/* subtitle uses default, count provided */}
      <Card title="Revenue" count={5000} />

      {/* Both subtitle and count use defaults */}
      <Card title="Orders" />
    </div>
  );
}