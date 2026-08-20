import { Link, useParams } from "react-router-dom";
import BackLink from "../components/BackLink";
import CategoryPill from "../components/CategoryPill";
import EmptyState from "../components/EmptyState";
import IngredientList from "../components/IngredientList";
import MetaItem from "../components/MetaItem";
import StepList from "../components/StepList";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { categories } from "../data/categories";
import { difficultyLabels } from "../data/difficulties";
import { recipes } from "../data/recipes";

const RecipeDetailPage = () => {
  const { slug } = useParams();

  const recipe = recipes.find((item) => item.slug === slug);
  const categoryInfo = categories.find(
    (item) => item.slug === recipe?.category,
  );

  useDocumentTitle(recipe ? recipe.name : "Recette introuvable");

  if (!recipe) {
    return (
      <EmptyState
        code="404"
        title="Recette introuvable"
        message={`Aucune recette ne correspond à « ${slug} ». L'adresse comporte peut-être une faute de frappe.`}
      >
        <BackLink to="/recettes">Retour aux recettes</BackLink>
      </EmptyState>
    );
  }

  return (
    <article className="flex flex-col gap-10">
      <BackLink to={`/categorie/${recipe.category}`}>
        {categoryInfo ? categoryInfo.label : "Les recettes"}
      </BackLink>

      <header>
        <CategoryPill category={recipe.category} />

        <h1 className="mt-4 text-[36px] font-extrabold leading-[1.15] tracking-tight text-zinc-900 md:text-[42px]">
          {recipe.name}
        </h1>

        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-zinc-500">
          {recipe.description}
        </p>
      </header>

      <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <MetaItem label="Préparation" value={`${recipe.prepMinutes} min`} />
        <MetaItem
          label="Cuisson"
          value={
            recipe.cookMinutes === 0 ? "Aucune" : `${recipe.cookMinutes} min`
          }
        />
        <MetaItem label="Pour" value={`${recipe.servings} personnes`} />
        <MetaItem
          label="Difficulté"
          value={difficultyLabels[recipe.difficulty]}
        />
      </dl>

      <div className="grid gap-10 lg:grid-cols-5">
        <section className="lg:col-span-2">
          <h2 className="mb-4 text-[12px] font-extrabold uppercase tracking-[0.5px] text-zinc-400">
            Ingrédients
          </h2>
          <IngredientList ingredients={recipe.ingredients} />
        </section>

        <section className="lg:col-span-3">
          <h2 className="mb-4 text-[12px] font-extrabold uppercase tracking-[0.5px] text-zinc-400">
            Préparation
          </h2>
          <StepList steps={recipe.steps} />
        </section>
      </div>

      <footer className="border-t border-zinc-200 pt-6">
        <Link
          to="/recettes"
          className="text-[13.5px] font-bold text-orange-600 transition-colors hover:text-orange-700"
        >
          Voir les {recipes.length} recettes du carnet →
        </Link>
      </footer>
    </article>
  );
};

export default RecipeDetailPage;
