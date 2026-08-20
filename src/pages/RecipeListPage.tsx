import { NavLink } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import RecipeList from "../components/RecipeList";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { categories } from "../data/categories";
import { recipes } from "../data/recipes";

const RecipeListPage = () => {
  useDocumentTitle("Les recettes");

  return (
    <div>
      <PageHeader
        eyebrow="Toutes les recettes"
        title="Le carnet, page par page"
        subtitle="Neuf recettes classiques, de l'entrée au dessert. Cliquez sur l'une d'elles pour la lire en entier."
      />

      <nav className="mb-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <NavLink
            key={category.slug}
            to={`/categorie/${category.slug}`}
            className="rounded-xl border-[1.5px] border-zinc-200 bg-white px-3.5 py-2 text-[13.5px] font-bold text-zinc-600 transition-colors hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600"
          >
            {category.label}
          </NavLink>
        ))}
      </nav>

      <RecipeList recipes={recipes} />
    </div>
  );
};

export default RecipeListPage;
