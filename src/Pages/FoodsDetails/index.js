import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMealsById } from '../../Services';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import DetailsContext from '../../Context/DetailsContext';

function FoodsDetails() {
  const { id } = useParams(); // pega o id da receita na página
  const {
    details,
    setDetails,
  } = useContext(DetailsContext);

  useEffect(() => {
    async function initialFetchId() {
      const response = await fetchMealsById(id);
      setDetails(response.meals[0]);
    }
    initialFetchId();
  }, [setDetails, id]);
  const { strMealThumb } = details;
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
          <h1 data-testid="recipe-title">Título</h1>
          <h3 data-testid="recipe-category">Categoria</h3>
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
            {/* {arraydosingredientes.map((e, i) => ( */}

            <li key={ 0 } data-testid={ `${0}-ingredient-name-and-measure` }>
              {/* {e[1]} */}
              {' '}
              {/* {quantities[0][1]} */}
            </li>
            {/* ))} */}
          </ul>
        </section>
        <section>
          <h3>Instructions</h3>
          <p data-testid="instructions">Instruçoes</p>
        </section>
        <section>
          <h4>Video</h4>
          <iframe title="Video Da Receita" data-testid="video" />
        </section>
      </section>
      <section>
        <h3>Recommended</h3>
        <div>
          <div key={ 0 } data-testid={ `${0}-recomendation-card` }>
            <img
              src="https://img.itdg.com.br/tdg/images/blog/uploads/2019/04/origem-da-cerveja.jpg"
              alt="bebida recomendada"
              width="200px"
            />
            <span>oi</span>
            <h4 data-testid={ `${0}-recomendation-title` }>req</h4>
          </div>
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

export default FoodsDetails;
