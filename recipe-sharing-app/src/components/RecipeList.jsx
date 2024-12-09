import { Link } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';
import FavoriteButton from './FavoriteButton';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      <h2>Recipe List</h2>
      {filteredRecipes.length === 0 ? (
        <p>No recipes match your search.</p>
      ) : (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>
              <h3>{recipe.title}</h3>
            </Link>
            <p>{recipe.description}</p>
            <FavoriteButton recipeId={recipe.id} />
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
