import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation to check if all fields are filled
    if (!title || !ingredients || !preparation) {
      setError("All fields are required");
      return;
    }

    // Split ingredients by newline and filter out empty entries
    const ingredientsArray = ingredients
      .split("\n")
      .map((ingredient) => ingredient.trim())
      .filter((ingredient) => ingredient !== "");

    // Further validation (optional): Ingredients must have at least 2 items
    if (ingredientsArray.length < 2) {
      setError("Please provide at least two ingredients.");
      return;
    }

    // If all validations pass, proceed to submit (for now, we just log the data)
    const newRecipe = {
      title,
      ingredients: ingredientsArray,
      preparation,
    };
    console.log("New Recipe Submitted:", newRecipe);
    
    // Reset form after submission
    setTitle("");
    setIngredients("");
    setPreparation("");
    setError("");
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Add New Recipe</h2>
      
      {/* Error message */}
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
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
