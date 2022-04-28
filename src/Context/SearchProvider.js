import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SearchContext from './SearchContext';

function SearchProvider({ children }) {
  const [email, setEmail] = useState('');
  const contextValue = {
    email,
    setEmail,
  };
  return (
    <SearchContext.Provider value={ contextValue }>
      { children }
    </SearchContext.Provider>
  );
}

SearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SearchProvider;
