import { create } from "zustand";
import { persist } from 'zustand/middleware';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],
  favorites: [],
  recommendations: [],

  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
       filteredRecipes: [...state.recipes, newRecipe].filter((r) =>
        r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
      filteredRecipes: state.filteredRecipes.filter((r) => r.id !== id),  
      favorites: state.favorites.filter((fid) => fid !== id), // remove from favorites if deleted
    })),
  
  setRecipes: (recipes) => set({ recipes })

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      filteredRecipes: state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r  
      ),
    })),

  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites
        : [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

   setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      ),
    })), 

  generateRecommendations: () =>
    set((state) => {
      // very simple mock: recommend random favorites-related recipes
      const recommended = state.recipes.filter(
        (recipe) =>
          state.favorites.includes(recipe.id) && Math.random() > 0.3
      );
      return { recommendations: recommended };
    }),
}));

export default useRecipeStore;
