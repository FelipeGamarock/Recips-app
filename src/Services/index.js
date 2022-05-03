const BASE_MEALS = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const BASE_DRINKS = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const URL_BASE_FOOD = 'https://www.themealdb.com/api/json/v1/1/';
const URL_BASE_DRINK = 'https://www.thecocktaildb.com/api/json/v1/1/';
const BASE_CATEGORY_MEALS = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const BASE_CATEGORY_DRINKS = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
const FETCH_MEALS_BY_CATEGORY = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
const FETCH_DRINKS_BY_CATEGORY = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';
const FETCH_MEALS_DETAILS_BY_ID = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
const FETCH_DRINKS_DETAILS_BY_ID = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
const FETCH_RANDOM_DRINK = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
const FETCH_RANDOM_FOOD = 'https://www.themealdb.com/api/json/v1/1/random.php';
const FOOD_INGREDIENTS_LIST = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
const DRINK_INGREDIENTS_LIST = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
const INGREDIENT_IMAGE = 'https://www.themealdb.com/images/ingredients/';
const NATIONALITIES_LIST = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
const FETCH_MEALS_BY_AREA = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=';

export const fetchMeals = async () => {
  const response = await fetch(`${BASE_MEALS}`);
  const data = await response.json();

  return data;
};

export const fetchDrinks = async () => {
  const response = await fetch(`${BASE_DRINKS}`);
  const data = await response.json();

  return data;
};

export const getFoods = async (endpoint) => {
  const response = await fetch(`${URL_BASE_FOOD}${endpoint}`);
  const data = await response.json();

  return data;
};

export const getDrinks = async (endpoint) => {
  const response = await fetch(`${URL_BASE_DRINK}${endpoint}`);
  const data = await response.json();

  return data;
};

export const switchFoodOrDrink = {
  foods: getFoods,
  drinks: getDrinks,
};

export const fetchCategoryMeals = async () => {
  const response = await fetch(`${BASE_CATEGORY_MEALS}`);
  const data = await response.json();

  return data;
};

export const fetchCategoryDrinks = async () => {
  const response = await fetch(`${BASE_CATEGORY_DRINKS}`);
  const data = await response.json();

  return data;
};

export const fetchMealsByCategory = async (endpoint) => {
  const response = await fetch(`${FETCH_MEALS_BY_CATEGORY}${endpoint}`);
  const data = await response.json();

  return data;
};

export const fetchDrinksByCategory = async (endpoint) => {
  const response = await fetch(`${FETCH_DRINKS_BY_CATEGORY}${endpoint}`);
  const data = await response.json();

  return data;
};

export const fetchMealsById = async (enpoint) => {
  const response = await fetch(`${FETCH_MEALS_DETAILS_BY_ID}${enpoint}`);
  const data = await response.json();

  return data;
};

export const fetchDrinksById = async (enpoint) => {
  const response = await fetch(`${FETCH_DRINKS_DETAILS_BY_ID}${enpoint}`);
  const data = await response.json();

  return data;
};

export const fetchRandomDrink = async () => {
  const response = await fetch(`${FETCH_RANDOM_DRINK}`);
  const data = await response.json();

  return data;
};

export const fetchRandomFood = async () => {
  const response = await fetch(`${FETCH_RANDOM_FOOD}`);
  const data = await response.json();

  return data;
};

export const fetchIngredientsFoodList = async () => {
  const response = await fetch(`${FOOD_INGREDIENTS_LIST}`);
  const data = await response.json();

  return data;
};

export const fetchIngredientsDrinkList = async () => {
  const response = await fetch(`${DRINK_INGREDIENTS_LIST}`);
  const data = await response.json();

  return data;
};

export const fetchIngredientsImage = async (ingredient) => {
  const response = await fetch(`${INGREDIENT_IMAGE}${ingredient}-Small.png`);
  const data = await response.json();

  return data;
};

export const fetchNationalitiesList = async () => {
  const response = await fetch(`${NATIONALITIES_LIST}`);
  const data = await response.json();

  return data;
};

export const fetchMealsByArea = async (nationality) => {
  const response = await fetch(`${FETCH_MEALS_BY_AREA}${nationality}`);
  const data = await response.json();

  return data;
};
