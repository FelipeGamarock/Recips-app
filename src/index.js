import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import LoginProvider from './Context/LoginProvider';
import SearchProvider from './Context/SearchProvider';
import DetailsProvider from './Context/DetailsProvider';

ReactDOM.render(
  <BrowserRouter>
    <LoginProvider>
      <SearchProvider>
        <DetailsProvider>
          <App />
        </DetailsProvider>
      </SearchProvider>
    </LoginProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
