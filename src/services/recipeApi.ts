import { Recipe, Ingredient, NutritionInfo } from '../types/Recipe';

const SPOONACULAR_API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY || 'demo_key';
const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.spoonacular.com/recipes';

// Interface for Spoonacular API response
interface SpoonacularRecipe {
  id: number;
  title: string;
  summary: string;
  image: string;
  readyInMinutes: number;
  servings: number;
  extendedIngredients: SpoonacularIngredient[];
  analyzedInstructions: SpoonacularInstruction[];
  nutrition?: SpoonacularNutrition;
  dishTypes: string[];
  diets: string[];
}

interface SpoonacularIngredient {
  id: number;
  name: string;
  amount: number;
  unit: string;
  aisle: string;
}

interface SpoonacularInstruction {
  steps: {
    number: number;
    step: string;
  }[];
}

interface SpoonacularNutrition {
  nutrients: {
    name: string;
    amount: number;
    unit: string;
  }[];
}

class RecipeApiService {
  private apiKey: string;

  constructor(apiKey: string = SPOONACULAR_API_KEY) {
    this.apiKey = apiKey;
  }

  // Search recipes with nutritional information
  async searchRecipes(query: string = '', number: number = 20): Promise<Recipe[]> {
    try {
      const url = `${BASE_URL}/complexSearch?query=${encodeURIComponent(query)}&number=${number}&addRecipeInformation=true&addRecipeNutrition=true&apiKey=${this.apiKey}`;
      console.log('Fetching recipes from:', url);
      
      const response = await fetch(url);
      console.log('Response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error Response:', errorText);
        throw new Error(`API request failed: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      console.log('API Response data:', data);
      
      if (!data.results || data.results.length === 0) {
        console.log('No results found in API response');
        return this.getFallbackRecipes();
      }
      
      const transformedRecipes = data.results.map((recipe: SpoonacularRecipe) => this.transformRecipe(recipe));
      console.log('Transformed recipes count:', transformedRecipes.length);
      
      return transformedRecipes;
    } catch (error) {
      console.error('Error fetching recipes:', error);
      // Return fallback recipes if API fails
      return this.getFallbackRecipes();
    }
  }

  // Get random recipes
  async getRandomRecipes(number: number = 20): Promise<Recipe[]> {
    try {
      // Start with a simpler single request
      const requestNumber = Math.min(number, 100); // Limit to 100 per request
      const url = `${BASE_URL}/random?number=${requestNumber}&addRecipeNutrition=true&apiKey=${this.apiKey}`;
      console.log('Fetching random recipes from:', url);
      
      const response = await fetch(url);
      console.log('Random recipes response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Random recipes API Error:', errorText);
        throw new Error(`API request failed: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      console.log('Random recipes API Response:', data);
      
      if (!data.recipes || data.recipes.length === 0) {
        console.log('No random recipes found in API response');
        return this.getFallbackRecipes();
      }
      
      const transformedRecipes = data.recipes.map((recipe: SpoonacularRecipe) => this.transformRecipe(recipe));
      console.log('Transformed random recipes count:', transformedRecipes.length);
      
      return transformedRecipes;
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
      const response = await fetch(
        `${BASE_URL}/complexSearch?diet=vegetarian&number=${number}&addRecipeInformation=true&addRecipeNutrition=true&apiKey=${this.apiKey}`
      );

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      return data.results.map((recipe: SpoonacularRecipe) => this.transformRecipe(recipe));
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
      const response = await fetch(
        `${BASE_URL}/complexSearch?diet=vegan&number=${number}&addRecipeInformation=true&addRecipeNutrition=true&apiKey=${this.apiKey}`
      );

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      return data.results.map((recipe: SpoonacularRecipe) => this.transformRecipe(recipe));
    } catch (error) {
      console.error('Error fetching vegan recipes:', error);
      return this.getFallbackRecipes().filter(recipe => 
        recipe.tags.some(tag => tag.toLowerCase().includes('vegan'))
      );
    }
  }

  // Get non-vegetarian recipes (recipes that are not vegetarian or vegan)
  async getNonVegetarianRecipes(number: number = 20): Promise<Recipe[]> {
    try {
      // Search for recipes with different types of meat to get variety
      const meatQueries = ['chicken', 'beef', 'pork', 'fish', 'seafood', 'turkey', 'lamb', 'bacon', 'salmon', 'shrimp'];
      const recipesPerQuery = Math.ceil(number / meatQueries.length);
      const allRecipes: Recipe[] = [];

      // Fetch recipes for multiple meat types to get variety
      for (let i = 0; i < Math.min(meatQueries.length, Math.ceil(number / 10)); i++) {
        const query = meatQueries[i];
        
        const response = await fetch(
          `${BASE_URL}/complexSearch?query=${query}&number=${recipesPerQuery}&addRecipeInformation=true&addRecipeNutrition=true&apiKey=${this.apiKey}`
        );

        if (response.ok) {
          const data = await response.json();
          const batchRecipes = data.results
            .map((recipe: SpoonacularRecipe) => this.transformRecipe(recipe))
            .filter(recipe => !recipe.tags.some(tag => 
              tag.toLowerCase().includes('vegetarian') || tag.toLowerCase().includes('vegan')
            ));
          allRecipes.push(...batchRecipes);

          // Add delay between requests
          if (i < Math.ceil(number / 10) - 1) {
            await new Promise(resolve => setTimeout(resolve, 100));
          }
        }
      }

      // Remove duplicates and return up to requested number
      const uniqueRecipes = allRecipes.filter((recipe, index, self) => 
        index === self.findIndex(r => r.id === recipe.id)
      );
      
      return uniqueRecipes.slice(0, number);
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
      const categories = ['italian', 'mexican', 'asian', 'indian', 'mediterranean', 'american', 'french', 'thai'];
      const recipesPerCategory = Math.ceil(number / categories.length);
      const allRecipes: Recipe[] = [];

      for (let i = 0; i < categories.length; i++) {
        const category = categories[i];
        
        const response = await fetch(
          `${BASE_URL}/complexSearch?cuisine=${category}&number=${recipesPerCategory}&addRecipeInformation=true&addRecipeNutrition=true&apiKey=${this.apiKey}`
        );

        if (response.ok) {
          const data = await response.json();
          const batchRecipes = data.results.map((recipe: SpoonacularRecipe) => this.transformRecipe(recipe));
          allRecipes.push(...batchRecipes);

          // Add delay between requests
          if (i < categories.length - 1) {
            await new Promise(resolve => setTimeout(resolve, 100));
          }
        }
      }

      // Remove duplicates and shuffle
      const uniqueRecipes = allRecipes.filter((recipe, index, self) => 
        index === self.findIndex(r => r.id === recipe.id)
      );
      
      // Shuffle array for variety
      for (let i = uniqueRecipes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [uniqueRecipes[i], uniqueRecipes[j]] = [uniqueRecipes[j], uniqueRecipes[i]];
      }
      
      return uniqueRecipes.slice(0, number);
    } catch (error) {
      console.error('Error fetching diverse recipes:', error);
      return this.getFallbackRecipes();
    }
  }

  // Transform Spoonacular recipe to our Recipe interface
  private transformRecipe(spoonacularRecipe: SpoonacularRecipe): Recipe {
    const ingredients: Ingredient[] = spoonacularRecipe.extendedIngredients.map((ing, index) => ({
      id: ing.id.toString(),
      name: ing.name,
      amount: ing.amount,
      unit: ing.unit,
      category: ing.aisle || 'Other'
    }));

    const instructions: string[] = spoonacularRecipe.analyzedInstructions[0]?.steps.map(
      step => step.step
    ) || ['Instructions not available'];

    const nutrition = this.transformNutrition(spoonacularRecipe.nutrition);

    const difficulty = this.determineDifficulty(spoonacularRecipe.readyInMinutes, ingredients.length);
    
    const category = spoonacularRecipe.dishTypes[0] || 'Other';
    
    const tags = [
      ...spoonacularRecipe.diets,
      ...spoonacularRecipe.dishTypes
    ].filter(Boolean);

    return {
      id: spoonacularRecipe.id.toString(),
      name: spoonacularRecipe.title,
      description: this.stripHtml(spoonacularRecipe.summary).substring(0, 200) + '...',
      image: spoonacularRecipe.image,
      category: this.capitalizeFirst(category),
      difficulty,
      prepTime: Math.max(10, Math.floor(spoonacularRecipe.readyInMinutes * 0.3)),
      cookTime: Math.max(5, Math.floor(spoonacularRecipe.readyInMinutes * 0.7)),
      servings: spoonacularRecipe.servings,
      ingredients,
      instructions,
      nutrition,
      tags
    };
  }

  // Transform nutrition data
  private transformNutrition(spoonacularNutrition?: SpoonacularNutrition): NutritionInfo {
    const defaultNutrition: NutritionInfo = {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0,
      sugar: 0,
      sodium: 0,
      cholesterol: 0,
      vitamins: {
        vitaminA: 0,
        vitaminC: 0,
        vitaminD: 0,
        vitaminE: 0,
        vitaminK: 0,
        vitaminB6: 0,
        vitaminB12: 0,
        folate: 0
      },
      minerals: {
        calcium: 0,
        iron: 0,
        magnesium: 0,
        potassium: 0,
        zinc: 0
      }
    };

    if (!spoonacularNutrition?.nutrients) {
      return defaultNutrition;
    }

    const nutrients = spoonacularNutrition.nutrients;
    const getNutrient = (name: string): number => {
      const nutrient = nutrients.find(n => n.name.toLowerCase().includes(name.toLowerCase()));
      return nutrient ? Math.round(nutrient.amount) : 0;
    };

    return {
      calories: getNutrient('calories'),
      protein: getNutrient('protein'),
      carbs: getNutrient('carbohydrates'),
      fat: getNutrient('fat'),
      fiber: getNutrient('fiber'),
      sugar: getNutrient('sugar'),
      sodium: getNutrient('sodium'),
      cholesterol: getNutrient('cholesterol'),
      vitamins: {
        vitaminA: getNutrient('vitamin a'),
        vitaminC: getNutrient('vitamin c'),
        vitaminD: getNutrient('vitamin d'),
        vitaminE: getNutrient('vitamin e'),
        vitaminK: getNutrient('vitamin k'),
        vitaminB6: getNutrient('vitamin b6'),
        vitaminB12: getNutrient('vitamin b12'),
        folate: getNutrient('folate')
      },
      minerals: {
        calcium: getNutrient('calcium'),
        iron: getNutrient('iron'),
        magnesium: getNutrient('magnesium'),
        potassium: getNutrient('potassium'),
        zinc: getNutrient('zinc')
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
    // Return a subset of popular recipes as fallback
    return [
      {
        id: 'fallback-1',
        name: 'Healthy Buddha Bowl',
        description: 'Nutritious bowl with quinoa, roasted vegetables, and tahini dressing',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Healthy',
        difficulty: 'Easy' as const,
        prepTime: 15,
        cookTime: 25,
        servings: 2,
        ingredients: [
          { id: '1', name: 'Quinoa', amount: 1, unit: 'cup', category: 'Grains' },
          { id: '2', name: 'Sweet potato', amount: 1, unit: 'large', category: 'Vegetables' },
          { id: '3', name: 'Chickpeas', amount: 1, unit: 'can', category: 'Legumes' }
        ],
        instructions: [
          'Cook quinoa according to package instructions',
          'Roast sweet potato and chickpeas at 400°F for 20 minutes',
          'Assemble bowl with quinoa, vegetables, and dressing'
        ],
        nutrition: {
          calories: 420,
          protein: 15,
          carbs: 65,
          fat: 12,
          fiber: 12,
          sugar: 8,
          sodium: 320,
          cholesterol: 0,
          vitamins: {
            vitaminA: 184,
            vitaminC: 28,
            vitaminD: 0,
            vitaminE: 15,
            vitaminK: 45,
            vitaminB6: 25,
            vitaminB12: 0,
            folate: 35
          },
          minerals: {
            calcium: 85,
            iron: 4,
            magnesium: 95,
            potassium: 680,
            zinc: 2
          }
        },
        tags: ['healthy', 'vegetarian', 'vegan', 'gluten-free']
      }
    ];
  }
}

export const recipeApi = new RecipeApiService();
export default RecipeApiService;