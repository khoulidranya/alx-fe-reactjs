import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import recipeData from "../data.json";  // Assuming you have mock data in data.json

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch the recipe data (simulating with static JSON for now)
    setRecipes(recipeData);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold text-center mb-6">Recipe Sharing Platform</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-all"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{recipe.title}</h2>
              <p className="text-gray-600 mt-2">{recipe.summary}</p>
              {/* Link to the RecipeDetail page */}
              <Link
                to={`/recipe/${recipe.id}`}
                className="text-blue-500 hover:underline mt-4 inline-block"
              >
                View Recipe Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
