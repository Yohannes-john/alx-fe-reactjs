Gemini


See the latest updates to the Gemini Apps Privacy HubOpens in a new window

Conversation with Gemini

UserContext.js.

Initialize a Context using React.createContext() and export it


Show drafts


Here's a basic example of how to initialize a Context in React using React.createContext() and export it in a UserContext.js file:

JavaScript
// UserContext.js
import React, { createContext, useState, useEffect } from 'react';

// Create a Context object
const UserContext = createContext();

// Create a UserProvider component
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);   


  // Fetch user data on component mount (replace with your actual logic)
  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch('/api/user');
      const data = await response.json();
      setUser(data);
    };

    fetchUserData();
  }, []);

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
