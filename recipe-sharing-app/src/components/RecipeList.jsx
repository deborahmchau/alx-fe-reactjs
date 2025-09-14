import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './components/recipeStore';

export default function RecipeList() {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div>
      <h2>All Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes yet. Add one!</p>
      ) : (
        <div style={{ display: 'grid', gap: '12px' }}>
          {recipes.map(r => (
            <article key={r.id} style={{ padding: '12px', border: '1px solid #ddd', borderRadius: 6 }}>
              <h3>{r.title}</h3>
              <p>{r.description}</p>
              <div style={{ marginTop: 8 }}>
                <Link to={`/recipes/${r.id}`} style={{ marginRight: 8 }}>View</Link>
                <Link to={`/recipes/${r.id}/edit`}>Edit</Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

export default RecipeList;
