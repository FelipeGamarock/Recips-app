import React, { useContext, useEffect, useState, useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import clipBoard from 'clipboard-copy';
import DetailsContext from '../../Context/DetailsContext';
import { fetchMealsById } from '../../Services';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import shareIcon from '../../images/shareIcon.svg';

function FoodsInProgress() {
  const { id } = useParams();
  const history = useHistory();
  const [share, setShare] = useState('Share');

  function copyLink() {
    clipBoard(`http://localhost:3000/foods/${id}`);
    setShare('Link copied!');
  }

  const {
    details,
    setDetails,
    ingredients,
    // quantities,
    filterIngredients,
    // recomended,
    // strMeal,
    favoriteRecepies,
    setFavoriteRecepies,
    isFavorite,
    setIsFavorite,
  } = useContext(DetailsContext);

  const verifyLocalStorage = useCallback(() => {
    const alredyFav = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (alredyFav !== null) {
      setIsFavorite(alredyFav.some((e) => e.id === id));
      setFavoriteRecepies(alredyFav);
    }
  }, [id, setIsFavorite, setFavoriteRecepies]);

  useEffect(() => {
    async function initialFetchId() {
      const response = await fetchMealsById(id);
      setDetails(response.meals[0]);
      filterIngredients(response.meals[0]);
    }
    initialFetchId();
    verifyLocalStorage();
  }, [setDetails, id, filterIngredients, verifyLocalStorage]);

  const {
    strMealThumb,
    strCategory,
    strMeal,
    strInstructions,
    // strYoutube,
    strArea,
  } = details;

  function saveNewFavorite() {
    const newFav = {
      id,
      type: 'food',
      nationality: strArea,
      category: strCategory,
      alcoholicOrNot: '',
      name: strMeal,
      image: strMealThumb,
    };

    if (isFavorite === false) {
      // console.log(favoriteRecepies);
      localStorage.setItem('favoriteRecipes',
        JSON.stringify([...favoriteRecepies, newFav]));
      setFavoriteRecepies([...favoriteRecepies, newFav]);
      setIsFavorite(true);
    } else {
      // console.log('aqui');
      // console.log(favoriteRecepies);
      // console.log('remove');
      // console.log(favoriteRecepies.filter((e) => e.id !== id));
      localStorage.setItem('favoriteRecipes',
        JSON.stringify([...favoriteRecepies.filter((e) => e.id !== id)]));
      setFavoriteRecepies(favoriteRecepies.filter((e) => e.id !== id));
      setIsFavorite(false);
    }
  }

  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={ strMealThumb }
        alt="Foto da receita"
      />
      <h1 data-testid="recipe-title">
        {strMeal}
      </h1>
      <button
        data-testid="share-btn"
        type="button"
        onClick={ copyLink }
      >
        {share === 'Share'
          ? <img src={ shareIcon } alt="share" />
          : share }
      </button>
      <button
        type="button"
        onClick={ () => saveNewFavorite() }
      >
        <img
          data-testid="favorite-btn"
          src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
          alt="Refeita favorita?"
        />
      </button>
      <h1
        data-testid="recipe-category"
      >
        {strCategory}
      </h1>
      {ingredients.map((ingredient, index) => (
        <label
          data-testid={ `${index}-ingredient-step` }
          htmlFor={ `ingredient${index}` }
          key={ `ingredient${index}` }
        >
          <p>{ingredient}</p>
          <input
            id={ `ingredient${index}` }
            type="checkbox"
          />
        </label>
      ))}
      <p
        data-testid="instructions"
      >
        {strInstructions}
      </p>
      <button
        data-testid="finish-recipe-btn"
        type="button"
        onClick={ () => history.push('/done-recipes') }
      >
        Finish Recipe
      </button>
    </div>
  );
}

export default FoodsInProgress;
