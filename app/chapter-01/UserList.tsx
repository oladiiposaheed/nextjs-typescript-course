
// ==========================================
// UserList
// ==========================================
// Renders MANY UserCards — one for each user.
//
// Props:
//   users    — an array of User objects
//   onRemove — function called when Remove is clicked
// ==========================================

import { User } from './types';
import UserCard from './UserCard';

interface UserListProps {
  users: User[];
  onRemove: (id: number) => void;
}

function UserList({ users, onRemove }: UserListProps) {
  // If empty, show message
  if (users.length === 0) {
    return <p>No users found.</p>;
  }

  return (
    <div>
      {users.map((user) => (
        <UserCard key={user.id} user={user} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default UserList;