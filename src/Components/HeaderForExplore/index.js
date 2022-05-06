import React from 'react';
import { useHistory } from 'react-router-dom';
import Proptypes from 'prop-types';
import './index.css';
import profileIcon from '../../images/profileIcon.svg';

function HeaderForExplore({ title }) {
  const { push } = useHistory();
  return (
    <header className="header-for-explore">
      <button
        className="header-btn"
        type="button"
        onClick={ () => push('/profile') }
        data-testid="profile-top-btn"
        src={ profileIcon }
      >
        <img src={ profileIcon } alt="search" />
      </button>

      <h1 data-testid="page-title">
        { title }
      </h1>
    </header>
  );
}

HeaderForExplore.propTypes = {
  title: Proptypes.string.isRequired,
};

export default HeaderForExplore;
