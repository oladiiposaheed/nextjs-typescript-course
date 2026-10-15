// ==========================================
// UserCard
// ==========================================
// Displays ONE user's details with a Remove button.
//
// Props:
//   user     — a single User object
//   onRemove — function called when Remove is clicked
// Used by:
//   UserList — renders one UserCard per user
// ==========================================

import { User } from './types';

interface UserCardProps {
  user: User;
  onRemove: (id: number) => void;
}

function UserCard({ user, onRemove }: UserCardProps) {
  return (
    <div className="border p-3 rounded mb-2 flex justify-between items-center">
      <div>
        <p className="font-bold">{user.name}</p>
        <p className="text-sm text-gray-600">{user.email}</p>
        <p className='text-sm'>Role: {user.role}</p>
        <p className='text-sm'>
            Status: {user.isActive ? '🟢 Active' : '🔴 Inactive'}
        </p>
      </div>

      <button
        onClick={() => onRemove(user.id)}
        className='bg-red-600 text-white px-3 py-1 rounded'
      >
        Remove
      </button>
    </div>
  );
}

export default UserCard;