const BASE_MEALS = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const BASE_DRINKS = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const URL_BASE_FOOD = 'https://www.themealdb.com/api/json/v1/1/';
const URL_BASE_DRINK = 'https://www.thecocktaildb.com/api/json/v1/1/';
const BASE_CATEGORY_MEALS = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const BASE_CATEGORY_DRINKS = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
const FETCH_MEALS_BY_CATEGORY = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
const FETCH_DRINKS_BY_CATEGORY = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';

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
