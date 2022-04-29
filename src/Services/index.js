const BASE_MEALS = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const BASE_DRINKS = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const URL_BASE_FOOD = 'https://www.themealdb.com/api/json/v1/1/';
const URL_BASE_DRINK = 'https://www.thecocktaildb.com/api/json/v1/1/';

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
