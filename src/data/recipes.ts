import { Recipe } from '../types/Recipe';

export const recipes: Recipe[] = [
  {
    id: '1',
    name: 'Mediterranean Quinoa Bowl',
    description: 'A healthy and flavorful bowl packed with quinoa, fresh vegetables, and Mediterranean flavors',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Healthy',
    difficulty: 'Easy',
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    ingredients: [
      { id: '1', name: 'Quinoa', amount: 1, unit: 'cup', category: 'Grains' },
      { id: '2', name: 'Cherry tomatoes', amount: 1, unit: 'cup', category: 'Vegetables' },
      { id: '3', name: 'Cucumber', amount: 1, unit: 'medium', category: 'Vegetables' },
      { id: '4', name: 'Red onion', amount: 0.25, unit: 'cup', category: 'Vegetables' },
      { id: '5', name: 'Feta cheese', amount: 0.5, unit: 'cup', category: 'Dairy' },
      { id: '6', name: 'Olive oil', amount: 3, unit: 'tbsp', category: 'Oils' },
      { id: '7', name: 'Lemon juice', amount: 2, unit: 'tbsp', category: 'Condiments' },
      { id: '8', name: 'Fresh herbs', amount: 0.25, unit: 'cup', category: 'Herbs' }
    ],
    instructions: [
      'Cook quinoa according to package instructions and let cool',
      'Dice cucumber and red onion, halve cherry tomatoes',
      'Whisk together olive oil, lemon juice, salt, and pepper',
      'Combine quinoa with vegetables and herbs',
      'Add dressing and toss well',
      'Top with crumbled feta cheese before serving'
    ],
    nutrition: {
      calories: 320,
      protein: 12,
      carbs: 45,
      fat: 14,
      fiber: 6,
      sugar: 8,
      sodium: 380,
      cholesterol: 25,
      vitamins: {
        vitaminA: 15,
        vitaminC: 25,
        vitaminD: 0,
        vitaminE: 8,
        vitaminK: 35,
        vitaminB6: 12,
        vitaminB12: 15,
        folate: 20
      },
      minerals: {
        calcium: 180,
        iron: 4,
        magnesium: 85,
        potassium: 420,
        zinc: 2
      }
    },
    tags: ['vegetarian', 'gluten-free', 'mediterranean', 'healthy']
  },
  {
    id: '2',
    name: 'Classic Beef Tacos',
    description: 'Traditional beef tacos with seasoned ground beef, fresh toppings, and warm tortillas',
    image: 'https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Mexican',
    difficulty: 'Medium',
    prepTime: 10,
    cookTime: 15,
    servings: 6,
    ingredients: [
      { id: '9', name: 'Ground beef', amount: 1, unit: 'lb', category: 'Meat' },
      { id: '10', name: 'Taco shells', amount: 12, unit: 'pieces', category: 'Grains' },
      { id: '11', name: 'Lettuce', amount: 1, unit: 'head', category: 'Vegetables' },
      { id: '12', name: 'Tomatoes', amount: 2, unit: 'medium', category: 'Vegetables' },
      { id: '13', name: 'Cheddar cheese', amount: 1, unit: 'cup', category: 'Dairy' },
      { id: '14', name: 'Sour cream', amount: 0.5, unit: 'cup', category: 'Dairy' },
      { id: '15', name: 'Taco seasoning', amount: 1, unit: 'packet', category: 'Spices' }
    ],
    instructions: [
      'Brown ground beef in a large skillet over medium heat',
      'Add taco seasoning and water according to package directions',
      'Simmer for 5-7 minutes until sauce thickens',
      'Warm taco shells according to package instructions',
      'Shred lettuce and dice tomatoes',
      'Assemble tacos with beef, lettuce, tomatoes, cheese, and sour cream'
    ],
    nutrition: {
      calories: 285,
      protein: 18,
      carbs: 22,
      fat: 16,
      fiber: 3,
      sugar: 4,
      sodium: 520,
      cholesterol: 55,
      vitamins: {
        vitaminA: 18,
        vitaminC: 12,
        vitaminD: 2,
        vitaminE: 4,
        vitaminK: 15,
        vitaminB6: 15,
        vitaminB12: 35,
        folate: 8
      },
      minerals: {
        calcium: 215,
        iron: 3,
        magnesium: 32,
        potassium: 380,
        zinc: 4
      }
    },
    tags: ['mexican', 'beef', 'comfort-food', 'family-friendly']
  },
  {
    id: '3',
    name: 'Creamy Mushroom Risotto',
    description: 'Rich and creamy Arborio rice cooked with wild mushrooms and Parmesan cheese',
    image: 'https://images.pexels.com/photos/1256875/pexels-photo-1256875.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Italian',
    difficulty: 'Hard',
    prepTime: 10,
    cookTime: 35,
    servings: 4,
    ingredients: [
      { id: '16', name: 'Arborio rice', amount: 1.5, unit: 'cups', category: 'Grains' },
      { id: '17', name: 'Mixed mushrooms', amount: 8, unit: 'oz', category: 'Vegetables' },
      { id: '18', name: 'Vegetable broth', amount: 4, unit: 'cups', category: 'Broth' },
      { id: '19', name: 'White wine', amount: 0.5, unit: 'cup', category: 'Alcohol' },
      { id: '20', name: 'Parmesan cheese', amount: 0.75, unit: 'cup', category: 'Dairy' },
      { id: '21', name: 'Butter', amount: 3, unit: 'tbsp', category: 'Dairy' },
      { id: '22', name: 'Onion', amount: 1, unit: 'small', category: 'Vegetables' },
      { id: '23', name: 'Fresh thyme', amount: 2, unit: 'tsp', category: 'Herbs' }
    ],
    instructions: [
      'Heat broth in a saucepan and keep warm',
      'Sauté sliced mushrooms until golden, set aside',
      'In the same pan, cook diced onion until translucent',
      'Add rice and stir for 2 minutes until lightly toasted',
      'Add wine and stir until absorbed',
      'Add warm broth one ladle at a time, stirring constantly',
      'Continue until rice is creamy but still has bite, about 20 minutes',
      'Stir in mushrooms, butter, Parmesan, and thyme'
    ],
    nutrition: {
      calories: 385,
      protein: 14,
      carbs: 58,
      fat: 12,
      fiber: 2,
      sugar: 6,
      sodium: 650,
      cholesterol: 35,
      vitamins: {
        vitaminA: 8,
        vitaminC: 4,
        vitaminD: 12,
        vitaminE: 2,
        vitaminK: 8,
        vitaminB6: 8,
        vitaminB12: 25,
        folate: 15
      },
      minerals: {
        calcium: 285,
        iron: 2,
        magnesium: 45,
        potassium: 320,
        zinc: 2
      }
    },
    tags: ['vegetarian', 'italian', 'comfort-food', 'gourmet']
  },
  {
    id: '4',
    name: 'Thai Green Curry',
    description: 'Aromatic and spicy Thai curry with coconut milk, vegetables, and fresh herbs',
    image: 'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Thai',
    difficulty: 'Medium',
    prepTime: 20,
    cookTime: 25,
    servings: 4,
    ingredients: [
      { id: '24', name: 'Green curry paste', amount: 3, unit: 'tbsp', category: 'Spices' },
      { id: '25', name: 'Coconut milk', amount: 400, unit: 'ml', category: 'Dairy' },
      { id: '26', name: 'Chicken breast', amount: 1, unit: 'lb', category: 'Meat' },
      { id: '27', name: 'Thai eggplant', amount: 2, unit: 'cups', category: 'Vegetables' },
      { id: '28', name: 'Bell peppers', amount: 2, unit: 'medium', category: 'Vegetables' },
      { id: '29', name: 'Thai basil', amount: 0.5, unit: 'cup', category: 'Herbs' },
      { id: '30', name: 'Fish sauce', amount: 2, unit: 'tbsp', category: 'Condiments' },
      { id: '31', name: 'Palm sugar', amount: 1, unit: 'tbsp', category: 'Sweeteners' }
    ],
    instructions: [
      'Heat oil in a wok or large pan over medium heat',
      'Add curry paste and fry for 2 minutes until fragrant',
      'Add thick coconut milk and simmer for 5 minutes',
      'Add sliced chicken and cook until nearly done',
      'Add vegetables and remaining coconut milk',
      'Season with fish sauce and palm sugar',
      'Simmer until vegetables are tender',
      'Garnish with Thai basil leaves before serving'
    ],
    nutrition: {
      calories: 420,
      protein: 28,
      carbs: 18,
      fat: 28,
      fiber: 4,
      sugar: 12,
      sodium: 890,
      cholesterol: 75,
      vitamins: {
        vitaminA: 45,
        vitaminC: 85,
        vitaminD: 0,
        vitaminE: 12,
        vitaminK: 25,
        vitaminB6: 18,
        vitaminB12: 8,
        folate: 12
      },
      minerals: {
        calcium: 95,
        iron: 3,
        magnesium: 65,
        potassium: 580,
        zinc: 2
      }
    },
    tags: ['thai', 'spicy', 'coconut', 'gluten-free']
  },
  {
    id: '5',
    name: 'Classic Caesar Salad',
    description: 'Crisp romaine lettuce with homemade Caesar dressing, croutons, and Parmesan',
    image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Salad',
    difficulty: 'Easy',
    prepTime: 15,
    cookTime: 10,
    servings: 4,
    ingredients: [
      { id: '32', name: 'Romaine lettuce', amount: 2, unit: 'heads', category: 'Vegetables' },
      { id: '33', name: 'Parmesan cheese', amount: 0.5, unit: 'cup', category: 'Dairy' },
      { id: '34', name: 'Bread cubes', amount: 2, unit: 'cups', category: 'Grains' },
      { id: '35', name: 'Anchovies', amount: 4, unit: 'fillets', category: 'Seafood' },
      { id: '36', name: 'Garlic', amount: 2, unit: 'cloves', category: 'Vegetables' },
      { id: '37', name: 'Lemon juice', amount: 3, unit: 'tbsp', category: 'Condiments' },
      { id: '38', name: 'Olive oil', amount: 0.25, unit: 'cup', category: 'Oils' },
      { id: '39', name: 'Egg yolk', amount: 1, unit: 'large', category: 'Dairy' }
    ],
    instructions: [
      'Toast bread cubes with olive oil until golden for croutons',
      'Wash and chop romaine lettuce into bite-sized pieces',
      'Mash anchovies and garlic into a paste',
      'Whisk together anchovy paste, egg yolk, lemon juice, and olive oil',
      'Toss lettuce with dressing until well coated',
      'Top with croutons and grated Parmesan cheese',
      'Serve immediately while croutons are still crispy'
    ],
    nutrition: {
      calories: 245,
      protein: 8,
      carbs: 12,
      fat: 20,
      fiber: 3,
      sugar: 4,
      sodium: 485,
      cholesterol: 65,
      vitamins: {
        vitaminA: 85,
        vitaminC: 15,
        vitaminD: 8,
        vitaminE: 6,
        vitaminK: 95,
        vitaminB6: 5,
        vitaminB12: 12,
        folate: 25
      },
      minerals: {
        calcium: 185,
        iron: 2,
        magnesium: 25,
        potassium: 285,
        zinc: 1
      }
    },
    tags: ['salad', 'vegetarian', 'classic', 'quick']
  },
  {
    id: '6',
    name: 'Beef Stroganoff',
    description: 'Tender beef strips in a rich, creamy mushroom sauce served over egg noodles',
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Comfort Food',
    difficulty: 'Medium',
    prepTime: 15,
    cookTime: 30,
    servings: 6,
    ingredients: [
      { id: '40', name: 'Beef sirloin', amount: 1.5, unit: 'lbs', category: 'Meat' },
      { id: '41', name: 'Egg noodles', amount: 12, unit: 'oz', category: 'Grains' },
      { id: '42', name: 'Mushrooms', amount: 8, unit: 'oz', category: 'Vegetables' },
      { id: '43', name: 'Sour cream', amount: 1, unit: 'cup', category: 'Dairy' },
      { id: '44', name: 'Beef broth', amount: 1, unit: 'cup', category: 'Broth' },
      { id: '45', name: 'Onion', amount: 1, unit: 'large', category: 'Vegetables' },
      { id: '46', name: 'Flour', amount: 2, unit: 'tbsp', category: 'Grains' },
      { id: '47', name: 'Butter', amount: 3, unit: 'tbsp', category: 'Dairy' }
    ],
    instructions: [
      'Cook egg noodles according to package directions',
      'Cut beef into thin strips and season with salt and pepper',
      'Sauté beef in butter until browned, remove and set aside',
      'Cook sliced onions and mushrooms until softened',
      'Sprinkle flour over vegetables and cook for 1 minute',
      'Gradually add beef broth, stirring constantly',
      'Return beef to pan and simmer for 10 minutes',
      'Stir in sour cream and serve over noodles'
    ],
    nutrition: {
      calories: 485,
      protein: 32,
      carbs: 38,
      fat: 22,
      fiber: 2,
      sugar: 6,
      sodium: 620,
      cholesterol: 125,
      vitamins: {
        vitaminA: 12,
        vitaminC: 8,
        vitaminD: 15,
        vitaminE: 4,
        vitaminK: 8,
        vitaminB6: 25,
        vitaminB12: 85,
        folate: 18
      },
      minerals: {
        calcium: 125,
        iron: 4,
        magnesium: 45,
        potassium: 485,
        zinc: 6
      }
    },
    tags: ['beef', 'comfort-food', 'creamy', 'family-friendly']
  },
  {
    id: '7',
    name: 'Margherita Pizza',
    description: 'Classic Italian pizza with fresh mozzarella, tomatoes, and basil on homemade dough',
    image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Italian',
    difficulty: 'Hard',
    prepTime: 120,
    cookTime: 15,
    servings: 4,
    ingredients: [
      { id: '48', name: 'Pizza dough', amount: 1, unit: 'ball', category: 'Grains' },
      { id: '49', name: 'Fresh mozzarella', amount: 8, unit: 'oz', category: 'Dairy' },
      { id: '50', name: 'Tomato sauce', amount: 0.5, unit: 'cup', category: 'Condiments' },
      { id: '51', name: 'Fresh basil', amount: 0.25, unit: 'cup', category: 'Herbs' },
      { id: '52', name: 'Olive oil', amount: 2, unit: 'tbsp', category: 'Oils' },
      { id: '53', name: 'Cherry tomatoes', amount: 1, unit: 'cup', category: 'Vegetables' },
      { id: '54', name: 'Garlic', amount: 2, unit: 'cloves', category: 'Vegetables' },
      { id: '55', name: 'Sea salt', amount: 1, unit: 'tsp', category: 'Spices' }
    ],
    instructions: [
      'Preheat oven to 500°F (260°C) with pizza stone if available',
      'Roll out pizza dough on floured surface to 12-inch circle',
      'Brush dough with olive oil and minced garlic',
      'Spread tomato sauce evenly, leaving 1-inch border',
      'Tear mozzarella into pieces and distribute over sauce',
      'Add halved cherry tomatoes and sprinkle with salt',
      'Bake for 12-15 minutes until crust is golden and cheese bubbles',
      'Top with fresh basil leaves and drizzle with olive oil'
    ],
    nutrition: {
      calories: 395,
      protein: 18,
      carbs: 45,
      fat: 16,
      fiber: 3,
      sugar: 8,
      sodium: 785,
      cholesterol: 45,
      vitamins: {
        vitaminA: 25,
        vitaminC: 18,
        vitaminD: 5,
        vitaminE: 8,
        vitaminK: 35,
        vitaminB6: 8,
        vitaminB12: 15,
        folate: 22
      },
      minerals: {
        calcium: 285,
        iron: 3,
        magnesium: 35,
        potassium: 385,
        zinc: 2
      }
    },
    tags: ['italian', 'pizza', 'vegetarian', 'homemade']
  },
  {
    id: '8',
    name: 'Chicken Tikka Masala',
    description: 'Tender chicken in a rich, creamy tomato-based curry sauce with aromatic spices',
    image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Indian',
    difficulty: 'Medium',
    prepTime: 30,
    cookTime: 40,
    servings: 6,
    ingredients: [
      { id: '56', name: 'Chicken breast', amount: 2, unit: 'lbs', category: 'Meat' },
      { id: '57', name: 'Greek yogurt', amount: 1, unit: 'cup', category: 'Dairy' },
      { id: '58', name: 'Heavy cream', amount: 0.5, unit: 'cup', category: 'Dairy' },
      { id: '59', name: 'Crushed tomatoes', amount: 14, unit: 'oz', category: 'Vegetables' },
      { id: '60', name: 'Garam masala', amount: 2, unit: 'tsp', category: 'Spices' },
      { id: '61', name: 'Ginger-garlic paste', amount: 2, unit: 'tbsp', category: 'Spices' },
      { id: '62', name: 'Onion', amount: 1, unit: 'large', category: 'Vegetables' },
      { id: '63', name: 'Basmati rice', amount: 2, unit: 'cups', category: 'Grains' }
    ],
    instructions: [
      'Marinate chicken pieces in yogurt and spices for 30 minutes',
      'Grill or pan-fry chicken until cooked through, set aside',
      'Sauté diced onions until golden brown',
      'Add ginger-garlic paste and cook for 1 minute',
      'Add crushed tomatoes and simmer for 15 minutes',
      'Stir in cream and garam masala',
      'Add cooked chicken and simmer for 10 minutes',
      'Serve hot over basmati rice with fresh cilantro'
    ],
    nutrition: {
      calories: 445,
      protein: 35,
      carbs: 28,
      fat: 22,
      fiber: 3,
      sugar: 8,
      sodium: 685,
      cholesterol: 95,
      vitamins: {
        vitaminA: 18,
        vitaminC: 15,
        vitaminD: 8,
        vitaminE: 6,
        vitaminK: 12,
        vitaminB6: 28,
        vitaminB12: 25,
        folate: 15
      },
      minerals: {
        calcium: 185,
        iron: 3,
        magnesium: 55,
        potassium: 585,
        zinc: 3
      }
    },
    tags: ['indian', 'curry', 'spicy', 'comfort-food']
  },
  {
    id: '9',
    name: 'Chocolate Chip Cookies',
    description: 'Classic homemade chocolate chip cookies that are crispy on the outside and chewy inside',
    image: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Dessert',
    difficulty: 'Easy',
    prepTime: 15,
    cookTime: 12,
    servings: 24,
    ingredients: [
      { id: '64', name: 'All-purpose flour', amount: 2.25, unit: 'cups', category: 'Grains' },
      { id: '65', name: 'Butter', amount: 1, unit: 'cup', category: 'Dairy' },
      { id: '66', name: 'Brown sugar', amount: 0.75, unit: 'cup', category: 'Sweeteners' },
      { id: '67', name: 'White sugar', amount: 0.75, unit: 'cup', category: 'Sweeteners' },
      { id: '68', name: 'Eggs', amount: 2, unit: 'large', category: 'Dairy' },
      { id: '69', name: 'Vanilla extract', amount: 2, unit: 'tsp', category: 'Extracts' },
      { id: '70', name: 'Chocolate chips', amount: 2, unit: 'cups', category: 'Chocolate' },
      { id: '71', name: 'Baking soda', amount: 1, unit: 'tsp', category: 'Leavening' }
    ],
    instructions: [
      'Preheat oven to 375°F (190°C)',
      'Cream together butter and both sugars until fluffy',
      'Beat in eggs one at a time, then vanilla',
      'In separate bowl, whisk flour, baking soda, and salt',
      'Gradually mix dry ingredients into wet ingredients',
      'Fold in chocolate chips',
      'Drop rounded tablespoons onto ungreased baking sheets',
      'Bake 9-11 minutes until golden brown around edges'
    ],
    nutrition: {
      calories: 185,
      protein: 2,
      carbs: 28,
      fat: 8,
      fiber: 1,
      sugar: 18,
      sodium: 95,
      cholesterol: 25,
      vitamins: {
        vitaminA: 5,
        vitaminC: 0,
        vitaminD: 2,
        vitaminE: 2,
        vitaminK: 1,
        vitaminB6: 1,
        vitaminB12: 2,
        folate: 8
      },
      minerals: {
        calcium: 15,
        iron: 1,
        magnesium: 12,
        potassium: 65,
        zinc: 0
      }
    },
    tags: ['dessert', 'cookies', 'chocolate', 'baking']
  },
  {
    id: '10',
    name: 'Grilled Salmon with Lemon',
    description: 'Fresh Atlantic salmon grilled to perfection with lemon, herbs, and olive oil',
    image: 'https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Seafood',
    difficulty: 'Easy',
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    ingredients: [
      { id: '72', name: 'Salmon fillets', amount: 4, unit: 'pieces', category: 'Seafood' },
      { id: '73', name: 'Lemon', amount: 2, unit: 'medium', category: 'Fruits' },
      { id: '74', name: 'Olive oil', amount: 3, unit: 'tbsp', category: 'Oils' },
      { id: '75', name: 'Fresh dill', amount: 2, unit: 'tbsp', category: 'Herbs' },
      { id: '76', name: 'Garlic', amount: 3, unit: 'cloves', category: 'Vegetables' },
      { id: '77', name: 'Sea salt', amount: 1, unit: 'tsp', category: 'Spices' },
      { id: '78', name: 'Black pepper', amount: 0.5, unit: 'tsp', category: 'Spices' },
      { id: '79', name: 'Asparagus', amount: 1, unit: 'lb', category: 'Vegetables' }
    ],
    instructions: [
      'Preheat grill to medium-high heat',
      'Pat salmon fillets dry and season with salt and pepper',
      'Mix olive oil, minced garlic, and chopped dill',
      'Brush salmon with herb oil mixture',
      'Grill salmon skin-side down for 6-8 minutes',
      'Flip carefully and grill 4-6 minutes more',
      'Grill asparagus alongside salmon for last 8 minutes',
      'Serve with fresh lemon wedges and remaining herb oil'
    ],
    nutrition: {
      calories: 285,
      protein: 28,
      carbs: 6,
      fat: 16,
      fiber: 3,
      sugar: 3,
      sodium: 385,
      cholesterol: 65,
      vitamins: {
        vitaminA: 12,
        vitaminC: 35,
        vitaminD: 85,
        vitaminE: 15,
        vitaminK: 45,
        vitaminB6: 35,
        vitaminB12: 125,
        folate: 25
      },
      minerals: {
        calcium: 85,
        iron: 2,
        magnesium: 65,
        potassium: 685,
        zinc: 1
      }
    },
    tags: ['seafood', 'healthy', 'grilled', 'omega-3']
  },
  {
    id: '11',
    name: 'Vegetable Stir Fry',
    description: 'Colorful mix of fresh vegetables stir-fried with ginger, garlic, and soy sauce',
    image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Asian',
    difficulty: 'Easy',
    prepTime: 15,
    cookTime: 10,
    servings: 4,
    ingredients: [
      { id: '80', name: 'Broccoli', amount: 2, unit: 'cups', category: 'Vegetables' },
      { id: '81', name: 'Bell peppers', amount: 2, unit: 'medium', category: 'Vegetables' },
      { id: '82', name: 'Carrots', amount: 2, unit: 'medium', category: 'Vegetables' },
      { id: '83', name: 'Snow peas', amount: 1, unit: 'cup', category: 'Vegetables' },
      { id: '84', name: 'Soy sauce', amount: 3, unit: 'tbsp', category: 'Condiments' },
      { id: '85', name: 'Sesame oil', amount: 1, unit: 'tbsp', category: 'Oils' },
      { id: '86', name: 'Ginger', amount: 1, unit: 'tbsp', category: 'Spices' },
      { id: '87', name: 'Garlic', amount: 3, unit: 'cloves', category: 'Vegetables' }
    ],
    instructions: [
      'Cut all vegetables into uniform bite-sized pieces',
      'Heat oil in a large wok or skillet over high heat',
      'Add garlic and ginger, stir-fry for 30 seconds',
      'Add harder vegetables (carrots, broccoli) first',
      'Stir-fry for 2-3 minutes until slightly tender',
      'Add bell peppers and snow peas',
      'Continue stir-frying for 2-3 minutes more',
      'Add soy sauce and sesame oil, toss to combine'
    ],
    nutrition: {
      calories: 95,
      protein: 4,
      carbs: 15,
      fat: 4,
      fiber: 5,
      sugar: 8,
      sodium: 485,
      cholesterol: 0,
      vitamins: {
        vitaminA: 125,
        vitaminC: 95,
        vitaminD: 0,
        vitaminE: 8,
        vitaminK: 85,
        vitaminB6: 15,
        vitaminB12: 0,
        folate: 35
      },
      minerals: {
        calcium: 65,
        iron: 2,
        magnesium: 35,
        potassium: 485,
        zinc: 1
      }
    },
    tags: ['vegetarian', 'vegan', 'asian', 'quick', 'healthy']
  },
  {
    id: '12',
    name: 'French Onion Soup',
    description: 'Classic French soup with caramelized onions, rich beef broth, and melted Gruyère cheese',
    image: 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'French',
    difficulty: 'Medium',
    prepTime: 15,
    cookTime: 60,
    servings: 6,
    ingredients: [
      { id: '88', name: 'Yellow onions', amount: 6, unit: 'large', category: 'Vegetables' },
      { id: '89', name: 'Beef broth', amount: 6, unit: 'cups', category: 'Broth' },
      { id: '90', name: 'Gruyère cheese', amount: 2, unit: 'cups', category: 'Dairy' },
      { id: '91', name: 'French bread', amount: 6, unit: 'slices', category: 'Grains' },
      { id: '92', name: 'Butter', amount: 4, unit: 'tbsp', category: 'Dairy' },
      { id: '93', name: 'Dry white wine', amount: 0.5, unit: 'cup', category: 'Alcohol' },
      { id: '94', name: 'Fresh thyme', amount: 2, unit: 'tsp', category: 'Herbs' },
      { id: '95', name: 'Bay leaves', amount: 2, unit: 'pieces', category: 'Herbs' }
    ],
    instructions: [
      'Slice onions thinly and caramelize in butter for 45 minutes',
      'Add wine and cook until evaporated',
      'Add beef broth, thyme, and bay leaves',
      'Simmer for 20 minutes, season with salt and pepper',
      'Preheat broiler and toast bread slices',
      'Ladle soup into oven-safe bowls',
      'Top each with toasted bread and grated Gruyère',
      'Broil until cheese is bubbly and golden'
    ],
    nutrition: {
      calories: 285,
      protein: 16,
      carbs: 28,
      fat: 12,
      fiber: 4,
      sugar: 12,
      sodium: 985,
      cholesterol: 45,
      vitamins: {
        vitaminA: 8,
        vitaminC: 12,
        vitaminD: 5,
        vitaminE: 2,
        vitaminK: 8,
        vitaminB6: 12,
        vitaminB12: 15,
        folate: 18
      },
      minerals: {
        calcium: 385,
        iron: 2,
        magnesium: 35,
        potassium: 385,
        zinc: 2
      }
    },
    tags: ['french', 'soup', 'comfort-food', 'cheese']
  }
];