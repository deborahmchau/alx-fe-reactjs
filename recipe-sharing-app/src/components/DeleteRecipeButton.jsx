import { useNavigate } from "react-router-dom";
import useRecipeStore from "./components/recipeStore";

function DeleteRecipeButton({ recipeId }) {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate("/"); // ✅ redirect to home (or change to "/recipes" if you have a recipes list route)
  };

  return (
    <button onClick={handleDelete} style={{ color: "red" }}>
      Delete Recipe
    </button>
  );
}

export default DeleteRecipeButton;

