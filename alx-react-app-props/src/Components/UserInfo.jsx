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
import UserDetails from './UserDetails';

function UserInfo({ userData }) {
  return <UserDetails userData={userData} />;
}

export default UserInfo;

UserInfo.jsx:

import UserDetails from './UserDetails';

function UserInfo({ userData }) {
  return <UserDetails userData={userData} />;
}

export default UserInfo;
