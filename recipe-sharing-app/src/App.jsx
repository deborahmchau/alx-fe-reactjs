import React from "react";
import useRecipeStore from "./components/recipeStore";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial"}}>
       <h1>Recipe Sharing App</h1>
       <RecipeList />
       <AddRecipeForm />
    </div>  
  )
}

export default App
