// ==========================================
// Concept 1.5 (d): Fetch 10 Users — Display in Browser
// ==========================================
// Full working example of fetching + displaying data.
// Same code runs in app/page.tsx
// ==========================================

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

// Fetch users with error handling
async function fetchUsers(): Promise<User[]> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.log('Failed to fetch users');
    return [];
  }
}

export default async function HomePage() {
  const users = await fetchUsers();

  // Show error message if no users
  if (users.length === 0) {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Users</h1>
        <p className="text-red-600">
          ⚠️ Could not load users. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Users ({users.length})
      </h1>

      <ul className="space-y-3">
        {users.map((user) => (
          <li key={user.id} className="border p-4 rounded-lg shadow-sm">
            <p className="font-bold text-lg">{user.name}</p>
            <p className="text-sm text-gray-600">📧 {user.email}</p>
            <p className="text-sm text-gray-600">📞 {user.phone}</p>
            <p className="text-sm text-gray-600">🌐 {user.website}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}