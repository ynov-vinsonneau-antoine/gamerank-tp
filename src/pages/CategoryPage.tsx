import { useParams } from "react-router-dom";
import BackLink from "../components/BackLink";
import EmptyState from "../components/EmptyState";
import PageHeader from "../components/PageHeader";
import RecipeList from "../components/RecipeList";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { categories } from "../data/categories";
import { recipes } from "../data/recipes";

const CategoryPage = () => {
  const { nom } = useParams();

  const category = categories.find((item) => item.slug === nom);

  // Le titre est appelé avant le `if` : un hook ne se met jamais dans une condition.
  useDocumentTitle(category ? category.label : "Catégorie introuvable");

  if (!category) {
    return (
      <EmptyState
        code="404"
        title="Catégorie introuvable"
        message={`« ${nom} » ne fait pas partie du carnet. Il n'y a que des entrées, des plats et des desserts.`}
      >
        <BackLink to="/recettes">Retour aux recettes</BackLink>
      </EmptyState>
    );
  }

  const selection = recipes.filter(
    (recipe) => recipe.category === category.slug,
  );

  return (
    <div>
      <BackLink to="/recettes">Retour aux recettes</BackLink>

      <div className="mt-6">
        <PageHeader
          eyebrow={`${selection.length} recettes`}
          title={category.label}
          subtitle={category.tagline}
        />
      </div>

      <RecipeList recipes={selection} />
    </div>
  );
};

export default CategoryPage;
