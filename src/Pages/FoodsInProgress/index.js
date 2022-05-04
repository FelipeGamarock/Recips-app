import React, { useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import DetailsContext from '../../Context/DetailsContext';
import { fetchMealsById } from '../../Services';

function FoodsInProgress() {
  const { id } = useParams();
  const history = useHistory();

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
  } = useContext(DetailsContext);

  useEffect(() => {
    async function initialFetchId() {
      const response = await fetchMealsById(id);
      setDetails(response.meals[0]);
      filterIngredients(response.meals[0]);
    }
    initialFetchId();
  }, [setDetails, id, filterIngredients]);

  const {
    strMealThumb,
    strCategory,
    strMeal,
    strInstructions,
    // strYoutube,
    // strArea,
  } = details;

  // https://stackoverflow.com/questions/40143108/disable-button-if-all-checkboxes-are-unchecked

  const checks = document.getElementsByName('checkme');
  const fnshBtn = document.getElementById('finishButton');

  function allTrue(cb) {
    for (let i = 0; i < cb.length; i += 1) {
      if (cb[i].checked === false) return false;
    }
    return true;
  }

  function disableButton() {
    fnshBtn.disabled = true;
    if (allTrue(checks)) fnshBtn.disabled = false;
  }

  //

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
            name="checkme"
            onClick={ disableButton }
          />
        </label>
      ))}
      <p
        data-testid="instructions"
      >
        {strInstructions}
      </p>
      <input
        data-testid="finish-recipe-btn"
        type="submit"
        value="Finish Recipe"
        name="finishButton"
        disabled="disabled"
        id="finishButton"
        onClick={ () => history.push('/done-recipes') }
      />
    </div>
  );
}

export default FoodsInProgress;
