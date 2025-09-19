export interface DietaryRestrictions {
  glutenFree: boolean;
  dairyFree: boolean;
  nutFree: boolean;
  peanutFree: boolean;
  keto: boolean;
  lowCarb: boolean;
  vegetarian: boolean;
  vegan: boolean;
}

// Helper function to create dietary restrictions based on ingredients and recipe type
export function createDietaryRestrictions(options: {
  hasGluten?: boolean;
  hasDairy?: boolean;
  hasNuts?: boolean;
  hasPeanuts?: boolean;
  isKeto?: boolean;
  isLowCarb?: boolean;
  isVegetarian?: boolean;
  isVegan?: boolean;
}): DietaryRestrictions {
  return {
    glutenFree: !options.hasGluten,
    dairyFree: !options.hasDairy,
    nutFree: !options.hasNuts,
    peanutFree: !options.hasPeanuts,
    keto: options.isKeto || false,
    lowCarb: options.isLowCarb || false,
    vegetarian: options.isVegetarian || false,
    vegan: options.isVegan || false
  };
}

// Common dietary restriction presets
export const DIETARY_PRESETS = {
  STANDARD: createDietaryRestrictions({}),
  VEGETARIAN: createDietaryRestrictions({ isVegetarian: true }),
  VEGAN: createDietaryRestrictions({ isVegetarian: true, isVegan: true, hasDairy: false }),
  GLUTEN_FREE: createDietaryRestrictions({ hasGluten: false }),
  KETO: createDietaryRestrictions({ isKeto: true, isLowCarb: true }),
  DAIRY_FREE: createDietaryRestrictions({ hasDairy: false }),
  NUT_FREE: createDietaryRestrictions({ hasNuts: false, hasPeanuts: false })
};

// Filter recipes by dietary restrictions
export function filterRecipesByDietary(recipes: any[], selectedFilters: string[]) {
  if (selectedFilters.length === 0) return recipes;
  
  return recipes.filter(recipe => {
    if (!recipe.dietaryRestrictions) return false;
    
    return selectedFilters.every(filter => {
      return recipe.dietaryRestrictions[filter] === true;
    });
  });
}

// Auto-detect dietary restrictions from ingredients
export function detectDietaryRestrictions(ingredients: any[]): DietaryRestrictions {
  const ingredientNames = ingredients.map(ing => ing.name.toLowerCase());
  
  const hasGluten = ingredientNames.some(name => 
    name.includes('wheat') || name.includes('flour') || name.includes('bread') || 
    name.includes('pasta') || name.includes('noodle') || name.includes('barley') || 
    name.includes('rye') || name.includes('taco shell') || name.includes('tortilla')
  );
  
  const hasDairy = ingredientNames.some(name => 
    name.includes('cheese') || name.includes('milk') || name.includes('butter') || 
    name.includes('cream') || name.includes('yogurt') || name.includes('sour cream')
  );
  
  const hasNuts = ingredientNames.some(name => 
    name.includes('almond') || name.includes('walnut') || name.includes('pecan') || 
    name.includes('cashew') || name.includes('hazelnut') || name.includes('pistachio')
  );
  
  const hasPeanuts = ingredientNames.some(name => 
    name.includes('peanut') || name.includes('peanut butter')
  );
  
  const hasMeat = ingredientNames.some(name => 
    name.includes('beef') || name.includes('chicken') || name.includes('pork') || 
    name.includes('turkey') || name.includes('fish') || name.includes('seafood') || 
    name.includes('anchov') || name.includes('salmon') || name.includes('tuna')
  );
  
  const hasAnimalProducts = hasMeat || hasDairy || ingredientNames.some(name => 
    name.includes('egg') || name.includes('honey') || name.includes('fish sauce')
  );
  
  // Simple keto detection (very basic)
  const highCarbIngredients = ingredientNames.some(name => 
    name.includes('rice') || name.includes('potato') || name.includes('pasta') || 
    name.includes('bread') || name.includes('sugar') || name.includes('fruit')
  );
  
  return createDietaryRestrictions({
    hasGluten,
    hasDairy,
    hasNuts,
    hasPeanuts,
    isKeto: !highCarbIngredients && !hasMeat, // Very basic keto detection
    isLowCarb: !highCarbIngredients,
    isVegetarian: !hasMeat,
    isVegan: !hasAnimalProducts
  });
}