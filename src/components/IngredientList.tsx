import type { Ingredient } from "../types/recipe";

type IngredientListProps = {
  ingredients: Ingredient[];
};

const IngredientList = ({ ingredients }: IngredientListProps) => {
  return (
    <ul className="overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-sm">
      {ingredients.map((ingredient) => (
        <li
          key={ingredient.label}
          className="flex items-baseline gap-3 border-b border-zinc-100 px-4 py-3 last:border-b-0"
        >
          <span className="min-w-16 text-[13.5px] font-extrabold text-orange-600">
            {ingredient.quantity}
          </span>
          <span className="text-[14px] text-zinc-600">{ingredient.label}</span>
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;
