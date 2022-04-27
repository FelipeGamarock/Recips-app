import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import LoginContext from '../../Context/LoginContext';

function Login() {
  const history = useHistory();
  const TOKEN = 1;
  const {
    email,
    password,
    handleLogin,
  } = useContext(LoginContext);
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
    localStorage.setItem('mealsToken', TOKEN);
    localStorage.setItem('cocktailsToken', TOKEN);
    localStorage.setItem('user', JSON.stringify({ email }));
    history.push('/foods');
  }

  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <label htmlFor="email">
          Email
          <input
            name="email"
            data-testid="email-input"
            id="email"
            type="email"
            value={ email }
            onChange={ ({ target }) => handleLogin(target) }
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            name="password"
            data-testid="password-input"
            id="password"
            type="password"
            value={ password }
            onChange={ ({ target }) => handleLogin(target) }
          />
        </label>

        <button
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
