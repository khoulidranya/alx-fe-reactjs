import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import recipeData from "../data.json"; // Assuming the mock data is stored in data.json

const RecipeDetail = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const navigate = useNavigate(); // For navigation
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe with the matching ID
    const foundRecipe = recipeData.find((recipe) => recipe.id === parseInt(id));
    if (foundRecipe) {
      setRecipe(foundRecipe);
    } else {
      // If recipe is not found, navigate back to the home page or show an error
      navigate("/");
    }
  }, [id, navigate]);

  if (!recipe) {
    return <div>Loading...</div>; // Or show a loading spinner if needed
  }

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <button
        onClick={() => navigate("/")}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-6"
      >
        Back to Home
      </button>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <img
          className="w-full h-64 object-cover rounded-t-lg"
          src={recipe.image}
          alt={recipe.title}
        />
        <div className="py-4">
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
          <p className="text-gray-700 mb-6">{recipe.summary}</p>
          <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="text-gray-700">{ingredient}</li>
            ))}
          </ul>
          <h2 className="text-2xl font-semibold mb-4">Cooking Instructions</h2>
          <div className="text-gray-700 space-y-4">
            {recipe.instructions.map((step, index) => (
              <p key={index} className="mb-2">{step}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
