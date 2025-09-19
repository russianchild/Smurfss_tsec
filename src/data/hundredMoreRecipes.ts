import { Recipe } from '../types/Recipe';

export const hundredMoreRecipes: Recipe[] = [
  {
    id: '200',
    name: 'Chicken Teriyaki',
    description: 'Grilled chicken glazed with sweet teriyaki sauce',
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400',
    category: 'Asian',
    difficulty: 'Medium',
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    ingredients: [
      { id: '800', name: 'Chicken thighs', amount: 2, unit: 'lbs', category: 'Meat' },
      { id: '801', name: 'Teriyaki sauce', amount: 0.5, unit: 'cup', category: 'Condiments' },
      { id: '802', name: 'Sesame seeds', amount: 2, unit: 'tbsp', category: 'Seeds' },
      { id: '803', name: 'Green onions', amount: 3, unit: 'stalks', category: 'Vegetables' }
    ],
    instructions: [
      'Marinate chicken in teriyaki sauce for 30 minutes',
      'Grill chicken until cooked through',
      'Brush with additional sauce while cooking',
      'Garnish with sesame seeds and green onions'
    ],
    nutrition: {
      calories: 385, protein: 32, carbs: 18, fat: 18, fiber: 1, sugar: 15, sodium: 985, cholesterol: 95,
      vitamins: { vitaminA: 8, vitaminC: 8, vitaminD: 5, vitaminE: 2, vitaminK: 15, vitaminB6: 0.8, vitaminB12: 0.3, folate: 15 },
      minerals: { calcium: 45, iron: 2, magnesium: 35, potassium: 485, zinc: 2 }
    },
    tags: ['asian', 'chicken', 'grilled', 'teriyaki']
  },
  {
    id: '201',
    name: 'Beef Stir Fry',
    description: 'Quick beef and vegetable stir fry with soy sauce',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400',
    category: 'Asian',
    difficulty: 'Easy',
    prepTime: 15,
    cookTime: 10,
    servings: 4,
    ingredients: [
      { id: '804', name: 'Beef sirloin', amount: 1, unit: 'lb', category: 'Meat' },
      { id: '805', name: 'Mixed stir fry vegetables', amount: 4, unit: 'cups', category: 'Vegetables' },
      { id: '806', name: 'Soy sauce', amount: 3, unit: 'tbsp', category: 'Condiments' },
      { id: '807', name: 'Ginger', amount: 1, unit: 'tbsp', category: 'Spices' }
    ],
    instructions: [
      'Slice beef into thin strips',
      'Heat wok or large skillet over high heat',
      'Stir fry beef for 2-3 minutes',
      'Add vegetables and sauce, cook 3-4 minutes more'
    ],
    nutrition: {
      calories: 285, protein: 28, carbs: 12, fat: 14, fiber: 3, sugar: 6, sodium: 785, cholesterol: 75,
      vitamins: { vitaminA: 125, vitaminC: 45, vitaminD: 0, vitaminE: 4, vitaminK: 25, vitaminB6: 0.6, vitaminB12: 2.8, folate: 25 },
      minerals: { calcium: 65, iron: 3, magnesium: 45, potassium: 585, zinc: 5 }
    },
    tags: ['asian', 'beef', 'stir-fry', 'quick']
  },
  {
    id: '202',
    name: 'Mushroom Risotto',
    description: 'Creamy Italian rice dish with wild mushrooms',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400',
    category: 'Italian',
    difficulty: 'Hard',
    prepTime: 15,
    cookTime: 35,
    servings: 4,
    ingredients: [
      { id: '808', name: 'Arborio rice', amount: 1.5, unit: 'cups', category: 'Grains' },
      { id: '809', name: 'Mixed mushrooms', amount: 1, unit: 'lb', category: 'Vegetables' },
      { id: '810', name: 'Vegetable broth', amount: 6, unit: 'cups', category: 'Broth' },
      { id: '811', name: 'Parmesan cheese', amount: 1, unit: 'cup', category: 'Dairy' }
    ],
    instructions: [
      'Sauté mushrooms until golden brown',
      'Toast rice in same pan for 2 minutes',
      'Add warm broth one ladle at a time, stirring constantly',
      'Finish with parmesan and butter'
    ],
    nutrition: {
      calories: 485, protein: 18, carbs: 68, fat: 15, fiber: 3, sugar: 4, sodium: 885, cholesterol: 25,
      vitamins: { vitaminA: 15, vitaminC: 4, vitaminD: 8, vitaminE: 2, vitaminK: 8, vitaminB6: 0.2, vitaminB12: 0.8, folate: 25 },
      minerals: { calcium: 385, iron: 2, magnesium: 45, potassium: 485, zinc: 2 }
    },
    tags: ['italian', 'vegetarian', 'risotto', 'mushrooms']
  },
  {
    id: '203',
    name: 'Greek Salad',
    description: 'Fresh Mediterranean salad with feta and olives',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400',
    category: 'Mediterranean',
    difficulty: 'Easy',
    prepTime: 15,
    cookTime: 0,
    servings: 4,
    ingredients: [
      { id: '812', name: 'Cucumber', amount: 2, unit: 'medium', category: 'Vegetables' },
      { id: '813', name: 'Tomatoes', amount: 4, unit: 'medium', category: 'Vegetables' },
      { id: '814', name: 'Feta cheese', amount: 8, unit: 'oz', category: 'Dairy' },
      { id: '815', name: 'Kalamata olives', amount: 0.5, unit: 'cup', category: 'Vegetables' }
    ],
    instructions: [
      'Chop cucumber and tomatoes into chunks',
      'Crumble feta cheese over vegetables',
      'Add olives and red onion slices',
      'Dress with olive oil, lemon juice, and oregano'
    ],
    nutrition: {
      calories: 285, protein: 12, carbs: 15, fat: 22, fiber: 4, sugar: 8, sodium: 885, cholesterol: 45,
      vitamins: { vitaminA: 25, vitaminC: 45, vitaminD: 5, vitaminE: 8, vitaminK: 25, vitaminB6: 0.2, vitaminB12: 0.8, folate: 45 },
      minerals: { calcium: 285, iron: 2, magnesium: 35, potassium: 485, zinc: 2 }
    },
    tags: ['mediterranean', 'vegetarian', 'salad', 'no-cook']
  },
  {
    id: '204',
    name: 'Lamb Curry',
    description: 'Spicy Indian curry with tender lamb and aromatic spices',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400',
    category: 'Indian',
    difficulty: 'Hard',
    prepTime: 20,
    cookTime: 90,
    servings: 6,
    ingredients: [
      { id: '816', name: 'Lamb shoulder', amount: 2, unit: 'lbs', category: 'Meat' },
      { id: '817', name: 'Curry powder', amount: 3, unit: 'tbsp', category: 'Spices' },
      { id: '818', name: 'Coconut milk', amount: 1, unit: 'can', category: 'Dairy' },
      { id: '819', name: 'Onions', amount: 2, unit: 'large', category: 'Vegetables' }
    ],
    instructions: [
      'Brown lamb pieces in heavy pot',
      'Sauté onions until golden',
      'Add curry powder and cook 1 minute',
      'Add coconut milk and simmer 1.5 hours until tender'
    ],
    nutrition: {
      calories: 485, protein: 35, carbs: 12, fat: 32, fiber: 2, sugar: 6, sodium: 585, cholesterol: 105,
      vitamins: { vitaminA: 15, vitaminC: 15, vitaminD: 5, vitaminE: 4, vitaminK: 8, vitaminB6: 0.4, vitaminB12: 2.8, folate: 25 },
      minerals: { calcium: 85, iron: 4, magnesium: 65, potassium: 585, zinc: 6 }
    },
    tags: ['indian', 'curry', 'lamb', 'spicy']
  }
];

// Batch 2 - More diverse recipes
export const hundredMoreRecipes2: Recipe[] = [
  {
    id: '205',
    name: 'Pad Thai',
    description: 'Classic Thai stir-fried noodles with shrimp and peanuts',
    image: 'https://images.unsplash.com/photo-1559314809-0f31657def5e?w=400',
    category: 'Asian',
    difficulty: 'Medium',
    prepTime: 20,
    cookTime: 15,
    servings: 4,
    ingredients: [
      { id: '820', name: 'Rice noodles', amount: 8, unit: 'oz', category: 'Grains' },
      { id: '821', name: 'Shrimp', amount: 1, unit: 'lb', category: 'Seafood' },
      { id: '822', name: 'Bean sprouts', amount: 2, unit: 'cups', category: 'Vegetables' },
      { id: '823', name: 'Peanuts', amount: 0.5, unit: 'cup', category: 'Nuts' }
    ],
    instructions: [
      'Soak rice noodles in warm water until soft',
      'Stir fry shrimp until pink',
      'Add noodles and pad thai sauce',
      'Toss with bean sprouts and peanuts'
    ],
    nutrition: {
      calories: 485, protein: 28, carbs: 58, fat: 12, fiber: 3, sugar: 8, sodium: 985, cholesterol: 185,
      vitamins: { vitaminA: 15, vitaminC: 25, vitaminD: 15, vitaminE: 8, vitaminK: 15, vitaminB6: 0.2, vitaminB12: 1.8, folate: 45 },
      minerals: { calcium: 85, iron: 3, magnesium: 85, potassium: 385, zinc: 2 }
    },
    tags: ['thai', 'noodles', 'seafood', 'stir-fry']
  },
  {
    id: '206',
    name: 'Beef Tacos al Pastor',
    description: 'Mexican-style tacos with marinated pork and pineapple',
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400',
    category: 'Mexican',
    difficulty: 'Medium',
    prepTime: 30,
    cookTime: 20,
    servings: 6,
    ingredients: [
      { id: '824', name: 'Pork shoulder', amount: 2, unit: 'lbs', category: 'Meat' },
      { id: '825', name: 'Pineapple', amount: 1, unit: 'cup', category: 'Fruits' },
      { id: '826', name: 'Corn tortillas', amount: 18, unit: 'pieces', category: 'Grains' },
      { id: '827', name: 'White onion', amount: 1, unit: 'medium', category: 'Vegetables' }
    ],
    instructions: [
      'Marinate pork in achiote and spices',
      'Grill pork until charred and cooked',
      'Dice pork and grill pineapple',
      'Serve on warm tortillas with onion and cilantro'
    ],
    nutrition: {
      calories: 385, protein: 28, carbs: 32, fat: 16, fiber: 4, sugar: 8, sodium: 685, cholesterol: 85,
      vitamins: { vitaminA: 15, vitaminC: 45, vitaminD: 5, vitaminE: 2, vitaminK: 8, vitaminB6: 0.8, vitaminB12: 1.2, folate: 45 },
      minerals: { calcium: 85, iron: 3, magnesium: 45, potassium: 585, zinc: 4 }
    },
    tags: ['mexican', 'tacos', 'pork', 'grilled']
  },
  {
    id: '207',
    name: 'Chicken Tikka Masala',
    description: 'Creamy Indian curry with marinated chicken',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400',
    category: 'Indian',
    difficulty: 'Hard',
    prepTime: 45,
    cookTime: 30,
    servings: 6,
    ingredients: [
      { id: '828', name: 'Chicken breast', amount: 2, unit: 'lbs', category: 'Meat' },
      { id: '829', name: 'Yogurt', amount: 1, unit: 'cup', category: 'Dairy' },
      { id: '830', name: 'Tomato sauce', amount: 2, unit: 'cups', category: 'Condiments' },
      { id: '831', name: 'Heavy cream', amount: 0.5, unit: 'cup', category: 'Dairy' }
    ],
    instructions: [
      'Marinate chicken in yogurt and spices',
      'Grill chicken until charred',
      'Make curry sauce with tomatoes and cream',
      'Simmer chicken in sauce for 15 minutes'
    ],
    nutrition: {
      calories: 485, protein: 38, carbs: 15, fat: 28, fiber: 2, sugar: 8, sodium: 885, cholesterol: 125,
      vitamins: { vitaminA: 45, vitaminC: 25, vitaminD: 8, vitaminE: 4, vitaminK: 8, vitaminB6: 1.2, vitaminB12: 0.8, folate: 25 },
      minerals: { calcium: 285, iron: 3, magnesium: 65, potassium: 685, zinc: 3 }
    },
    tags: ['indian', 'curry', 'chicken', 'creamy']
  },
  {
    id: '208',
    name: 'Ratatouille',
    description: 'French vegetable stew with eggplant, zucchini, and tomatoes',
    image: 'https://images.unsplash.com/photo-1572441713132-51c75654db73?w=400',
    category: 'French',
    difficulty: 'Medium',
    prepTime: 25,
    cookTime: 45,
    servings: 6,
    ingredients: [
      { id: '832', name: 'Eggplant', amount: 1, unit: 'large', category: 'Vegetables' },
      { id: '833', name: 'Zucchini', amount: 2, unit: 'medium', category: 'Vegetables' },
      { id: '834', name: 'Tomatoes', amount: 4, unit: 'large', category: 'Vegetables' },
      { id: '835', name: 'Bell peppers', amount: 2, unit: 'medium', category: 'Vegetables' }
    ],
    instructions: [
      'Dice all vegetables into similar sizes',
      'Sauté onions and garlic until fragrant',
      'Add vegetables and herbs de Provence',
      'Simmer covered for 30-40 minutes'
    ],
    nutrition: {
      calories: 125, protein: 4, carbs: 28, fat: 2, fiber: 8, sugar: 15, sodium: 285, cholesterol: 0,
      vitamins: { vitaminA: 85, vitaminC: 125, vitaminD: 0, vitaminE: 4, vitaminK: 25, vitaminB6: 0.4, vitaminB12: 0, folate: 85 },
      minerals: { calcium: 85, iron: 2, magnesium: 45, potassium: 785, zinc: 1 }
    },
    tags: ['french', 'vegetarian', 'vegan', 'stew']
  },
  {
    id: '209',
    name: 'Sushi Rolls',
    description: 'Japanese sushi rolls with fresh fish and vegetables',
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=400',
    category: 'Japanese',
    difficulty: 'Hard',
    prepTime: 60,
    cookTime: 20,
    servings: 4,
    ingredients: [
      { id: '836', name: 'Sushi rice', amount: 2, unit: 'cups', category: 'Grains' },
      { id: '837', name: 'Nori sheets', amount: 8, unit: 'pieces', category: 'Vegetables' },
      { id: '838', name: 'Fresh salmon', amount: 0.5, unit: 'lb', category: 'Seafood' },
      { id: '839', name: 'Cucumber', amount: 1, unit: 'medium', category: 'Vegetables' }
    ],
    instructions: [
      'Cook sushi rice and season with rice vinegar',
      'Slice fish and vegetables into strips',
      'Spread rice on nori, add fillings',
      'Roll tightly and slice with sharp knife'
    ],
    nutrition: {
      calories: 385, protein: 18, carbs: 68, fat: 6, fiber: 2, sugar: 2, sodium: 485, cholesterol: 35,
      vitamins: { vitaminA: 15, vitaminC: 8, vitaminD: 85, vitaminE: 2, vitaminK: 15, vitaminB6: 0.4, vitaminB12: 2.8, folate: 25 },
      minerals: { calcium: 45, iron: 2, magnesium: 45, potassium: 385, zinc: 1 }
    },
    tags: ['japanese', 'sushi', 'seafood', 'raw']
  }
];

// Batch 3 - International cuisine variety
export const hundredMoreRecipes3: Recipe[] = [
  {
    id: '210',
    name: 'Korean BBQ Bulgogi',
    description: 'Marinated Korean beef barbecue with sweet soy glaze',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400',
    category: 'Korean',
    difficulty: 'Medium',
    prepTime: 30,
    cookTime: 15,
    servings: 4,
    ingredients: [
      { id: '840', name: 'Ribeye steak', amount: 2, unit: 'lbs', category: 'Meat' },
      { id: '841', name: 'Soy sauce', amount: 0.5, unit: 'cup', category: 'Condiments' },
      { id: '842', name: 'Asian pear', amount: 1, unit: 'medium', category: 'Fruits' },
      { id: '843', name: 'Sesame oil', amount: 2, unit: 'tbsp', category: 'Oils' }
    ],
    instructions: [
      'Slice beef very thinly against the grain',
      'Marinate in soy sauce, pear, and sesame oil',
      'Grill over high heat for 2-3 minutes per side',
      'Serve with steamed rice and kimchi'
    ],
    nutrition: {
      calories: 485, protein: 35, carbs: 12, fat: 32, fiber: 1, sugar: 8, sodium: 1285, cholesterol: 105,
      vitamins: { vitaminA: 5, vitaminC: 8, vitaminD: 5, vitaminE: 4, vitaminK: 8, vitaminB6: 0.6, vitaminB12: 2.8, folate: 15 },
      minerals: { calcium: 45, iron: 4, magnesium: 45, potassium: 585, zinc: 6 }
    },
    tags: ['korean', 'bbq', 'beef', 'marinated']
  },
  {
    id: '211',
    name: 'Moroccan Tagine',
    description: 'Slow-cooked North African stew with lamb and apricots',
    image: 'https://images.unsplash.com/photo-1574653853027-5d3ac9b9e7c3?w=400',
    category: 'Moroccan',
    difficulty: 'Hard',
    prepTime: 25,
    cookTime: 120,
    servings: 6,
    ingredients: [
      { id: '844', name: 'Lamb shoulder', amount: 2, unit: 'lbs', category: 'Meat' },
      { id: '845', name: 'Dried apricots', amount: 1, unit: 'cup', category: 'Fruits' },
      { id: '846', name: 'Moroccan spices', amount: 3, unit: 'tbsp', category: 'Spices' },
      { id: '847', name: 'Almonds', amount: 0.5, unit: 'cup', category: 'Nuts' }
    ],
    instructions: [
      'Brown lamb pieces in tagine or heavy pot',
      'Add spices and cook until fragrant',
      'Add apricots, almonds, and broth',
      'Simmer covered for 2 hours until tender'
    ],
    nutrition: {
      calories: 485, protein: 35, carbs: 18, fat: 28, fiber: 4, sugar: 12, sodium: 485, cholesterol: 105,
      vitamins: { vitaminA: 45, vitaminC: 8, vitaminD: 5, vitaminE: 8, vitaminK: 8, vitaminB6: 0.4, vitaminB12: 2.8, folate: 25 },
      minerals: { calcium: 85, iron: 4, magnesium: 85, potassium: 685, zinc: 6 }
    },
    tags: ['moroccan', 'tagine', 'lamb', 'slow-cooked']
  },
  {
    id: '212',
    name: 'Brazilian Feijoada',
    description: 'Traditional Brazilian black bean stew with pork',
    image: 'https://images.unsplash.com/photo-1574653853027-5d3ac9b9e7c3?w=400',
    category: 'Brazilian',
    difficulty: 'Hard',
    prepTime: 30,
    cookTime: 180,
    servings: 8,
    ingredients: [
      { id: '848', name: 'Black beans', amount: 2, unit: 'cups', category: 'Legumes' },
      { id: '849', name: 'Pork shoulder', amount: 2, unit: 'lbs', category: 'Meat' },
      { id: '850', name: 'Brazilian sausage', amount: 1, unit: 'lb', category: 'Meat' },
      { id: '851', name: 'Orange zest', amount: 2, unit: 'tbsp', category: 'Fruits' }
    ],
    instructions: [
      'Soak black beans overnight',
      'Brown pork and sausage in large pot',
      'Add beans, water, and seasonings',
      'Simmer 3 hours until beans are creamy'
    ],
    nutrition: {
      calories: 585, protein: 38, carbs: 45, fat: 28, fiber: 12, sugar: 4, sodium: 985, cholesterol: 95,
      vitamins: { vitaminA: 15, vitaminC: 25, vitaminD: 5, vitaminE: 2, vitaminK: 8, vitaminB6: 0.6, vitaminB12: 1.2, folate: 185 },
      minerals: { calcium: 125, iron: 6, magnesium: 125, potassium: 985, zinc: 5 }
    },
    tags: ['brazilian', 'beans', 'pork', 'traditional']
  },
  {
    id: '213',
    name: 'Turkish Kebabs',
    description: 'Grilled Turkish meat skewers with yogurt sauce',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400',
    category: 'Turkish',
    difficulty: 'Medium',
    prepTime: 45,
    cookTime: 15,
    servings: 6,
    ingredients: [
      { id: '852', name: 'Ground lamb', amount: 2, unit: 'lbs', category: 'Meat' },
      { id: '853', name: 'Turkish spices', amount: 3, unit: 'tbsp', category: 'Spices' },
      { id: '854', name: 'Greek yogurt', amount: 1, unit: 'cup', category: 'Dairy' },
      { id: '855', name: 'Pita bread', amount: 6, unit: 'pieces', category: 'Grains' }
    ],
    instructions: [
      'Mix ground lamb with spices and herbs',
      'Form mixture around metal skewers',
      'Grill over medium-high heat 12-15 minutes',
      'Serve with yogurt sauce and warm pita'
    ],
    nutrition: {
      calories: 485, protein: 32, carbs: 28, fat: 26, fiber: 2, sugar: 4, sodium: 685, cholesterol: 95,
      vitamins: { vitaminA: 15, vitaminC: 4, vitaminD: 8, vitaminE: 2, vitaminK: 8, vitaminB6: 0.4, vitaminB12: 2.8, folate: 45 },
      minerals: { calcium: 185, iron: 4, magnesium: 45, potassium: 485, zinc: 6 }
    },
    tags: ['turkish', 'kebabs', 'lamb', 'grilled']
  },
  {
    id: '214',
    name: 'Vietnamese Pho',
    description: 'Traditional Vietnamese noodle soup with beef broth',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400',
    category: 'Vietnamese',
    difficulty: 'Hard',
    prepTime: 30,
    cookTime: 240,
    servings: 6,
    ingredients: [
      { id: '856', name: 'Beef bones', amount: 3, unit: 'lbs', category: 'Meat' },
      { id: '857', name: 'Rice noodles', amount: 1, unit: 'lb', category: 'Grains' },
      { id: '858', name: 'Beef sirloin', amount: 1, unit: 'lb', category: 'Meat' },
      { id: '859', name: 'Fresh herbs', amount: 2, unit: 'cups', category: 'Herbs' }
    ],
    instructions: [
      'Simmer beef bones with spices for 4 hours',
      'Strain broth and season with fish sauce',
      'Cook rice noodles according to package',
      'Serve with thin beef slices and fresh herbs'
    ],
    nutrition: {
      calories: 385, protein: 28, carbs: 48, fat: 8, fiber: 2, sugar: 4, sodium: 1185, cholesterol: 75,
      vitamins: { vitaminA: 25, vitaminC: 15, vitaminD: 5, vitaminE: 2, vitaminK: 85, vitaminB6: 0.6, vitaminB12: 2.8, folate: 45 },
      minerals: { calcium: 85, iron: 4, magnesium: 65, potassium: 685, zinc: 5 }
    },
    tags: ['vietnamese', 'pho', 'soup', 'beef']
  }
];

// Batch 4 - American classics and comfort food
export const hundredMoreRecipes4: Recipe[] = [
  {
    id: '215',
    name: 'Mac and Cheese',
    description: 'Creamy baked macaroni and cheese with breadcrumb topping',
    image: 'https://images.unsplash.com/photo-1543826173-1ad5ac882d8f?w=400',
    category: 'American',
    difficulty: 'Medium',
    prepTime: 20,
    cookTime: 30,
    servings: 6,
    ingredients: [
      { id: '860', name: 'Elbow macaroni', amount: 1, unit: 'lb', category: 'Grains' },
      { id: '861', name: 'Cheddar cheese', amount: 3, unit: 'cups', category: 'Dairy' },
      { id: '862', name: 'Milk', amount: 2, unit: 'cups', category: 'Dairy' },
      { id: '863', name: 'Breadcrumbs', amount: 1, unit: 'cup', category: 'Grains' }
    ],
    instructions: [
      'Cook macaroni until al dente',
      'Make cheese sauce with milk and cheddar',
      'Combine pasta and sauce in baking dish',
      'Top with breadcrumbs and bake until golden'
    ],
    nutrition: {
      calories: 485, protein: 22, carbs: 58, fat: 18, fiber: 2, sugar: 8, sodium: 785, cholesterol: 65,
      vitamins: { vitaminA: 25, vitaminC: 2, vitaminD: 15, vitaminE: 2, vitaminK: 5, vitaminB6: 0.2, vitaminB12: 1.2, folate: 85 },
      minerals: { calcium: 585, iron: 3, magnesium: 45, potassium: 385, zinc: 3 }
    },
    tags: ['american', 'pasta', 'cheese', 'comfort-food']
  },
  {
    id: '216',
    name: 'Fried Chicken',
    description: 'Crispy Southern-style fried chicken with herbs and spices',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400',
    category: 'American',
    difficulty: 'Medium',
    prepTime: 30,
    cookTime: 25,
    servings: 4,
    ingredients: [
      { id: '864', name: 'Chicken pieces', amount: 3, unit: 'lbs', category: 'Meat' },
      { id: '865', name: 'Buttermilk', amount: 2, unit: 'cups', category: 'Dairy' },
      { id: '866', name: 'Seasoned flour', amount: 3, unit: 'cups', category: 'Grains' },
      { id: '867', name: 'Vegetable oil', amount: 4, unit: 'cups', category: 'Oils' }
    ],
    instructions: [
      'Marinate chicken in buttermilk for 2 hours',
      'Dredge chicken in seasoned flour',
      'Fry in 350°F oil until golden brown',
      'Drain on paper towels and serve hot'
    ],
    nutrition: {
      calories: 685, protein: 42, carbs: 28, fat: 42, fiber: 1, sugar: 4, sodium: 885, cholesterol: 145,
      vitamins: { vitaminA: 8, vitaminC: 2, vitaminD: 8, vitaminE: 8, vitaminK: 8, vitaminB6: 1.2, vitaminB12: 0.8, folate: 45 },
      minerals: { calcium: 185, iron: 3, magnesium: 65, potassium: 585, zinc: 3 }
    },
    tags: ['american', 'fried', 'chicken', 'southern']
  },
  {
    id: '217',
    name: 'Clam Chowder',
    description: 'Creamy New England clam chowder with potatoes',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400',
    category: 'American',
    difficulty: 'Medium',
    prepTime: 20,
    cookTime: 30,
    servings: 6,
    ingredients: [
      { id: '868', name: 'Fresh clams', amount: 2, unit: 'lbs', category: 'Seafood' },
      { id: '869', name: 'Potatoes', amount: 3, unit: 'large', category: 'Vegetables' },
      { id: '870', name: 'Heavy cream', amount: 2, unit: 'cups', category: 'Dairy' },
      { id: '871', name: 'Bacon', amount: 6, unit: 'strips', category: 'Meat' }
    ],
    instructions: [
      'Steam clams and reserve broth',
      'Cook bacon until crispy, remove',
      'Sauté onions in bacon fat',
      'Add potatoes, clam broth, and cream, simmer until thick'
    ],
    nutrition: {
      calories: 385, protein: 18, carbs: 25, fat: 25, fiber: 2, sugar: 6, sodium: 985, cholesterol: 85,
      vitamins: { vitaminA: 25, vitaminC: 25, vitaminD: 15, vitaminE: 4, vitaminK: 8, vitaminB6: 0.4, vitaminB12: 8.5, folate: 25 },
      minerals: { calcium: 185, iron: 12, magnesium: 45, potassium: 685, zinc: 2 }
    },
    tags: ['american', 'soup', 'seafood', 'creamy']
  },
  {
    id: '218',
    name: 'Apple Pie',
    description: 'Classic American apple pie with flaky crust',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400',
    category: 'American',
    difficulty: 'Hard',
    prepTime: 60,
    cookTime: 50,
    servings: 8,
    ingredients: [
      { id: '872', name: 'Apples', amount: 8, unit: 'large', category: 'Fruits' },
      { id: '873', name: 'Pie crust', amount: 2, unit: 'pieces', category: 'Grains' },
      { id: '874', name: 'Sugar', amount: 0.75, unit: 'cup', category: 'Sweeteners' },
      { id: '875', name: 'Cinnamon', amount: 2, unit: 'tsp', category: 'Spices' }
    ],
    instructions: [
      'Peel and slice apples thinly',
      'Mix apples with sugar and cinnamon',
      'Fill bottom crust with apple mixture',
      'Cover with top crust and bake at 425°F for 45 minutes'
    ],
    nutrition: {
      calories: 385, protein: 4, carbs: 68, fat: 12, fiber: 4, sugar: 45, sodium: 285, cholesterol: 15,
      vitamins: { vitaminA: 5, vitaminC: 8, vitaminD: 2, vitaminE: 2, vitaminK: 4, vitaminB6: 0.1, vitaminB12: 0, folate: 15 },
      minerals: { calcium: 25, iron: 2, magnesium: 15, potassium: 185, zinc: 1 }
    },
    tags: ['american', 'dessert', 'pie', 'apples']
  },
  {
    id: '219',
    name: 'Barbecue Ribs',
    description: 'Slow-cooked pork ribs with smoky barbecue sauce',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400',
    category: 'American',
    difficulty: 'Hard',
    prepTime: 30,
    cookTime: 360,
    servings: 6,
    ingredients: [
      { id: '876', name: 'Pork ribs', amount: 4, unit: 'lbs', category: 'Meat' },
      { id: '877', name: 'BBQ rub', amount: 0.25, unit: 'cup', category: 'Spices' },
      { id: '878', name: 'BBQ sauce', amount: 2, unit: 'cups', category: 'Condiments' },
      { id: '879', name: 'Apple juice', amount: 1, unit: 'cup', category: 'Beverages' }
    ],
    instructions: [
      'Rub ribs with spice mixture',
      'Smoke at 225°F for 5-6 hours',
      'Wrap in foil with apple juice for 2 hours',
      'Glaze with BBQ sauce in final 30 minutes'
    ],
    nutrition: {
      calories: 685, protein: 45, carbs: 25, fat: 42, fiber: 1, sugar: 20, sodium: 1285, cholesterol: 135,
      vitamins: { vitaminA: 15, vitaminC: 4, vitaminD: 15, vitaminE: 2, vitaminK: 2, vitaminB6: 0.8, vitaminB12: 1.2, folate: 8 },
      minerals: { calcium: 85, iron: 3, magnesium: 45, potassium: 585, zinc: 5 }
    },
    tags: ['american', 'bbq', 'ribs', 'smoked']
  }
];

// Batch 5 - Healthy and vegetarian options
export const hundredMoreRecipes5: Recipe[] = [
  {
    id: '220',
    name: 'Quinoa Buddha Bowl',
    description: 'Nutritious bowl with quinoa, roasted vegetables, and tahini',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400',
    category: 'Healthy',
    difficulty: 'Easy',
    prepTime: 20,
    cookTime: 25,
    servings: 4,
    ingredients: [
      { id: '880', name: 'Quinoa', amount: 1, unit: 'cup', category: 'Grains' },
      { id: '881', name: 'Sweet potato', amount: 2, unit: 'medium', category: 'Vegetables' },
      { id: '882', name: 'Chickpeas', amount: 1, unit: 'can', category: 'Legumes' },
      { id: '883', name: 'Tahini', amount: 0.25, unit: 'cup', category: 'Condiments' }
    ],
    instructions: [
      'Cook quinoa according to package directions',
      'Roast sweet potato and chickpeas at 400°F',
      'Make tahini dressing with lemon and garlic',
      'Assemble bowl with quinoa, vegetables, and dressing'
    ],
    nutrition: {
      calories: 485, protein: 18, carbs: 68, fat: 15, fiber: 12, sugar: 8, sodium: 385, cholesterol: 0,
      vitamins: { vitaminA: 285, vitaminC: 25, vitaminD: 0, vitaminE: 4, vitaminK: 25, vitaminB6: 0.4, vitaminB12: 0, folate: 125 },
      minerals: { calcium: 125, iron: 6, magnesium: 125, potassium: 885, zinc: 3 }
    },
    tags: ['healthy', 'vegetarian', 'vegan', 'quinoa']
  },
  {
    id: '221',
    name: 'Grilled Salmon',
    description: 'Herb-crusted grilled salmon with lemon and dill',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400',
    category: 'Healthy',
    difficulty: 'Medium',
    prepTime: 15,
    cookTime: 15,
    servings: 4,
    ingredients: [
      { id: '884', name: 'Salmon fillets', amount: 2, unit: 'lbs', category: 'Seafood' },
      { id: '885', name: 'Fresh dill', amount: 0.25, unit: 'cup', category: 'Herbs' },
      { id: '886', name: 'Lemon', amount: 2, unit: 'medium', category: 'Fruits' },
      { id: '887', name: 'Olive oil', amount: 3, unit: 'tbsp', category: 'Oils' }
    ],
    instructions: [
      'Brush salmon with olive oil and season',
      'Grill over medium-high heat 6-8 minutes per side',
      'Top with fresh dill and lemon juice',
      'Serve with roasted vegetables'
    ],
    nutrition: {
      calories: 385, protein: 42, carbs: 2, fat: 22, fiber: 0, sugar: 1, sodium: 285, cholesterol: 125,
      vitamins: { vitaminA: 15, vitaminC: 25, vitaminD: 185, vitaminE: 8, vitaminK: 15, vitaminB6: 1.2, vitaminB12: 4.8, folate: 25 },
      minerals: { calcium: 45, iron: 2, magnesium: 85, potassium: 685, zinc: 1 }
    },
    tags: ['healthy', 'seafood', 'grilled', 'omega-3']
  },
  {
    id: '222',
    name: 'Kale Caesar Salad',
    description: 'Healthy twist on caesar salad with massaged kale',
    image: 'https://images.unsplash.com/photo-1512852939750-1305098529bf?w=400',
    category: 'Healthy',
    difficulty: 'Easy',
    prepTime: 15,
    cookTime: 0,
    servings: 4,
    ingredients: [
      { id: '888', name: 'Kale', amount: 8, unit: 'cups', category: 'Vegetables' },
      { id: '889', name: 'Parmesan cheese', amount: 0.5, unit: 'cup', category: 'Dairy' },
      { id: '890', name: 'Lemon juice', amount: 0.25, unit: 'cup', category: 'Fruits' },
      { id: '891', name: 'Nutritional yeast', amount: 2, unit: 'tbsp', category: 'Condiments' }
    ],
    instructions: [
      'Remove kale stems and chop leaves',
      'Massage kale with lemon juice and salt',
      'Add parmesan and nutritional yeast',
      'Toss with homemade caesar dressing'
    ],
    nutrition: {
      calories: 185, protein: 12, carbs: 18, fat: 8, fiber: 4, sugar: 4, sodium: 485, cholesterol: 15,
      vitamins: { vitaminA: 385, vitaminC: 185, vitaminD: 5, vitaminE: 4, vitaminK: 685, vitaminB6: 0.4, vitaminB12: 0.8, folate: 85 },
      minerals: { calcium: 385, iron: 3, magnesium: 65, potassium: 585, zinc: 2 }
    },
    tags: ['healthy', 'vegetarian', 'salad', 'kale']
  },
  {
    id: '223',
    name: 'Lentil Curry',
    description: 'Protein-rich red lentil curry with coconut milk',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400',
    category: 'Indian',
    difficulty: 'Medium',
    prepTime: 15,
    cookTime: 30,
    servings: 6,
    ingredients: [
      { id: '892', name: 'Red lentils', amount: 2, unit: 'cups', category: 'Legumes' },
      { id: '893', name: 'Coconut milk', amount: 1, unit: 'can', category: 'Dairy' },
      { id: '894', name: 'Curry powder', amount: 3, unit: 'tbsp', category: 'Spices' },
      { id: '895', name: 'Spinach', amount: 4, unit: 'cups', category: 'Vegetables' }
    ],
    instructions: [
      'Rinse lentils and cook in vegetable broth',
      'Sauté onions and add curry powder',
      'Add coconut milk and cooked lentils',
      'Stir in spinach until wilted'
    ],
    nutrition: {
      calories: 385, protein: 18, carbs: 48, fat: 12, fiber: 18, sugar: 6, sodium: 485, cholesterol: 0,
      vitamins: { vitaminA: 185, vitaminC: 25, vitaminD: 0, vitaminE: 4, vitaminK: 185, vitaminB6: 0.4, vitaminB12: 0, folate: 285 },
      minerals: { calcium: 125, iron: 8, magnesium: 125, potassium: 885, zinc: 3 }
    },
    tags: ['indian', 'vegetarian', 'vegan', 'lentils']
  },
  {
    id: '224',
    name: 'Stuffed Bell Peppers',
    description: 'Colorful bell peppers stuffed with quinoa and vegetables',
    image: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400',
    category: 'Healthy',
    difficulty: 'Medium',
    prepTime: 25,
    cookTime: 35,
    servings: 4,
    ingredients: [
      { id: '896', name: 'Bell peppers', amount: 4, unit: 'large', category: 'Vegetables' },
      { id: '897', name: 'Quinoa', amount: 1, unit: 'cup', category: 'Grains' },
      { id: '898', name: 'Black beans', amount: 1, unit: 'can', category: 'Legumes' },
      { id: '899', name: 'Corn', amount: 1, unit: 'cup', category: 'Vegetables' }
    ],
    instructions: [
      'Cut tops off peppers and remove seeds',
      'Cook quinoa and mix with beans and corn',
      'Stuff peppers with quinoa mixture',
      'Bake at 375°F for 30-35 minutes'
    ],
    nutrition: {
      calories: 285, protein: 12, carbs: 58, fat: 3, fiber: 12, sugar: 12, sodium: 385, cholesterol: 0,
      vitamins: { vitaminA: 85, vitaminC: 285, vitaminD: 0, vitaminE: 4, vitaminK: 25, vitaminB6: 0.6, vitaminB12: 0, folate: 125 },
      minerals: { calcium: 85, iron: 4, magnesium: 125, potassium: 785, zinc: 2 }
    },
    tags: ['healthy', 'vegetarian', 'vegan', 'stuffed']
  }
];

// Batch 6 - Breakfast and brunch favorites
export const hundredMoreRecipes6: Recipe[] = [
  {
    id: '225',
    name: 'Pancakes',
    description: 'Fluffy American pancakes with maple syrup',
    image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=400',
    category: 'Breakfast',
    difficulty: 'Easy',
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    ingredients: [
      { id: '900', name: 'Flour', amount: 2, unit: 'cups', category: 'Grains' },
      { id: '901', name: 'Milk', amount: 1.5, unit: 'cups', category: 'Dairy' },
      { id: '902', name: 'Eggs', amount: 2, unit: 'large', category: 'Dairy' },
      { id: '903', name: 'Maple syrup', amount: 0.5, unit: 'cup', category: 'Sweeteners' }
    ],
    instructions: [
      'Mix dry ingredients in large bowl',
      'Whisk together wet ingredients',
      'Combine wet and dry ingredients until just mixed',
      'Cook on griddle until bubbles form, flip once'
    ],
    nutrition: {
      calories: 385, protein: 12, carbs: 68, fat: 8, fiber: 2, sugar: 25, sodium: 485, cholesterol: 95,
      vitamins: { vitaminA: 15, vitaminC: 2, vitaminD: 15, vitaminE: 2, vitaminK: 5, vitaminB6: 0.2, vitaminB12: 0.8, folate: 85 },
      minerals: { calcium: 285, iron: 3, magnesium: 25, potassium: 285, zinc: 1 }
    },
    tags: ['breakfast', 'pancakes', 'sweet', 'american']
  },
  {
    id: '226',
    name: 'Eggs Benedict',
    description: 'Poached eggs on English muffins with hollandaise sauce',
    image: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?w=400',
    category: 'Breakfast',
    difficulty: 'Hard',
    prepTime: 20,
    cookTime: 15,
    servings: 4,
    ingredients: [
      { id: '904', name: 'English muffins', amount: 4, unit: 'halves', category: 'Grains' },
      { id: '905', name: 'Eggs', amount: 8, unit: 'large', category: 'Dairy' },
      { id: '906', name: 'Canadian bacon', amount: 8, unit: 'slices', category: 'Meat' },
      { id: '907', name: 'Butter', amount: 0.5, unit: 'cup', category: 'Dairy' }
    ],
    instructions: [
      'Toast English muffin halves',
      'Poach eggs in simmering water with vinegar',
      'Make hollandaise sauce with egg yolks and butter',
      'Assemble with muffin, bacon, egg, and sauce'
    ],
    nutrition: {
      calories: 585, protein: 28, carbs: 28, fat: 38, fiber: 2, sugar: 4, sodium: 1185, cholesterol: 485,
      vitamins: { vitaminA: 45, vitaminC: 2, vitaminD: 25, vitaminE: 8, vitaminK: 15, vitaminB6: 0.4, vitaminB12: 2.2, folate: 85 },
      minerals: { calcium: 185, iron: 4, magnesium: 35, potassium: 385, zinc: 3 }
    },
    tags: ['breakfast', 'brunch', 'eggs', 'hollandaise']
  },
  {
    id: '227',
    name: 'French Toast',
    description: 'Crispy French toast with cinnamon and vanilla',
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400',
    category: 'Breakfast',
    difficulty: 'Easy',
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    ingredients: [
      { id: '908', name: 'Thick bread slices', amount: 8, unit: 'pieces', category: 'Grains' },
      { id: '909', name: 'Eggs', amount: 4, unit: 'large', category: 'Dairy' },
      { id: '910', name: 'Milk', amount: 0.5, unit: 'cup', category: 'Dairy' },
      { id: '911', name: 'Cinnamon', amount: 1, unit: 'tsp', category: 'Spices' }
    ],
    instructions: [
      'Whisk eggs, milk, cinnamon, and vanilla',
      'Dip bread slices in egg mixture',
      'Cook in buttered skillet until golden',
      'Serve with powdered sugar and syrup'
    ],
    nutrition: {
      calories: 385, protein: 15, carbs: 48, fat: 15, fiber: 3, sugar: 12, sodium: 585, cholesterol: 185,
      vitamins: { vitaminA: 25, vitaminC: 2, vitaminD: 15, vitaminE: 4, vitaminK: 5, vitaminB6: 0.2, vitaminB12: 0.8, folate: 85 },
      minerals: { calcium: 185, iron: 4, magnesium: 35, potassium: 285, zinc: 2 }
    },
    tags: ['breakfast', 'french-toast', 'sweet', 'cinnamon']
  },
  {
    id: '228',
    name: 'Breakfast Burrito',
    description: 'Scrambled eggs with cheese and vegetables in tortilla',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400',
    category: 'Breakfast',
    difficulty: 'Easy',
    prepTime: 15,
    cookTime: 10,
    servings: 4,
    ingredients: [
      { id: '912', name: 'Large tortillas', amount: 4, unit: 'pieces', category: 'Grains' },
      { id: '913', name: 'Eggs', amount: 8, unit: 'large', category: 'Dairy' },
      { id: '914', name: 'Cheddar cheese', amount: 1, unit: 'cup', category: 'Dairy' },
      { id: '915', name: 'Bell peppers', amount: 1, unit: 'medium', category: 'Vegetables' }
    ],
    instructions: [
      'Scramble eggs with salt and pepper',
      'Sauté bell peppers until soft',
      'Fill tortillas with eggs, peppers, and cheese',
      'Roll tightly and serve with salsa'
    ],
    nutrition: {
      calories: 485, protein: 25, carbs: 32, fat: 28, fiber: 3, sugar: 4, sodium: 885, cholesterol: 385,
      vitamins: { vitaminA: 85, vitaminC: 85, vitaminD: 25, vitaminE: 4, vitaminK: 15, vitaminB6: 0.4, vitaminB12: 1.8, folate: 85 },
      minerals: { calcium: 385, iron: 4, magnesium: 45, potassium: 485, zinc: 3 }
    },
    tags: ['breakfast', 'burrito', 'eggs', 'mexican']
  },
  {
    id: '229',
    name: 'Avocado Toast',
    description: 'Toasted bread topped with mashed avocado and seasonings',
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400',
    category: 'Breakfast',
    difficulty: 'Easy',
    prepTime: 10,
    cookTime: 5,
    servings: 2,
    ingredients: [
      { id: '916', name: 'Sourdough bread', amount: 4, unit: 'slices', category: 'Grains' },
      { id: '917', name: 'Avocados', amount: 2, unit: 'large', category: 'Fruits' },
      { id: '918', name: 'Lemon juice', amount: 2, unit: 'tbsp', category: 'Fruits' },
      { id: '919', name: 'Red pepper flakes', amount: 0.5, unit: 'tsp', category: 'Spices' }
    ],
    instructions: [
      'Toast bread slices until golden',
      'Mash avocados with lemon juice and salt',
      'Spread avocado mixture on toast',
      'Sprinkle with red pepper flakes and black pepper'
    ],
    nutrition: {
      calories: 285, protein: 8, carbs: 32, fat: 18, fiber: 12, sugar: 4, sodium: 385, cholesterol: 0,
      vitamins: { vitaminA: 8, vitaminC: 25, vitaminD: 0, vitaminE: 4, vitaminK: 25, vitaminB6: 0.4, vitaminB12: 0, folate: 125 },
      minerals: { calcium: 85, iron: 2, magnesium: 65, potassium: 685, zinc: 1 }
    },
    tags: ['breakfast', 'avocado', 'toast', 'healthy']
  }
];

// Batch 7 - Desserts and sweets
export const hundredMoreRecipes7: Recipe[] = [
  {
    id: '230',
    name: 'Chocolate Chip Cookies',
    description: 'Classic chewy chocolate chip cookies',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400',
    category: 'Dessert',
    difficulty: 'Easy',
    prepTime: 15,
    cookTime: 12,
    servings: 24,
    ingredients: [
      { id: '920', name: 'Flour', amount: 2.25, unit: 'cups', category: 'Grains' },
      { id: '921', name: 'Chocolate chips', amount: 2, unit: 'cups', category: 'Sweets' },
      { id: '922', name: 'Butter', amount: 1, unit: 'cup', category: 'Dairy' },
      { id: '923', name: 'Brown sugar', amount: 0.75, unit: 'cup', category: 'Sweeteners' }
    ],
    instructions: [
      'Cream butter and sugars until fluffy',
      'Beat in eggs and vanilla',
      'Mix in flour and chocolate chips',
      'Bake at 375°F for 9-11 minutes'
    ],
    nutrition: {
      calories: 185, protein: 3, carbs: 28, fat: 8, fiber: 1, sugar: 18, sodium: 85, cholesterol: 25,
      vitamins: { vitaminA: 8, vitaminC: 0, vitaminD: 2, vitaminE: 2, vitaminK: 2, vitaminB6: 0.1, vitaminB12: 0.1, folate: 15 },
      minerals: { calcium: 25, iron: 1, magnesium: 15, potassium: 85, zinc: 1 }
    },
    tags: ['dessert', 'cookies', 'chocolate', 'sweet']
  },
  {
    id: '231',
    name: 'Tiramisu',
    description: 'Italian coffee-flavored dessert with mascarpone',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400',
    category: 'Dessert',
    difficulty: 'Hard',
    prepTime: 45,
    cookTime: 0,
    servings: 8,
    ingredients: [
      { id: '924', name: 'Ladyfinger cookies', amount: 24, unit: 'pieces', category: 'Sweets' },
      { id: '925', name: 'Mascarpone cheese', amount: 1, unit: 'lb', category: 'Dairy' },
      { id: '926', name: 'Strong coffee', amount: 2, unit: 'cups', category: 'Beverages' },
      { id: '927', name: 'Cocoa powder', amount: 0.25, unit: 'cup', category: 'Sweets' }
    ],
    instructions: [
      'Make coffee and let cool completely',
      'Whip mascarpone with sugar and eggs',
      'Dip ladyfingers in coffee and layer',
      'Refrigerate 4 hours, dust with cocoa before serving'
    ],
    nutrition: {
      calories: 485, protein: 8, carbs: 38, fat: 32, fiber: 2, sugar: 28, sodium: 185, cholesterol: 185,
      vitamins: { vitaminA: 45, vitaminC: 2, vitaminD: 8, vitaminE: 4, vitaminK: 5, vitaminB6: 0.1, vitaminB12: 0.8, folate: 25 },
      minerals: { calcium: 185, iron: 2, magnesium: 45, potassium: 285, zinc: 1 }
    },
    tags: ['dessert', 'italian', 'coffee', 'no-bake']
  },
  {
    id: '232',
    name: 'Cheesecake',
    description: 'Rich New York style cheesecake with graham crust',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400',
    category: 'Dessert',
    difficulty: 'Hard',
    prepTime: 30,
    cookTime: 60,
    servings: 12,
    ingredients: [
      { id: '928', name: 'Cream cheese', amount: 2, unit: 'lbs', category: 'Dairy' },
      { id: '929', name: 'Graham crackers', amount: 1.5, unit: 'cups', category: 'Sweets' },
      { id: '930', name: 'Sugar', amount: 1, unit: 'cup', category: 'Sweeteners' },
      { id: '931', name: 'Eggs', amount: 4, unit: 'large', category: 'Dairy' }
    ],
    instructions: [
      'Make graham cracker crust and press into pan',
      'Beat cream cheese until smooth',
      'Add sugar, eggs, and vanilla',
      'Bake in water bath at 325°F for 55 minutes'
    ],
    nutrition: {
      calories: 485, protein: 8, carbs: 38, fat: 35, fiber: 1, sugar: 32, sodium: 385, cholesterol: 145,
      vitamins: { vitaminA: 45, vitaminC: 2, vitaminD: 8, vitaminE: 4, vitaminK: 5, vitaminB6: 0.1, vitaminB12: 0.8, folate: 25 },
      minerals: { calcium: 185, iron: 2, magnesium: 25, potassium: 185, zinc: 1 }
    },
    tags: ['dessert', 'cheesecake', 'rich', 'baked']
  },
  {
    id: '233',
    name: 'Brownies',
    description: 'Fudgy chocolate brownies with walnuts',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400',
    category: 'Dessert',
    difficulty: 'Easy',
    prepTime: 15,
    cookTime: 30,
    servings: 16,
    ingredients: [
      { id: '932', name: 'Dark chocolate', amount: 8, unit: 'oz', category: 'Sweets' },
      { id: '933', name: 'Butter', amount: 0.5, unit: 'cup', category: 'Dairy' },
      { id: '934', name: 'Sugar', amount: 1, unit: 'cup', category: 'Sweeteners' },
      { id: '935', name: 'Walnuts', amount: 1, unit: 'cup', category: 'Nuts' }
    ],
    instructions: [
      'Melt chocolate and butter together',
      'Stir in sugar and eggs',
      'Fold in flour and walnuts',
      'Bake at 350°F for 25-30 minutes'
    ],
    nutrition: {
      calories: 285, protein: 4, carbs: 32, fat: 18, fiber: 3, sugar: 25, sodium: 85, cholesterol: 45,
      vitamins: { vitaminA: 8, vitaminC: 0, vitaminD: 2, vitaminE: 4, vitaminK: 2, vitaminB6: 0.1, vitaminB12: 0.1, folate: 15 },
      minerals: { calcium: 45, iron: 2, magnesium: 65, potassium: 185, zinc: 1 }
    },
    tags: ['dessert', 'brownies', 'chocolate', 'nuts']
  },
  {
    id: '234',
    name: 'Ice Cream Sundae',
    description: 'Vanilla ice cream with hot fudge and toppings',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400',
    category: 'Dessert',
    difficulty: 'Easy',
    prepTime: 10,
    cookTime: 0,
    servings: 4,
    ingredients: [
      { id: '936', name: 'Vanilla ice cream', amount: 2, unit: 'pints', category: 'Dairy' },
      { id: '937', name: 'Hot fudge sauce', amount: 1, unit: 'cup', category: 'Sweets' },
      { id: '938', name: 'Whipped cream', amount: 1, unit: 'cup', category: 'Dairy' },
      { id: '939', name: 'Maraschino cherries', amount: 8, unit: 'pieces', category: 'Fruits' }
    ],
    instructions: [
      'Scoop ice cream into bowls',
      'Warm hot fudge sauce',
      'Top ice cream with hot fudge',
      'Add whipped cream and cherry'
    ],
    nutrition: {
      calories: 485, protein: 8, carbs: 58, fat: 25, fiber: 2, sugar: 52, sodium: 185, cholesterol: 85,
      vitamins: { vitaminA: 25, vitaminC: 4, vitaminD: 15, vitaminE: 2, vitaminK: 5, vitaminB6: 0.1, vitaminB12: 0.8, folate: 15 },
      minerals: { calcium: 285, iron: 1, magnesium: 45, potassium: 385, zinc: 1 }
    },
    tags: ['dessert', 'ice-cream', 'sundae', 'no-cook']
  }
];

// Batch 8 - More international and specialty dishes
export const hundredMoreRecipes8: Recipe[] = [
  {
    id: '235',
    name: 'Paella',
    description: 'Spanish rice dish with seafood and saffron',
    image: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=400',
    category: 'Spanish',
    difficulty: 'Hard',
    prepTime: 30,
    cookTime: 45,
    servings: 8,
    ingredients: [
      { id: '940', name: 'Bomba rice', amount: 2, unit: 'cups', category: 'Grains' },
      { id: '941', name: 'Mixed seafood', amount: 2, unit: 'lbs', category: 'Seafood' },
      { id: '942', name: 'Saffron', amount: 1, unit: 'tsp', category: 'Spices' },
      { id: '943', name: 'Chicken stock', amount: 6, unit: 'cups', category: 'Broth' }
    ],
    instructions: [
      'Heat oil in paella pan',
      'Sauté seafood and remove',
      'Add rice and saffron stock',
      'Simmer 20 minutes, add seafood back'
    ],
    nutrition: {
      calories: 485, protein: 32, carbs: 58, fat: 12, fiber: 2, sugar: 4, sodium: 885, cholesterol: 125,
      vitamins: { vitaminA: 25, vitaminC: 15, vitaminD: 15, vitaminE: 4, vitaminK: 8, vitaminB6: 0.4, vitaminB12: 4.8, folate: 45 },
      minerals: { calcium: 85, iron: 4, magnesium: 85, potassium: 585, zinc: 3 }
    },
    tags: ['spanish', 'paella', 'seafood', 'rice']
  },
  {
    id: '236',
    name: 'Goulash',
    description: 'Hungarian beef stew with paprika and vegetables',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400',
    category: 'Hungarian',
    difficulty: 'Medium',
    prepTime: 20,
    cookTime: 120,
    servings: 6,
    ingredients: [
      { id: '944', name: 'Beef chuck', amount: 3, unit: 'lbs', category: 'Meat' },
      { id: '945', name: 'Paprika', amount: 3, unit: 'tbsp', category: 'Spices' },
      { id: '946', name: 'Onions', amount: 3, unit: 'large', category: 'Vegetables' },
      { id: '947', name: 'Tomatoes', amount: 2, unit: 'cans', category: 'Vegetables' }
    ],
    instructions: [
      'Brown beef cubes in heavy pot',
      'Sauté onions until golden',
      'Add paprika and tomatoes',
      'Simmer covered 2 hours until tender'
    ],
    nutrition: {
      calories: 485, protein: 42, carbs: 15, fat: 28, fiber: 3, sugar: 8, sodium: 685, cholesterol: 125,
      vitamins: { vitaminA: 85, vitaminC: 25, vitaminD: 5, vitaminE: 4, vitaminK: 15, vitaminB6: 0.8, vitaminB12: 2.8, folate: 45 },
      minerals: { calcium: 85, iron: 6, magnesium: 65, potassium: 785, zinc: 8 }
    },
    tags: ['hungarian', 'stew', 'beef', 'paprika']
  },
  {
    id: '237',
    name: 'Dim Sum',
    description: 'Chinese steamed dumplings with pork filling',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400',
    category: 'Chinese',
    difficulty: 'Hard',
    prepTime: 60,
    cookTime: 20,
    servings: 6,
    ingredients: [
      { id: '948', name: 'Dumpling wrappers', amount: 24, unit: 'pieces', category: 'Grains' },
      { id: '949', name: 'Ground pork', amount: 1, unit: 'lb', category: 'Meat' },
      { id: '950', name: 'Shiitake mushrooms', amount: 8, unit: 'pieces', category: 'Vegetables' },
      { id: '951', name: 'Soy sauce', amount: 3, unit: 'tbsp', category: 'Condiments' }
    ],
    instructions: [
      'Mix pork with mushrooms and seasonings',
      'Place filling in center of wrappers',
      'Fold and pleat dumplings',
      'Steam for 15-18 minutes until cooked'
    ],
    nutrition: {
      calories: 285, protein: 18, carbs: 28, fat: 12, fiber: 2, sugar: 3, sodium: 785, cholesterol: 55,
      vitamins: { vitaminA: 15, vitaminC: 4, vitaminD: 5, vitaminE: 2, vitaminK: 8, vitaminB6: 0.4, vitaminB12: 0.8, folate: 45 },
      minerals: { calcium: 45, iron: 3, magnesium: 35, potassium: 385, zinc: 3 }
    },
    tags: ['chinese', 'dim-sum', 'dumplings', 'steamed']
  },
  {
    id: '238',
    name: 'Coq au Vin',
    description: 'French chicken braised in red wine with vegetables',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400',
    category: 'French',
    difficulty: 'Hard',
    prepTime: 30,
    cookTime: 90,
    servings: 6,
    ingredients: [
      { id: '952', name: 'Chicken pieces', amount: 3, unit: 'lbs', category: 'Meat' },
      { id: '953', name: 'Red wine', amount: 2, unit: 'cups', category: 'Alcohol' },
      { id: '954', name: 'Pearl onions', amount: 1, unit: 'lb', category: 'Vegetables' },
      { id: '955', name: 'Bacon', amount: 6, unit: 'strips', category: 'Meat' }
    ],
    instructions: [
      'Brown bacon and chicken pieces',
      'Sauté onions and mushrooms',
      'Add wine and herbs, bring to boil',
      'Simmer covered 1 hour until tender'
    ],
    nutrition: {
      calories: 485, protein: 38, carbs: 12, fat: 28, fiber: 2, sugar: 6, sodium: 785, cholesterol: 125,
      vitamins: { vitaminA: 25, vitaminC: 8, vitaminD: 8, vitaminE: 4, vitaminK: 15, vitaminB6: 1.2, vitaminB12: 0.8, folate: 25 },
      minerals: { calcium: 85, iron: 3, magnesium: 65, potassium: 685, zinc: 3 }
    },
    tags: ['french', 'chicken', 'wine', 'braised']
  },
  {
    id: '239',
    name: 'Empanadas',
    description: 'Argentine pastries filled with beef and vegetables',
    image: 'https://images.unsplash.com/photo-1565299585323-38174c4a6471?w=400',
    category: 'Argentine',
    difficulty: 'Medium',
    prepTime: 45,
    cookTime: 25,
    servings: 12,
    ingredients: [
      { id: '956', name: 'Empanada dough', amount: 12, unit: 'discs', category: 'Grains' },
      { id: '957', name: 'Ground beef', amount: 1, unit: 'lb', category: 'Meat' },
      { id: '958', name: 'Hard-boiled eggs', amount: 3, unit: 'pieces', category: 'Dairy' },
      { id: '959', name: 'Green olives', amount: 0.5, unit: 'cup', category: 'Vegetables' }
    ],
    instructions: [
      'Cook beef with onions and spices',
      'Add chopped eggs and olives to filling',
      'Fill dough discs and seal edges',
      'Bake at 400°F for 20-25 minutes'
    ],
    nutrition: {
      calories: 285, protein: 12, carbs: 28, fat: 15, fiber: 2, sugar: 3, sodium: 485, cholesterol: 75,
      vitamins: { vitaminA: 15, vitaminC: 4, vitaminD: 5, vitaminE: 4, vitaminK: 8, vitaminB6: 0.3, vitaminB12: 1.2, folate: 45 },
      minerals: { calcium: 65, iron: 3, magnesium: 35, potassium: 285, zinc: 3 }
    },
    tags: ['argentine', 'empanadas', 'beef', 'baked']
  }
];