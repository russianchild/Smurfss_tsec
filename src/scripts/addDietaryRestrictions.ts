import { detectDietaryRestrictions } from '../utils/dietaryUtils';

// This script adds dietary restrictions to recipes based on their ingredients
// Run this to automatically populate dietary restrictions for all recipes

export function addDietaryRestrictionsToRecipe(recipe: any) {
  if (!recipe.dietaryRestrictions) {
    recipe.dietaryRestrictions = detectDietaryRestrictions(recipe.ingredients);
  }
  return recipe;
}

export function addDietaryRestrictionsToRecipes(recipes: any[]) {
  return recipes.map(addDietaryRestrictionsToRecipe);
}

// Example usage:
// import { recipes } from '../data/recipes';
// const updatedRecipes = addDietaryRestrictionsToRecipes(recipes);