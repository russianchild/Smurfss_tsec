import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Dashboard } from './components/Dashboard';
import { RecipeSearch } from './components/RecipeSearch';
import { RecipeScaling } from './components/RecipeScaling';
import { NutritionalAnalysis } from './components/NutritionalAnalysis';
import { RecipeDetail } from './components/RecipeDetail';
import { Recipe } from './types/Recipe';

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const handleSelectRecipe = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setActiveSection('recipe-detail');
  };

  const handleBackFromRecipe = () => {
    setSelectedRecipe(null);
    setActiveSection('search');
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard onNavigate={setActiveSection} />;
      case 'search':
        return <RecipeSearch onNavigate={setActiveSection} onSelectRecipe={handleSelectRecipe} />;
      case 'calculator':
        return <RecipeScaling onNavigate={setActiveSection} />;
      case 'nutrition':
        return <NutritionalAnalysis onNavigate={setActiveSection} />;
      case 'recipe-detail':
        return selectedRecipe ? (
          <RecipeDetail recipe={selectedRecipe} onBack={handleBackFromRecipe} />
        ) : (
          <Dashboard onNavigate={setActiveSection} />
        );
      default:
        return <Dashboard onNavigate={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation activeSection={activeSection} onNavigate={setActiveSection} />
      
      <main className="lg:ml-64">
        {renderActiveSection()}
      </main>
    </div>
  );
}

export default App;