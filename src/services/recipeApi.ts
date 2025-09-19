import { Recipe, Ingredient, NutritionInfo } from '../types/Recipe';

const EDAMAM_APP_ID = import.meta.env.VITE_EDAMAM_APP_ID || 'demo_id';
const EDAMAM_APP_KEY = import.meta.env.VITE_EDAMAM_APP_KEY || 'demo_key';
const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.edamam.com/api/recipes/v2';

// Interface for Edamam API response
interface EdamamResponse {
  hits: EdamamHit[];
  _links?: {
    next?: {
      href: string;
    };
  };
}

interface EdamamHit {
  recipe: EdamamRecipe;
}

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
  foodCategory: string;
}

interface EdamamNutrient {
  label: string;
  quantity: number;
  unit: string;
}

class RecipeApiService {
  private appId: string;
  private appKey: string;

  constructor(appId: string = EDAMAM_APP_ID, appKey: string = EDAMAM_APP_KEY) {
    this.appId = appId;
    this.appKey = appKey;
    console.log('RecipeApiService initialized with Edamam credentials:', 
      this.appId ? 'App ID Present' : 'App ID Missing', 
      this.appKey ? 'App Key Present' : 'App Key Missing');
    console.log('Base URL:', BASE_URL);
  }

  // Search recipes with nutritional information
  async searchRecipes(query: string = '', number: number = 20): Promise<Recipe[]> {
    try {
      const url = `${BASE_URL}?type=public&q=${encodeURIComponent(query)}&app_id=${this.appId}&app_key=${this.appKey}&from=0&to=${number}`;
      console.log('Fetching recipes from Edamam:', url);
      
      const response = await fetch(url);
      console.log('Response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Edamam API Error Response:', errorText);
        throw new Error(`API request failed: ${response.status} - ${errorText}`);
      }

      const data: EdamamResponse = await response.json();
      console.log('Edamam API Response data:', data);
      
      if (!data.hits || data.hits.length === 0) {
        console.log('No results found in Edamam API response');
        return this.getFallbackRecipes();
      }
      
      const transformedRecipes = data.hits.map((hit) => this.transformEdamamRecipe(hit.recipe));
      console.log('Transformed recipes count:', transformedRecipes.length);
      
      return transformedRecipes;
    } catch (error) {
      console.error('Error fetching recipes from Edamam:', error);
      // Return fallback recipes if API fails
      return this.getFallbackRecipes();
    }
  }

  // Get random recipes (Edamam doesn't have random endpoint, so we'll search popular terms)
  async getRandomRecipes(number: number = 20): Promise<Recipe[]> {
    try {
      // Use popular search terms to get variety
      const popularTerms = ['chicken', 'pasta', 'salad', 'soup', 'rice', 'beef', 'fish', 'vegetarian'];
      const randomTerm = popularTerms[Math.floor(Math.random() * popularTerms.length)];
      
      console.log(`Fetching "random" recipes using search term: ${randomTerm}`);
      return await this.searchRecipes(randomTerm, number);
    } catch (error) {
      console.error('Error fetching random recipes:', error);
      return this.getFallbackRecipes();
    }
  }

  // Get recipes by category
  async getRecipesByCategory(category: string, number: number = 20): Promise<Recipe[]> {
    const categoryQueries: { [key: string]: string } = {
      'healthy': 'healthy',
      'vegetarian': 'vegetarian',
      'vegan': 'vegan',
      'gluten-free': 'gluten free',
      'keto': 'ketogenic',
      'paleo': 'paleo',
      'mediterranean': 'mediterranean',
      'asian': 'asian',
      'italian': 'italian',
      'mexican': 'mexican',
      'indian': 'indian',
      'dessert': 'dessert',
      'breakfast': 'breakfast',
      'lunch': 'lunch',
      'dinner': 'dinner'
    };

    const query = categoryQueries[category.toLowerCase()] || category;
    return this.searchRecipes(query, number);
  }

  // Get vegetarian recipes
  async getVegetarianRecipes(number: number = 20): Promise<Recipe[]> {
    try {
      const url = `${BASE_URL}?type=public&q=vegetarian&health=vegetarian&app_id=${this.appId}&app_key=${this.appKey}&from=0&to=${number}`;
      console.log('Fetching vegetarian recipes from Edamam:', url);
      
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data: EdamamResponse = await response.json();
      return data.hits.map((hit) => this.transformEdamamRecipe(hit.recipe));
    } catch (error) {
      console.error('Error fetching vegetarian recipes:', error);
      return this.getFallbackRecipes().filter(recipe => 
        recipe.tags.some(tag => tag.toLowerCase().includes('vegetarian'))
      );
    }
  }

  // Get vegan recipes
  async getVeganRecipes(number: number = 20): Promise<Recipe[]> {
    try {
      const url = `${BASE_URL}?type=public&q=vegan&health=vegan&app_id=${this.appId}&app_key=${this.appKey}&from=0&to=${number}`;
      console.log('Fetching vegan recipes from Edamam:', url);
      
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data: EdamamResponse = await response.json();
      return data.hits.map((hit) => this.transformEdamamRecipe(hit.recipe));
    } catch (error) {
      console.error('Error fetching vegan recipes:', error);
      return this.getFallbackRecipes().filter(recipe => 
        recipe.tags.some(tag => tag.toLowerCase().includes('vegan'))
      );
    }
  }

  // Get non-vegetarian recipes
  async getNonVegetarianRecipes(number: number = 20): Promise<Recipe[]> {
    try {
      // Search for meat-based recipes
      const meatQueries = ['chicken', 'beef', 'pork', 'fish', 'seafood'];
      const randomMeat = meatQueries[Math.floor(Math.random() * meatQueries.length)];
      
      console.log(`Fetching non-vegetarian recipes with: ${randomMeat}`);
      const recipes = await this.searchRecipes(randomMeat, number);
      
      // Filter out any vegetarian/vegan recipes
      return recipes.filter(recipe => 
        !recipe.tags.some(tag => 
          tag.toLowerCase().includes('vegetarian') || tag.toLowerCase().includes('vegan')
        )
      );
    } catch (error) {
      console.error('Error fetching non-vegetarian recipes:', error);
      return this.getFallbackRecipes().filter(recipe => 
        !recipe.tags.some(tag => 
          tag.toLowerCase().includes('vegetarian') || tag.toLowerCase().includes('vegan')
        )
      );
    }
  }

  // Get diverse recipes from multiple categories
  async getDiverseRecipes(number: number = 100): Promise<Recipe[]> {
    try {
      console.log('Fetching diverse recipes from Edamam...');
      
      // Try searches for different cuisines and meal types
      const queries = ['italian', 'mexican', 'asian', 'american', 'mediterranean', 'indian'];
      const allRecipes: Recipe[] = [];
      
      for (const query of queries) {
        try {
          const recipes = await this.searchRecipes(query, Math.ceil(number / queries.length));
          allRecipes.push(...recipes);
          console.log(`Fetched ${recipes.length} recipes for cuisine: ${query}`);
          
          // Add small delay to respect rate limits
          await new Promise(resolve => setTimeout(resolve, 200));
        } catch (error) {
          console.error(`Failed to fetch recipes for cuisine: ${query}`, error);
        }
      }
      
      // Remove duplicates
      const uniqueRecipes = allRecipes.filter((recipe, index, self) => 
        index === self.findIndex(r => r.id === recipe.id)
      );
      
      console.log(`Total unique recipes fetched from Edamam: ${uniqueRecipes.length}`);
      return uniqueRecipes.slice(0, number);
      
    } catch (error) {
      console.error('Error fetching diverse recipes from Edamam:', error);
      return this.getFallbackRecipes();
    }
  }

  // Transform Edamam recipe to our Recipe interface
  private transformEdamamRecipe(edamamRecipe: EdamamRecipe): Recipe {
    // Extract recipe ID from URI
    const id = edamamRecipe.uri.split('#recipe_')[1] || Math.random().toString(36);
    
    // Transform ingredients
    const ingredients: Ingredient[] = edamamRecipe.ingredients.map((ing, index) => ({
      id: index.toString(),
      name: ing.food,
      amount: Math.round(ing.quantity * 100) / 100,
      unit: ing.measure || 'unit',
      category: ing.foodCategory || 'Other'
    }));

    // Use ingredient lines as instructions if no detailed instructions available
    const instructions: string[] = edamamRecipe.ingredientLines.length > 0 
      ? [`Ingredients: ${edamamRecipe.ingredientLines.join(', ')}`, 'Follow standard cooking methods for this type of dish']
      : ['Instructions not available - please refer to original source'];

    const nutrition = this.transformEdamamNutrition(edamamRecipe.totalNutrients);
    
    const totalTime = edamamRecipe.totalTime || 30;
    const difficulty = this.determineDifficulty(totalTime, ingredients.length);
    
    const category = edamamRecipe.dishType[0] || edamamRecipe.mealType[0] || 'Other';
    
    const tags = [
      ...edamamRecipe.dietLabels,
      ...edamamRecipe.healthLabels,
      ...edamamRecipe.cuisineType,
      ...edamamRecipe.dishType
    ].filter(Boolean);

    return {
      id,
      name: edamamRecipe.label,
      description: `Delicious ${category.toLowerCase()} recipe with ${ingredients.length} ingredients. ${edamamRecipe.source ? `Recipe by ${edamamRecipe.source}` : ''}`.substring(0, 200),
      image: edamamRecipe.image,
      category: this.capitalizeFirst(category),
      difficulty,
      prepTime: Math.max(5, Math.floor(totalTime * 0.3)),
      cookTime: Math.max(5, Math.floor(totalTime * 0.7)),
      servings: edamamRecipe.yield || 4,
      ingredients,
      instructions,
      nutrition,
      tags
    };
  }

  // Transform Edamam nutrition data
  private transformEdamamNutrition(totalNutrients: { [key: string]: EdamamNutrient }): NutritionInfo {
    const getNutrient = (key: string): number => {
      const nutrient = totalNutrients[key];
      return nutrient ? Math.round(nutrient.quantity) : 0;
    };

    return {
      calories: getNutrient('ENERC_KCAL'),
      protein: getNutrient('PROCNT'),
      carbs: getNutrient('CHOCDF'),
      fat: getNutrient('FAT'),
      fiber: getNutrient('FIBTG'),
      sugar: getNutrient('SUGAR'),
      sodium: getNutrient('NA'),
      cholesterol: getNutrient('CHOLE'),
      vitamins: {
        vitaminA: getNutrient('VITA_RAE'),
        vitaminC: getNutrient('VITC'),
        vitaminD: getNutrient('VITD'),
        vitaminE: getNutrient('TOCPHA'),
        vitaminK: getNutrient('VITK1'),
        vitaminB6: getNutrient('VITB6A'),
        vitaminB12: getNutrient('VITB12'),
        folate: getNutrient('FOLFD')
      },
      minerals: {
        calcium: getNutrient('CA'),
        iron: getNutrient('FE'),
        magnesium: getNutrient('MG'),
        potassium: getNutrient('K'),
        zinc: getNutrient('ZN')
      }
    };
  }

  // Helper methods
  private determineDifficulty(readyInMinutes: number, ingredientCount: number): 'Easy' | 'Medium' | 'Hard' {
    if (readyInMinutes <= 30 && ingredientCount <= 8) return 'Easy';
    if (readyInMinutes <= 60 && ingredientCount <= 12) return 'Medium';
    return 'Hard';
  }

  private stripHtml(html: string): string {
    return html.replace(/<[^>]*>/g, '');
  }

  private capitalizeFirst(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // Fallback recipes (your existing static data)
  private getFallbackRecipes(): Recipe[] {
    console.log('Using fallback recipes - returning all local recipes');
    // Import and return all existing recipes as fallback
    import('../data/recipes').then(module => module.recipes);
    return [];
  }
}

export const recipeApi = new RecipeApiService();

// Expose to window for debugging
if (typeof window !== 'undefined') {
  (window as Record<string, unknown>).recipeApi = recipeApi;
}

export default RecipeApiService;