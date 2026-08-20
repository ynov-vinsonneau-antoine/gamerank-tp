export type Category = "entree" | "plat" | "dessert";

export type Difficulty = "facile" | "moyen" | "difficile";

export type Ingredient = {
  quantity: string;
  label: string;
};

export type Recipe = {
  id: number;
  slug: string;
  name: string;
  description: string;
  category: Category;
  difficulty: Difficulty;
  prepMinutes: number;
  cookMinutes: number;
  servings: number;
  ingredients: Ingredient[];
  steps: string[];
};
