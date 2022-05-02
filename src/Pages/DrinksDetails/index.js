import React from 'react';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';

function DrinksDetails() {
  return (
    <div>
      <h1>DrinksDetails</h1>
      <section>
        <img
          data-testid="recipe-photo"
          src="https://img.itdg.com.br/images/recipes/000/094/434/332855/332855_original.jpg"
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

export default DrinksDetails;
