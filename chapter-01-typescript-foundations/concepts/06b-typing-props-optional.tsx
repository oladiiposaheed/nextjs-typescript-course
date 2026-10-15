// ==========================================
// Concept 1.6 (b): Optional Props
// ==========================================
// Use "?" to mark props as optional.
// ==========================================

interface ProfileProps {
  name: string;         // Required
  bio?: string;         // Optional — "?" means can be missing
  avatar?: string;      // Optional
}

function Profile({ name, bio, avatar }: ProfileProps) {
  return (
    <div className="border p-3 rounded mb-3">
      <p className="font-bold">{name}</p>

      {/* Show bio ONLY if it exists */}
      {bio && <p className="text-sm text-gray-600">{bio}</p>}

      {/* Show avatar ONLY if it exists */}
      {avatar && (
        <img
          src={avatar}
          alt={name}
          className="w-10 h-10 rounded-full mt-2"
        />
      )}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Profiles</h1>

      {/* All props provided */}
      <Profile
        name="Fatimah"
        bio="Software Engineer"
        avatar="https://ui-avatars.com/api/?name=Fatimah"
      />

      {/* Only name — bio and avatar skipped */}
      <Profile name="Ali" />

      {/* Only name and bio */}
      <Profile name="Hawwa" bio="Designer" />
    </div>
  );
}