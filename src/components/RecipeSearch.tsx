import React, { useState, useMemo } from 'react';
import { Search, Filter, Clock, Users, ChefHat, ArrowLeft } from 'lucide-react';
import { recipes } from '../data/recipes';
import { Recipe } from '../types/Recipe';

interface RecipeSearchProps {
  onNavigate: (section: string) => void;
  onSelectRecipe: (recipe: Recipe) => void;
}

export const RecipeSearch: React.FC<RecipeSearchProps> = ({ onNavigate, onSelectRecipe }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [maxCookTime, setMaxCookTime] = useState(60);
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['All', ...Array.from(new Set(recipes.map(recipe => recipe.category)))];
  const difficulties = ['All', 'Easy', 'Medium', 'Hard'];

  const filteredRecipes = useMemo(() => {
    return recipes.filter(recipe => {
      const matchesSearch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || recipe.category === selectedCategory;
      const matchesDifficulty = selectedDifficulty === 'All' || recipe.difficulty === selectedDifficulty;
      const matchesCookTime = recipe.cookTime <= maxCookTime;

      return matchesSearch && matchesCategory && matchesDifficulty && matchesCookTime;
    });
  }, [searchTerm, selectedCategory, selectedDifficulty, maxCookTime]);

  return (
    <div className="p-6 max-w-7xl mx-auto bg-gray-900 min-h-screen">
      {/* Header */}
      <div className="flex items-center mb-6">
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
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-700">
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

      {/* Results */}
      <div className="mb-4">
        <p className="text-gray-400">
          Found {filteredRecipes.length} recipe{filteredRecipes.length !== 1 ? 's' : ''}
        </p>
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