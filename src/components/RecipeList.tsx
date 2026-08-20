import RecipeCard from "./RecipeCard";
import EmptyState from "./EmptyState";
import type { Recipe } from "../types/recipe";

type RecipeListProps = {
  recipes: Recipe[];
};

const RecipeList = ({ recipes }: RecipeListProps) => {
  if (recipes.length === 0) {
    return (
      <EmptyState
        title="Aucune recette ici"
        message="Cette sélection est vide pour le moment."
      />
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.slug} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
