import useRecipeStore from "./components/recipeStore";

function FavoritesList() {
  const favorites = useRecipeStore((state) =>
    state.favorites.map((id) => state.recipes.find((r) => r.id === id))
  );

  if (favorites.length === 0) {
    return <p>You don’t have any favorites yet.</p>;
  }

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.map(
        (recipe) =>
          recipe && (
            <div key={recipe.id} style={{ marginBottom: "15px" }}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
            </div>
          )
      )}
    </div>
  );
}

export default FavoritesList;
