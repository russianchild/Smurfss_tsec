import React, { useState } from 'react';
import { Calculator, ArrowLeft, Users, Plus, Minus } from 'lucide-react';
import { Recipe, Ingredient } from '../types/Recipe';
import { useRecipes } from '../hooks/useRecipes';

interface RecipeScalingProps {
  onNavigate: (section: string) => void;
}

export const RecipeScaling: React.FC<RecipeScalingProps> = ({ onNavigate }) => {
  const { recipes } = useRecipes();
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [targetServings, setTargetServings] = useState(4);

  const scalingFactor = selectedRecipe ? targetServings / selectedRecipe.servings : 1;

  const scaleIngredient = (ingredient: Ingredient): Ingredient => {
    const scaledAmount = ingredient.amount * scalingFactor;
    return {
      ...ingredient,
      amount: Math.round(scaledAmount * 100) / 100 // Round to 2 decimal places
    };
  };

  const formatAmount = (amount: number, unit: string): string => {
    if (amount < 1 && (unit === 'cup' || unit === 'cups')) {
      const fractions = [
        { decimal: 0.125, fraction: '1/8' },
        { decimal: 0.25, fraction: '1/4' },
        { decimal: 0.33, fraction: '1/3' },
        { decimal: 0.5, fraction: '1/2' },
        { decimal: 0.67, fraction: '2/3' },
        { decimal: 0.75, fraction: '3/4' }
      ];
      
      const closest = fractions.reduce((prev, curr) => 
        Math.abs(curr.decimal - amount) < Math.abs(prev.decimal - amount) ? curr : prev
      );
      
      if (Math.abs(closest.decimal - amount) < 0.05) {
        return closest.fraction;
      }
    }
    
    return amount % 1 === 0 ? amount.toString() : amount.toFixed(2);
  };

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
        <div className="flex items-center">
          <Calculator className="mr-3 text-blue-600" size={32} />
          <div>
            <h1 className="text-3xl font-bold text-white">Recipe Scaling Calculator</h1>
            <p className="text-gray-400">Adjust ingredient quantities for any number of servings</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recipe Selection */}
        <div className="lg:col-span-1">
          <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6 mb-6">
            <h2 className="text-lg font-semibold text-white mb-4">Select Recipe</h2>
            <div className="space-y-3">
              {recipes.map((recipe) => (
                <button
                  key={recipe.id}
                  onClick={() => setSelectedRecipe(recipe)}
                  className={`w-full text-left p-4 rounded-lg border transition-colors ${
                    selectedRecipe?.id === recipe.id
                      ? 'border-blue-500 bg-blue-900'
                      : 'border-gray-600 hover:border-gray-500 hover:bg-gray-700'
                  }`}
                >
                  <div className="flex items-center">
                    <img 
                      src={recipe.image} 
                      alt={recipe.name}
                      className="w-12 h-12 object-cover rounded-lg mr-3"
                    />
                    <div>
                      <h3 className="font-medium text-white">{recipe.name}</h3>
                      <p className="text-sm text-gray-400 flex items-center">
                        <Users size={12} className="mr-1" />
                        {recipe.servings} servings
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Scaling Controls and Results */}
        <div className="lg:col-span-2">
          {selectedRecipe ? (
            <>
              {/* Scaling Controls */}
              <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6 mb-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-semibold text-white">{selectedRecipe.name}</h2>
                    <p className="text-gray-400">Original recipe serves {selectedRecipe.servings}</p>
                  </div>
                </div>

                <div className="bg-blue-900 rounded-lg p-6">
                  <div className="flex items-center justify-center mb-4">
                    <button
                      onClick={() => setTargetServings(Math.max(1, targetServings - 1))}
                      className="p-2 bg-gray-700 text-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <Minus size={20} />
                    </button>
                    <div className="mx-8 text-center">
                      <div className="text-3xl font-bold text-blue-600">{targetServings}</div>
                      <div className="text-sm text-blue-700">Target Servings</div>
                    </div>
                    <button
                      onClick={() => setTargetServings(targetServings + 1)}
                      className="p-2 bg-gray-700 text-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <Plus size={20} />
                    </button>
                  </div>
                  

                </div>
              </div>

              {/* Scaled Ingredients */}
              <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6 mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">Scaled Ingredients</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedRecipe.ingredients.map((ingredient) => {
                    const scaledIngredient = scaleIngredient(ingredient);
                    return (
                      <div key={ingredient.id} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                        <div>
                          <span className="font-medium text-white">{ingredient.name}</span>
                          <div className="text-sm text-gray-400">{ingredient.category}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-blue-600">
                            {formatAmount(scaledIngredient.amount, scaledIngredient.unit)} {scaledIngredient.unit}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Scaled Nutrition */}
              <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Scaled Nutrition (Total)</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-emerald-900 rounded-lg">
                    <div className="text-2xl font-bold text-emerald-600">
                      {Math.round(selectedRecipe.nutrition.calories * scalingFactor)}
                    </div>
                    <div className="text-sm text-emerald-400">Calories</div>
                  </div>
                  <div className="text-center p-4 bg-blue-900 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">
                      {Math.round(selectedRecipe.nutrition.protein * scalingFactor)}g
                    </div>
                    <div className="text-sm text-blue-400">Protein</div>
                  </div>
                  <div className="text-center p-4 bg-orange-900 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">
                      {Math.round(selectedRecipe.nutrition.carbs * scalingFactor)}g
                    </div>
                    <div className="text-sm text-orange-400">Carbs</div>
                  </div>
                  <div className="text-center p-4 bg-purple-900 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">
                      {Math.round(selectedRecipe.nutrition.fat * scalingFactor)}g
                    </div>
                    <div className="text-sm text-purple-400">Fat</div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-12 text-center">
              <Calculator size={48} className="mx-auto text-gray-500 mb-4" />
              <h3 className="text-lg font-medium text-white mb-2">Select a Recipe to Scale</h3>
              <p className="text-gray-400">Choose a recipe from the left panel to start scaling ingredients</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};