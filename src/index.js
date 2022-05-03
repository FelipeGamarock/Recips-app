import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import SearchProvider from './Context/SearchProvider';
import DetailsProvider from './Context/DetailsProvider';

ReactDOM.render(
  <BrowserRouter>
    <SearchProvider>
      <DetailsProvider>
        <App />
      </DetailsProvider>
    </SearchProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
