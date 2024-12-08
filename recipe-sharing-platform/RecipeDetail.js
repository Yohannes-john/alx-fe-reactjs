import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const response = await fetch(`data.json`);
      const data = await response.json();
      const foundRecipe = data.find(recipe => recipe.id === parseInt(id));
      setRecipe(foundRecipe);
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-96 object-cover mb-4" />
      <p className="text-lg">{recipe.summary}</p>
      {/* Add more details, instructions, ingredients, etc. here */}
    </div>
  );
}

export default RecipeDetail;
