import React from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  return (
    <AppContext.Provider>
      { children }
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default AppProvider;
