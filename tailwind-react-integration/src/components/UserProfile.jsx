
import React from 'react';

function UserProfile() {
  return (
    <div className="bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg">
      {/* User profile content here */}
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <p>This is a user profile component.</p>
      {/* ... other profile details ... */}
    </div>

    <div className="bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg">
      <img src="user.jpg" alt="User Profile Picture" className="rounded-full w-36 h-36 mx-auto" />
      {/* ... other profile details ... */}
    </div>
      <div className="bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg">
      <h1 className="text-xl text-blue-800 my-4">User Profile</h1>
      {/* ... other profile details ... */}
    </div>
      <div className="bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg">
      <h1 className="text-xl text-blue-800 my-4">User Profile</h1>
      <p className="text-gray-600 text-base">This is a user profile description. It provides details about the user, such as their name, bio, and interests.</p>
      {/* ... other profile details ... */}
    </div>
  );
}


export default UserProfile;
