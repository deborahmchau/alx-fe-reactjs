import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from './components/recipeStore';

export default function EditRecipeForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore(state => state.recipes.find(r => r.id === id));
  const updateRecipe = useRecipeStore(state => state.updateRecipe);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  if (!recipe) return <p>Recipe not found.</p>;

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(id, { title: title.trim(), description: description.trim() });
    navigate(`/recipes/${id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input value={title} onChange={e => setTitle(e.target.value)} />
      </div>
      <div style={{ marginTop: 8 }}>
        <textarea value={description} onChange={e => setDescription(e.target.value)} />
      </div>
      <button type="submit" style={{ marginTop: 8 }}>Save</button>
      <button type="button" style={{ marginLeft: 8 }} onClick={() => navigate(-1)}>Cancel</button>
    </form>
  );
}

export default EditRecipeForm
