import React, { useEffect } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
  };

  // Automatically trigger filtering whenever the search term changes
  useEffect(() => {
    filterRecipes();
  }, [filterRecipes]);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleSearchChange}
      style={{ marginBottom: '20px', padding: '10px', width: '100%' }}
    />
  );
};

export default SearchBar;
