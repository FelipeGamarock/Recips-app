import React, { useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import DetailsContext from '../../Context/DetailsContext';
import { fetchDrinksById } from '../../Services';

function DrinksInProgress() {
  const { id } = useParams();
  const history = useHistory();

  function copyLink() {
    clipBoard(`http://localhost:3000/drinks/${id}`);
    setShare('Link copied!');
  }

  const {
    details,
    setDetails,
    ingredients,
    // quantities,
    filterIngredients,
    // recomended,
    // favoriteRecepies,
    // setFavoriteRecepies,
    // isFavorite,
    // setIsFavorite,
  } = useContext(DetailsContext);

  useEffect(() => {
    async function initialFetchIdDrink() {
      const response = await fetchDrinksById(id);
      setDetails(response.drinks[0]);
      filterIngredients(response.drinks[0]);
    }
    initialFetchIdDrink();
  }, [setDetails, id, filterIngredients]);

  const {
    strDrinkThumb,
    strCategory,
    // strAlcoholic,
    strDrink,
    strInstructions,
  } = details;

  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={ strDrinkThumb }
        alt="Foto da receita"
      />
      <h1 data-testid="recipe-title">
        {strDrink}
      </h1>
      <button
        data-testid="share-btn"
        type="button"
        onClick={ copyLink }
      >
        <img src={ shareIcon } alt="shareIcon" />
      </button>
      <button
        data-testid="favorite-btn"
        type="button"
      >
        <img src={ whiteHeartIcon } alt="whiteHeartIcon" />
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

export default DrinksInProgress;
