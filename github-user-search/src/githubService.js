
const fetchAdvancedUsers = async (username, location, minRepos) => {
  try {
    const params = new URLSearchParams({
      q: username,
      location: location,
      'min_public_repos': minRepos, // GitHub API uses camelCase for min_public_repos
    });
    const response = await axios.get(`https://api.github.com/search/users?${params.toString()}`);
    return response.data.items;
  } catch (error) {
    console.error('Error fetching GitHub users:', error);
    throw error; // Re-throw the error for handling in `Search.jsx`
  }
};
