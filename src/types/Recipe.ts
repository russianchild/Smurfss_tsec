export interface Recipe {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  prepTime: number;
  cookTime: number;
  servings: number;
  ingredients: Ingredient[];
  instructions: string[];
  nutrition: NutritionInfo;
  tags: string[];
  dietaryRestrictions?: {
    glutenFree: boolean;
    dairyFree: boolean;
    nutFree: boolean;
    peanutFree: boolean;
    keto: boolean;
    lowCarb: boolean;
    vegetarian: boolean;
    vegan: boolean;
  };
}

export interface Ingredient {
  id: string;
  name: string;
  amount: number;
  unit: string;
  category: string;
}

export interface NutritionInfo {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  sugar: number;
  sodium: number;
  cholesterol: number;
  vitamins: {
    vitaminA: number;
    vitaminC: number;
    vitaminD: number;
    vitaminE: number;
    vitaminK: number;
    vitaminB6: number;
    vitaminB12: number;
    folate: number;
  };
  minerals: {
    calcium: number;
    iron: number;
    magnesium: number;
    potassium: number;
    zinc: number;
  };
}