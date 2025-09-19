import React, { useState, useMemo } from 'react';
import { BarChart3, ArrowLeft, TrendingUp, Activity, Target, Info, Search } from 'lucide-react';
import { recipes } from '../data/recipes';
import { Recipe } from '../types/Recipe';

interface NutritionalAnalysisProps {
  onNavigate: (section: string) => void;
}

export const NutritionalAnalysis: React.FC<NutritionalAnalysisProps> = ({ onNavigate }) => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(recipes[0]);
  const [servingSize, setServingSize] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter recipes based on search term
  const filteredRecipes = useMemo(() => {
    if (!searchTerm.trim()) return recipes;
    
    return recipes.filter(recipe => 
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const dailyValues = {
    calories: 2000,
    protein: 50,
    carbs: 300,
    fat: 65,
    fiber: 25,
    sugar: 50,
    sodium: 2300,
    cholesterol: 300,
    vitaminA: 900,
    vitaminC: 90,
    vitaminD: 20,
    calcium: 1300,
    iron: 18,
    potassium: 4700
  };

  const calculatePercentDV = (nutrient: keyof typeof dailyValues, amount: number): number => {
    const dv = dailyValues[nutrient];
    return Math.round((amount * servingSize / dv) * 100);
  };

  const getMacroColor = (macro: string): string => {
    switch (macro) {
      case 'protein': return 'text-blue-600';
      case 'carbs': return 'text-orange-600';
      case 'fat': return 'text-purple-600';
      default: return 'text-gray-600';
    }
  };

  // Removed unused getMacroGradient function

  const totalMacros = selectedRecipe ? 
    (selectedRecipe.nutrition.protein + selectedRecipe.nutrition.carbs + selectedRecipe.nutrition.fat) * servingSize : 0;

  const macroPercentages = selectedRecipe ? {
    protein: ((selectedRecipe.nutrition.protein * servingSize) / totalMacros) * 100,
    carbs: ((selectedRecipe.nutrition.carbs * servingSize) / totalMacros) * 100,
    fat: ((selectedRecipe.nutrition.fat * servingSize) / totalMacros) * 100
  } : { protein: 0, carbs: 0, fat: 0 };

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
          <BarChart3 className="mr-3 text-orange-600" size={32} />
          <div>
            <h1 className="text-3xl font-bold text-white">Nutritional Analysis</h1>
            <p className="text-gray-400">Detailed nutrition breakdown for your recipes</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Recipe Selection */}
        <div className="lg:col-span-1">
          <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6 sticky top-6">
            <h2 className="text-lg font-semibold text-white mb-4">Select Recipe</h2>
            
            {/* Search Input */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Search recipes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            {/* Recipe List with Hidden Scrollbar */}
            <div className="space-y-3 max-h-96 overflow-y-auto scrollbar-hidden">
              {filteredRecipes.length > 0 ? (
                filteredRecipes.map((recipe) => (
                  <button
                    key={recipe.id}
                    onClick={() => setSelectedRecipe(recipe)}
                    className={`w-full text-left p-3 rounded-lg border transition-colors ${
                      selectedRecipe?.id === recipe.id
                        ? 'border-orange-500 bg-orange-900'
                        : 'border-gray-600 hover:border-gray-500 hover:bg-gray-700'
                    }`}
                  >
                    <div className="font-medium text-white text-sm">{recipe.name}</div>
                    <div className="text-xs text-gray-400">{recipe.category}</div>
                  </button>
                ))
              ) : (
                <div className="text-center py-8">
                  <Search className="mx-auto text-gray-500 mb-2" size={24} />
                  <p className="text-gray-400 text-sm">No recipes found</p>
                  <p className="text-gray-500 text-xs">Try a different search term</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Analysis Results */}
        <div className="lg:col-span-3 space-y-6">
          {selectedRecipe ? (
            <>
              {/* Calories Overview */}
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl shadow-sm p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">{selectedRecipe.name}</h2>
                    <p className="text-emerald-100">Nutritional breakdown per {servingSize} serving{servingSize !== 1 ? 's' : ''}</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold">{Math.round(selectedRecipe.nutrition.calories * servingSize)}</div>
                    <div className="text-emerald-100">Calories</div>
                  </div>
                </div>
              </div>

              {/* Macronutrients */}
              <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6">
                <h3 className="text-xl font-semibold text-white mb-6">Macronutrients</h3>
                
                {/* Macro Chart */}
                <div className="mb-8">
                  <div className="flex h-4 bg-gray-700 rounded-full overflow-hidden mb-4">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500"
                      style={{ width: `${macroPercentages.protein}%` }}
                    ></div>
                    <div 
                      className="bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-500"
                      style={{ width: `${macroPercentages.carbs}%` }}
                    ></div>
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-500"
                      style={{ width: `${macroPercentages.fat}%` }}
                    ></div>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                      <span>Protein ({Math.round(macroPercentages.protein)}%)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                      <span>Carbs ({Math.round(macroPercentages.carbs)}%)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                      <span>Fat ({Math.round(macroPercentages.fat)}%)</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {['protein', 'carbs', 'fat'].map((macro) => (
                    <div key={macro} className="text-center p-4 bg-gray-700 rounded-lg">
                      <div className={`text-2xl font-bold ${getMacroColor(macro)} mb-1`}>
                        {Math.round(selectedRecipe.nutrition[macro as keyof typeof selectedRecipe.nutrition] as number * servingSize)}g
                      </div>
                      <div className="text-sm text-gray-300 capitalize">{macro}</div>
                      <div className="text-xs text-gray-400 mt-1">
                        {calculatePercentDV(macro as keyof typeof dailyValues, selectedRecipe.nutrition[macro as keyof typeof selectedRecipe.nutrition] as number)}% DV
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Nutrients */}
              <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white">Detailed Nutrients</h3>
                  <div className="flex items-center space-x-2">
                    <label className="text-sm font-medium text-gray-300 mr-2">
                      Serving Size
                    </label>
                    <button
                      onClick={() => setServingSize(Math.max(0.5, servingSize - 0.5))}
                      className="p-2 border border-gray-600 text-white rounded-lg hover:bg-gray-700"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 bg-gray-700 text-white rounded-lg font-medium min-w-[60px] text-center">
                      {servingSize}
                    </span>
                    <button
                      onClick={() => setServingSize(servingSize + 0.5)}
                      className="p-2 border border-gray-600 text-white rounded-lg hover:bg-gray-700"
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* General Nutrients */}
                  <div>
                    <h4 className="font-medium text-white mb-4">General</h4>
                    <div className="space-y-3">
                      {[
                        { key: 'fiber', label: 'Fiber', unit: 'g' },
                        { key: 'sugar', label: 'Sugar', unit: 'g' },
                        { key: 'sodium', label: 'Sodium', unit: 'mg' },
                        { key: 'cholesterol', label: 'Cholesterol', unit: 'mg' }
                      ].map(({ key, label, unit }) => (
                        <div key={key} className="flex justify-between items-center">
                          <span className="text-gray-300">{label}</span>
                          <div className="text-right">
                            <span className="font-medium text-white">
                              {Math.round(selectedRecipe.nutrition[key as keyof typeof selectedRecipe.nutrition] as number * servingSize)}{unit}
                            </span>
                            <div className="text-xs text-gray-400">
                              {calculatePercentDV(key as keyof typeof dailyValues, selectedRecipe.nutrition[key as keyof typeof selectedRecipe.nutrition] as number)}% DV
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Vitamins & Minerals */}
                  <div>
                    <h4 className="font-medium text-white mb-4">Key Vitamins & Minerals</h4>
                    <div className="space-y-3">
                      {[
                        { key: 'vitaminA', label: 'Vitamin A', unit: 'μg' },
                        { key: 'vitaminC', label: 'Vitamin C', unit: 'mg' },
                        { key: 'calcium', label: 'Calcium', unit: 'mg' },
                        { key: 'iron', label: 'Iron', unit: 'mg' }
                      ].map(({ key, label, unit }) => (
                        <div key={key} className="flex justify-between items-center">
                          <span className="text-gray-300">{label}</span>
                          <div className="text-right">
                            <span className="font-medium text-white">
                              {Math.round((selectedRecipe.nutrition.vitamins?.[key as keyof typeof selectedRecipe.nutrition.vitamins] || 
                                          selectedRecipe.nutrition.minerals?.[key as keyof typeof selectedRecipe.nutrition.minerals] || 0) * servingSize)}{unit}
                            </span>
                            <div className="text-xs text-gray-400">
                              {calculatePercentDV(key as keyof typeof dailyValues, 
                                selectedRecipe.nutrition.vitamins?.[key as keyof typeof selectedRecipe.nutrition.vitamins] || 
                                selectedRecipe.nutrition.minerals?.[key as keyof typeof selectedRecipe.nutrition.minerals] || 0)}% DV
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-900 rounded-lg">
                  <div className="flex items-start">
                    <Info size={20} className="text-blue-400 mr-2 mt-0.5" />
                    <div>
                      <p className="text-sm text-blue-300 font-medium">Daily Value Information</p>
                      <p className="text-xs text-blue-400 mt-1">
                        Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on your calorie needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Health Insights */}
              <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Health Insights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 bg-green-900 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Activity className="text-green-600 mr-2" size={20} />
                      <span className="font-medium text-green-400">High Fiber</span>
                    </div>
                    <p className="text-sm text-green-300">
                      Good source of dietary fiber for digestive health
                    </p>
                  </div>
                  
                  <div className="p-4 bg-blue-900 rounded-lg">
                    <div className="flex items-center mb-2">
                      <TrendingUp className="text-blue-600 mr-2" size={20} />
                      <span className="font-medium text-blue-400">Protein Rich</span>
                    </div>
                    <p className="text-sm text-blue-300">
                      Contains quality protein for muscle maintenance
                    </p>
                  </div>
                  
                  <div className="p-4 bg-orange-900 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Target className="text-orange-600 mr-2" size={20} />
                      <span className="font-medium text-orange-400">Balanced Meal</span>
                    </div>
                    <p className="text-sm text-orange-300">
                      Well-balanced macronutrient profile
                    </p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-12 text-center">
              <BarChart3 size={48} className="mx-auto text-gray-500 mb-4" />
              <h3 className="text-lg font-medium text-white mb-2">Select a Recipe for Analysis</h3>
              <p className="text-gray-400">Choose a recipe to view its detailed nutritional breakdown</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};