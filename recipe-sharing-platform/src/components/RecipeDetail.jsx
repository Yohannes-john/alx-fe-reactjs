
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from './data.json'; // Assuming data.json is in the same directory

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = () => {
      const foundRecipe = data.find(recipe => recipe.id === parseInt(id));
      setRecipe(foundRecipe);
    };

    fetchRecipe();
  }, [id]);

  return (
    <div className="container mx-auto px-4">
      {recipe ? (
        <div>
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
          <img src={recipe.image} alt={recipe.title} className="w-full h-96 object-cover mb-4 rounded-lg" />
          <p className="text-lg text-gray-700">{recipe.description}</p>

          <h2 className="text-2xl font-bold mt-4">Ingredients</h2>
          <ul className="list-disc list-inside">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold mt-4">Instructions</h2>
          <ol className="list-decimal list-inside">
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      ) : (
        <p>Recipe not found.</p>
      )}
    </div>
  );
}

export default RecipeDetail;
