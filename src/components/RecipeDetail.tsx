import React from 'react';
import { ArrowLeft, Clock, Users, ChefHat, CheckCircle2 } from 'lucide-react';
import { Recipe } from '../types/Recipe';

interface RecipeDetailProps {
  recipe: Recipe;
  onBack: () => void;
}

export const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipe, onBack }) => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-900 min-h-screen">
      {/* Header */}
      <div className="flex items-center mb-6">
        <button
          onClick={onBack}
          className="mr-4 p-2 hover:bg-gray-700 text-white rounded-lg transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-3xl font-bold text-white">Recipe Details</h1>
      </div>

      {/* Recipe Hero */}
      <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 overflow-hidden mb-6">
        <img 
          src={recipe.image} 
          alt={recipe.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">{recipe.name}</h2>
              <p className="text-gray-400">{recipe.description}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              recipe.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
              recipe.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {recipe.difficulty}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="text-center p-4 bg-gray-700 rounded-lg">
              <Clock className="mx-auto mb-2 text-gray-400" size={24} />
              <div className="font-semibold text-white">{recipe.prepTime + recipe.cookTime}min</div>
              <div className="text-sm text-gray-400">Total Time</div>
            </div>
            <div className="text-center p-4 bg-gray-700 rounded-lg">
              <Users className="mx-auto mb-2 text-gray-400" size={24} />
              <div className="font-semibold text-white">{recipe.servings}</div>
              <div className="text-sm text-gray-400">Servings</div>
            </div>
            <div className="text-center p-4 bg-gray-700 rounded-lg">
              <ChefHat className="mx-auto mb-2 text-gray-400" size={24} />
              <div className="font-semibold text-white">{recipe.nutrition.calories}</div>
              <div className="text-sm text-gray-400">Calories</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Ingredients */}
        <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Ingredients</h3>
          <div className="space-y-3">
            {recipe.ingredients.map((ingredient) => (
              <div key={ingredient.id} className="flex items-center p-3 bg-gray-700 rounded-lg">
                <CheckCircle2 size={16} className="text-emerald-600 mr-3 flex-shrink-0" />
                <div className="flex-1">
                  <span className="font-medium text-white">{ingredient.name}</span>
                  <div className="text-sm text-gray-400">
                    {ingredient.amount} {ingredient.unit}
                  </div>
                </div>
                <span className="text-xs text-gray-400 bg-gray-600 px-2 py-1 rounded-full">
                  {ingredient.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Instructions</h3>
          <div className="space-y-4">
            {recipe.instructions.map((instruction, index) => (
              <div key={index} className="flex">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-medium mr-4">
                  {index + 1}
                </div>
                <p className="text-gray-300 leading-relaxed pt-1">{instruction}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6 mt-6">
        <h3 className="text-lg font-semibold text-white mb-3">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {recipe.tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-emerald-900 text-emerald-400 text-sm rounded-full">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};