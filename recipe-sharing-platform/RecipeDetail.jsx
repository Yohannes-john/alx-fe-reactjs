import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`https://api.example.com/recipes/${id}`);
        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        setError('Error fetching recipe');
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  return (
    <div className="container mx-auto px-4">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
          <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover mb-4" />
          <p className="text-gray-700">{recipe.description}</p>
          <h2 className="text-2xl font-bold mt-4">Ingredients</h2>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h2 className="text-2xl font-bold mt-4">Instructions</h2>
          <ol>
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

export default RecipeDetail;
