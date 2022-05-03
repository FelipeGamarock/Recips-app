import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDrinksById } from '../../Services';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import DetailsContext from '../../Context/DetailsContext';

function DrinksDetails() {
  const { id } = useParams(); // pega o id da receita na página
  const {
    details,
    setDetails,
    ingredients,
    quantities,
    filterIngredients,
    recomended,
  } = useContext(DetailsContext);

  useEffect(() => {
    async function initialFetchIdDrink() {
      const response = await fetchDrinksById(id);
      setDetails(response.drinks[0]);
      console.log(response.drinks[0]);
      filterIngredients(response.drinks[0]);
    }
    initialFetchIdDrink();
  }, [setDetails, id, filterIngredients]);

  const { strDrinkThumb, strCategory, strAlcoholic, strDrink, strInstructions } = details;
  const recomendedArray = Object.values(recomended).flat();
  const MAX_RECOMENDED = 6;
  // console.log(ingredients);
  // console.log(quantities);
  return (
    <div>
      <h1>DrinksDetails</h1>
      <section>
        <img
          data-testid="recipe-photo"
          src={ strDrinkThumb }
          alt="Foto da receita"
        />
        <div>
          <h1 data-testid="recipe-title">{ strDrink }</h1>
          <h3 data-testid="recipe-category">{ strAlcoholic }</h3>
          <h4>
            Categoria:
            {' '}
            {strCategory}
          </h4>
        </div>
        <div>
          <button data-testid="share-btn" type="button">
            ShareBtn
          </button>
          <button type="button">
            <img
              data-testid="favorite-btn"
              src={ whiteHeartIcon }
              alt="Refeita favorita?"
            />
          </button>
        </div>
        <section>
          <h3>Ingredients</h3>
          <ul>
            {
              (quantities.length > 1)
                ? ingredients.map((element, i) => (
                  <li key={ i } data-testid={ `${i}-ingredient-name-and-measure` }>
                    {element[1]}
                    {': '}
                    {quantities[i][1] === 'Dash' ? 'To Taste' : quantities[i][1] }
                  </li>
                ))
                : null
            }
          </ul>
        </section>
        <section>
          <h3>Instructions</h3>
          <p data-testid="instructions">{ strInstructions }</p>
        </section>
      </section>
      <section className="recommended-carrocel">
        <h3>Recommended</h3>
        <div>
          {recomendedArray && recomendedArray.slice(0, MAX_RECOMENDED)
            .map((element, i) => (
              <div key={ element.idMeal } data-testid={ `${i}-recomendation-card` }>
                <img src={ element.strMealThumb } alt="recomended meal" width="180px" />
                <span>{element.strCategory}</span>
                <h4 data-testid={ `${i}-recomendation-title` }>{element.strMeal}</h4>
              </div>
            ))}
        </div>
      </section>
      <button
        data-testid="start-recipe-btn"
        type="button"
        style={ { position: 'fixed', bottom: '0' } }
      >
        Start recipe
      </button>
    </div>
  );
}

export default DrinksDetails;
