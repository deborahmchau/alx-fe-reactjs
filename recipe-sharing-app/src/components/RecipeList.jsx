import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './components/recipeStore';

function RecipeList() {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  if (filteredRecipes.length === 0) {
    return <p>No recipes match your search.</p>;
  }

  return (
    <div>
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: "15px" }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button
              onClick={() =>
                isFavorite ? removeFavorite(recipe.id) : addFavorite(recipe.id)
              }
            >
              {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
            </button>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
