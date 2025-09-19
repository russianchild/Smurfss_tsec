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
  }  async s
earchRecipes(query: string, options: {
    diet?: string;
    health?: string[];
    cuisineType?: string;
    mealType?: string;
    dishType?: string;
    from?: number;
    to?: number;
  } = {}): Promise<Recipe[]> {
    try {
      const params = new URLSearchParams({
        type: 'public',
        q: query,
        app_id: this.appId,
        app_key: this.appKey,
        from: (options.from || 0).toString(),
        to: (options.to || 20).toString()
      });

      if (options.diet) params.append('diet', options.diet);
      if (options.health) options.health.forEach(h => params.append('health', h));
      if (options.cuisineType) params.append('cuisineType', options.cuisineType);
      if (options.mealType) params.append('mealType', options.mealType);
      if (options.dishType) params.append('dishType', options.dishType);

      const response = await fetch(`${BASE_URL}?${params}`);
      
      if (!response.ok) {
        throw new Error(`Edamam API error: ${response.status}`);
      }

      const data = await response.json();
      return this.transformRecipes(data.hits || []);
    } catch (error) {
      console.error('Error fetching recipes from Edamam:', error);
      return [];
    }
  }

  private transformRecipes(hits: any[]): Recipe[] {
    return hits.map((hit, index) => this.transformRecipe(hit.recipe, index));
  }

  private transformRecipe(edamamRecipe: EdamamRecipe, index: number): Recipe {
    const ingredients: Ingredient[] = edamamRecipe.ingredients.map((ing, i) => ({
      id: `edamam-${index}-${i}`,
      name: ing.food,
      amount: ing.quantity || 1,
      unit: ing.measure || 'piece',
      category: 'Other'
    }));

    const nutrition: NutritionInfo = {
      calories: Math.round(edamamRecipe.calories / edamamRecipe.yield),
      protein: Math.round((edamamRecipe.totalNutrients.PROCNT?.quantity || 0) / edamamRecipe.yield),
      carbs: Math.round((edamamRecipe.totalNutrients.CHOCDF?.quantity || 0) / edamamRecipe.yield),
      fat: Math.round((edamamRecipe.totalNutrients.FAT?.quantity || 0) / edamamRecipe.yield),
      fiber: Math.round((edamamRecipe.totalNutrients.FIBTG?.quantity || 0) / edamamRecipe.yield),
      sugar: Math.round((edamamRecipe.totalNutrients.SUGAR?.quantity || 0) / edamamRecipe.yield),
      sodium: Math.round((edamamRecipe.totalNutrients.NA?.quantity || 0) / edamamRecipe.yield),
      cholesterol: Math.round((edamamRecipe.totalNutrients.CHOLE?.quantity || 0) / edamamRecipe.yield),
      vitamins: {
        vitaminA: Math.round((edamamRecipe.totalDaily.VITA_RAE?.quantity || 0)),
        vitaminC: Math.round((edamamRecipe.totalDaily.VITC?.quantity || 0)),
        vitaminD: Math.round((edamamRecipe.totalDaily.VITD?.quantity || 0)),
        vitaminE: Math.round((edamamRecipe.totalDaily.TOCPHA?.quantity || 0)),
        vitaminK: Math.round((edamamRecipe.totalDaily.VITK1?.quantity || 0)),
        vitaminB6: Math.round((edamamRecipe.totalDaily.VITB6A?.quantity || 0)),
        vitaminB12: Math.round((edamamRecipe.totalDaily.VITB12?.quantity || 0)),
        folate: Math.round((edamamRecipe.totalDaily.FOLAC?.quantity || 0))
      },
      minerals: {
        calcium: Math.round((edamamRecipe.totalNutrients.CA?.quantity || 0) / edamamRecipe.yield),
        iron: Math.round((edamamRecipe.totalNutrients.FE?.quantity || 0) / edamamRecipe.yield),
        magnesium: Math.round((edamamRecipe.totalNutrients.MG?.quantity || 0) / edamamRecipe.yield),
        potassium: Math.round((edamamRecipe.totalNutrients.K?.quantity || 0) / edamamRecipe.yield),
        zinc: Math.round((edamamRecipe.totalNutrients.ZN?.quantity || 0) / edamamRecipe.yield)
      }
    };

    return {
      id: `edamam-${edamamRecipe.uri.split('#recipe_')[1] || index}`,
      name: edamamRecipe.label,
      description: `${edamamRecipe.source} recipe featuring ${edamamRecipe.cuisineType.join(', ')} cuisine`,
      image: edamamRecipe.image,
      category: edamamRecipe.cuisineType[0] || 'International',
      difficulty: edamamRecipe.totalTime > 60 ? 'Hard' : edamamRecipe.totalTime > 30 ? 'Medium' : 'Easy',
      prepTime: Math.round((edamamRecipe.totalTime || 30) * 0.3),
      cookTime: Math.round((edamamRecipe.totalTime || 30) * 0.7),
      servings: edamamRecipe.yield,
      ingredients,
      instructions: edamamRecipe.ingredientLines.map((line, i) => `Step ${i + 1}: ${line}`),
      nutrition,
      tags: [
        ...edamamRecipe.dietLabels.map(label => label.toLowerCase()),
        ...edamamRecipe.healthLabels.slice(0, 3).map(label => label.toLowerCase().replace(/-/g, ' ')),
        ...edamamRecipe.cuisineType.map(cuisine => cuisine.toLowerCase())
      ]
    };
  }
}

export const edamamApi = new EdamamApiService();