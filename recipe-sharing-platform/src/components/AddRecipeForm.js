import React, { useState } from 'react';

function AddRecipeForm({ onAddRecipe }) {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);

  const handleIngredientChange = (e) => {
    setIngredients([...ingredients, e.target.value]);
  };

  const handleInstructionChange = (e) => {
    setInstructions([...instructions, e.target.value]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      title,
      image,
      description,
      ingredients,
      instructions
    };
    onAddRecipe(newRecipe);
    // Clear the form fields
    setTitle('');
    setImage('');
    setDescription('');
    setIngredients([]);
    setInstructions([]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="ingredients">Ingredients:</label>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Add an ingredient"
          onChange={handleIngredientChange}
        />
      </div>
      <div>
        <label htmlFor="instructions">Instructions:</label>
        <ol>
          {instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
        <input
          type="text"
          placeholder="Add an instruction"
          onChange={handleInstructionChange}
        />
      </div>
      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default AddRecipeForm;
