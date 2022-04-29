import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ src, cardTitle, index, type, onClick }) {
  return (
    <button
      type="button"
      data-testid={ `${index}-${type}-card` }
      onClick={ onClick }
      className="card-class"
    >
      <h4 data-testid={ `${index}-card-name` }>{cardTitle}</h4>
      <img data-testid={ `${index}-card-img` } src={ src } alt={ cardTitle } />
    </button>
  );
}

Card.propTypes = {
  src: PropTypes.string,
  cardTitle: PropTypes.string,
  index: PropTypes.string,
  onClick: PropTypes.func,
}.isRequired;
