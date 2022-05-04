import React, { useContext, useEffect, useState, useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import clipBoard from 'clipboard-copy';
import { fetchDrinksById } from '../../Services';
import DetailsContext from '../../Context/DetailsContext';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';

function DrinksDetails() {
  const { id } = useParams(); // pega o id da receita na página
  const history = useHistory();
  const [share, setShare] = useState('Share');
  const {
    details,
    setDetails,
    ingredients,
    quantities,
    filterIngredients,
    recomended,
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

  function btnStartRecepie() {
    history.push(`${id}/in-progress`);
  }

  function copyLink() {
    clipBoard(`http://localhost:3000/drinks/${id}`);
    setShare('Link copied!');
  }

  useEffect(() => {
    async function initialFetchIdDrink() {
      const response = await fetchDrinksById(id);
      setDetails(response.drinks[0]);
      // console.log(response.drinks[0]);
      filterIngredients(response.drinks[0]);
    }
    initialFetchIdDrink();
    verifyLocalStorage();
  }, [setDetails, id, filterIngredients, verifyLocalStorage]);

  const { strDrinkThumb, strCategory, strAlcoholic, strDrink, strInstructions } = details;
  const recomendedArray = Object.values(recomended).flat();
  const MAX_RECOMENDED = 6;
  // console.log(ingredients);
  // console.log(quantities);

  function saveNewFavorite() {
    const newFav = {
      id,
      type: 'drink',
      nationality: '',
      category: strCategory,
      alcoholicOrNot: strAlcoholic,
      name: strDrink,
      image: strDrinkThumb,
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
        onClick={ btnStartRecepie }
        style={ { position: 'fixed', bottom: '0' } }
      >
        Start recipe
      </button>
    </div>
  );
}

export default DrinksDetails;
