import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import SearchContext from '../../Context/SearchContext';
import './index.css';

function Login() {
  const history = useHistory();
  const TOKEN = 1;
  const {
    email,
    password,
    handleLogin,
  } = useContext(SearchContext);
  const MIN_LENGTH = 7;
  const REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{3}$/;
  const validateLogin = () => {
    const emailTest = !(REGEX.test(email));
    const passwordtest = password.length < MIN_LENGTH;
    if (emailTest === false && passwordtest === false) {
      return (
        false
      );
    }
    return (
      true
    );
  };

  function loginUser() {
    localStorage.setItem('doneRecipes', JSON.stringify([]));
    localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    localStorage.setItem('mealsToken', TOKEN);
    localStorage.setItem('cocktailsToken', TOKEN);
    localStorage.setItem('user', JSON.stringify({ email }));
    history.push('/foods');
    console.log('LoginPage');
  }

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form className="login-form">
        <label htmlFor="email">
          <input
            className="login-input"
            placeholder="Email"
            name="email"
            data-testid="email-input"
            id="email"
            type="email"
            value={ email }
            onChange={ ({ target }) => handleLogin(target) }
          />
        </label>
        <label htmlFor="password">
          <input
            className="password-input"
            placeholder="Password"
            name="password"
            data-testid="password-input"
            id="password"
            type="password"
            value={ password }
            onChange={ ({ target }) => handleLogin(target) }
          />
        </label>

        <button
          className="login-button"
          type="button"
          data-testid="login-submit-btn"
          disabled={ validateLogin() }
          onClick={ loginUser }
        >
          Enter
        </button>
      </form>
    </div>
  );
}

export default Login;
