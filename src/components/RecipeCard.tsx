import { Link } from "react-router-dom";
import CategoryPill from "./CategoryPill";
import { difficultyLabels } from "../data/difficulties";
import type { Recipe } from "../types/recipe";

type RecipeCardProps = {
  recipe: Recipe;
};

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const totalMinutes = recipe.prepMinutes + recipe.cookMinutes;

  return (
    <Link
      to={`/recette/${recipe.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-md"
    >
      <CategoryPill category={recipe.category} />

      <h2 className="mt-3 text-[17px] font-extrabold leading-snug text-zinc-900 transition-colors group-hover:text-orange-600">
        {recipe.name}
      </h2>

      <p className="mt-2 flex-1 text-[14px] leading-relaxed text-zinc-500">
        {recipe.description}
      </p>

      <div className="mt-4 flex items-center gap-2 border-t border-zinc-100 pt-3 text-[12.5px] font-semibold text-zinc-400">
        <span>{totalMinutes} min</span>
        <span aria-hidden="true">·</span>
        <span>{recipe.servings} pers.</span>
        <span aria-hidden="true">·</span>
        <span>{difficultyLabels[recipe.difficulty]}</span>
      </div>
    </Link>
  );
};

export default RecipeCard;
