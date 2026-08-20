# Le Carnet — corrigé du TP

Carnet de recettes en React + TypeScript + Tailwind + React Router.
Projet de **référence** : chaque règle vue en cours y est appliquée, et repérable.

```bash
npm install
npm run dev
```

## Les routes

| URL | Page | Ce qu'elle montre |
|---|---|---|
| `/` | `HomePage` | route `index` |
| `/recettes` | `RecipeListPage` | route enfant simple |
| `/recette/:slug` | `RecipeDetailPage` | paramètre + `useParams` + cas introuvable |
| `/categorie/:nom` | `CategoryPage` | **un second** paramètre, sur un autre nom |
| n'importe quoi d'autre | `NotFoundPage` | `path="*"`, en dernier |

Tout est imbriqué sous `<Route path="/" element={<Layout />}>` : la nav et le
footer ne sont écrits qu'une fois et ne se remontent jamais entre deux pages.

## L'arborescence

```
src/
├── App.tsx              le BrowserRouter et la table des routes, rien d'autre
├── components/          réutilisable, ne sait rien des pages
│   ├── Layout.tsx           nav NavLink + Outlet + footer
│   ├── RecipeCard.tsx       une carte, cliquable
│   ├── RecipeList.tsx       la grille (+ le cas liste vide)
│   ├── CategoryCard.tsx     une catégorie sur l'accueil
│   ├── CategoryPill.tsx     la pastille de catégorie
│   ├── IngredientList.tsx   les ingrédients
│   ├── StepList.tsx         les étapes numérotées
│   ├── MetaItem.tsx         une info (temps, portions…)
│   ├── EmptyState.tsx       404 et listes vides
│   ├── PageHeader.tsx       le titre d'une page
│   └── BackLink.tsx         le lien retour
├── pages/               un fichier par écran
├── hooks/
│   └── useDocumentTitle.ts  le titre de l'onglet
├── types/recipe.ts      Recipe, Category, Difficulty, Ingredient
└── data/                recipes.ts, categories.ts, difficulties.ts
```

## Où retrouver chaque règle du cours

| Règle | Où la montrer |
|---|---|
| Un composant fait une seule chose | `CategoryPill` : 12 lignes, un seul rôle |
| Des props typées, jamais `any` | un `type XProps` au-dessus de **chaque** composant |
| Une `key` stable, jamais l'index | `RecipeList` utilise `key={recipe.slug}` |
| Les pages lisent, les composants reçoivent | `RecipeListPage` importe `recipes`, `RecipeCard` la reçoit en prop |
| `Link` / `NavLink`, jamais `<a href>` | `Layout`, `RecipeCard`, `BackLink` |
| Le cas introuvable | `RecipeDetailPage` et `CategoryPage`, même `if (!x)` |
| Un hook ne va jamais dans une condition | `CategoryPage` : `useDocumentTitle` est appelé **avant** le `if` |

## Deux détails à faire remarquer

**Les couleurs vivent avec la donnée.** `categoryColors` est dans
`data/categories.ts`, à côté des catégories. Ajouter une catégorie, c'est un
seul fichier à toucher — TypeScript signale le `Record` incomplet.

**Le slug est écrit à la main** dans `data/recipes.ts` : minuscules, sans
accent, tirets. `"Crème brûlée"` → `"creme-brulee"`. C'est lui qui relie la
carte cliquée à l'URL, et l'URL à la donnée.

## Vérifier

```bash
npx tsc -b --noEmit   # zéro erreur
npm run lint          # zéro warning
npm run build
```
