import { Recipe } from '../types/Recipe';

// Common ingredients that contain allergens or restrict diets
const GLUTEN_INGREDIENTS = [
  'flour', 'wheat', 'bread', 'pasta', 'noodles', 'soy sauce', 'beer', 'barley', 'rye', 'oats', 'breadcrumbs'
];

const DAIRY_INGREDIENTS = [
  'milk', 'cheese', 'butter', 'cream', 'yogurt', 'sour cream', 'mozzarella', 'parmesan', 'feta', 'ricotta', 'cheddar'
];

const NUT_INGREDIENTS = [
  'almonds', 'walnuts', 'pecans', 'cashews', 'hazelnuts', 'pistachios', 'pine nuts', 'macadamia', 'brazil nuts'
];

const PEANUT_INGREDIENTS = [
  'peanuts', 'peanut butter', 'peanut oil'
];

const NON_VEGETARIAN_INGREDIENTS = [
  'chicken', 'beef', 'pork', 'fish', 'salmon', 'tuna', 'shrimp', 'crab', 'lobster', 'bacon', 'ham', 'turkey', 'lamb', 'duck', 'meat', 'seafood'
];

const NON_VEGAN_INGREDIENTS = [
  ...NON_VEGETARIAN_INGREDIENTS,
  ...DAIRY_INGREDIENTS,
  'eggs', 'honey', 'gelatin'
];

const HIGH_CARB_INGREDIENTS = [
  'rice', 'pasta', 'bread', 'potato', 'quinoa', 'oats', 'flour', 'sugar', 'honey', 'maple syrup', 'beans', 'lentils'
];

function containsIngredient(ingredients: any[], restrictedIngredients: string[]): boolean {
  return ingredients.some(ingredient => 
    restrictedIngredients.some(restricted => 
      ingredient.name.toLowerCase().includes(restricted.toLowerCase())
    )
  );
}

function isLowCarb(recipe: Recipe): boolean {
  return recipe.nutrition.carbs < 20; // Less than 20g carbs per serving
}

function isKeto(recipe: Recipe): boolean {
  const totalCalories = recipe.nutrition.calories;
  const carbCalories = recipe.nutrition.carbs * 4;
  const carbPercentage = (carbCalories / totalCalories) * 100;
  return carbPercentage < 10 && recipe.nutrition.carbs < 15; // Less than 10% carbs and under 15g
}

export function addDietaryRestrictions(recipe: Recipe): Recipe {
  const ingredients = recipe.ingredients;
  
  const dietaryRestrictions = {
    glutenFree: !containsIngredient(ingredients, GLUTEN_INGREDIENTS),
    dairyFree: !containsIngredient(ingredients, DAIRY_INGREDIENTS),
    nutFree: !containsIngredient(ingredients, NUT_INGREDIENTS),
    peanutFree: !containsIngredient(ingredients, PEANUT_INGREDIENTS),
    vegetarian: !containsIngredient(ingredients, NON_VEGETARIAN_INGREDIENTS),
    vegan: !containsIngredient(ingredients, NON_VEGAN_INGREDIENTS),
    lowCarb: isLowCarb(recipe),
    keto: isKeto(recipe)
  };

  return {
    ...recipe,
    dietaryRestrictions
  };
}

export function addDietaryRestrictionsToRecipes(recipes: Recipe[]): Recipe[] {
  return recipes.map(addDietaryRestrictions);
}