import React from 'react';
import { Home, Search, Calculator, BarChart3, Menu, X, MessageCircle } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'ai-voice', label: 'AI Assistant', icon: MessageCircle },
    { id: 'search', label: 'Recipe Search', icon: Search },
    { id: 'calculator', label: 'Scaling Calculator', icon: Calculator },
    { id: 'nutrition', label: 'Nutrition Analysis', icon: BarChart3 }
  ];

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-800 shadow-lg border-b border-gray-700 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Brand */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                S
              </div>
              <div>
                <h1 className="text-lg font-bold text-white">SousAI</h1>
                <p className="text-xs text-gray-400 hidden sm:block">AI-Powered Culinary Assistant</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-emerald-900 text-emerald-400 border-b-2 border-emerald-500'
                      : 'text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <item.icon size={18} className="mr-2" />
                  <span className="font-medium text-sm">{item.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-300 hover:bg-gray-700 rounded-lg"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center px-3 py-2 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-emerald-900 text-emerald-400'
                      : 'text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <item.icon size={18} className="mr-3" />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};