# Recipe API Setup Guide

This application now integrates with the Spoonacular API to provide access to thousands of recipes with detailed nutritional information.

## Getting Started

### 1. Get a Spoonacular API Key

1. Visit [Spoonacular Food API](https://spoonacular.com/food-api)
2. Sign up for a free account
3. Navigate to your dashboard to get your API key
4. Free tier includes 150 requests per day

### 2. Configure Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your API key:
   ```
   VITE_SPOONACULAR_API_KEY=your_actual_api_key_here
   ```

### 3. Features

The API integration provides:

- **50+ Random Recipes**: Loaded automatically on app start
- **Recipe Search**: Search by name, ingredients, or dietary restrictions
- **Category Filtering**: Filter by cuisine type, diet, or meal type
- **Detailed Nutrition**: Complete nutritional breakdown including vitamins and minerals
- **Fallback Support**: App works offline with local recipes if API is unavailable

### 4. API Endpoints Used

- `GET /recipes/complexSearch` - Search recipes with filters
- `GET /recipes/random` - Get random recipes
- All requests include nutritional information

### 5. Nutritional Data

Each recipe includes comprehensive nutrition data:
- Macronutrients (calories, protein, carbs, fat, fiber, sugar)
- Micronutrients (vitamins A, C, D, E, K, B6, B12, folate)
- Minerals (calcium, iron, magnesium, potassium, zinc)
- Sodium and cholesterol content

### 6. Error Handling

The app gracefully handles API failures by:
- Falling back to local recipe data
- Showing error messages to users
- Continuing to work offline

### 7. Rate Limiting

Free tier limitations:
- 150 requests per day
- 1 request per second
- Consider upgrading for production use

## Usage

Once configured, the app will automatically:
1. Load random recipes on startup
2. Search the API when you use the search function
3. Filter by categories using API endpoints
4. Display rich nutritional information for all recipes

The Recipe Scaling Calculator and Nutrition Analysis features work with both API and local recipes.