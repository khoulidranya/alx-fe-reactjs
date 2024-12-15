import React, { useState, useEffect } from "react";
import recipeData from "../data.json"; // Importing the mock data

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Load the mock recipe data into state
    setRecipes(recipeData);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Recipe Sharing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <img className="w-full h-48 object-cover" src={recipe.image} alt={recipe.title} />
            <div className="px-6 py-4">
              <h2 className="font-bold text-xl mb-2">{recipe.title}</h2>
              <p className="text-gray-700 text-base">{recipe.summary}</p>
            </div>
            <div className="px-6 py-4">
              <a href="#" className="text-indigo-600 hover:text-indigo-800">
                View Recipe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
