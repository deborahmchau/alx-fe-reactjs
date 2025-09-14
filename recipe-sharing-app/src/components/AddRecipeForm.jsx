import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useRecipeStore from './components/recipeStore';

export default function AddRecipeForm() {
  const addRecipe = useRecipeStore(state => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return alert('Title required');
    const newRecipe = { id: Date.now().toString(), title: title.trim(), description: description.trim() };
    addRecipe(newRecipe);
    setTitle('');
    setDescription('');
    navigate(`/recipes/${newRecipe.id}`); // optional: go to detail view
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 16 }}>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          style={{ width: '100%', padding: 8 }}
        />
      </div>
      <div style={{ marginTop: 8 }}>
        <textarea
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          style={{ width: '100%', padding: 8, minHeight: 80 }}
        />
      </div>
      <button type="submit" style={{ marginTop: 8, padding: '8px 12px' }}>Add Recipe</button>
    </form>
  );
}

export default AddRecipeForm;
