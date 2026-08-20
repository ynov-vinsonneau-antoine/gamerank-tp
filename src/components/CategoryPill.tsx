import { categoryColors, categoryLabels } from "../data/categories";
import type { Category } from "../types/recipe";

type CategoryPillProps = {
  category: Category;
};

const CategoryPill = ({ category }: CategoryPillProps) => {
  return (
    <span
      className={`inline-flex w-fit items-center rounded-full border px-2.5 py-1 text-[12px] font-bold ${categoryColors[category]}`}
    >
      {categoryLabels[category]}
    </span>
  );
};

export default CategoryPill;
