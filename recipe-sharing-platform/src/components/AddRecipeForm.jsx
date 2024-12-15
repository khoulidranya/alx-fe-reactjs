import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");
  const [errors, setErrors] = useState({});

  // Validation function to check if form inputs are valid
  const validate = () => {
    const errors = {};
    
    // Check if title is empty
    if (!title) {
      errors.title = "Title is required";
    }

    // Check if ingredients are provided (at least 2)
    if (!ingredients) {
      errors.ingredients = "Ingredients are required";
    } else {
      const ingredientsArray = ingredients
        .split("\n")
        .map((ingredient) => ingredient.trim())
        .filter((ingredient) => ingredient !== "");
      if (ingredientsArray.length < 2) {
        errors.ingredients = "Please provide at least two ingredients.";
      }
    }

    // Check if preparation steps are empty
    if (!preparation) {
      errors.preparation = "Preparation steps are required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs before submission
    if (!validate()) {
      return; // If validation fails, don't submit
    }

    // If validation passes, handle recipe submission (for now, log the data)
    const newRecipe = {
      title,
      ingredients: ingredients.split("\n").map((ingredient) => ingredient.trim()).filter((ingredient) => ingredient !== ""),
      preparation,
    };
    console.log("New Recipe Submitted:", newRecipe);

    // Reset form after submission
    setTitle("");
    setIngredients("");
    setPreparation("");
    setErrors({});
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Add New Recipe</h2>
      
      {/* Error messages */}
      {Object.keys(errors).length > 0 && (
        <div className="text-red-500 text-center mb-4">
          {Object.values(errors).map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 shadow-md">
        {/* Title Field */}
        <div>
          <label htmlFor="title" className="block text-lg font-medium mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter recipe title"
          />
        </div>

        {/* Ingredients Field */}
        <div>
          <label htmlFor="ingredients" className="block text-lg font-medium mb-2">
            Ingredients (Separate with newlines)
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter ingredients, one per line"
          />
        </div>

        {/* Preparation Steps Field */}
        <div>
          <label htmlFor="preparation" className="block text-lg font-medium mb-2">
            Preparation Steps
          </label>
          <textarea
            id="preparation"
            value={preparation}
            onChange={(e) => setPreparation(e.target.value)}
            rows="6"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter preparation steps"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
