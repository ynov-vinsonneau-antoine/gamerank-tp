import { Link } from "react-router-dom";
import ActionLink from "../components/ActionLink";
import CategoryCard from "../components/CategoryCard";
import RecipeCard from "../components/RecipeCard";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { categories } from "../data/categories";
import { recipes } from "../data/recipes";

const HomePage = () => {
  useDocumentTitle("Accueil");

  // Une recette par catégorie, plutôt que les trois premières du tableau.
  const featured = categories.map(
    (category) =>
      recipes.filter((recipe) => recipe.category === category.slug)[0],
  );

  return (
    <div className="flex flex-col gap-14">
      <section className="rounded-[28px] border border-zinc-200/80 bg-white px-8 py-14 text-center shadow-sm">
        <p className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-[12px] font-bold text-orange-600">
          {recipes.length} recettes · {categories.length} catégories
        </p>

        <h1 className="mx-auto mt-5 max-w-2xl text-[40px] font-extrabold leading-[1.1] tracking-tight text-zinc-900 md:text-[48px]">
          Les recettes qu'on refait{" "}
          <span className="bg-linear-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            sans hésiter
          </span>
          .
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-zinc-500">
          Des classiques écrits pour être suivis jusqu'au bout : les quantités
          justes, les étapes dans l'ordre, et le détail qui change tout.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <ActionLink to="/recettes">Parcourir les recettes</ActionLink>
          <ActionLink to="/categorie/dessert" variant="secondary">
            Commencer par le dessert
          </ActionLink>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-[12px] font-extrabold uppercase tracking-[0.5px] text-zinc-400">
          Par catégorie
        </h2>

        <div className="grid gap-4 sm:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard
              key={category.slug}
              category={category}
              count={
                recipes.filter((recipe) => recipe.category === category.slug)
                  .length
              }
            />
          ))}
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="text-[12px] font-extrabold uppercase tracking-[0.5px] text-zinc-400">
            À essayer en premier
          </h2>
          <Link
            to="/recettes"
            className="text-[13.5px] font-bold text-orange-600 transition-colors hover:text-orange-700"
          >
            Tout voir
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
