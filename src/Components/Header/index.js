import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Proptypes from 'prop-types';

import SearchBar from '../SearchBar';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import './index.css';

function Header({ title }) {
  const { push } = useHistory();
  const [isSearching, setIsSearching] = useState(false); // Tenho que iniciar isso no context provider? ou posso criar a função aqui? ou posso usar apenas um useState ja que só usa aqui

  return (
    <div className="header-container">
      <header className="header-content">
        <button
          className="header-buttton"
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

        <button
          className="header-buttton"
          type="button"
          onClick={ () => setIsSearching(!isSearching) }
          data-testid="search-top-btn"
          src={ searchIcon }
        >
          <img src={ searchIcon } alt="search" />
        </button>

      </header>
      { isSearching && <SearchBar /> }
    </div>
  );
}

Header.propTypes = {
  title: Proptypes.string.isRequired,
};

export default Header;
