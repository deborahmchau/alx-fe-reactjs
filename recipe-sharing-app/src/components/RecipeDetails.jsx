import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import useRecipeStore from './components/recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

export default function RecipeDetails() {
  const { id } = useParams();
  const recipe = useRecipeStore(state => state.recipes.find(r => r.id === id));
  const navigate = useNavigate();

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <button onClick={() => navigate('/')}>Back to list</button>
      </div>
    );
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <div style={{ marginTop: 12 }}>
        <Link to={`/recipes/${recipe.id}/edit`} style={{ marginRight: 8 }}>Edit</Link>
        <DeleteRecipeButton recipeId={recipe.id} onDeleted={() => navigate('/')} />
      </div>
    </div>
  );
}

export default RecipeDetails
