import { useState, useEffect } from 'react';
import { Recipe } from '../types/Recipe';
import { recipeApi } from '../services/recipeApi';
import { recipes as fallbackRecipes } from '../data/recipes';

interface UseRecipesReturn {
  recipes: Recipe[];
  loading: boolean;
  error: string | null;
  searchRecipes: (query: string) => Promise<void>;
  getRecipesByCategory: (category: string) => Promise<void>;
  getRecipesByDiet: (dietType: string) => Promise<void>;
  refreshRecipes: () => Promise<void>;
}

export const useRecipes = (): UseRecipesReturn => {
  const [recipes, setRecipes] = useState<Recipe[]>(fallbackRecipes);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load random recipes on initial mount
  useEffect(() => {
    loadRandomRecipes();
  }, []);

  const loadRandomRecipes = async () => {
    setLoading(true);
    setError(null);
    console.log('Loading recipes...');
    
    // Always start with local recipes so user sees content immediately
    setRecipes(fallbackRecipes);
    
    try {
      // Try to get API recipes to supplement local ones
      console.log('Attempting to fetch recipes from API...');
      const apiRecipes = await recipeApi.getDiverseRecipes(50);
      console.log('API recipes received:', apiRecipes.length);
      
      if (apiRecipes.length > 0) {
        console.log('Adding API recipes to local recipes');
        // Remove duplicates and combine
        const combinedRecipes = [...fallbackRecipes, ...apiRecipes];
        const uniqueRecipes = combinedRecipes.filter((recipe, index, self) => 
          index === self.findIndex(r => r.id === recipe.id)
        );
        setRecipes(uniqueRecipes);
      } else {
        console.log('No API recipes received, keeping local recipes only');
        // Keep the local recipes that are already set
      }
    } catch (err) {
      console.error('Error in loadRandomRecipes:', err);
      setError('API unavailable - showing local recipes only');
      // Keep the local recipes that are already set
    } finally {
      setLoading(false);
    }
  };

  const searchRecipes = async (query: string) => {
    if (!query.trim()) {
      await loadRandomRecipes(); // Load all recipes when search is cleared
      return;
    }

    setLoading(true);
    setError(null);
    try {
      // Fetch maximum search results
      const apiRecipes = await recipeApi.searchRecipes(query, 100);
      const filteredFallback = fallbackRecipes.filter(recipe =>
        recipe.name.toLowerCase().includes(query.toLowerCase()) ||
        recipe.description.toLowerCase().includes(query.toLowerCase()) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      );
      setRecipes([...filteredFallback, ...apiRecipes]);
    } catch (err) {
      setError('Failed to search recipes');
      // Fallback to local search
      const filteredFallback = fallbackRecipes.filter(recipe =>
        recipe.name.toLowerCase().includes(query.toLowerCase()) ||
        recipe.description.toLowerCase().includes(query.toLowerCase()) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      );
      setRecipes(filteredFallback);
    } finally {
      setLoading(false);
    }
  };

  const getRecipesByCategory = async (category: string) => {
    setLoading(true);
    setError(null);
    try {
      // Fetch maximum recipes for category
      const apiRecipes = await recipeApi.getRecipesByCategory(category, 100);
      const filteredFallback = fallbackRecipes.filter(recipe =>
        recipe.category.toLowerCase() === category.toLowerCase() ||
        recipe.tags.some(tag => tag.toLowerCase() === category.toLowerCase())
      );
      setRecipes([...filteredFallback, ...apiRecipes]);
    } catch (err) {
      setError('Failed to load recipes by category');
      // Fallback to local filtering
      const filteredFallback = fallbackRecipes.filter(recipe =>
        recipe.category.toLowerCase() === category.toLowerCase() ||
        recipe.tags.some(tag => tag.toLowerCase() === category.toLowerCase())
      );
      setRecipes(filteredFallback);
    } finally {
      setLoading(false);
    }
  };

  const getRecipesByDiet = async (dietType: string) => {
    setLoading(true);
    setError(null);
    try {
      let apiRecipes: Recipe[] = [];
      
      if (dietType === 'Vegetarian') {
        apiRecipes = await recipeApi.getVegetarianRecipes(100);
      } else if (dietType === 'Vegan') {
        apiRecipes = await recipeApi.getVeganRecipes(100);
      } else if (dietType === 'Non-Vegetarian') {
        apiRecipes = await recipeApi.getNonVegetarianRecipes(100);
      }
      
      const filteredFallback = fallbackRecipes.filter(recipe => {
        if (dietType === 'Vegetarian') {
          return recipe.tags.some(tag => tag.toLowerCase().includes('vegetarian'));
        } else if (dietType === 'Vegan') {
          return recipe.tags.some(tag => tag.toLowerCase().includes('vegan'));
        } else if (dietType === 'Non-Vegetarian') {
          return !recipe.tags.some(tag => 
            tag.toLowerCase().includes('vegetarian') || tag.toLowerCase().includes('vegan')
          );
        }
        return true;
      });
      
      setRecipes([...filteredFallback, ...apiRecipes]);
    } catch (err) {
      setError(`Failed to load ${dietType.toLowerCase()} recipes`);
      // Fallback to local filtering
      const filteredFallback = fallbackRecipes.filter(recipe => {
        if (dietType === 'Vegetarian') {
          return recipe.tags.some(tag => tag.toLowerCase().includes('vegetarian'));
        } else if (dietType === 'Vegan') {
          return recipe.tags.some(tag => tag.toLowerCase().includes('vegan'));
        } else if (dietType === 'Non-Vegetarian') {
          return !recipe.tags.some(tag => 
            tag.toLowerCase().includes('vegetarian') || tag.toLowerCase().includes('vegan')
          );
        }
        return true;
      });
      setRecipes(filteredFallback);
    } finally {
      setLoading(false);
    }
  };

  const refreshRecipes = async () => {
    await loadRandomRecipes();
  };

  return {
    recipes,
    loading,
    error,
    searchRecipes,
    getRecipesByCategory,
    getRecipesByDiet,
    refreshRecipes
  };
};