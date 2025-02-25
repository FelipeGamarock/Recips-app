import React, { useContext, useEffect, useState, useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import clipBoard from 'clipboard-copy';
import { fetchMealsById } from '../../Services';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import DetailsContext from '../../Context/DetailsContext';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import shareIcon from '../../images/shareIcon.svg';
import handleStartButton from '../../Functions/DetailsFunctions';

function FoodsDetails() {
  const { id } = useParams(); // pega o id da receita na página
  const history = useHistory();
  const [share, setShare] = useState('Share');
  const [isStartButtonOn, setIsStartButtonOn] = useState(true);
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
    clipBoard(`http://localhost:3000/foods/${id}`);
    setShare('Link copied!');
  }

  useEffect(() => {
    handleStartButton(id, setIsStartButtonOn);
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
    strYoutube,
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
      localStorage.setItem('favoriteRecipes',
        JSON.stringify([...favoriteRecepies, newFav]));
      setFavoriteRecepies([...favoriteRecepies, newFav]);
      setIsFavorite(true);
    } else {
      localStorage.setItem('favoriteRecipes',
        JSON.stringify([...favoriteRecepies.filter((e) => e.id !== id)]));
      setFavoriteRecepies(favoriteRecepies.filter((e) => e.id !== id));
      setIsFavorite(false);
    }
  }

  const recomendedArray = Object.values(recomended).flat();
  const MAX_RECOMENDED = 6;
  console.log('Render');

  const startButton = (
    <button
      data-testid="start-recipe-btn"
      type="button"
      onClick={ btnStartRecepie }
      style={ { position: 'fixed', bottom: '0' } }
    >
      Start recipe
    </button>
  );

  return (
    <div>
      <h1>FoodsDetails</h1>
      <section>
        <img
          data-testid="recipe-photo"
          src={ strMealThumb }
          alt="Foto da receita"
        />
        <div>
          <h1 data-testid="recipe-title">{ strMeal }</h1>
          <h3 data-testid="recipe-category">{ strCategory }</h3>
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
        <section>
          <h4>Video</h4>
          <iframe
            width="360px"
            height="540px"
            data-testid="video"
            src={ strYoutube
            && strYoutube.replace('watch?v=', 'embed/') }
            title={ strMeal }
            frameBorder="0"
          />
        </section>
      </section>
      <section className="recommended-carrocel">
        <h3>Recommended</h3>
        <div>
          {recomendedArray && recomendedArray.slice(0, MAX_RECOMENDED)
            .map((e, i) => (
              <div
                key={ e.idDrink }
                data-testid={ `${i}-recomendation-card` }
              >
                <img src={ e.strDrinkThumb } alt="bebida recomendada" width="180px" />
                <h4 data-testid={ `${i}-recomendation-title` }>{e.strDrink}</h4>
                <span>{e.strAlcoholic}</span>
              </div>
            ))}
        </div>
      </section>
      {' '}
      { isStartButtonOn && startButton }
    </div>
  );
}

export default FoodsDetails;
