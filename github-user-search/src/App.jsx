
import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import RecipeCard from './components/RecipeCard';
import RecipeService from './services/recipeService';
import GitHubService from './services/githubService';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [githubData, setGithubData] = useState(null);

  const handleSearch = async (username) => {
    try {
      const githubUser = await GitHubService.fetchUserData(username);
      setGithubData(githubUser);
    } catch (error) {
      console.error('Error fetching GitHub user:', error);
    }
  };

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const recipesData = await RecipeService.fetchRecipes();
        setRecipes(recipesData);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <Search onSearch={handleSearch} />
      {githubData && (
        <div>
          <img src={githubData.avatar_url} alt={githubData.login} />
          <h2>{githubData.login}</h2>
          {/* ... other GitHub user details ... */}
        </div>
      )}
      <h1 className="text-3xl font-bold mb-8">Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default App;

