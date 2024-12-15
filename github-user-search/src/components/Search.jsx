

import React, { useState, useEffect } from 'react';
import GitHubService from './services/githubService';

function Search({ onSearch }) {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    onSearch(username);
    setUsername('');
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await GitHubService.fetchUserData(username);
        setUserData(data);
      } catch (error) {
        setError('Looks like we can\'t find the user.');
      } finally {
        setIsLoading(false);
      }
    };

    if (username) {
      fetchUserData();
    }
  }, [username]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <button type="submit">Search</button>
      </form>

      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData && (
        <div>
          <img src={userData.avatar_url} alt={userData.login} />
          <h2>{userData.login}</h2>
          {/* ... other user details ... */}
        </div>
      )}
    </div>
  );
}

export default Search;
