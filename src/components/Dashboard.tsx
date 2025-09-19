import React from 'react';
import { Search, Calculator, BarChart3, BookOpen, Clock, Users, TrendingUp, MessageCircle } from 'lucide-react';
import { recipes } from '../data/recipes';
import { hundredMoreRecipes, hundredMoreRecipes2, hundredMoreRecipes3, hundredMoreRecipes4, hundredMoreRecipes5 } from '../data/hundredMoreRecipes';

interface DashboardProps {
  onNavigate: (section: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const totalRecipes = 100;
  const averageRating = 4.6;
  const totalCookTime = Math.round(recipes.reduce((acc, recipe) => acc + recipe.cookTime, 0) / recipes.length);

  const quickStats = [
    {
      label: 'Total Recipes',
      value: totalRecipes,
      icon: BookOpen,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50'
    },
    {
      label: 'Avg. Cook Time',
      value: `${totalCookTime}min`,
      icon: Clock,
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      label: 'Avg. Rating',
      value: averageRating,
      icon: TrendingUp,
      color: 'text-orange-600',
      bg: 'bg-orange-50'
    },
    {
      label: 'Servings Made',
      value: '2.4k',
      icon: Users,
      color: 'text-purple-600',
      bg: 'bg-purple-50'
    }
  ];

  const features = [
    {
      title: 'AI Assistant',
      description: 'Get personalized cooking help and recipe suggestions with voice chat',
      icon: MessageCircle,
      color: 'bg-purple-500',
      action: () => onNavigate('ai-voice')
    },
    {
      title: 'Recipe Search',
      description: 'Find the perfect recipe with our advanced search and filtering system',
      icon: Search,
      color: 'bg-emerald-500',
      action: () => onNavigate('search')
    },
    {
      title: 'Scaling Calculator',
      description: 'Easily adjust ingredient quantities for any number of servings',
      icon: Calculator,
      color: 'bg-blue-500',
      action: () => onNavigate('calculator')
    },
    {
      title: 'Nutritional Analysis',
      description: 'Get detailed nutrition information for all your recipes',
      icon: BarChart3,
      color: 'bg-orange-500',
      action: () => onNavigate('nutrition')
    }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto bg-gray-900 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Welcome to Sous-Chef</h1>
        <p className="text-gray-400">Your personal cooking companion for delicious home meals</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {quickStats.map((stat, index) => (
          <div key={index} className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">{stat.label}</p>
                <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
              </div>
              <div className={`bg-gray-700 ${stat.color} p-3 rounded-lg`}>
                <stat.icon size={24} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Recipes */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-6">Featured Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recipes.slice(0, 6).map((recipe) => (
            <div key={recipe.id} className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 overflow-hidden hover:shadow-md transition-shadow">
              <img 
                src={recipe.image} 
                alt={recipe.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    recipe.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                    recipe.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {recipe.difficulty}
                  </span>
                  <span className="text-sm text-gray-400">{recipe.category}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{recipe.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{recipe.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    {recipe.prepTime + recipe.cookTime}min
                  </span>
                  <span className="flex items-center">
                    <Users size={14} className="mr-1" />
                    {recipe.servings} servings
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Explore Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={feature.action}
              className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6 text-left hover:shadow-md transition-all hover:scale-105 group"
            >
              <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};