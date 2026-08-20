import type { Category } from "../types/recipe";

export type CategoryInfo = {
  slug: Category;
  label: string;
  tagline: string;
};

export const categories: CategoryInfo[] = [
  {
    slug: "entree",
    label: "Entrées",
    tagline: "Pour ouvrir le repas sans couper l'appétit.",
  },
  {
    slug: "plat",
    label: "Plats",
    tagline: "Le cœur du repas, mijoté ou minute.",
  },
  {
    slug: "dessert",
    label: "Desserts",
    tagline: "La dernière impression, celle qu'on retient.",
  },
];

/** Les classes Tailwind de chaque catégorie, au même endroit que la catégorie. */
export const categoryColors: Record<Category, string> = {
  entree: "border-emerald-200 bg-emerald-50 text-emerald-700",
  plat: "border-amber-200 bg-amber-50 text-amber-700",
  dessert: "border-rose-200 bg-rose-50 text-rose-700",
};

/** Le libellé au singulier, pour les endroits où on parle d'une seule recette. */
export const categoryLabels: Record<Category, string> = {
  entree: "Entrée",
  plat: "Plat",
  dessert: "Dessert",
};
