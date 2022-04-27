import React from 'react';
import { useHistory } from 'react-router-dom';
import Proptypes from 'prop-types';

import profileIcon from '../../images/profileIcon.svg';

function Header({ title }) {
  const { push } = useHistory();
  return (
    <header>
      <button
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

Header.propTypes = {
  title: Proptypes.string.isRequired,
};

export default Header;
