// src/App.jsx
import React from 'react';
import { Router, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';

export default function App() {
  return (
    <div style={{ padding: 20, maxWidth: 900, margin: '0 auto' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Recipe Sharing App</h1>
        <nav>
          <Link to="/" style={{ marginRight: 12 }}>Home</Link>
          <Link to="/add">Add Recipe</Link>
        </nav>
      </header>

      <main style={{ marginTop: 20 }}>
        <Routes>
          <Route path="/" element={
            <>
              <AddRecipeForm />
              <hr style={{ margin: '20px 0' }} />
              <RecipeList />
            </>
          } />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
        </Routes>
      </main>
    </div>
  );
}
export default App 
