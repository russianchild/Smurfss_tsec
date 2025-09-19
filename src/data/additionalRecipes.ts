import { Recipe } from '../types/Recipe';

export const additionalRecipes: Recipe[] = [
  {
    id: '70',
    name: 'Turkey Sandwich',
    description: 'Classic deli turkey sandwich with fresh vegetables',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400',
    category: 'American',
    difficulty: 'Easy',
    prepTime: 10,
    cookTime: 0,
    servings: 2,
    ingredients: [
      { id: '324', name: 'Sliced turkey', amount: 0.5, unit: 'lb', category: 'Meat' },
      { id: '325', name: 'Bread slices', amount: 4, unit: 'pieces', category: 'Grains' },
      { id: '326', name: 'Lettuce', amount: 4, unit: 'leaves', category: 'Vegetables' },
      { id: '327', name: 'Tomato', amount: 1, unit: 'medium', category: 'Vegetables' }
    ],
    instructions: [
      'Toast bread if desired',
      'Layer turkey on bread',
      'Add lettuce and tomato slices',
      'Top with second slice of bread'
    ],
    nutrition: {
      calories: 285, protein: 22, carbs: 28, fat: 8, fiber: 3, sugar: 4, sodium: 885, cholesterol: 45,
      vitamins: { vitaminA: 25, vitaminC: 15, vitaminD: 0, vitaminE: 2, vitaminK: 25, vitaminB6: 0.4, vitaminB12: 0.8, folate: 45 },
      minerals: { calcium: 85, iron: 3, magnesium: 25, potassium: 385, zinc: 2 }
    },
    tags: ['american', 'sandwich', 'turkey', 'no-cook', 'quick']
  },
  {
    id: '71',
    name: 'Beef Stew',
    description: 'Hearty beef stew with potatoes and carrots',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
    category: 'American',
    difficulty: 'Medium',
    prepTime: 20,
    cookTime: 120,
    servings: 6,
    ingredients: [
      { id: '328', name: 'Beef chuck', amount: 2, unit: 'lbs', category: 'Meat' },
      { id: '329', name: 'Potatoes', amount: 4, unit: 'large', category: 'Vegetables' },
      { id: '330', name: 'Carrots', amount: 4, unit: 'large', category: 'Vegetables' },
      { id: '331', name: 'Beef broth', amount: 4, unit: 'cups', category: 'Broth' }
    ],
    instructions: [
      'Brown beef cubes in Dutch oven',
      'Add broth and bring to boil',
      'Simmer covered for 1.5 hours',
      'Add vegetables and cook 30 minutes more'
    ],
    nutrition: {
      calories: 385, protein: 32, carbs: 25, fat: 18, fiber: 4, sugar: 6, sodium: 685, cholesterol: 95,
      vitamins: { vitaminA: 185, vitaminC: 15, vitaminD: 0, vitaminE: 2, vitaminK: 8, vitaminB6: 0.6, vitaminB12: 2.8, folate: 25 },
      minerals: { calcium: 45, iron: 4, magnesium: 45, potassium: 785, zinc: 6 }
    },
    tags: ['american', 'stew', 'beef', 'comfort-food']
  }
];

// More recipes to expand the database
export const moreRecipes: Recipe[] = [
  {
    id: '72',
    name: 'Chicken Salad',
    description: 'Classic chicken salad with celery and mayo',
    image: 'https://images.unsplash.com/photo-2097090/pexels-photo-2097090.jpeg?w=400',
    category: 'American',
    difficulty: 'Easy',
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    ingredients: [
      { id: '332', name: 'Chicken breast', amount: 2, unit: 'lbs', category: 'Meat' },
      { id: '333', name: 'Celery', amount: 2, unit: 'stalks', category: 'Vegetables' },
      { id: '334', name: 'Mayonnaise', amount: 0.5, unit: 'cup', category: 'Condiments' },
      { id: '335', name: 'Grapes', amount: 1, unit: 'cup', category: 'Fruits' }
    ],
    instructions: [
      'Poach chicken until cooked through',
      'Cool and dice chicken',
      'Mix with diced celery and grapes',
      'Bind with mayonnaise and season'
    ],
    nutrition: {
      calories: 385, protein: 28, carbs: 12, fat: 26, fiber: 1, sugar: 10, sodium: 485, cholesterol: 85,
      vitamins: { vitaminA: 15, vitaminC: 8, vitaminD: 5, vitaminE: 8, vitaminK: 15, vitaminB6: 0.8, vitaminB12: 0.3, folate: 15 },
      minerals: { calcium: 45, iron: 1, magnesium: 35, potassium: 485, zinc: 2 }
    },
    tags: ['american', 'salad', 'chicken', 'no-cook']
  },
  {
    id: '73',
    name: 'Pork Tenderloin',
    description: 'Roasted pork tenderloin with herbs',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400',
    category: 'American',
    difficulty: 'Medium',
    prepTime: 15,
    cookTime: 25,
    servings: 4,
    ingredients: [
      { id: '336', name: 'Pork tenderloin', amount: 2, unit: 'lbs', category: 'Meat' },
      { id: '337', name: 'Rosemary', amount: 2, unit: 'tbsp', category: 'Herbs' },
      { id: '338', name: 'Garlic', amount: 4, unit: 'cloves', category: 'Vegetables' },
      { id: '339', name: 'Olive oil', amount: 2, unit: 'tbsp', category: 'Oils' }
    ],
    instructions: [
      'Preheat oven to 425°F',
      'Rub pork with oil, garlic, and rosemary',
      'Sear in oven-safe skillet',
      'Roast 15-20 minutes until 145°F internal temp'
    ],
    nutrition: {
      calories: 285, protein: 32, carbs: 2, fat: 16, fiber: 0, sugar: 0, sodium: 285, cholesterol: 95,
      vitamins: { vitaminA: 2, vitaminC: 2, vitaminD: 15, vitaminE: 2, vitaminK: 2, vitaminB6: 0.8, vitaminB12: 0.8, folate: 5 },
      minerals: { calcium: 25, iron: 2, magnesium: 35, potassium: 485, zinc: 3 }
    },
    tags: ['american', 'pork', 'roasted', 'high-protein']
  },
  {
    id: '74',
    name: 'Chicken Fajitas',
    description: 'Sizzling chicken fajitas with peppers and onions',
    image: 'https://images.unsplash.com/photo-1565299585323-38174c4a6471?w=400',
    category: 'Mexican',
    difficulty: 'Medium',
    prepTime: 20,
    cookTime: 15,
    servings: 4,
    ingredients: [
      { id: '344', name: 'Chicken breast', amount: 2, unit: 'lbs', category: 'Meat' },
      { id: '345', name: 'Bell peppers', amount: 3, unit: 'medium', category: 'Vegetables' },
      { id: '346', name: 'Onions', amount: 2, unit: 'large', category: 'Vegetables' },
      { id: '347', name: 'Flour tortillas', amount: 8, unit: 'pieces', category: 'Grains' }
    ],
    instructions: [
      'Slice chicken into strips',
      'Marinate chicken in fajita seasoning',
      'Sauté chicken until cooked through',
      'Add peppers and onions, cook until tender'
    ],
    nutrition: {
      calories: 385, protein: 32, carbs: 35, fat: 12, fiber: 4, sugar: 8, sodium: 685, cholesterol: 85,
      vitamins: { vitaminA: 45, vitaminC: 125, vitaminD: 5, vitaminE: 4, vitaminK: 8, vitaminB6: 0.8, vitaminB12: 0.3, folate: 45 },
      minerals: { calcium: 85, iron: 3, magnesium: 45, potassium: 585, zinc: 2 }
    },
    tags: ['mexican', 'chicken', 'fajitas', 'peppers']
  }
];