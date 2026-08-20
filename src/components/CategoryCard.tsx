import { Link } from "react-router-dom";
import { categoryColors } from "../data/categories";
import type { CategoryInfo } from "../data/categories";

type CategoryCardProps = {
  category: CategoryInfo;
  count: number;
};

const CategoryCard = ({ category, count }: CategoryCardProps) => {
  return (
    <Link
      to={`/categorie/${category.slug}`}
      className="group rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-md"
    >
      <span
        className={`inline-flex w-fit items-center rounded-full border px-2.5 py-1 text-[12px] font-bold ${categoryColors[category.slug]}`}
      >
        {count} recettes
      </span>

      <h3 className="mt-3 text-[17px] font-extrabold text-zinc-900 transition-colors group-hover:text-orange-600">
        {category.label}
      </h3>

      <p className="mt-1.5 text-[14px] leading-relaxed text-zinc-500">
        {category.tagline}
      </p>
    </Link>
  );
};

export default CategoryCard;
