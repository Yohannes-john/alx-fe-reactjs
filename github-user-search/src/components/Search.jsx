
import React, { useState } from 'react';

function Search({ onSearch }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(username);
    setUsername('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required // Required attribute to enforce input
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
