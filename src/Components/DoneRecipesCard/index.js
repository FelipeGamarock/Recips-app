import React from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../../images/shareIcon.svg';
import './index.css';

function DoneRecipesCard({ index, tagName, src }) {
  return (
    <div className="card-class">
      <p
        data-testid={ `${index}-horizontal-top-text` }
      >
        Categoria da receita/Bebida alcoolica?
      </p>
      <h4
        data-testid={ `${index}-horizontal-name` }
      >
        Nome da receita
      </h4>
      <h6
        data-testid={ `${index}-horizontal-done-date` }
      >
        data da receita
      </h6>
      <img
        data-testid={ `${index}-horizontal-image` }
        src={ src }
        alt="alt da imagem"
      />
      <p
        data-testid={ `${index}-${tagName}-horizontal-tag` }
      >
        { tagName }
      </p>
      <button
        type="button"
        data-testid={ `${index}-horizontal-share-btn` }
        aria-label="share"
        // onClick={ }
      >
        <img src={ shareIcon } alt="share" />
      </button>
    </div>
  );
}

DoneRecipesCard.propTypes = {
  index: PropTypes.string,

}.isRequired;

export default DoneRecipesCard;
