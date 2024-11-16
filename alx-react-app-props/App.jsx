

// App.jsx
import React, { useState, useEffect } from 'react';
import { UserContext, UserProvider } from './UserContext';
import ProfilePage from './ProfilePage';

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data from API or other source
    const fetchUserData = async () => {
      const response = await fetch('/api/user');
      const data = await response.json();
      setUserData(data);
    };

    fetchUserData();   

  }, []);

  return (
    <UserProvider value={userData}>
      <ProfilePage />
    </UserProvider>
  );
}

export default App;
