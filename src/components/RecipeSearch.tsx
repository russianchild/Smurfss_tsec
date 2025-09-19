import React, { useState, useMemo, useEffect } from 'react';
import { Search, Filter, Clock, Users, ChefHat, ArrowLeft, RefreshCw, Loader } from 'lucide-react';
import { Recipe } from '../types/Recipe';
import { useRecipes } from '../hooks/useRecipes';

interface RecipeSearchProps {
  onNavigate: (section: string) => void;
  onSelectRecipe: (recipe: Recipe) => void;
}

export const RecipeSearch: React.FC<RecipeSearchProps> = ({ onNavigate, onSelectRecipe }) => {
  const { recipes, loading, error, searchRecipes, getRecipesByCategory, getRecipesByDiet, refreshRecipes } = useRecipes();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedDietType, setSelectedDietType] = useState('All');
  const [maxCookTime, setMaxCookTime] = useState(60);
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['All', ...Array.from(new Set(recipes.map(recipe => recipe.category)))];
  const difficulties = ['All', 'Easy', 'Medium', 'Hard'];
  const dietTypes = ['All', 'Vegetarian', 'Non-Vegetarian', 'Vegan'];

  // Handle search with debouncing
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchTerm.trim()) {
        searchRecipes(searchTerm);
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  // Handle category filter
  useEffect(() => {
    if (selectedCategory !== 'All') {
      getRecipesByCategory(selectedCategory);
    }
  }, [selectedCategory]);

  // Handle diet type filter
  useEffect(() => {
    if (selectedDietType !== 'All') {
      getRecipesByDiet(selectedDietType);
    }
  }, [selectedDietType]);

  const filteredRecipes = useMemo(() => {
    return recipes.filter(recipe => {
      const matchesCategory = selectedCategory === 'All' || recipe.category === selectedCategory;
      const matchesDifficulty = selectedDifficulty === 'All' || recipe.difficulty === selectedDifficulty;
      const matchesCookTime = recipe.cookTime <= maxCookTime;
      
      // Diet type filtering
      let matchesDietType = true;
      if (selectedDietType !== 'All') {
        const isVegetarian = recipe.tags.some(tag => 
          tag.toLowerCase().includes('vegetarian') || tag.toLowerCase().includes('vegan')
        );
        const isVegan = recipe.tags.some(tag => tag.toLowerCase().includes('vegan'));
        
        if (selectedDietType === 'Vegetarian') {
          matchesDietType = isVegetarian;
        } else if (selectedDietType === 'Vegan') {
          matchesDietType = isVegan;
        } else if (selectedDietType === 'Non-Vegetarian') {
          matchesDietType = !isVegetarian;
        }
      }

      return matchesCategory && matchesDifficulty && matchesCookTime && matchesDietType;
    });
  }, [recipes, selectedCategory, selectedDifficulty, selectedDietType, maxCookTime]);

  return (
    <div className="p-6 max-w-7xl mx-auto bg-gray-900 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <button
            onClick={() => onNavigate('dashboard')}
            className="mr-4 p-2 hover:bg-gray-700 text-white rounded-lg transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-white">Recipe Search</h1>
            <p className="text-gray-400">Find the perfect recipe for your next meal</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={async () => {
              console.log('Testing API...');
              const testResult = await (window as any).recipeApi?.testApi();
              console.log('API test result:', testResult);
              alert(`API Test: ${testResult ? 'Success' : 'Failed'}`);
            }}
            className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm"
          >
            Test API
          </button>
          <button
            onClick={refreshRecipes}
            disabled={loading}
            className="flex items-center px-4 py-2 bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-600 text-white rounded-lg transition-colors"
          >
            <RefreshCw size={16} className={`mr-2 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </button>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-900 border border-red-700 text-red-300 px-4 py-3 rounded-lg mb-6">
          <p>{error}</p>
        </div>
      )}

      {/* Search Bar */}
      <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 mb-6">
        <div className="p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
              <input
                type="text"
                placeholder="Search recipes, ingredients, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-4 py-3 border border-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Filter size={20} className="mr-2" />
              Filters
            </button>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-6 pt-6 border-t border-gray-700">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full p-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Diet Type</label>
                <select
                  value={selectedDietType}
                  onChange={(e) => setSelectedDietType(e.target.value)}
                  className="w-full p-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  {dietTypes.map(dietType => (
                    <option key={dietType} value={dietType}>{dietType}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Difficulty</label>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full p-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  {difficulties.map(difficulty => (
                    <option key={difficulty} value={difficulty}>{difficulty}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Max Cook Time: {maxCookTime}min
                </label>
                <input
                  type="range"
                  min="10"
                  max="120"
                  step="5"
                  value={maxCookTime}
                  onChange={(e) => setMaxCookTime(Number(e.target.value))}
                  className="w-full"
                />
              </div>
              <div className="flex items-end">
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                    setSelectedDietType('All');
                    setSelectedDifficulty('All');
                    setMaxCookTime(60);
                  }}
                  className="w-full px-4 py-2 text-sm text-gray-400 hover:text-gray-200 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Quick Diet Filters */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedDietType('All')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedDietType === 'All'
                ? 'bg-emerald-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            All Recipes
          </button>
          <button
            onClick={() => setSelectedDietType('Vegetarian')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedDietType === 'Vegetarian'
                ? 'bg-green-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            🥬 Vegetarian
          </button>
          <button
            onClick={() => setSelectedDietType('Vegan')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedDietType === 'Vegan'
                ? 'bg-green-700 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            🌱 Vegan
          </button>
          <button
            onClick={() => setSelectedDietType('Non-Vegetarian')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedDietType === 'Non-Vegetarian'
                ? 'bg-red-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            🍖 Non-Vegetarian
          </button>
        </div>
      </div>

      {/* Results */}
      <div className="mb-4 flex items-center justify-between">
        <p className="text-gray-400">
          Found {filteredRecipes.length} recipe{filteredRecipes.length !== 1 ? 's' : ''} 
          {selectedDietType !== 'All' && (
            <span className="ml-2 px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
              {selectedDietType}
            </span>
          )}
        </p>
        {loading && (
          <div className="flex items-center text-gray-400">
            <Loader size={16} className="animate-spin mr-2" />
            Loading recipes...
          </div>
        )}
      </div>

      {/* Recipe Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 overflow-hidden hover:shadow-md transition-all hover:scale-105 cursor-pointer group"
            onClick={() => onSelectRecipe(recipe)}
          >
            <img 
              src={recipe.image} 
              alt={recipe.name}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  recipe.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                  recipe.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {recipe.difficulty}
                </span>
                <span className="text-sm text-gray-400 bg-gray-700 px-2 py-1 rounded-full">{recipe.category}</span>
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                {recipe.name}
              </h3>
              <p className="text-sm text-gray-400 mb-4 line-clamp-2">{recipe.description}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                <span className="flex items-center">
                  <Clock size={14} className="mr-1" />
                  {recipe.prepTime + recipe.cookTime}min
                </span>
                <span className="flex items-center">
                  <Users size={14} className="mr-1" />
                  {recipe.servings} servings
                </span>
                <span className="flex items-center">
                  <ChefHat size={14} className="mr-1" />
                  {recipe.nutrition.calories} cal
                </span>
              </div>

              <div className="flex flex-wrap gap-1">
                {recipe.tags.slice(0, 3).map((tag, index) => (
                  <span key={index} className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full">
                    {tag}
                  </span>
                ))}
                {recipe.tags.length > 3 && (
                  <span className="px-2 py-1 bg-gray-700 text-gray-400 text-xs rounded-full">
                    +{recipe.tags.length - 3}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredRecipes.length === 0 && (
        <div className="text-center py-12">
          <Search size={48} className="mx-auto text-gray-500 mb-4" />
          <h3 className="text-lg font-medium text-white mb-2">No recipes found</h3>
          <p className="text-gray-400">Try adjusting your search terms or filters</p>
        </div>
      )}
    </div>
  );
};