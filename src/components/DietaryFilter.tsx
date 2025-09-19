import React from 'react';

interface DietaryFilterProps {
  selectedFilters: string[];
  onFilterChange: (filters: string[]) => void;
}

const DietaryFilter: React.FC<DietaryFilterProps> = ({ selectedFilters, onFilterChange }) => {
  const dietaryOptions = [
    { key: 'glutenFree', label: 'Gluten-Free', icon: '🌾' },
    { key: 'dairyFree', label: 'Dairy-Free', icon: '🥛' },
    { key: 'nutFree', label: 'Nut-Free', icon: '🥜' },
    { key: 'peanutFree', label: 'Peanut-Free', icon: '🥜' },
    { key: 'keto', label: 'Keto', icon: '🥑' },
    { key: 'lowCarb', label: 'Low-Carb', icon: '🥬' },
    { key: 'vegetarian', label: 'Vegetarian', icon: '🥕' },
    { key: 'vegan', label: 'Vegan', icon: '🌱' }
  ];

  const handleFilterToggle = (filterKey: string) => {
    const newFilters = selectedFilters.includes(filterKey)
      ? selectedFilters.filter(f => f !== filterKey)
      : [...selectedFilters, filterKey];
    onFilterChange(newFilters);
  };

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3 text-gray-800">Dietary Restrictions</h3>
      <div className="flex flex-wrap gap-2">
        {dietaryOptions.map(option => (
          <button
            key={option.key}
            onClick={() => handleFilterToggle(option.key)}
            className={`px-3 py-2 rounded-full text-sm font-medium transition-colors duration-200 flex items-center gap-1 ${
              selectedFilters.includes(option.key)
                ? 'bg-green-500 text-white shadow-md'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <span>{option.icon}</span>
            <span>{option.label}</span>
          </button>
        ))}
      </div>
      {selectedFilters.length > 0 && (
        <button
          onClick={() => onFilterChange([])}
          className="mt-2 text-sm text-gray-500 hover:text-gray-700 underline"
        >
          Clear all filters
        </button>
      )}
    </div>
  );
};

export default DietaryFilter;