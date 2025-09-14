// src/stores/recipeStore.js
import create from 'zustand';
import { persist } from 'zustand/middleware';

// simple id helper
const uid = () => Date.now().toString();

const useRecipeStore = create(persist(
  (set) => ({
    recipes: [
      // optional seed example; remove or keep
      { id: uid(), title: 'Spaghetti Aglio e Olio', description: 'Garlic, olive oil, chili, spaghetti.' },
      { id: uid(), title: 'Tomato Soup', description: 'Simple tomato soup with basil.' }
    ],
    addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),
    updateRecipe: (id, updatedFields) => set((state) => ({
      recipes: state.recipes.map(r => r.id === id ? { ...r, ...updatedFields } : r)
    })),
    deleteRecipe: (id) => set((state) => ({ recipes: state.recipes.filter(r => r.id !== id) })),
    setRecipes: (recipes) => set({ recipes })
  }),
  {
    name: 'recipe-storage', // localStorage key
  }
));

export default useRecipeStore;
