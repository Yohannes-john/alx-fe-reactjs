import React, { useState, useEffect } from 'react';

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch('data.json');
      const data = await response.json();
      setRecipes(data);
    };

    fetchRecipes();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
            <p className="text-gray-700">{recipe.description}</p>
            <a href={recipe.url} className="text-blue-500 hover:underline">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
