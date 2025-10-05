import { useState } from "react";

function AddRecipeForm({ onAddRecipe }) {
  // Local state for input fields
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  // Validation errors
  const [errors, setErrors] = useState({});

  // ✅ Separate validation function
  const validate = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Recipe title is required.";
    }

    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required.";
    } else {
      const ingredientsList = ingredients.split(",").map(i => i.trim()).filter(Boolean);
      if (ingredientsList.length < 2) {
        newErrors.ingredients = "Please include at least two ingredients.";
      }
    }

    if (!steps.trim()) {
      newErrors.steps = "Preparation steps are required.";
    }

    setErrors(newErrors); // ✅ store errors in state
    return Object.keys(newErrors).length === 0; // no errors → valid
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return; // ✅ use the validate function

    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredients.split(",").map(i => i.trim()),
      instructions: steps.split(".").map(s => s.trim()).filter(Boolean),
      image: "https://via.placeholder.com/300",
    };

    onAddRecipe(newRecipe);

    // Reset form
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Add a New Recipe
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Recipe Title
          </label>
          <input
            type="text"
            placeholder="Enter recipe title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Ingredients (comma-separated)
          </label>
          <textarea
            placeholder="e.g. Flour, Eggs, Milk"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 h-24 focus:ring-2 focus:ring-blue-400"
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Steps */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Preparation Steps
          </label>
          <textarea
            placeholder="Step 1. Preheat oven. Step 2. Mix ingredients."
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 h-32 focus:ring-2 focus:ring-blue-400"
          ></textarea>
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
