import React from 'react';
import useRecipeStore from './components/recipeStore';

export default function DeleteRecipeButton({ recipeId, onDeleted }) {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  const handleDelete = () => {
    if (window.confirm('Delete this recipe?')) {
      deleteRecipe(recipeId);
      if (onDeleted) onDeleted();
    }
  };

  return (
    <button onClick={handleDelete} style={{ background: '#d9534f', color: '#fff', padding: '6px 10px', border: 'none', borderRadius: 4 }}>
      Delete
    </button>
  );
}

export default DeleteRecipeButton
