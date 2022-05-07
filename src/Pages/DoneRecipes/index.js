import React, { useEffect, useContext } from 'react';
import DetailsContext from '../../Context/DetailsContext';
import HeaderForExplore from '../../Components/HeaderForExplore';
import DoneFavoriteFiltersBtns from '../../Components/DoneFavoriteFiltersBtns';
import DoneRecipesCard from '../../Components/DoneRecipesCard';

//  tags: Details -> strTags
// Titulo da receita: Detail -> strMeal
// Url imagem: Detail -> strMealThumb
// Id: Detail -> idMeal
// Categoria Area: Detail -> strArea /  strCategory

function DoneRecipes() {
  const {
    details,
    // ingredients,
    date,
  } = useContext(DetailsContext);

  useEffect(() => {
    const { strTags, strMeal, strMealThumb, idMeal, strArea, strCategory } = details;
    // console.log(typeof (details));
    // console.log(ingredients);
    console.log(date);
    console.log(`strTags: ${strTags}`);
    console.log(`strMeal: ${strMeal}`);
    console.log(`strMealThumb: ${strMealThumb}`);
    console.log(`idMeal: ${idMeal}`);
    console.log(`strArea: ${strArea}`);
    console.log(`strCategory: ${strCategory}`);
  }, []);

  return (
    <div>
      <HeaderForExplore title="Done Recipes" />
      <DoneFavoriteFiltersBtns />
      <main>
        <DoneRecipesCard
          date={ date }
          index="0"
          tagName="Pasta"
          src="https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg  "
        />
        <DoneRecipesCard
          index="1"
          tagName="Tags: 'cheese'"
        />
      </main>
    </div>
  );
}

export default DoneRecipes;
