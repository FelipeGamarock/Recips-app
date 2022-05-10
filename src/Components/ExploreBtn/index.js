import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import './index.css';

function ExploreBtn({ title, testeid, route }) {
  const history = useHistory();

  return (
    <button
      className="explore-btn"
      type="button"
      data-testid={ testeid }
      onClick={ () => history.push(route) }
    >
      {title}
    </button>
  );
}

ExploreBtn.propTypes = {
  title: PropTypes.string,
  testeid: PropTypes.string,
  route: PropTypes.string,
}.isRequired;

export default ExploreBtn;
