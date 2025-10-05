import { useState, useEffect } from "react";
import data from "../data.json"; // import the mock data

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  // Load the data on component mount
  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Recipe List</h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map(recipe => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">{recipe.title}</h2>
              <p className="text-sm text-gray-600 mt-2">{recipe.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
