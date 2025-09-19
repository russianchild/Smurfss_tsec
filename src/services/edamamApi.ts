import { Recipe, Ingredient, NutritionInfo } from '../types/Recipe';

const EDAMAM_APP_ID = import.meta.env.VITE_EDAMAM_APP_ID || 'demo_id';
const EDAMAM_APP_KEY = import.meta.env.VITE_EDAMAM_APP_KEY || 'demo_key';
const BASE_URL = 'https://api.edamam.com/api/recipes/v2';

// Edamam API interfaces
interface EdamamRecipe {
  uri: string;
  label: string;
  image: string;
  source: string;
  url: string;
  shareAs: string;
  yield: number;
  dietLabels: string[];
  healthLabels: string[];
  cautions: string[];
  ingredientLines: string[];
  ingredients: EdamamIngredient[];
  calories: number;
  totalTime: number;
  cuisineType: string[];
  mealType: string[];
  dishType: string[];
  totalNutrients: { [key: string]: EdamamNutrient };
  totalDaily: { [key: string]: EdamamNutrient };
}

interface EdamamIngredient {
  text: string;
  quantity: number;
  measure: string;
  food: string;
  weight: number;
}

interface EdamamNutrient {
  label: string;
  quantity: number;
  unit: string;
}

class EdamamApiService {
  private appId: string;
  private appKey: string;

  constructor(appId: string = EDAMAM_APP_ID, appKey: string = EDAMAM_APP_KEY) {
    this.appId = appId;
    this.appKey = appKey;
    console.log('EdamamApiService initialized');
  }