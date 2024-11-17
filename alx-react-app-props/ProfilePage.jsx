/ ProfilePage.jsx
import React from 'react';
import UserDetails from './UserDetails';

function ProfilePage() {
  return (
    <div>
      <h2>Profile</h2>
      <UserDetails />
    </div>
  );
}

export default ProfilePage;

import ProfilePage from './ProfilePage';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.

import UserInfo from './UserInfo';

function ProfilePage({ userData }) {
  return <UserInfo userData={userData} />;
}

export default ProfilePage;


