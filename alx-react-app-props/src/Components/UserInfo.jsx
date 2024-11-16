import UserDetails from './UserDetails';

function UserInfo() {
  // ... other code

  return (
    <div>
      {/* ... other components */}
      <UserDetails /> {/* No need to pass userData */}
    </div>
  );
}
